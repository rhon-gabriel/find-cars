import React, { useEffect, useState } from "react";
import * as actions from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Main.module.css";
import DropdownSelect from "../../components/DropdownSelect/DropdownSelect";

const Main = () => {
  const [isOpenMake, setOpenMake] = useState(false);
  const [isOpenModels, setOpenModels] = useState(false);
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [isDisabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const { manufacturers, models, loading, errorMake, errorModel } = useSelector(
    (state) => state.cars
  );

  useEffect(() => {
    dispatch(actions.getManufacturers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDropdownMake = () => setOpenMake(!isOpenMake);
  const toggleDropdownModels = () => setOpenModels(!isOpenModels);

  useEffect(() => {
    selectedMake && dispatch(actions.getModels(selectedMake));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMake]);

  useEffect(() => {
    if (models === null || models?.length === 0 || !selectedMake || errorMake) {
      setDisabled(true);
      setSelectedModel(null);
    } else {
      setDisabled(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [models, selectedMake]);

  return (
    <div className={styles.container}>
      <section className={styles.columns}>
        <div className={styles.column} onClick={toggleDropdownMake}>
          <DropdownSelect
            name="Manufacturer"
            data={manufacturers}
            isOpen={manufacturers && isOpenMake}
            toggleDropdown={toggleDropdownMake}
            selectedItem={selectedMake}
            setSelectedItem={setSelectedMake}
            error={errorMake}
          />
        </div>

        <div className={styles.column} onClick={toggleDropdownModels}>
          <DropdownSelect
            name="Model"
            data={models}
            disabled={isDisabled}
            isOpen={models && isOpenModels}
            toggleDropdown={toggleDropdownModels}
            selectedItem={selectedModel}
            setSelectedItem={setSelectedModel}
            error={errorModel}
          />
        </div>
      </section>
      {loading && <p>Loading...</p>}
      {models &&
        (models.length === 0 ? (
          <p>no models for this manufacturer</p>
        ) : (
          <p>list</p>
        ))}
    </div>
  );
};

export default Main;
