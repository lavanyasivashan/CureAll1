import React from "react";

import {Button, Form,Input} from "antd";
import "./Main.css";
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="appBg">
    <Form className="loginForm">
    <Typography.Title> LOGIN FORM</Typography.Title>
      <Form.Item label="Username" name={"myEmail"}>
      <Input placeholder="Enter your username"/>
      </Form.Item>
      <Form.Item label="Password name={myPassword}">
      <Input placeholder="Enter your password"/>
      </Form.Item>
      <Link to="product">
      <Button type="primary" htmlType="submit" block>
        Login
      </Button>
      </Link>

    </Form>
    </div>
  )
}
export default Main