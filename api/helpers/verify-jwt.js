const jwt = require("jsonwebtoken");
module.exports = {

  friendlyName: 'Verify jwt',

  description: 'Verifies a JWT Token for authenticated routes routes',

  inputs: {
    req:{
      type: "ref",
      required: true,
      description: "A representation of the incoming request",
      friendlyName: "Request"
    }
  },

  exits: {
    success: {
      description: 'All done.',
    },
    invalid:{
      description: "Invalid token or no authentication present"
    },
    noAuthHeaderFound:{
      description: "No authentication header found"
    },
    invalidAuthFormat:{
      description: "Invalid authentication format"
    }
  },

  fn: async function (inputs, exits) {
    try {
      var req = inputs.req;
      var token;
      //First check if there was auth header and authorization in the request
      if(req.headers && req.headers.authorization){
        const parts = req.headers.authorization.split(" ");
        // eslint-disable-next-line eqeqeq
        if(parts.length == 2){
          let scheme = parts[0]
          var credentials = parts[1];
          if(/^Bearer$/.test(scheme)){
            token = credentials;
          }
        } else {
          return exits.invalidAuthFormat({
            error: "Format is supposed to be Bearer: [token]"
          })
        }
      } else if(req.param("token")){
        token = req.param("token")
        delete req.query.token;
      } else {
        return exits.noAuthHeaderFound({
          error: "No authorization header found"
        })
      }

      await jwt.verify(token, "courier1234", async (error, payload) =>{
        if(error || !payload.sub){
          return exits.invalid({error: "Invalid"})
        } else {
          const admin = await Admin.findOne({emailAddress: payload.sub});
          if(admin){
            req.me = admin
            return exits.success(admin)
          }  else{
            return exits.invalid()
          }
        }
      })
    } catch (error) {
      sails.log.error(error)
    }
  }


};

