import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import Area from "../AreaList/Areas";
import CheckContext from "../../utils/checkContext";
import DisplayChecks from "../DisplayChecks/index";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";
import MessageContext from "../../utils/messageContext";

function Checks() {
  const [checkList, setCheckList] = useState({
    checkList: [],
  });
  const [filteredCheckList, setFilteredCheckList] = useState({
    filteredCheckList: [{}],
  });
  const { message } = useContext(MessageContext);

  useEffect(() => {
    loadChecks();
    filterChecks();
  }, []);

  // Loads all books and sets them to books
  function loadChecks() {
    API.getChecks()
      .then((res) => {

        setCheckList(res.data);
      })
      .then(

      )
      .catch((err) => console.log(err));
  }

  // function setColor() {
  //   if (checkList) {}
  //   for (let i = 0; i < checkList.length; i++) {
  //     if (checkList[i].isChecked) {
  //       checkList[i].color = "gray";
  //     } else if (checkList[i].isAccessible) {
  //       checkList[i].color = "green";
  //     } else if (checkList[i].isAccessible === false) {
  //       checkList[i].color = "red";
  //     }
  //   }
  // }
  function filterChecks() {
    // setColor()
    let filter = [];


    for (let i = 0; i < checkList.length; i++) {
          if (checkList[i].isChecked) {
            checkList[i].color = "gray";
          } else if (checkList[i].isAccessible) {
            checkList[i].color = "green";
          } else if (checkList[i].isAccessible === false) {
            checkList[i].color = "red";
          }
        }

    for (let i = 0; i < checkList.length; i++) {
      if (checkList[i].location === message) {
        filter.push({
          _id: checkList[i]._id,
          title: checkList[i].title,
          color: checkList[i].color,
        });
      }
    }
    console.log(filter)
    setFilteredCheckList(filter);
  }

  return (
    <>
      <CheckContext.Provider value={{ checks: filteredCheckList }}>
        <button
          onClick={() => {
            filterChecks();
          }}
        >
          Show Checks
        </button>
        <DisplayChecks checks={filteredCheckList} />
      </CheckContext.Provider>
    </>
  );
}

export default Checks;
