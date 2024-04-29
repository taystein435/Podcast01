
const db = require('../services/db');
const bcrypt = require('bcryptjs');

class Podcaster {
    constructor(name, email, password, bio, gender,show) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.bio = bio;
        this.gender = gender;
        this.show = show;
    }

}

module.exports = Podcaster;