import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabel or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#282A3A";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      document.title = "textUtils -Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
      document.title = "textUtils -light Mode";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert Alert={alert} />
        {/* <Routes>
          <Route
            exact path="/"
            element={ */}
              <TextForm
                heading="Enter the text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            {/* }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
