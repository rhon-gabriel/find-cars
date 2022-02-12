import React, { useState } from "react";
import styles from "./DropdownSelect.module.css";

const DropdownSelect = ({ name, tabIndex, data}) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const expand = () => setOpen(true);
  const close = () => setOpen(false);

  const selectItem = (event) => {
    const item = event.target.textContent;
    selectedItem === item ? setSelectedItem(null) : setSelectedItem(item);
    close();
  };

  return (
    <div
      className={styles.dropdown}
      tabIndex={tabIndex}
      onFocus={expand}
      onBlur={close}
    >
      <div className={styles.header}>
        {selectedItem ? data.find((item) => item === selectedItem) : name}
      </div>
      {isOpen ? (
        <div className={`${styles.content} ${isOpen && styles.open}`}>
          {data.map((item) => (
            <div
              className={styles.item}
              onClick={selectItem}
              id={item}
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default DropdownSelect;
