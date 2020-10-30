/**
 * Package.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    receiversName:{
      type: "string",
      required: true,
      description: "A representation of the receiver\s name",
      example: "John Doe"
    },
    receiversEmail:{
      type: "string",
      required: true
    },
    totalItems:{
      type: "string",
      required: true,
      description: "The total numbers of items in the parcel",
      example: "40"
    },
    currentLocation:{
      type: "string",
      required: true,
      description: "The current location of the package",
      example: "Lagos"
    },
    insurance:{
      type: "string",
      required: true,
      description: "Whether or not the packages are insured",
      example: "Insured"
    },
    sendersName:{
      type: "string",
      required: true,
      description: "Name of the sender",
      example: "Jane Doe"
    },
    sendersAddress:{
      type: "string",
      required: true,
      description: "The address of the sender",
      example: "Enugu"
    },
    shipingDate:{
      type: "ref",
      required: true,
      description: "The day the shipment will begin",
      example: "10/10/2020"
    },
    shipingAddress:{
      type: "string",
      required: true,
      description: "The port where the shipment is to begin",
      example: "Lagos Port"
    },
    weight:{
      type: "string",
      required: true,
      description: "The total weight of the parcel",
      example: "40"
    },
    deliveryDate:{
      type: "ref",
      required: true,
      description: "The expected date of delivery",
      example: "20/10/2020"
    },
    status:{
      type: "string",
      required: true,
      description: "To show if the package is moving or not",
      example: "Moving"
    },
    comment:{
      type: "string",
      required: true,
      description: "Any comment by the creator",
      example: "40"
    },
  },

};

