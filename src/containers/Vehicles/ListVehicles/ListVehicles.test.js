import React from "react";
import { render, screen } from "@testing-library/react";
import ListVehicles from "./ListVehicles";

describe("List vehicles", () => {
  const vehicles = [
    {
      make: "FORD",
      model: "Fiesta",
      enginePowerPS: 60,
      enginePowerKW: 44,
      fuelType: "Benzin",
      bodyType: "Limousine",
      engineCapacity: 1299,
    },
    {
      make: "BMW",
      model: "3er",
      enginePowerPS: 184,
      enginePowerKW: 135,
      fuelType: "Diesel",
      bodyType: "Limousine",
      engineCapacity: 2926,
    },
  ];

  it("Shows a list of vehicles", () => {
    render(<ListVehicles vehicles={vehicles} />);
    const cardElement = screen.getAllByTestId("card-element");

    expect(cardElement[0]).toBeInTheDocument();
    expect(cardElement).toHaveLength(2);
    expect(screen.getByText("FORD")).toBeInTheDocument();
    expect(screen.getByText("3er")).toBeInTheDocument();
  });

  it("Shows no vehicles found message", () => {
    render(<ListVehicles vehicles={[]} />);

    const displayMessage = screen.getByTestId("display-message");
    expect(displayMessage).toBeInTheDocument();
    expect(displayMessage).toHaveTextContent("No vehicles found for this model")

    expect(
      screen.getByText("No vehicles found for this model")
    ).toBeInTheDocument();
  });
});
