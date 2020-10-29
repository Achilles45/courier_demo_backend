module.exports = {

  friendlyName: 'All',

  description: 'All packages.',

  inputs: {},


  exits: {
    noPackages:{
      description: "No packages found"
    },
    success:{
      description: "Packages found"
    }
  },


  fn: async function (_, exits) {
    const allPackages = await Package.find({});
    if(!allPackages){
      return exits.noPackages({message: "No package was found"})
    } else{
      return exits.success({
        message: "Package(s) found",
        data: allPackages
      })
    }
  }
};
