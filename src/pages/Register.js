import React, { useState } from "react";
import { Form, Input, Button, Row, Col, message , DatePicker } from "antd";
import { Link } from 'react-router-dom';

import axios from "axios";
const Register = () => {
    useEffect(() => {
        localStorage.clear();
    }, []);
  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "https://localhost:7247/Account/CreateReacord",
        values
      ); 

      if (response.status === 200) {
        message.success("Registration successful");
      } else {
        message.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("An error occurred");
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
      }}
    >
      <Col xs={20} sm={16} md={12} lg={8}>
        <div
          className="register-form"
          style={{
            backgroundColor: "white",
            padding: "24px",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2 style={{textAlign:'center'}}>Register</h2>
          <Form name="register" onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please enter your username!" },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Invalid email address!" },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input placeholder="Name" />
            </Form.Item>

            <Form.Item
              name="lastname"
              rules={[
                { required: true, message: "Please enter your last name!" },
              ]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>

            <Form.Item
              name="dateofbirth"
              rules={[
                { required: true, message: "Please enter your date of birth!" },
              ]}
            >
              <DatePicker
                style={{ width: "100%" }}
                format="YYYY-MM-DD"
                placeholder="Date of Birth"
              />
            </Form.Item>
            <Form.Item>
            <Link to="/">Back to Login</Link>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Register
              </Button>
            </Form.Item>
         
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Register;
