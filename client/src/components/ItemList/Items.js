import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Card, Avatar } from 'antd';
import ItemContext from "../../utils/itemContext";

const gridStyle = {
  width: '24%',
  height: "24%",
};


function Items() {
  // Setting our component's initial state
  const [items, setItems] = useState([])
  const [itemList, setItemList] = useState([])
  // const [formObject, setFormObject] = useState({})


  // Load all books and store them with setBooks
  useEffect(() => {
    loadItems()
  }, [])

  // Loads all books and sets them to books
  function loadItems() {
    API.getItems()
      .then(res => 
        setItems(res.data)
      )
      .catch(err => console.log(err));
  };

    function handleItems(id) {
      let filter = []
      let listFilter = []
      for (let i = 0; i < items.length; i++) {
        if ((items[i]._id === id) && (items[i].isObtained === false)) {
          items[i].isObtained = true;
          filter.push(items[i])
        }
        else if ((items[i]._id === id) && (items[i].isObtained)) {
          items[i].isObtained = false;
          filter.push(items[i])
        }
        else {
          filter.push(items[i])
        }
      }
      setItems(filter)
      
      for (let i = 0; i < items.length; i++) {
        if(items[i].isObtained){
          listFilter.push(items[i])
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
      <ItemContext.Provider value={{
        itemList: itemList
      }}>
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
      </ItemContext.Provider>
    );
  }


export default Items;

// for (const item of items) {
//   if (item.isObtained === false) {
//    return item.isObtained === true;
//   }
// }
// loadItems()
