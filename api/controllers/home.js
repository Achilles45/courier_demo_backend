module.exports = {


  friendlyName: 'Home',


  description: 'Home something.',


  inputs: {

  },


  exits: {

  },


  fn: async function (_, exits) {

    // All done.
    return exits.success({message: "Welcome to the web service of the courier app"});

  }
};
