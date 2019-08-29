const bcrypt = require('bcrypt');

module.exports = (password) => {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);

    return hash;
}