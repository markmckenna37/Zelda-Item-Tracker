import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";

function Areas() {
  // Setting our component's initial state
  const [areas, setAreas] = useState([])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadAreas()
  }, [])

  function loadAreas() {
    API.getAreas()
      .then(res => 
        setAreas(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
//   function deleteBook(id) {
//     API.deleteBook(id)
//       .then(res => loadBooks())
//       .catch(err => console.log(err));
//   }

  // Handles updating component state when the user types into the input field
//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormObject({...formObject, [name]: value})
//   };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
//   function handleFormSubmit(event) {
//     event.preventDefault();
//     if (formObject.title && formObject.author) {
//       API.saveBook({
//         title: formObject.title,
//         author: formObject.author,
//         synopsis: formObject.synopsis
//       })
//         .then(res => loadBooks())
//         .catch(err => console.log(err));
//     }
//   };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            {areas.length ? (
              <List>
                {areas.map(area => (
                  <ListItem key={area._id}>
                    <a href={"/area/" + area._id}>
                      <strong>
                        {area.name}
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


export default Areas;
