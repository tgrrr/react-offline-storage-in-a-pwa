import React from "react";
import "./App.css";
import { usePersistedState } from "./hooks/usePersistedState";

const sharedStyles = {
  height: "100rem",
  fontSize: "1.5rem",
  textAlign: "center",
  wrapper: {
	margin: '5em auto',
	width: '600px',
  },
  instructions: {
	textAlign: "left",
	margin: '5em auto',
  },

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
              style={{ width: "3rem", height: "3rem", marginTop: '3em' }}
              onChange={handleOnChange}
            />
            <label htmlFor="darkModeOn">Use dark mode?</label> <p />
			<div style={styles.wrapper}>
			<div style={styles.instructions}>
				To test that the form works in online mode:<p />

				1. Toggle dark mode (eg to light)<br />
				2. Reload the page<br />
				3. It should still be light! <p />
				

				To test that the form works in offline mode:<p />
				4. Disconnect your internet<br />
				5. Toggle dark mode (eg back to  to dark)<br />
				6. Reload the page<br />
				7. It should still be dark!<br />
				</div>
			 </div>
          </>
        )}
		</div>
  );
}

export default App;