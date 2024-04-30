
const db = require('./../services/db');

class Subscription {
    id;
    listenerId;
    podcastId;
    subscriptionDate;

    constructor(id) {
        this.id = id;
    }
    
    async getSubscriptionDetails() {
        if (!this.subscriptionDate) {
            const sql = "SELECT * FROM Subscriptions WHERE SubscriptionId = ?";
            const result = await db.query(sql, [this.id]);
            if (result.length > 0) {
                const subscription = result[0];
                this.listenerId = subscription.ListenerId;
                this.podcastId = subscription.PodcastId;
                this.subscriptionDate = subscription.SubscriptionDate;
            }
        }
    }
}


module.exports = {
    Subscription,
};
