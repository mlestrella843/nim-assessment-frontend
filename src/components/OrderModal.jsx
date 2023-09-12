import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/OrderModal.module.css";

function OrderModal({ order, setOrderModal }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const [isValid, setIsValid] = useState(true);

  const [isValidPhone, setIsValidPhone] = useState(true);

  
 
  const handleChangeName = (e) => {
    const pattern = /^[A-Za-z\s]+$/;
    const isValidInput = pattern.test(e.target.value);
    if(isValidInput) {
      setName(e.target.value);
      setIsValid(isValidInput);
    }
    else setIsValid(isValidInput);
  };

  const handleChangePhone = (e) => { 
    const pattern = /^\(\d{3}\)\d{3}-\d{4}$/;
    const isValidPattern = pattern.test(e.target.value);
    console.log("Esta es la entrada", e.target.value)
    console.log("Esta es la respuesta de la variable cleanedValue", isValidPattern);
    if(isValidPattern) {
      setPhone(e.target.value);
      setIsValidPhone(isValidPattern);
    }
    else{
      setIsValidPhone(isValidPattern);
    }
  };


  const placeOrder = async () => {
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        phone,
        address,
        items: order
      })
    });
    const data = await response.json();
    console.log(data);

    if (response.status === 200) {
      try {
        navigate(`/order-confirmation/${data.id}`);
        console.log("Order placed!");
      } catch (error) {
        console.error("Error parsing response data:", error);
      }
    } else {
      console.error("Status not expected:", response.status);
    }
  };

  const handleSubmit = () => {
    if (name === "" || phone === "" || address === "") {
      alert("All the fields must be completed and the data has not been sent");
    } else {
      placeOrder();
    }
  };

  return (
    <>
      <div
        label="Close"
        className={styles.orderModal}
        onKeyPress={(e) => {
          if (e.key === "Escape") {
            setOrderModal(false);
          }
        }}
        onClick={() => setOrderModal(false)}
        role="menuitem"
        tabIndex={0}
      />
      <div className={styles.orderModalContent}>
        <h2>Place Order</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">
              Name
             <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleChangeName}
                  style={{ borderColor: isValid ? 'initial' : 'red' }}
             />
                 {!isValid && (
                 <p style={{ color: 'red' }}>Please enter a valid name (only letters and spaces).</p>
            )}
            </label>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">
              Phone
              <input
                  type="phone"
                  id="phone"
                  value={phone} // Mostrar el número de teléfono formateado en el campo de entrada.
                  onChange={handleChangePhone}
                  style={{ borderColor: isValidPhone ? 'initial' : 'red' }}
                />
                {!isValidPhone && (
                  <p style={{ color: 'red' }}>Please enter a valid phone number.</p>
                )}
            </label>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="address">
              Address
              <input
                onChange={(e) => {
                  e.preventDefault();
                  setAddress(e.target.value);
                }}
                type="address"
                id="address"
              />
            </label>
          </div>
        </form>

        <div className={styles.orderModalButtons}>
          <button
            className={styles.orderModalClose}
            onClick={() => setOrderModal(false)}
          >
            Close
          </button>
          <button
            onClick={() => {
              handleSubmit();
            }}
            className={styles.orderModalPlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderModal;
