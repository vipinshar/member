let member = require('../../helpers/memberhelper');
module.exports = function (app, express) {
    debugger;
    let router = express.Router();

    router.post('/save', (req, res) => {
        console.log('POST Request');
        member.SaveData(req.body).then(resp => {
            debugger;
        }).catch(error => {
            console.log(error);
        });
    });
    return router;
}