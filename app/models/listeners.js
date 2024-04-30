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
            const sql = "SELECT * FROM Listeners WHERE Email = ?";
            const result = await db.query(sql, [email]);
            return result.length > 0 ? new Listener(result[0].Name, result[0].Email, result[0].Password) : null;
        } catch (error) {
            throw new Error("Error retrieving user from database");
        }
    }

    async authenticate(submittedPassword) {
        try {
            // Compare submitted password with stored hashed password
            const match = await bcrypt.compare(submittedPassword, this.password);
            return match;
        } catch (error) {
            throw new Error("Error authenticating user");
        }
    }
  async getIdFromEmail() {
    try {
        // Check if the submitted email exists in the database
        const sql = "SELECT  Name FROM Listeners WHERE Email = ?";
        const result = await db.query(sql, [this.email]);
        if (result.length > 0) {
            this.id = result[0].Name;
            return this.id;
        } else {
            return null;
        }
    } catch (error) {
        throw new Error("Error retrieving user ID from database: " + error.message);
    }
}


}

module.exports = Listener;
