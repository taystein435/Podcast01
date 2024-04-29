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
            const hashedPassword = await bcrypt.hash(this.password, 10);
            const signupDate = new Date().toISOString().slice(0, 10);
            const sql = "INSERT INTO Listeners (Name, Email, Password, SignupDate) VALUES (?, ?, ?, ?)";
            await db.query(sql, [this.name, this.email, hashedPassword, signupDate]);
        } catch (error) {
            throw new Error("Error adding user to database");
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
