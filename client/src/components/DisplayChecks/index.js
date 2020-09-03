import React, { Component, useState, useEffect, useContext } from "react";
import { Layout } from "antd";
import API from "../../utils/API";
import MessageContext from "../../utils/messageContext";
import CheckContext from "../../utils/checkContext";
import { List, ListItem } from "../List";
const { Content } = Layout;


function DisplayChecks() {
  const { checks } = useContext(CheckContext);
  console.log(checks)
      const styles = {
        margin: "5rem 0 0 5rem",
        width: "800px",
        height: "300px",
        background: "",
      };
  return (
    <Content style={styles}>
      <List>
        {checks.length ? (
          <>
          {checks.map((check) => (
            <a>
            <ListItem key={check._id}>
              <>
              <h1 style={{color: check.color}}>{check.title}</h1>
              </>
            </ListItem>
            </a>
          ))}
          </>
        ) : null} 
      </List>
    </Content>
  );
}

export default DisplayChecks;
