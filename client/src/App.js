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

//Antd Design components
const { Header, Content, Footer, Sider } = Layout;

function App() {
  //Using state for message(to track the selected area) items, and the filtered item list.
  const [message, setMessage] = useState("");
  const [items, setItems] = useState([]);
  const [itemList, setItemList] = useState([]);

  const [checkList, setCheckList] = useState({
    checkList: [],
  });
  //functions called upon load
  useEffect(() => {
    loadItems();
    loadChecks();
  }, []);

  // Loads all items and sets them to items
  function loadItems() {
    API.getItems()
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }

// Loads all checks and sets them to checks.
  function loadChecks() {
    API.getChecks()
      .then((res) => {
        setCheckList(res.data);
      }) 
      .catch((err) => console.log(err));
  }

  return (
    <>
    {/* Using context provider for message, checks, and items. */}
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
              {/* Buttons for Auth0 authentication */}
              <div className="authButtons">
              <LoginButton id="login"/>
              <LogoutButton id="logout"/>
              </div>
              {/* Logo and heading */}
              <img className="logo" src={require("./images/triforce2.png")}></img>
              <p className="heading ">Ocarina of Time Randomizer Item Tracker</p>
            </Header>
            <Layout>
              {/* Sider with our items grid */}
              <Sider className="itemWindow"></Sider>
              <Items
                className="itemList"
                items={items}
                setItemList={setItemList}
              />
              <Layout>
                {/* container that holds the rest of the data: map, check list, etc. */}
                <Container setMessage={setMessage}>
                  
                </Container>
              </Layout>
            </Layout>
            <Footer style={{ textAlign: "center" }}>
            </Footer>
          </Layout>
        </ItemContext.Provider>
        </CheckContext.Provider>
      </MessageContext.Provider>
    </>
  );
}
export default App;
