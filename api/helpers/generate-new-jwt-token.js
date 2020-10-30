module.exports = {

  friendlyName: 'Generate new jwt token',

  description: 'Generate a new JWT Token',


  inputs: {
    subject:{
      type: "string",
      required: true
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  // eslint-disable-next-line no-unused-vars
  fn: async function (inputs) {
    const payload = {
      iss: "Courier Backend",
      sub: inputs.subject
    };
    const token = await sails.helpers.issueJwt(payload);
    return token;
  }
};

