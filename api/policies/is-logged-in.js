/* eslint-disable linebreak-style */
/* eslint-disable callback-return */
module.exports = async function (req, res, proceed){
  try {
    await sails.helpers.verifyJwt(req)
    proceed()
  } catch (error) {
    res.status(401).json({error: error.message})
  }
}
