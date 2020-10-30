module.exports = {

  friendlyName: 'All',

  description: 'All messages.',

  inputs: {},

  exits: {
    noMessage:{
      description: "Message(s) not found"
    }
  },


  fn: async function (_, exits) {
    const allMessages = await Message.find({});
    if(!allMessages){
      return exits.noMessage({message: "Ops! You currently don\t have any message"})
    } else{
      return exits.success({
        message: "We found message(s) for you",
        data: allMessages
      })
    }
  }
};
