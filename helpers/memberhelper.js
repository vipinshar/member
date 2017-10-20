
let member = require('../models/member');
let ObjectId = require('mongodb').ObjectID;
let _mongoose = require('mongoose');
let Promise = require("bluebird");
_mongoose.Promise = require('bluebird');

let register = {
    SaveData: function (model) {
        return new Promise((resolve, reject) => {
            debugger;
            let member_model = new member({
                _id: new ObjectId,
                title: model.title,
                Name: model.Name,
                Gender: model.Gender,
                Age: model.Age,
                BG: model.BloodGroup,
                ContactNumber: model.ContactNumber,
                Email: model.Email,
                PersentAddress: model.PersentAddress,
                State: model.State,
                City: model.City,
                PermanentAddress: model.PermanentAddress,
                LastDobated: model.Date
            });
            member_model.save((err,result)=>{
                if (err) {
                    reject(err)
                }
                else {
                    resolve(result);
                }
            });
        });
    }
};

module.exports=register;