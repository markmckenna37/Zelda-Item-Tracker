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

  
  return (
    <>
      <MessageContext.Provider value={{
        message: message
      }}>
        
      <Layout>
        <Header></Header>
        <Layout>
          <Sider className="itemWindow"></Sider>
            <Items className="itemList"/>
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
      </MessageContext.Provider>
    </>
  );
}
export default App;

// const [checks, setChecks] = useState([])

// const [filteredChecks, setFilteredChecks] = useState("")



//     API.getChecks()
//     .then(res => 
//       setCheckList(res.data)
//         )
//         .catch(err => console.log(err));
    
// function filterChecks(){
//   console.log(message)
//     let filter = []
//     for (let i = 0; i < checkList.length; i++) {
//         if (checkList[i].location === message) {
//           filter.push(checkList[i].title)
//         }
//     }
//     setFilteredChecks(filter)
//     console.log(filter)
//   }
  // function filterChecks(checks) {
  //   return checks === message
  // }
  // function getFilteredChecks() {
  //   checkList.filter(filterChecks)
  // }
// function filterChecks() {
//   findChecks()
//  const filteredChecks = checkList.filter((checkList) =>
//   message
//   );
//   console.log(filteredChecks)
//   setFilteredChecks(filteredChecks)
// }
// const [checkList, setCheckList] = useState([])

// useEffect(() => {
//   loadChecks()
// }, [])

// function loadChecks() {
//   API.getChecks()
//     .then(res => 
//       setCheckList(res.data)
//     )
//     .catch(err => console.log(err));
// };

// function filterChecks() {
//   const filteredChecks = checkList.filter((check) => check.name === message)
//   this.setState({
//     checkList: filteredChecks
//   })
//   console.log(filteredChecks)
// }