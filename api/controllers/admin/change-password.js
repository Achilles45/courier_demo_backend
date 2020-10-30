module.exports = {

  friendlyName: 'Change password',

  description: '',

  inputs: {
    id:{
      type: "string",
      required: true,
      description: "A reference to the user\s ID"
    },
    oldPassword:{
      type: "string",
      required: true,
      description: "A reference to the old password"
    },
    newPassword:{
      type: "string",
      required: true,
      description: "A reference to the new password"
    },
    confirmPassword:{
      type: "string",
      required: true,
      description: "Checks if passwords matches"
    }
  },

  exits: {
    invalidPassword:{
      description: "Invalid password"
    },
    passwordDoNotMatch:{
      description: "New and confirm did not match"
    },
    noUser:{
      description: "User not found"
    }
  },


  fn: async function (inputs, exits) {
    //First find the user
    const admin = await Admin.findOne({id: inputs.id});
    if(!admin){
      return exits.noUser({message: "This user does not exist"})
    } else {
      //Now fetch his old password and check if the one he/she puts in matches
      await sails.helpers.passwords.checkPassword(inputs.oldPassword, admin.password)
      .intercept("incorrect", () =>{
        return exits.invalidPassword({message: "Password did not match the old one"})
      })
      //Now that passwords matches, replace the old one
      if(inputs.newPassword === inputs.confirmPassword){
        const updatedAdmin = await Admin.update({id: inputs.id}).set({
          password: inputs.newPassword
        }).fetch();
        return exits.success({
          message: "Password was successfully replaced",
          data: updatedAdmin
        })
      } else {
        return exits.passwordDoNotMatch({message: "New and confirm passwords did not match"})
      }
    }
  }
};
