import React from "react";
import { Layout, Menu } from "antd";
import {
	DesktopOutlined,
	PieChartOutlined,
	FileOutlined,
	TeamOutlined,
	UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

class SiderDemo extends React.Component {
	state = {
		collapsed: false,
	};

	onCollapse = (collapsed) => {
		console.log(collapsed);
		this.setState({ collapsed });
	};

	render() {
		return (
			<Layout style={{ minHeight: "100vh" }}>
				<Sider
					collapsible
					collapsed={this.state.collapsed}
					onCollapse={this.onCollapse}
				>
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
						<div>Content</div>
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default SiderDemo;
