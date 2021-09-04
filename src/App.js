import React from "react";
import "./App.css";
import List from "./Components/list";
import LoginPage from "./Components/loginPage";
import { Button, Tooltip } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

function App() {
  const [id, setId] = React.useState("");
  const [homePage, setHomePage] = React.useState(false);
  const [loginPage, setLoginPage] = React.useState(true);

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
      <div className="d-flex bd-highlight mb-3">
        <div
          style={{ paddingLeft: "42vw", paddingTop: "15px" }}
          className=" bd-highlight pb-2"
        >
          <h1 className="fw-light">HACK IDEAS</h1>
        </div>
        {homePage && (
          <div className="ms-auto p-2 bd-highlight">
            <Tooltip title="Logout">
              <Button
                onClick={() => setHomePage(false) || setLoginPage(true)}
                shape="circle"
                icon={<LogoutOutlined />}
              />
            </Tooltip>
          </div>
        )}
      </div>

      {loginPage ? (
        <LoginPage handleChange={handleChange} handleSubmit={handleSubmit} />
      ) : null}
      {homePage && (
        <div>
          <List homePage={homePage} loginPage={loginPage} />
        </div>
      )}
    </div>
  );
}

export default App;
