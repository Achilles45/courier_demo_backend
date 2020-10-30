/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  "GET /" : "home",
  "POST /signup" : "admin/signup",
  "POST /signin" : "admin/signin",
  "POST /package/new" : "packages/new",
  "POST /package/edit/:id" : "packages/edit",
  "DELETE /package/delete/:id" : "packages/delete",
  "GET /package/:id" : "packages/view",
  "GET /packages" : "packages/all",

  "POST /messages/create" : "messages/create",
  "GET /messages/" : "messages/all",
  "GET /messages/:id" : "messages/view",
  "DELETE /messages/delete/:id" : "messages/delete",

  "POST /password-reset/:id" : "admin/change-password",
};
