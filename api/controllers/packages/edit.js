module.exports = {

  friendlyName: 'Edit',

  description: 'Edit packages.',

  inputs: {
    id:{
      type: "string",
      required: true,
      description: "A reference of the package ID"
    },
    receiversName:{
      type: "string",
    },
    totalItems:{
      type: "string",
    },
    currentLocation:{
      type: "string",
    },
    insurance:{
      type: "string",
    },
    sendersName:{
      type: "string",
    },
    sendersAddress:{
      type: "string",
    },
    shipingDate:{
      type: "ref",
    },
    shipingAddress:{
      type: "string",
    },
    weight:{
      type: "string",
    },
    deliveryDate:{
      type: "ref",
    },
    status:{
      type: "string"
    },
    comment:{
      type: "string"
    },
  },

  exits: {
    success:{
      description: "Everything went well"
    },
    packageNotFound:{
      description: "Package found"
    }
  },


  fn: async function (inputs, exits) {
    const packageEdited = await Package.update({id: inputs.id}).set({
      receiversName: inputs.receiversName,
      totalItems: inputs.totalItems,
      currentLocation: inputs.currentLocation,
      insurance: inputs.insurance,
      sendersName: inputs.sendersName,
      sendersAddress: inputs.sendersAddress,
      shipingDate: inputs.shipingDate,
      shipingAddress: inputs.shipingAddress,
      weight: inputs.weight,
      deliveryDate: inputs.deliveryDate,
      status: inputs.status,
      comment: inputs.comment
    }).fetch();
    return exits.success({
      message: "Package successfully edited",
      data: packageEdited
    })
  }
};
