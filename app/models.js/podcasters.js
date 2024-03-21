const db = require('./../services/db');

class Podcaster {
    id;
    name;
    email;
    bio;
    password;
    gender;
    shows;

    constructor(id) {
        this.id = id;
    }
    
    async getPodcasterDetails() {
        if (!this.name) {
            const sql = "SELECT * FROM Podcasters WHERE Userid = ?";
            const result = await db.query(sql, [this.id]);
            if (result.length > 0) {
                const podcaster = result[0];
                this.name = podcaster.Name;
                this.email = podcaster.Email;
                this.bio = podcaster.Bio;
                this.password = podcaster.Password;
                this.gender = podcaster.Gender;
                this.shows = podcaster.Shows;
            }
        }
    }
}




module.exports = {
    Podcaster,
    
};
