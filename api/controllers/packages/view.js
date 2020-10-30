module.exports = {

  friendlyName: 'View',

  description: 'View packages.',

  inputs: {
    id:{
      type: "string",
      required: true,
      description: "A representation of the package ID"
    }
  },


  exits: {
    notFound:{
      description: "Package not found"
    },
    success:{
      description: "Package was found"
    }
  },

  fn: async function (inputs, exits) {
    const package = await Package.findOne({id: inputs.id});
    if(!package){
      return exits.notFound({message: "Package was not found"})
    } else{
      return exits.success({
        message: "Package found",
        data: package
      })
    }
  }
};
