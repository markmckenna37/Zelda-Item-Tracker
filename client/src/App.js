import React, { mountNode } from "react";
import ReactDOM from "react-dom";
import Items from "./components/ItemList/Items";
import ItemCard from "./components/ItemCard";
// import Areas from "./components/AreaList/Areas";
// import Checks from "./components/CheckList/Checks";
import Map from "./components/Map";
import "./App.css";
import { Layout, Menu } from "antd";

const { Header, Content, Footer, Sider } = Layout;
function App() {
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            {/* <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item> */}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <Layout>
              <Sider className="itemWindow">
                <Items />
              </Sider>
              <Map />
            </Layout>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
}
export default App;
