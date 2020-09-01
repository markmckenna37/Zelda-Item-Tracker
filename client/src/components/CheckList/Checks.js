import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";

function Checks() {
  // Setting our component's initial state
  const [checks, setChecks] = useState([])
  const [formObject, setFormObject] = useState({})

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


    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            {checks.length ? (
              <List>
                {checks.map(check => (
                  <ListItem key={check._id}>
                    <a href={"/checks/" + check._id}>
                      <strong>
                        {check.name}
                      </strong>
                    </a>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Checks;
