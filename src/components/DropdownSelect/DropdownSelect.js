import React from "react";
import styles from "./DropdownSelect.module.css";

const DropdownSelect = ({
  name,
  data,
  isOpen,
  toggleDropdown,
  disabled,
  selectedItem,
  setSelectedItem,
  error
}) => {
  const selectItem = (item) => {
    selectedItem === item ? setSelectedItem(null) : setSelectedItem(item);
    toggleDropdown();
  };

  return (
    <div className={`${styles.dropdown} ${error && styles.error}`}>
      <div
        className={`${styles.header} ${disabled && styles.disabled}`}
        onClick={toggleDropdown}
      >
        {selectedItem ? data.find((item) => item === selectedItem) : name}
      </div>
      {isOpen ? (
        <div className={`${styles.content} ${isOpen && styles.open}`}>
          {data?.map((item) => (
            <div
              className={styles.item}
              onClick={() => selectItem(item)}
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
