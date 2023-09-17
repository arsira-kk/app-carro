// src/components/Home.js
import React, {useEffect } from 'react';
import './Home.css';
import HomeImage from './home.jpg'; 
import { Layout, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;
const Home = () => {
    useEffect(() => {
   
        if(!localStorage.getItem('checkUser')){
            window.location.href = "/";
        }
      }, []);
  return (
    <>
    <Layout className="layout">
    <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" >Home</Menu.Item>
      </Menu>
      <div>
        <Link to="/" className='logout'>Sign Out</Link>
      </div>
    </Header>
  </Layout>
    <div className="home">
      <img
        className="background-image"
        src={HomeImage}
        alt="Background"
      />
      <div className="centered-text">
        <h1>COMING SOON</h1>
      </div>
    </div>
    </>
  );
};

export default Home;
