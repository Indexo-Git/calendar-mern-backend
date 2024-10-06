const moment = require('moment');

// Custom date express-validator

const isDate = (value) => {

    if (!value) {
        return false;
    }

    const date = moment(value);

    if (date.isValid()) {
        return true;
    }
    return false;
}

module.exports = {
    isDate
}