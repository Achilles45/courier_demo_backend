/**
 * Admin.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    fullName:{
      required: true,
      type: "string",
      description: "Full name of the admin",
      example: "Paul Okoye"
    },
    emailAddress:{
      required: true,
      type: "string",
      unique: true,
      isEmail: true,
      description: "Representation of the admin\s email address",
      example: "paul@gmail.com"
    },
    password:{
      type: "string",
      required: true,
      protect: true,
      description: "A representation of the hashed password for the admin",
      example: "akadnmf4iuu934asdf44"
    }
  },
  //Do not return password when returning the details of the admin
  customToJSON:function(){
    return _.omit(this, ["password"]);
  },
  //Hash the password before creating the user
  beforeCreate: function(values, proceed){
    sails.helpers.passwords.hashPassword(values.password)
    // eslint-disable-next-line handle-callback-err
    .exec((err, hashedPassword) =>{
      values.password = hashedPassword;
      return proceed();
    })
  }
};

