
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

    async addUser() {
        try {
            const hashedPassword = await bcrypt.hash(this.password, 10);
            const sql = "INSERT INTO Podcasters (Name, Email, Password, Bio, Gender, Shows) VALUES (?, ?, ?, ?, ?, ?)";
            console.log("Executing SQL query:", sql);
            await db.query(sql, [this.name, this.email, hashedPassword, this.bio, this.gender, this.show]);
        } catch (error) {
            console.error("Error adding user to database:", error);
            throw new Error("Error adding user to database");
        }
    }
    
    static async getUserByEmail(email) {
        try {
            const sql = "SELECT * FROM Podcasters WHERE Email = ?";
            const result = await db.query(sql, [email]);
            return result.length > 0 ? result[0] : null;
        } catch (error) {
            throw new Error("Error retrieving user from database");
        }
    }
}

module.exports = Podcaster;