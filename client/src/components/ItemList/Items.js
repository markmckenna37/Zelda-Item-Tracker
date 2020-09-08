import React from "react";
import { Col, Row, Container } from "../Grid";
import { ListItem } from "../List";
import { Card } from 'antd';
import Tippy from "@tippy.js/react";

const gridStyle = {
  width: '20%',
  height: "20%",
  background: "#fafafa"
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
      
    }

    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            {items.length ? (
                  <Card style={{width: "500px"}} title="Item List">
                {items.map(item => (
                    <a onClick={() => {handleItems(item._id)}}>
                  <Card.Grid style={gridStyle}>
                  <ListItem key={item._id}>
                    <Tippy content={item.title}>
                    {item.isObtained ? (
                      <img style={{height: "55px", width: "50px"}} src={require(`../../images/${item.name}.png`)} alt="OOT item"></img>
                    ) : (
                    <img style={{height: "55px", width: "45px", opacity: "0.4"}} src={require(`../../images/${item.name}.png`)} alt="OOT item"></img>
                    )}
                    </Tippy>
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
