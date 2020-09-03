import axios from "axios";

export default {

  getItems: function() {
    return axios.get("/api/items");
  },
  getItem: function(id) {
    return axios.get("/api/items/" + id);
  },
  saveItem: function(itemData) {
    return axios.post("/api/item", itemData);
  },
  getAreas: function() {
    return axios.get("/api/areas");
  },
  getArea: function(id) {
    return axios.get("/api/areas/" + id);
  },
  getChecks: function() {
    return axios.get("/api/checks");
  },
  getCheck: function(id) {
    return axios.get("/api/checks/" + id);
  },
  updateItem: function(data) {
    return axios.post("/api/items/update", data);
  }


}