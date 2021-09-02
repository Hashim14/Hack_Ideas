import React from "react";
import { AutoComplete, Input } from "antd";
import { Button } from "antd";

const LoginPage = () => {
  const [id, setId] = React.useState("");

  const handleChange = (e) => {
    setId(e.target.value);
    console.log(id);
  };
  const initialValue = { id: "adminpass" };
  const handleSubmit = () => {
    id == initialValue.id ? console.log("works") : console.log("error");
  };
  return (
    <div>
      <Input placeholder="Employee ID" onChange={handleChange} />
      <Button onClick={handleSubmit}>Enter</Button>
    </div>
  );
};

export default LoginPage;
