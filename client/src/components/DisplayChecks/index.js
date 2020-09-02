import React, { Component, useState, useEffect, useContext } from "react";
import { Layout } from "antd";
import API from "../../utils/API";
import MessageContext from "../../utils/messageContext";
import CheckContext from "../../utils/checkContext";
import { List, ListItem } from "../List";
const { Content } = Layout;

const styles = {
  margin: "5rem 0 0 5rem",
  width: "800px",
  height: "300px",
  background: "salmon",
};
//  <button onClick={() => {filterChecks()}}>ewfwefawefa</button>

function DisplayChecks() {
  const { checks } = useContext(CheckContext);
  function showMe() {
    console.log(checks);
  }

  return (
    <Content style={styles}>
      <button
        onClick={() => {
          showMe();
        }}
      >
        feawsweehtrehtr
      </button>
      <List>
        {checks.length ? (
          <>
          {checks.map((check) => (
            <ListItem key={check}>
              <strong>{check}</strong>
            </ListItem>
          ))}
          </>
        ) : null} 
      </List>
    </Content>
  );
}

export default DisplayChecks;
