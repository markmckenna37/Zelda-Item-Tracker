const db = require("../models");
const { VirtualType } = require("mongoose");

module.exports = {
  findAll: function(req, res) {
    db.Item
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Item
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
    update: function(req, res) {
      db.Item
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },
    updateList: function(req, res) {
      const {id, isObtained} = req.body;
      const filter = {_id: id};
      const update = {isObtained: isObtained};
      const opts = {new: true};
      db.Item
      .findOneAndUpdate(filter, update, opts)
      // db.Item
      // .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
    }
  // findByIdAndUpdate: function(req, res) {
  //   db.Item.findOne({_id: _id}, function(err, data) {
  //     if(err) throw err;
  //     else {
  //       if(req.body.isObtained = false) {
  //         data.isObtained = true
  //       }
  //     }
  //     data.save(function(err, update) {
  //       res.send(update)
  //     })
  //   })
  // },

  // update: function(req, res) {
  //   db.Item
  //     .({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

};
