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
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Items</th>
            <th>Order Id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{order.name}</td>
            <td>{order.address}</td>
            <td>{order.phone}</td>
            <td>
              {" "}
              Items:
              {/* <ul> */}
              {order &&
                order.items.map((item) => (
                  <li key={item.item.id}>
                    {item.item.name} {item.quantity}
                  </li>
                ))}
              {/* </ul>     */}
            </td>
            <td>{order.id}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderConfirmation;
