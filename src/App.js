import React from "react";
import List from "./Components/list";
import LoginPage from "./Components/loginPage";

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-center">
        <h1>Hack Ideas</h1>
      </div>
      <LoginPage />
      {/* <List /> */}
    </div>
  );
}

export default App;
