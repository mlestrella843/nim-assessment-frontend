import React, { useEffect } from "react";
import Swal from "sweetalert2";

function OrderConfirmation({ order }) {
  useEffect(() => {
    if ({ order }) {
      Swal.fire(
        `Thank you for your order! ${order.name}`,
        "Please confirm this order on this page",
        "success"
      );
    }
  }, [order]);

  return (
    <div className="container">
      <div>
        <h3 className="text-center mb-5"> Order Confirmation </h3>
      </div>
      <table className="table table-sm">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{order.id}</td>
            <td>{order.name}</td>
            <td>{order.phone}</td>
            <td>{order.address}</td>
            <td>
              {" "}
              Items:
              {order &&
                order.items.map((item) => (
                  <li key={item.item.id}>
                    {item.item.name} {item.quantity}
                  </li>
                ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default OrderConfirmation;
