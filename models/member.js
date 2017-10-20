
let mong = require('mongoose');
let schema = mong.Schema;

let MemberModel = new schema({
    _id: { type: schema.Types.ObjectId },
    title: String,
    Name: String,
    Gender: Number,
    Age: Number,
    BG: Number,
    ContactNumber: String,
    Email: String,
    PersentAddress: String,
    State: String,
    City: String,
    PermanentAddress: String,
    LastDobated: Date
});

let _MemberModel = mong.model("Members", MemberModel);
module.exports = _MemberModel;