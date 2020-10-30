/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
// const hbs = require('nodemailer-express-handlebars');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');
module.exports = {

  friendlyName: 'Send emails',

  description: 'The helper to send an email to users when thry sign up to our application',

  inputs: {
    options:{
      type: 'ref',
      required: true
    }
  },
  exits: {
    success: {
      description: 'All done.',
    },
  },

  fn: async function (inputs) {
    const mailgunAuth = {
      auth: {
        api_key: '75c466afe419d99dfed3f15d6011f2a2-0f472795-42608adf',
        domain: 'sandboxb42789cb134d4db4bb4ced6d33cb5597.mailgun.org'
      }
    };
    const transporter = nodemailer.createTransport(mg(mailgunAuth));
    //Template file to use
    const emailTemplateSource = fs.readFileSync(path.join(__dirname, '../../views/confirm.hbs'), 'utf8');

    const template = handlebars.compile(emailTemplateSource);

    const htmlToSend = template({message: 'You have succussfully created your account. Please do well to verify',
      confirm_text: 'Verify email'});

    try {
      let mailOptions = {
        from: 'jobfair <alert@jobfair.com>',
        ...inputs.options,
        subject: 'VERIFICATION OR ACTIVATION MAIL',
        html: htmlToSend
      };
      transporter.sendMail(mailOptions, (error, response) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Successfully sent email.');
        }
      });
    } catch (error) {
      sails.log(error);
      throw error;
    }
  }
};

