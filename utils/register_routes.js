
'use strict';
function RegisterPath(app, express) {
    debugger;
    let registeration = require('../routes/v1/register')(app, express);
    app.use('/api/v1/registration_donate', registeration);
}

module.exports = RegisterPath;
