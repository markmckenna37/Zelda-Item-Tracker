import React, { Component, useState, useEffect, useContext } from "react";
import { Layout } from "antd";
import API from "../../utils/API";
import MessageContext from "../../utils/messageContext";
import CheckContext from "../../utils/checkContext";
import { List, ListItem } from "../List";
const { Content } = Layout;

function DisplayChecks() {
  const { checks } = useContext(CheckContext);
  const [renderList, setRenderList] = useState({
    renderList: []
  })

  function handleChecks(id) {
    for (let i = 0; i < checks.length; i++) {
      if (checks[i]._id === id) {
        checks[i].isChecked = true;
      }
    }

    for (let i = 0; i < checks.length; i++) {
      if (checks[i].isChecked) {
        checks[i].color = "gray";
    }
  }
  console.log(checks)
  setRenderList(checks)
  console.log(renderList)
}

  // return (
    // <Content style={styles}>
    //   <List>
    //     {checks.length ? (
    //       <>
    //         {checks.map((check) => (
    //           <a>
    //             <ListItem key={check._id}>
    //               <a
    //                 onClick={() => {
    //                   handleChecks(check._id);
    //                 }}
    //               >
    //                 <h1 style={{ color: check.color }}>{check.title}</h1>
    //               </a>
    //             </ListItem>
    //           </a>
    //         ))}
    //       </>
    //     ) : <ListItem>
    //         "OIII"
    //       </ListItem>}
    //   </List>
    // </Content>
  // );
}

export default DisplayChecks;
