// models/shows.js

const db = require('../services/db');

class Shows {
    constructor(title, description, category, coverImageUrl, releaseDate, podcasterId) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.coverImageUrl = coverImageUrl;
        this.releaseDate = releaseDate;
        this.podcasterId = podcasterId;
    }

    async addShow() {
        try {
            const sql = "INSERT INTO Shows (Title, Description, Category, CoverImageURL, ReleaseDate, Podcaster_id) VALUES (?, ?, ?, ?, ?, ?)";
            await db.query(sql, [this.title, this.description, this.category, this.coverImageUrl, this.releaseDate, this.podcasterId]);
        } catch (error) {
            throw new Error("Error adding show to database");
        }
    }
    
    static async getShowById(id) {
        try {
            const sql = "SELECT * FROM Shows WHERE Podcast_id = ?";
            const result = await db.query(sql, [id]);
            return result.length > 0 ? result[0] : null;
        } catch (error) {
            throw new Error("Error retrieving show from database");
        }
    }
}

module.exports = Shows;
