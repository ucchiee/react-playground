import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./App.css";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;
import MenuList from "./components/MenuList.jsx";

function Basic({msg}) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>{msg}</p>
      </div>
      <aside>
        <h4>Files：</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh", minWidth: "100vw" }}>
      <Sider
        theme="light"
        /* collapsible */
        /* trigger={null} */
        collapsed={collapsed}
        onCollapse={onCollapse}
        width={"15vw"}
        className="sidebar"
      >
        <div className="logo" />
        <MenuList />
        <Basic msg="hello"/>
      </Sider>
      <Layout className="site-layout">
        {/* <Header style={{ padding: 0 }} /> */}
        <Content style={{ margin: "0 16px"}}>
          <div style={{ padding: 24, minHeight: 360 }}>
            Content <Basic msg="Drag and Drop"/>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          MstVisualizer 2024 Created by ucchiee
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
