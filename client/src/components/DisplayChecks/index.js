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
  background: "",
};

function DisplayChecks() {
  const { checks } = useContext(CheckContext);

  return (
    <Content style={styles}>
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
