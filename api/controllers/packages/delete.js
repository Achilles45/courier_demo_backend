module.exports = {

  friendlyName: 'Delete',

  description: 'Delete packages.',

  inputs: {
    id:{
      type: "string",
      required: true,
      description: "A representation of the package ID"
    }
  },

  exits: {
    success:{
      description: "Package successfully deleted"
    },
    packageNotFound:{
      description: "Package not found"
    }
  },


  fn: async function (inputs, exits) {
    const packageDeleted = await Package.destroy({id: inputs.id});
    return exits.success({
      message: "Package successfully deleted",
      packageDeleted
    })
  }
};
