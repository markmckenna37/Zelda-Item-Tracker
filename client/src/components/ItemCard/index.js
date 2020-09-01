import React, { mountNode } from "react";
import ReactDOM from 'react-dom';

import { Card } from 'antd';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

const ItemCard = () => {
return(
    <>
  <Card title="Card Title">
    <Card.Grid style={gridStyle}></Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>
      
    </Card.Grid>
    <Card.Grid style={gridStyle}></Card.Grid>
    <Card.Grid style={gridStyle}></Card.Grid>
    <Card.Grid style={gridStyle}></Card.Grid>
    <Card.Grid style={gridStyle}></Card.Grid>
    <Card.Grid style={gridStyle}></Card.Grid>
  </Card>,
</>
    )
}
export default ItemCard;