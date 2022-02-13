import React from "react";
import { render, screen } from "@testing-library/react";
import DropdownSelect from "./DropdownSelect";

const handleOnClick = jest.fn();

describe("Dropdown", () => {
  it("Render the manufacturers dropdown", () => {
    const makes = ["ALFA ROMEO", "AUDI", "AUSTIN", "BARKAS"];
    render(
      <DropdownSelect
        name="Manufacturer"
        data={makes}
        isOpen={true}
        toggleDropdown={handleOnClick}
        selectedItem={null}
        setSelectedItem={null}
        error={false}
      />
    );
    const dropDownOpen = screen.getByTestId("dropdown-open");
    const dropDownItem = screen.getAllByTestId("dropdown-item");
    expect(dropDownOpen).toBeInTheDocument();
    expect(dropDownItem[0]).toHaveTextContent("ALFA ROMEO");
    expect(screen.getByText("Manufacturer")).toBeInTheDocument();
  });

  it("Opened dropdown", () => {
    render(
      <DropdownSelect
        name="Manufacturer"
        data={[]}
        isOpen={false}
        disabled={true}
        toggleDropdown={handleOnClick}
        selectedItem={null}
        setSelectedItem={null}
        error={false}
      />
    );
    const dropDownElement = screen.getAllByTestId("dropdown-element");

    expect(dropDownElement[0]).toBeInTheDocument();
    expect(dropDownElement[0].classList.contains("disabled")).toBe(true);
    expect(screen.getByText("Manufacturer")).toBeInTheDocument();
  });
});
