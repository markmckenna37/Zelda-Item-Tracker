import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Area from "../AreaList/Areas"
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";

function Checks(props) {
  const { message } = props
  // Setting our component's initial state
  const [checks, setChecks] = useState([])
  const [filteredChecks, setFilteredChecks] = useState([])
  // const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadChecks()
  }, [])

  // Loads all books and sets them to books
  function loadChecks() {
    API.getChecks()
      .then(res => {
          console.log(res.data)
        setChecks(res.data)
      })
      .catch(err => console.log(err));
  };

     
  function filterChecks(){
    console.log(message)
      let filter = []
      for (let i = 0; i < checks.length; i++) {
          if (checks[i].location === message) {
            filter.push(checks[i].title)
          }
      }
      setFilteredChecks(filter)
      console.log(filter)
    }

    return (
      <>
      {/* <Area filterChecks={filterChecks}/> */}
      </>
    );
  }


export default Checks;
