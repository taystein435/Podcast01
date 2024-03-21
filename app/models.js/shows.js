const express = require("express");
const db = require('./../services/db');

class Show {
    id;
    podcasterId;
    title;
    description;
    category;
    coverImageUrl;
    releaseDate;

    constructor(id) {
        this.id = id;
    }
    
    async getShowDetails() {
        if (!this.title) {
            const sql = "SELECT * FROM Shows WHERE Podcast_id = ?";
            const result = await db.query(sql, [this.id]);
            if (result.length > 0) {
                const show = result[0];
                this.podcasterId = show.Podcaster_id;
                this.title = show.Title;
                this.description = show.Description;
                this.category = show.Category;
                this.coverImageUrl = show.CoverImageURL;
                this.releaseDate = show.ReleaseDate;
            }
        }
    }
}

module.exports = {
    Show,
    
};
