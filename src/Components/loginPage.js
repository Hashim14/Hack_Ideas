import React from "react";
import { Input } from "antd";
import { Button } from "antd";

const LoginPage = ({ handleChange, handleSubmit }) => {
  return (
    <div className="d-flex justify-content-center">
      <Input
        style={{ width: "15vw" }}
        placeholder="Employee ID"
        onChange={(e) => handleChange(e)}
        required
      />
      <Button onClick={handleSubmit}>Enter</Button>
    </div>
  );
};

export default LoginPage;
