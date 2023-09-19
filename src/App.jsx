import React from "react";
import Calculator from "./components/Calculator";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <div className="app flex justify-center">
      <Provider store={store}>
        <Calculator />
      </Provider>
    </div>
  );
};

export default App;
