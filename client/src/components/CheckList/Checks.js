import React from "react";
import { List, ListItem } from "../List";
import { Layout } from "antd";
const { Content } = Layout;

function Checks(props) {
  const styles = {
    margin: "75px 0 0 75px",
    width: "800px",
    height: "300px",
    background: "",
  };

  return (
    <>
      <Content style={styles}>
        <List>
          {props.renderList.length ? (
            <>
              {props.renderList.map((check) => (
                <ListItem key={check._id}>
                  <a
                    onClick={() => {
                      props.handleChecks(check._id, check.location);
                    }}
                  >
                    <h1 style={{ color: check.color }}>{check.title}</h1>
                  </a>
                </ListItem>
              ))}
            </>
          ) : (
            <>
            <h2>Welcome to The Legend of Zelda: Ocarina of Time Randomizer Item Tracker.</h2>
            <h3>To get started, simply check the items you acquire on the list to the left. Search for item locations by clicking on the area buttons on the map. If you get stuck, see which item locations are still accessible (green).
            </h3>
            </>
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
    
    // || (filter[i].secondaryItems.every(value => {return (itemArr.indexOf(value) >= 0)})) || (filter[i].ternaryItems.every(value => {return (itemArr.indexOf(value) >= 0)})) || filter[i].requiredItems === [])
    
    //   function filterChecks() {
    //     const filter = [...checks];
    //     let itemArr = [];
    //     itemList.forEach((items) => itemArr.push(items.name));
    //     let render = [];
    //     console.log(itemList);
    //     for (let i = 0; i < filter.length; i++) {
    //       if (filter[i].requiredItems.length === 0) {
    //         filter[i].isAccessible = true;
    //       }
    //       if (
    //         filter[i].requiredItems.every((value) => {
    //           return itemArr.indexOf(value) >= 0;
    //         })
    //       ) {
    //         filter[i].isAccessible = true;
    //       } else if (
    //         filter[i].secondaryItems.length !== 0 &&
    //         filter[i].secondaryItems.every((value) => {
    //           return itemArr.indexOf(value) >= 0;
    //         })
    //       ) {
    //         filter[i].isAccessible = true;
    //       } else if (
    //         filter[i].ternaryItems.length !== 0 &&
    //         filter[i].ternaryItems.every((value) => {
    //           return itemArr.indexOf(value) >= 0;
    //         })
    //       ) {
    //         filter[i].isAccessible = true;
    //       } else {
    //         filter[i].isAccessible = false;
    //       }
    
    //       if (filter[i].isChecked) {
    //         filter[i].color = "gray";
    //       } else if (filter[i].isAccessible) {
    //         filter[i].color = "green";
    //       } else if (filter[i].isAccessible === false) {
    //         filter[i].color = "red";
    //       }
    //     }
    //     for (let i = 0; i < filter.length; i++) {
    //       if (filter[i].location === message) {
    //         render.push({
    //           _id: checks[i]._id,
    //           title: checks[i].title,
    //           color: checks[i].color,
    //           requiredItems: checks[i].requiredItems,
    //           isAccessible: checks[i].isAccessible,
    //           isChecked: checks[i].isChecked,
    //         });
    //       }
    //     }
    //     console.log(render);
    //     setRenderList(render);
    //   }
    
    //   function handleChecks(id) {
    //     const currentChecks = [...checks];
    //     for (let i = 0; i < currentChecks.length; i++) {
    //       if (currentChecks[i]._id === id && !currentChecks[i].isChecked) {
    //         currentChecks[i].isChecked = true;
    //       } 
    //       else if (currentChecks[i]._id === id && currentChecks[i].isChecked) {
    //         currentChecks[i].isChecked = false;
    //       } 
    //     }
    //     filterChecks();
    //   }