import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const homeMenu = {
    label: "Home",
    icon: (
      <Link to="/">
        <HomeOutlined />
      </Link>
    ),
    key: "homeMenu",
  };
  const cryptocurrenciesMenu = {
    label: "Cryptocurrencies",
    icon: (
      <Link to="/cryptocurrencies">
        <FundOutlined />
      </Link>
    ),
    key: "cryptocurrenciesMenu",
  };
  const exchangesMenu = {
    label: "Exchanges",
    icon: (
      <Link to="/exchanges">
        <MoneyCollectOutlined />
      </Link>
    ),
    key: "exchangesMenu",
  };
  const newsMenu = {
    label: "News",
    icon: (
      <Link to="/news">
        <MoneyCollectOutlined />
      </Link>
    ),
    key: "NewsMenu",
  };
  const itemMenus = [homeMenu, cryptocurrenciesMenu, exchangesMenu, newsMenu];
  const menuHeader = (
    <Menu
      selectedKeys={[]}
      items={itemMenus}
      theme="dark"
      className="nav-menu"
    />
  );

  return (
    <div className="nav-container">
      <div className="logo-container">
        <div className="nav-logo">
          <Avatar src={icon} size="large" />
          <Typography.Title level={2} className="logo">
            <Link to="/">Cryptoverse</Link>
          </Typography.Title>
          <Button
            className="menu-control-container"
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <MenuOutlined />
          </Button>
        </div>
        {activeMenu && menuHeader}
      </div>
    </div>
  );
};

export default Navbar;
