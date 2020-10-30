/**
 * Message.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    //Attributes for every message
    fullName:{
      type: "string",
      required: true,
      description: "Full name of the person making the request",
      example: "Paul Smith"
    },
    emailAddress:{
      type: "string",
      required: true,
      description: "Email address of the person making the request",
      example: "paulsmith@gmail.com"
    },
    phoneNumber:{
      type: "number",
      required: true,
      description: "Phone number of the person making the request",
      example: "09089098900"
    },
    message:{
      type: "string",
      required: true,
      description: "The main body or content of the message",
      example: "I have now received all orders now"
    }
  },

};

