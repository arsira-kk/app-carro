import React , {useEffect } from "react";
import { Form, Input, Button, Row, Col, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
    useEffect(() => {
        localStorage.clear();
    }, []);
  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "https://localhost:7247/Account/Login",
        values
      );
      if (response.data.isSuccess) {
        localStorage.setItem("checkUser" , response.data.isSuccess)
        message.success("Login successful");
        window.location.href = "/homepage";
      } else {
        message.error("Login failed");
      }
    } catch (error) {
      // Network error or other errors
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
          className="login-form"
          style={{
            backgroundColor: "white",
            padding: "24px",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Login</h2>
          <Form
            name="login"
            onFinish={onFinish}
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please enter your username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Link to="/register">Don't have an account? Register now!</Link>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
