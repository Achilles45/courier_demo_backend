/* eslint-disable no-unused-vars */
const { v4: uuidv4 } = require('uuid');
module.exports = {

  friendlyName: 'Get uuid',

  description: '',

  sync: true,

  inputs: {},

  exits: {
    success: {
      outputFriendlyName: 'Uuid',
    },

  },

  fn:function (inputs) {
    const uuid = uuidv4()
    // Send back the result through the success exit.
    return uuid;
  }
};

