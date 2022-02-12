import React, { useState } from "react";
import * as actions from "../../containers/Main/redux/actions";
import { useDispatch } from "react-redux";
import styles from "./DropdownSelect.module.css";

const DropdownSelect = ({ name, tabIndex, data, error }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();

  const dispatchAction = () => {
    switch (name) {
      case "By Manufacturer":
        console.log("by manufacturer");
        break;
      case "By Model":
        dispatch(actions.getModels());
        break;
      case "By Body Type":
        console.log("by body type");
        break;
      default:
        console.log(`Something went wrong`);
    }
  };

  const close = () => {
    setOpen(false);
  };

  const selectItem = (event) => {
    const item = event.target.textContent;
    selectedItem === item ? setSelectedItem(null) : setSelectedItem(item);
    close();
  };

  return (
    <div className={styles.dropdown}>
      <div
        className={styles.header}
        tabIndex={tabIndex}
        onBlur={close}
        onClick={() => setOpen(!isOpen)}
      >
        {selectedItem ? data.find((item) => item === selectedItem) : name}
      </div>
      {isOpen ? (
        <div className={`${styles.content} ${isOpen && styles.open}`}>
          {error ? (
            <button type="text" onClick={dispatchAction()}>
              Try again
            </button>
          ) : (
            data?.map((item) => (
              <div
                className={styles.item}
                onClick={selectItem}
                id={item}
                key={item}
              >
                {item}
              </div>
            ))
          )}
        </div>
      ) : null}
    </div>
  );
};

export default DropdownSelect;
