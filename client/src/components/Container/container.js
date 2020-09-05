import React, { useState, useContext } from "react";
import { Layout } from "antd";
import Checks from "../CheckList/Checks";
import MessageContext from "../../utils/messageContext";
import CheckContext from "../../utils/checkContext";
import ItemContext from "../../utils/itemContext";
import Map from "../Map/index";

const { Content } = Layout;

function Container(props) {
  const { checks } = useContext(CheckContext);

  const [renderList, setRenderList] = useState({
    renderList: [{}],
  });

  const { itemList } = useContext(ItemContext);

  const { message } = useContext(MessageContext);

  function filterChecks(name) {
    const filter = [...checks];
    let itemArr = [];
    itemList.forEach((items) => itemArr.push(items.name));
    let render = [];
    console.log(itemList);
    for (let i = 0; i < filter.length; i++) {
      if (filter[i].requiredItems.length === 0) {
        filter[i].isAccessible = true;
      }
      if (
        filter[i].requiredItems.every((value) => {
          return itemArr.indexOf(value) >= 0;
        })
      ) {
        filter[i].isAccessible = true;
      } else if (
        filter[i].secondaryItems.length !== 0 &&
        filter[i].secondaryItems.every((value) => {
          return itemArr.indexOf(value) >= 0;
        })
      ) {
        filter[i].isAccessible = true;
      } else if (
        filter[i].ternaryItems.length !== 0 &&
        filter[i].ternaryItems.every((value) => {
          return itemArr.indexOf(value) >= 0;
        })
      ) {
        filter[i].isAccessible = true;
      } else {
        filter[i].isAccessible = false;
      }

      if (filter[i].isChecked) {
        filter[i].color = "gray";
      } else if (filter[i].isAccessible) {
        filter[i].color = "green";
      } else if (filter[i].isAccessible === false) {
        filter[i].color = "red";
      }
    }
    for (let i = 0; i < filter.length; i++) {
      if (filter[i].location === name) {
        render.push({
          _id: checks[i]._id,
          title: checks[i].title,
          color: checks[i].color,
          requiredItems: checks[i].requiredItems,
          isAccessible: checks[i].isAccessible,
          isChecked: checks[i].isChecked,
        });
      }
    }
    console.log(render);
    setRenderList(render);
  }

  function handleChecks(id) {
    const currentChecks = [...checks];
    for (let i = 0; i < currentChecks.length; i++) {
      if (currentChecks[i]._id === id && !currentChecks[i].isChecked) {
        currentChecks[i].isChecked = true;
      } else if (currentChecks[i]._id === id && currentChecks[i].isChecked) {
        currentChecks[i].isChecked = false;
      }
    }
    filterChecks(message);
  }

  return (
    <>
      <Checks renderList={renderList} handleChecks={handleChecks} />
      <Content>
        <Map filterChecks={filterChecks} setMessage={props.setMessage} />
      </Content>
    </>
  );
}

export default Container;
