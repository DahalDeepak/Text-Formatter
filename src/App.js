// import { type } from "@testing-library/user-event/dist/type";
import "./App.css";
import Alert from "./component/Alert";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };
  return (
    <>
      <h1>
        <Navbar title="Text Formatter" />
      </h1>

      {/* <Navbar /> */}
      <strong>
        <Alert alert={alert} />
      </strong>
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter The Text To Operate On"
        />
        {/* <TextForm /> */}
      </div>
    </>
  );
}

export default App;
