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
  const styles = {
    margin: "5rem 0 0 5rem",
    width: "800px",
    height: "300px",
    background: "",
  };
  function handleChecks(id) {
    const newChecks = [...checks]
    for (let i = 0; i < newChecks.length; i++) {
      if (newChecks[i]._id === id) {
        newChecks[i].isChecked = true;
      }
    }

    for (let i = 0; i < newChecks.length; i++) {
      if (newChecks[i].isChecked) {
        newChecks[i].color = "gray";
    }
  }
  console.log(newChecks)
  setRenderList(newChecks)
  console.log(renderList)
}

  return (
    <Content style={styles}>
      <List>
        {checks.length ? (
          <>
            {checks.map((check) => (
              <a>
                <ListItem key={check._id}>
                  <a
                    onClick={() => {
                      handleChecks(check._id);
                    }}
                  >
                    <h1 style={{ color: check.color }}>{check.title}</h1>
                  </a>
                </ListItem>
              </a>
            ))}
          </>
        ) : <ListItem>
            "OIII"
          </ListItem>}
      </List>
    </Content>
  );
}

export default DisplayChecks;
