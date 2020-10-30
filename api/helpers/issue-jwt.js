/* eslint-disable no-unused-vars */
var jwt = require('jsonwebtoken');
module.exports = {


  friendlyName: 'Issue jwt',


  description: 'Issues a JWT token',


  inputs: {
    payload:{
      type: "ref",
      required: true
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    const key = "courier1234";
    const token = jwt.sign(inputs.payload, key);
    return token;
  }


};

