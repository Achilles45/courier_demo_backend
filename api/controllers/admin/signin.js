module.exports = {

  friendlyName: 'Signin',

  description: 'Signin users.',

  inputs: {
    emailAddress:{
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      required: true,
      minLength: 5
    }
  },
  exits: {
    success:{
      description: "Everything went well"
    },
    userDoesNotExits:{
      description: "User with the email does not exist"
    },
    invalidCombo:{
      description: "Email or password does not exist"
    },
    badRequest:{
      description: "Bad request"
    },
    accountStatus:{
      description: "Blocked or Active"
    }
  },


  fn: async function (inputs, exits) {
    try {
      //First find the user first
      const admin = await Admin.findOne({emailAddress: inputs.emailAddress})
      if(!admin){
        return exits.userDoesNotExits({
          message: `Oops! No user with this email exists in our records`
        })
      }else{
        //Check if the user's account is active or blocked. If active, continue, else, throw error
        //Check if passwords matched the one created during registration
        await sails.helpers.passwords.checkPassword(inputs.password, admin.password)
        .intercept("incorrect", ()=>{
          return exits.invalidCombo({
            message: "Oops! Your password or email address does not match our records"
          })
        })

        //Set token
        const token = await sails.helpers.generateNewJwtToken(admin.emailAddress)

        //Set the user to login
        this.req.me = admin;

        //Return the user/investor data
        return exits.success({
          message: `Hey ${admin.fullName}, welcome back!`,
          data: admin,
          token
        })
      }
    } catch (error) {
      sails.log.error(error)
    }
  }
};
