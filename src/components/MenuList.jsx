import React from "react";
import { Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const MenuList = () => {
  return (
    <Menu theme="light" mode="inline" className="menu-bar">
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        Option 1
      </Menu.Item>
      <Menu.Item key="2" icon={<DesktopOutlined />}>
        Option 2
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        Option 3
      </Menu.Item>
      <Menu.Item key="4" icon={<TeamOutlined />}>
        Option 4
      </Menu.Item>
      <Menu.Item key="5" icon={<FileOutlined />}>
        Option 5
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
