module.exports = {

  friendlyName: 'Delete',

  description: 'Delete messages.',

  inputs: {
    id:{
      type: "string",
      required: true,
      description: "A reference to the message ID"
    }
  },

  exits: {

  },


  fn: async function (inputs, exits) {
    const deletedMessage = await Message.destroy({id: inputs.id});
    return exits.success({message: "Message successfully deleted"});
  }
};
