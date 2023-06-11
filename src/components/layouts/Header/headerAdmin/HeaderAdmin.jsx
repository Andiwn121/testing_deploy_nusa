import React, { useState } from "react";
import "./headerAdmin.css";
import {
  Layout,
  Row,
  Col,
  Button,
  notification,
  Divider,
  Badge,
  Space,
  Dropdown,
} from "antd";
import {
  ArrowLeftOutlined,
  BellOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { sateayam } from "../../../../assets";
import { Link } from "react-router-dom";

const HeaderAdmin = () => {
  const { Header } = Layout;
  const key = "updatable";

  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      key,
      message: "Notification Title",
      description: "description.",
    });
    setTimeout(() => {
      api.open({
        key,
        message: "New Title",
        description: "New description.",
      });
    }, 1000);
  };

  const items = [
    {
      label: (
        <Link to="/profile-setting">
          <Button type="text" x icon={<SettingOutlined />}>
            Profile Setting
          </Button>
        </Link>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Button
          type="text"
          style={{ color: "red" }}
          icon={
            <ArrowLeftOutlined
              style={{ borderLeft: "2px solid red", color: "red" }}
            />
          }
        >
          Sign Out
        </Button>
      ),
      key: "1",
    },
  ];

  return (
    <Header className="header-admin-container">
      <Row justify="end" align="middle" className="container-admin-profile">
        {contextHolder}
        <Badge
          className="badger-notif"
          count={10}
          offset={[-6, 12]}
          size="small"
          onClick={openNotification}
        >
          <BellOutlined className="btn-notif" />
        </Badge>
        <Divider type="vertical" className="separator-header-admin" />

        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <Row
            style={{ width: "118px", height: "42px" }}
            onClick={(e) => e.preventDefault()}
          >
            <Col span={12} className="container-col-admin">
              <img src={sateayam} className="admin-avatar" alt="" />
            </Col>
            <Col span={12} className="container-col-admin">
              <span className="nama-admin">Ahmad</span>
              <span className="status-admin">Admin</span>
            </Col>
          </Row>
        </Dropdown>
      </Row>
    </Header>
  );
};

export default HeaderAdmin;
