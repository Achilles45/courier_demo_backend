module.exports = {

  friendlyName: 'New',

  description: 'New packages.',

  inputs: {
    receiversName:{
      type: "string",
      required: true,
    },
    totalItems:{
      type: "string",
      required: true,
    },
    currentLocation:{
      type: "string",
      required: true,
    },
    insurance:{
      type: "string",
      required: true,
    },
    sendersName:{
      type: "string",
      required: true,
    },
    sendersAddress:{
      type: "string",
      required: true,
    },
    shipingDate:{
      type: "ref",
      required: true,
    },
    shipingAddress:{
      type: "string",
      required: true,
    },
    weight:{
      type: "string",
      required: true,
    },
    deliveryDate:{
      type: "ref",
      required: true,
    },
    status:{
      type: "string",
      required: true,
    },
    comment:{
      type: "string",
      required: true,
    },
  },

  exits: {
    success:{
      description: "Everything went well"
    }
  },

  fn: async function (inputs, exits) {
    try {
      const newPackage = await Package.create({
        id: sails.helpers.getUuid(),
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
        comment: inputs.comment,
        status: inputs.status
      }).fetch();
      return exits.success({
        message: "Package successfully created",
        data: newPackage
      })
    } catch (error) {
      sails.log.error(error)
    }
  }
};
