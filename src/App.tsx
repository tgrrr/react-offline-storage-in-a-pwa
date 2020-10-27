import React, { useState, useEffect } from "react";
import { set, get } from "idb-keyval";
import "./App.css";

const sharedStyles = {
  height: "100rem",
  fontSize: "5rem",
  textAlign: "center"
} as const;

function App() {
  const [darkModeOn, setDarkModeOn] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    get<boolean>("darkModeOn").then(value =>
      // If a value is retrieved then use it; otherwise default to true
      setDarkModeOn(value ?? true)
    );
  }, [setDarkModeOn]);

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setDarkModeOn(target.checked);

    set("darkModeOn", target.checked);
  };

  const styles = {
    ...sharedStyles,
    ...(darkModeOn
      ? {
          backgroundColor: "black",
          color: "white"
        }
      : {
          backgroundColor: "white",
          color: "black"
        })
  };

  return (
    <div style={styles}>
      {darkModeOn === undefined ? (
        <>Loading preferences...</>
      ) : (
        <>
          <input
            type="checkbox"
            value="darkMode"
            checked={darkModeOn}
            id="darkModeOn"
            name="darkModeOn"
            style={{ width: "3rem", height: "3rem" }}
            onChange={handleOnChange}
          />
          <label htmlFor="darkModeOn">Use dark mode?</label>
        </>
      )}
    </div>
  );
}

export default App;