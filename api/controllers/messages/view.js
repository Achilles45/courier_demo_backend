module.exports = {

  friendlyName: 'View',

  description: 'View messages.',

  inputs: {
    id:{
      type: "string",
      required: true,
      description: "A reference to the message ID"
    }
  },

  exits: {
    notFound:{
      description: "Not found"
    }
  },


  fn: async function (inputs, exits) {
    const message = await Message.findOne({id: inputs.id})
    if(!message){
      return exits.notFound({message: "This message details was not found"})
    } else{
      return exits.success({
        message: "Message found",
        data: message
      })
    }
  }
};
