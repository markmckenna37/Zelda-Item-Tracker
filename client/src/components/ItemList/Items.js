import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Card, Avatar } from 'antd';

const gridStyle = {
  width: '24%',
  height: "24%",
};


function Items() {
  // Setting our component's initial state
  const [items, setItems] = useState([])
  const [formObject, setFormObject] = useState({})

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



    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            {items.length ? (
                  <Card style={{width: "375px"}} title="Card Title">
                {items.map(item => (
                  <Card.Grid style={gridStyle}>
                  <ListItem key={item._id}>
                <img style={{height: "45px", width: "45px"}} src={require(`../../images/${item.name}.png`)} alt="OOT item"></img>
                  </ListItem>
                  </Card.Grid>
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
