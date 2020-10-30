module.exports = {

  friendlyName: 'Create',

  description: 'Create messages.',

  inputs: {
    fullName:{
      type: "string",
      required: true
    },
    emailAddress:{
      type: "string",
      required: true
    },
    phoneNumber:{
      type: "number",
      required: true
    },
    message:{
      type: "string",
      required: true
    }
  },
  exits: {

  },


  fn: async function (inputs, exits) {
    try {
      const newMessage = await Message.create({
        id: sails.helpers.getUuid(),
        fullName: inputs.fullName,
        emailAddress: inputs.emailAddress,
        phoneNumber: inputs.phoneNumber,
        message: inputs.message
      }).fetch();
      return exits.success({
        message: "Message sent successfully",
        data: newMessage
      })
    } catch (error) {
      sails.log.error(error)
    }
  }
};
