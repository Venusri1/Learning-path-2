/**
 * Admin.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
 const bcrypt=require('bcrypt');
module.exports = {

  attributes: {
    email:{
      type:'string',
      required:true,
      unique:true
    },
    password:{
      type:'string',
      required:true,
    },
    token:{
      type:'ref'
    }

  },
  beforeCreate: (value, next) => {
    bcrypt.hash(value.password, 10, (err, hash) => 
    {
      if (err){
        throw new Error(err);
      }
      value.password = hash;
      next();
    })
  },

  datastore:'mongodb',

};

