const db = require('./../services/db');

class Listener {
    id;
    name;
    email;
    signupDate;

    constructor(id) {
        this.id = id;
    }
    
    async getListenerDetails() {
        if (!this.name) {
            const sql = "SELECT * FROM Listeners WHERE ListenerId = ?";
            const result = await db.query(sql, [this.id]);
            if (result.length > 0) {
                const listener = result[0];
                this.name = listener.Name;
                this.email = listener.Email;
                this.signupDate = listener.SignupDate;
            }
        }
    }
}




module.exports = {
    Listener,
    
};
