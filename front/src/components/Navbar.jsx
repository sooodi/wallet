import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, ClockCircleFilled, CloseOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [isCollapse, setIsCollapse] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const ToggleCollapsed = () => {
    setIsCollapse(!isCollapse);
  };
  return (
    <div   className="nav-container">
      <div className="logo-container ">
        <Avatar src={icon} size="small" />
        <Typography.Text  level={2} className="logo"><Link style={{color:'white'}} to="/">My Crypto </Link></Typography.Text>
        <Button className="menu-control-container" 
  
        onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
         
      </div>
      {activeMenu && (
        <div className="form-container " >
       
       <Button 
         icon={isCollapse ? <MenuUnfoldOutlined />:<MenuFoldOutlined/>}
         onClick={ToggleCollapsed}
          style={{  alignSelf:'flex-end',marginBottom:30,
        background:'transparent',borderRadius:5,borderWidth:0
        }} type="primary" />
      <Menu Mode="inline"
      DefaultSelectedKeys={['1']}
      style={{background:'transparent' }} inlineCollapsed={isCollapse} theme="dark" >
        <Menu.Item Key="1" icon={<HomeOutlined />} style={{background:'#40263e' }} > 
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item Key="2" icon={<FundOutlined />} style={{background:'#40263e' }}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item Key="3" icon={<MoneyCollectOutlined />} style={{background:'#40263e' }}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item Key="4" icon={<BulbOutlined />} style={{background:'#40263e' }}>
          <Link to="/news">News</Link>
        </Menu.Item>
        <Menu.Item Key="5"  icon={<BulbOutlined />} style={{background:'#40263e' }}>
          <Link to="/Welcome">Welcome</Link>
        </Menu.Item>
      </Menu>
      </div>
      )}
    </div>
  );
};

export default Navbar;
