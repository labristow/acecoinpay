import React from "react";
import "./App.css";
import Background from "./components/background/Background";
import PaymentForm from "./components/forms/PaymentForm";

function App() {
  return (
    <React.Fragment>
      <Background>
        <PaymentForm />
      </Background>
    </React.Fragment>
  );
}

export default App;
