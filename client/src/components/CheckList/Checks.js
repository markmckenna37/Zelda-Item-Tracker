import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import Area from "../AreaList/Areas"
import CheckContext from "../../utils/checkContext"
import DisplayChecks from "../DisplayChecks/index"
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";
import MessageContext from "../../utils/messageContext";

function Checks() {
  const [checkList, setCheckList] = useState({
    checkList: [],
  })
const [filteredCheckList, setFilteredCheckList] = useState({
  filteredCheckList: []
})
const {message} = useContext(MessageContext)

  useEffect(() => {
    loadChecks()
    filterChecks()
  }, [])

  // Loads all books and sets them to books
  function loadChecks() {
    API.getChecks()
      .then(res => {
          console.log(res.data)
        setCheckList(res.data)
      })
      .catch(err => console.log(err));
  };

     
  function filterChecks(){
    console.log(message)
      let filter = []
      for (let i = 0; i < checkList.length; i++) {
          if (checkList[i].location === message) {
            filter.push(checkList[i].title)
          }
      }
      setFilteredCheckList(filter)
      console.log(filteredCheckList)
    }

    return (
      <>
      <CheckContext.Provider value={
        {checks: filteredCheckList}
      }>
      <button onClick={() => {filterChecks()}}>Show Checks</button>
      <DisplayChecks checks={filteredCheckList} />
      </CheckContext.Provider>
      </>
    );
  }


export default Checks;
