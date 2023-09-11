import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OrderConfirmation from "./OrderConfirmation";

function ConfirmationPage() {
  const [order, setOrder] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getOrderById = async () => {
      try {
        const response = await fetch(`/api/orders/${id}`);
        const data = await response.json();
        setOrder(data);
      } catch (error) {
        console.log("Error getting info-order");
      }
    };
    getOrderById();
  }, []);

  // console.log("Info ByID variable", order);

  return (
    <div className="container">
      <div className="mb-5">
        <h1 className="text-center mt-5">CONFIRMATION PAGE</h1>
      </div>
      <OrderConfirmation order={order} />
      <button className="d-grid gap-2 col-3 mx-auto mt-5 btn btn-primary col-3 p-2">
        Confirm your Order!
      </button>
    </div>
  );
}

export default ConfirmationPage;
