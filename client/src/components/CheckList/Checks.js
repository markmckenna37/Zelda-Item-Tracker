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
      {/* Mapping out all of our filtered checks and rendering them in the "content" component */}
      <Content style={styles}>
        <List>
          {props.renderList.length ? (
            <>
              {props.renderList.map((check) => (
                <ListItem key={check._id}>
                  <a
                    onClick={() => {
                      //function to handle changing to "is checked"
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

