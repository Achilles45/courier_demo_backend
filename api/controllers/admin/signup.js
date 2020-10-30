module.exports = {

  friendlyName: 'Create',

  description: 'Create admin.',

  inputs: {
    fullName:{
      type: "string",
      required: true
    },
    emailAddress:{
      type: "string",
      required: true
    },
    password:{
      type: "string",
      required: true
    }
  },


  exits: {
    emailInUse:{
      description: "Email in use by another admin"
    }
  },


  fn: async function (inputs, exits) {
    try {
      const newEmailAddress = inputs.emailAddress.toLowerCase();
      const newAdmin = await Admin.create({
        id: sails.helpers.getUuid(),
        fullName: inputs.fullName,
        emailAddress: inputs.emailAddress,
        password: inputs.password
      }).fetch();

      //Generate new jwt token for the user
      const token = await sails.helpers.generateNewJwtToken(newEmailAddress);
      return exits.success({
        message: `Account successfully created for ${newEmailAddress}`,
        data: newAdmin,
        token
      })
    } catch (error) {
      sails.log.error(error)
    }
  }
};
