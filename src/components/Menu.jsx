import React from "react";
import MenuItem from "./MenuItem";
import styles from "./styles/Order.module.css";

function Menu({ menuItems, order, setOrder }) {
  const addItemToOrder = (item) => {
    const newOrder = [...order];
    const itemInOrder = newOrder.find(
      (orderItem) => orderItem.item.id === item.id
    );
    if (itemInOrder) {
      itemInOrder.quantity += 1;
    } else {
      newOrder.push({ item: { ...item }, quantity: 1 });
    }
    setOrder(newOrder);
  };
  return (
    <>
      {/* <div>
        <h2>Menu</h2>
      </div> */}
      <div className={styles.menu}>
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} addItemToOrder={addItemToOrder} />
        ))}
      </div>
    </>
  );
}

export default Menu;
