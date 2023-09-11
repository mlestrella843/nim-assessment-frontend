import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Order from "./Order";
import OrderModal from "./OrderModal";
import styles from "./styles/Order.module.css";

function Main() {
  const [menuItems, setMenuItems] = useState([]);
  const [order, setOrder] = useState([]);
  const [orderModal, setOrderModal] = useState(false);
  // const [confirmOrder, setConfirmOrder] = useState(false);

  const getItems = async () => {
    const response = await fetch("/api/menu");
    const data = await response.json();
    // console.log(data);
    setMenuItems(data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="page">
      {orderModal && <OrderModal order={order} setOrderModal={setOrderModal} />}
         {/* {orderModal &&  <ConfirmationPage order={order} setOrderModal={setOrderModal} />} */}
      <h1>MENU</h1>
      <Menu menuItems={menuItems} setOrder={setOrder} setOrderModal={setOrderModal} />  
      <h3>Create an Order</h3>
      
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <Menu menuItems={menuItems} order={order} setOrder={setOrder} />
        </div>
        {order.length > 0 && (
          <Order order={order} setOrderModal={setOrderModal} />
        )}
      </div>
    </div>
  );
}

export default Main;
