import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import Area from "../AreaList/Areas";
import CheckContext from "../../utils/checkContext";
import DisplayChecks from "../DisplayChecks/index";
import ItemChecks from "../../utils/itemContext";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";
import MessageContext from "../../utils/messageContext";
import ItemContext from "../../utils/itemContext";
import { Layout } from "antd";
const { Content } = Layout;

function Checks() {
  const [checkList, setCheckList] = useState({
    checkList: [],
  });

  const [filteredCheckList, setFilteredCheckList] = useState({
    filteredCheckList: [{}],
  });

  const [renderList, setRenderList] = useState({
    renderList: [{}],
  });

  const { message } = useContext(MessageContext);
  const { itemList } = useContext(ItemContext);
  const styles = {
    margin: "5rem 0 0 5rem",
    width: "800px",
    height: "300px",
    background: "",
  };

  useEffect(() => {
    loadChecks();
  }, []);

  function loadChecks() {
    API.getChecks()
      .then((res) => {
        setCheckList(res.data);
      })
      .catch((err) => console.log(err));
  }

  function filterChecks() {
    const filter = [...checkList];
    let itemArr = [];
    // let itemStr = "";
    itemList.forEach((items) => itemArr.push(items.name));
    let render = [];
    console.log(itemList)
    for (let i = 0; i < filter.length; i++) {
      // itemStr = filter[i].requiredItems.join(", ");
      if (filter[i].requiredItems.length === 0) {
      }
     if (filter[i].requiredItems.every(value => {return (itemArr.indexOf(value) >= 0)})) {
        filter[i].isAccessible = true
     }
      if (filter[i].isChecked) {
        filter[i].color = "gray";
      } else if (filter[i].isAccessible) {
        filter[i].color = "green";
      } else if (filter[i].isAccessible === false) {
        filter[i].color = "red";
      }
    }
    setCheckList(filter);
    for (let i = 0; i < filter.length; i++) {
      if (filter[i].location === message) {
        render.push({
          _id: checkList[i]._id,
          title: checkList[i].title,
          color: checkList[i].color,
          requiredItems: checkList[i].requiredItems,
          isAccessible: checkList[i].isAccessible,
          isChecked: checkList[i].isChecked,
        });
      }
    }
    console.log(render);
    setRenderList(render);
  }

  function handleChecks(id) {
    const currentChecks = [...checkList];
    for (let i = 0; i < currentChecks.length; i++) {
      if (currentChecks[i]._id === id) {
        currentChecks[i].isChecked = true;
      }
    }
    setCheckList(currentChecks);
    filterChecks();
  }
  return (
    <>
      <button
        onClick={() => {
          filterChecks();
        }}
      >
        Show Checks
      </button>
      <Content style={styles}>
        <List>
          {renderList.length ? (
            <>
              {renderList.map((check) => (
                <ListItem key={check._id}>
                  <a
                    onClick={() => {
                      handleChecks(check._id);
                    }}
                  >
                    <h1 style={{ color: check.color }}>{check.title}</h1>
                  </a>
                </ListItem>
              ))}
            </>
          ) : (
            <ListItem>"OIII"</ListItem>
          )}
        </List>
      </Content>
    </>
  );
}

export default Checks;
// for (let i = 0; i < filter.length; i++) {
//   if (filter[i]._id === id) {
//     filter[i].isChecked = true;
//   }
// }
