import React, { useState, useContext } from "react";
import { Layout } from "antd";
import Checks from "../CheckList/Checks";
import MessageContext from "../../utils/messageContext";
import CheckContext from "../../utils/checkContext";
import ItemContext from "../../utils/itemContext";
import Map from "../Map/index";

const { Content } = Layout;

function Container(props) {
  //using our item, check, and message contexts, setting them as state
  const { checks } = useContext(CheckContext);

  const [renderList, setRenderList] = useState({
    renderList: [{}],
  });

  const { itemList } = useContext(ItemContext);

  const { message } = useContext(MessageContext);


  //Function to filter our checks down based on the collected items.
  function filterChecks(name) {
    const filter = [...checks];
    let itemArr = [];
    //For each item we have, it's pushed to an array called ItemArr
    itemList.forEach((items) => itemArr.push(items.name));
    let render = [];
    //A loop to compare our conditions for color coding. If there are no requirements for the check, it is marked as accessible
    for (let i = 0; i < filter.length; i++) {
      if (filter[i].requiredItems.length === 0) {
        filter[i].isAccessible = true;
      }
      //If every required item in the array is present in the items array, it returns true and sets the "isAccessible" boolean to true.
      if (
        filter[i].requiredItems.every((value) => {
          return itemArr.indexOf(value) >= 0;
        })
      ) {
        filter[i].isAccessible = true;
        //repeat for secondary items
      } else if (
        filter[i].secondaryItems.length !== 0 &&
        filter[i].secondaryItems.every((value) => {
          return itemArr.indexOf(value) >= 0;
        })
      ) {
        //repeat for ternary items
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
      // Now, the filtered list is filtered further, giving each item one of 3 colors
      if (filter[i].isChecked) {
        filter[i].color = "gray";
      } else if (filter[i].isAccessible) {
        filter[i].color = "green";
      } else if (filter[i].isAccessible === false) {
        filter[i].color = "red";
      }
    }
    //Once our list is filtered, we render the list of checks in the selected area by comparing the location to the selected message
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
    //Then, our rendered list is set
    setRenderList(render);
  }

  //On click, each check in the render list is set to gray to indicate "is checked" or set back to red/green if not checked
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
