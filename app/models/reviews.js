const db = require('./../services/db');

class Review {
    id;
    podcastId;
    listenerId;
    rating;
    comment;
    reviewDate;

    constructor(id) {
        this.id = id;
    }
    
    async getReviewDetails() {
        if (!this.comment) {
            const sql = "SELECT * FROM Reviews WHERE ReviewsId = ?";
            const result = await db.query(sql, [this.id]);
            if (result.length > 0) {
                const review = result[0];
                this.podcastId = review.Podcast_id;
                this.listenerId = review.ListenerId;
                this.rating = review.Rating;
                this.comment = review.Comment;
                this.reviewDate = review.ReviewDate;
            }
        }
    }
}




module.exports = {
    Review,

};
