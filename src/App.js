import React from "react";
import "./App.css";
import List from "./Components/list";
import LoginPage from "./Components/loginPage";

function App() {
  const [id, setId] = React.useState("");
  const [homePage, setHomePage] = React.useState(true);
  const [loginPage, setLoginPage] = React.useState(false);

  const handleChange = (e) => {
    setId(e.target.value);
    console.log(id);
  };

  const HandlError = () => {
    setLoginPage(true);
    console.log("error test");
    return <span>Error Message</span>;
  };

  const initialValue = { id: "adminpass" };
  const handleSubmit = () => {
    id === initialValue.id
      ? setHomePage(true) || setLoginPage(false)
      : HandlError();
  };

  // const dayjs = require('dayjs');

  // let now = dayjs();

  // console.log(now.format("DD MM YYYY"));

  return (
    <div className="App">
      <div className="d-flex justify-content-center p-3">
        <h1>Hack Ideas</h1>
      </div>
      {/* {loginPage ? (
        <LoginPage handleChange={handleChange} handleSubmit={handleSubmit} />
      ) : null} */}
      {homePage && <List />}
    </div>
  );
}

export default App;
