import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("With React Testing Library", () => {
  const initialState = {
    cars: { manufacturers: [], models: [], vehicles: [], loading: false },
  };
  const mockStore = configureStore();
  let store;

  it('Shows "Find your perfect car"', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText("Find your perfect car")).not.toBeNull();
  });
});
