import React from "react";
import "./App.css";
import { usePersistedState } from "./hooks/usePersistedState";

const sharedStyles = {
  height: "100rem",
  fontSize: "5rem",
  textAlign: "center"
} as const;

function App() {
  const [darkModeOn, setDarkModeOn] = usePersistedState<boolean>("darkModeOn", true);

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setDarkModeOn(target.checked);

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