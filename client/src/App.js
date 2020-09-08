import React, { useState, useEffect } from "react";
import LoginButton from "./components/LoginButton/LoginButton";
import LogoutButton from "./components/LogoutButton/LogoutButton";
import Items from "./components/ItemList/Items";
import ItemContext from "./utils/itemContext";
import MessageContext from "./utils/messageContext";
import Container from "./components/Container/container"
import "./App.css";
import { Layout } from "antd";
import API from "./utils/API";
import CheckContext from "./utils/checkContext";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [message, setMessage] = useState("");
  const [items, setItems] = useState([]);
  const [itemList, setItemList] = useState([]);

  const [checkList, setCheckList] = useState({
    checkList: [],
  });
  useEffect(() => {
    loadItems();
    loadChecks();
  }, []);

  // Loads all books and sets them to books
  function loadItems() {
    API.getItems()
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }


  function loadChecks() {
    API.getChecks()
      .then((res) => {
        setCheckList(res.data);
      }) 
      .catch((err) => console.log(err));
  }

  return (
    <>
      <MessageContext.Provider
        value={{
          message: message,
        }}
      >
      <CheckContext.Provider 
      value={{
        checks: checkList,
      }}
      >
        <ItemContext.Provider
          value={{
            itemList: itemList,
          }}
        >
          <Layout>
            <Header>
              <LoginButton />
              <LogoutButton />
              <img className="logo" src={require("./images/triforce.png")}></img>
            </Header>
            <Layout>
              <Sider className="itemWindow"></Sider>
              <Items
                className="itemList"
                items={items}
                setItemList={setItemList}
              />
              <Layout>
                <Container setMessage={setMessage}>
                  
                </Container>
              </Layout>
            </Layout>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </ItemContext.Provider>
        </CheckContext.Provider>
      </MessageContext.Provider>
    </>
  );
}
export default App;
