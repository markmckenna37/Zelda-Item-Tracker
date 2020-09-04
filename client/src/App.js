import React, { useState, useEffect, useContext } from "react";
import Items from "./components/ItemList/Items";
import DisplayChecks from "./components/DisplayChecks";
import Checks from "./components/CheckList/Checks"
import CheckContext from "./utils/checkContext";
import ItemContext from "./utils/itemContext";
import MessageContext from "./utils/messageContext";
import Map from "./components/Map";
import "./App.css";
import { Layout,} from "antd";
import API from "./utils/API";

const { Header, Content, Footer, Sider } = Layout;




function App() {

  const [message, setMessage] = useState("")

  const [items, setItems] = useState([])
  const [itemList, setItemList] = useState([])
  useEffect(() => {
    loadItems()
  }, [])

  // Loads all books and sets them to books
  function loadItems() {
    API.getItems()
      .then(res => 
        setItems(res.data)
      )
      .catch(err => console.log(err));
  };
  
  return (
    <>
      <MessageContext.Provider value={{
        message: message
      }}>
      <ItemContext.Provider value={{
        itemList: itemList
      }}>
      <Layout>
        <Header></Header>
        <Layout>
          <Sider className="itemWindow"></Sider>
            <Items className="itemList" items={items} setItemList={setItemList}/>
            <Layout>
              <Checks/>
              <Content >
                <Map setMessage={setMessage}/>
              </Content>
            </Layout>
        </Layout>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
      </ItemContext.Provider>
      </MessageContext.Provider>
    </>
  );
}
export default App;

