const db = require('../services/db');
const bcrypt = require('bcryptjs');

class Listener {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    async addUser() {
        try {

        } catch (error) {
        
        }
    }

    static async getUserByEmail(email) {
        try {

        } catch (error) {

        }
    }

    async authenticate(submittedPassword) {
        try {

        } catch (error) {
            
        }
    }
  async getIdFromEmail() {
    try {
 
    } catch (error) {
        
    }
}


}

module.exports = Listener;
