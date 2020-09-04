import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Card, Avatar } from 'antd';
import ItemContext from "../../utils/itemContext";
import App from "../../App"

const gridStyle = {
  width: '24%',
  height: "24%",
};


function Items(props) {
const {items, setItemList} = props
  // const [formObject, setFormObject] = useState({})



    function handleItems(id) {
      let filter = [...items]
      let listFilter = []
      for (let i = 0; i < filter.length; i++) {
        if ((filter[i]._id === id) && (filter[i].isObtained === false)) {
          filter[i].isObtained = true;
        }
        else if ((items[i]._id === id) && (items[i].isObtained)) {
          filter[i].isObtained = false;
        }
      }
      setItemList(filter)
      
      for (let i = 0; i < filter.length; i++) {
        if(filter[i].isObtained){
          listFilter.push(filter[i])
        }
      }
      setItemList(listFilter)
      
      // const data = {id, isObtained: !isObtained}
      // API.updateItem(data)

      // .then(res => {
      //   loadItems()
        
      // })



      // console.log("yeh")
      // API.saveItem({
      //   isObtained: true
      // })

      // .then(res => loadItems())
      // .catch(err => console.log(err));

    }

    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            {items.length ? (
                  <Card style={{width: "375px"}} title="Card Title">
                {items.map(item => (
                    <a onClick={() => {handleItems(item._id)}}>
                  <Card.Grid style={gridStyle}>
                  <ListItem key={item._id}>
                    <>
                    {item.isObtained ? (
                      <img style={{height: "45px", width: "45px"}} src={require(`../../images/${item.name}.png`)} alt="OOT item"></img>
                    ) : (
                    <img style={{height: "45px", width: "45px", opacity: "0.4"}} src={require(`../../images/${item.name}.png`)} alt="OOT item"></img>
                    )}
                    </>
                  </ListItem>
                  </Card.Grid>
                    </a>
                ))}
              </Card>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Items;

// for (const item of items) {
//   if (item.isObtained === false) {
//    return item.isObtained === true;
//   }
// }
// loadItems()
