import React, { useEffect, useState } from "react";
import * as actions from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Main.module.css";
import DropdownSelect from "../../components/DropdownSelect/DropdownSelect";
import ListVehicles from "../Vehicles/ListVehicles/ListVehicles";
import DisplayError from "../../components/DisplayMessage/DisplayMessage";

const Main = () => {
  const [isOpenMake, setOpenMake] = useState(false);
  const [isOpenModels, setOpenModels] = useState(false);
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [isDisabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const {
    manufacturers,
    models,
    vehicles,
    loading,
    errorMake,
    errorModel,
    errorVehicles,
  } = useSelector((state) => state.cars);

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

  // FETCH VEHICLES
  useEffect(() => {
    const params = {
      make: selectedMake,
      model: selectedModel,
    };
    selectedMake && selectedModel && dispatch(actions.getVehicles(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMake, selectedModel]);

  useEffect(() => {
    errorMake && setSelectedMake(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorMake]);

  useEffect(() => {
    errorModel && setSelectedModel(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorModel]);

  useEffect(() => {
    if (errorVehicles) {
      setSelectedMake(null);
      setSelectedModel(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorVehicles]);

  //Disable dropdown
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
    <>
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
      <section className={styles.vehiclesContainer}>
        {loading && <DisplayError message={"Loading.."} />}
        {!errorMake && !errorModel && models?.length === 0 && (
          <DisplayError message={"No models found for this manufacturer"} />
        )}
        {errorMake || errorModel || errorVehicles ? (
          <DisplayError
            message={"Something went wrong on our server. Please try again"}
            error
          />
        ) : vehicles?.length ? (
          <ListVehicles vehicles={vehicles} />
        ) : (
          models?.length > 0 &&
          vehicles?.length === 0 && (
            <DisplayError message={"No vehicles found for this model"} />
          )
        )}
      </section>
    </>
  );
};

export default Main;
