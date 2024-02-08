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

function Basic(props) {
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
				<p>Drag 'n' drop some files here, or click to select files</p>
			</div>
			<aside>
				<h4>Files</h4>
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
		<Layout style={{ minHeight: "100vh" }}>
			<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
				<div className="logo" />
				<Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
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
			</Sider>
			<Layout className="site-layout">
				<Header style={{ padding: 0 }} />
				<Content style={{ margin: "0 16px" }}>
					<div style={{ padding: 24, minHeight: 360 }}>
						Content <Basic />
					</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>
					Ant Design ©2018 Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	);
}

export default App;
