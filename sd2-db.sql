CREATE TABLE Podcasters (
    Userid INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Bio VARCHAR(255),
    Password VARCHAR(255) NOT NULL,
    Gender VARCHAR(255) NOT NULL,
    Shows VARCHAR(255)
);
INSERT INTO Podcasters VALUES(1, 'Chris Kelly', 'chris.kelly@gmail.com', 'Deep dives into the world of gaming.', 'password123', 'Male', 'GameSphere');
INSERT INTO Podcasters VALUES(2, 'Sarah Smith', 'sarah.smith@gmail.com', 'Exploring the latest trends in technology.', 'sarah_password', 'Female', 'TechTalk');
INSERT INTO Podcasters VALUES(3, 'John Johnson', 'john.johnson@gmail.com', 'Bringing you the best in hip-hop culture.', 'johnny', 'Male', 'HipHopHour');
INSERT INTO Podcasters VALUES(4, 'Emily Wong', 'emily.wong@gmail.com', 'Discovering hidden gems in the world of cinema.', 'emily123', 'Female', 'CineFiles');
INSERT INTO Podcasters VALUES(5, 'Michael Brown', 'michael.brown@gmail.com', 'Discussing mindfulness and meditation techniques.', 'meditate321', 'Male', 'MindfulLiving');
INSERT INTO Podcasters VALUES(6, 'Jennifer Lee', 'jennifer.lee@gmail.com', 'Exploring the mysteries of the universe.', 'galaxygirl', 'Female', 'CosmicWonders');
INSERT INTO Podcasters VALUES(7, 'David Martinez', 'david.martinez@gmail.com', 'All things sports, from basketball to soccer.', 'sportsfan1', 'Male', 'SportZone');
INSERT INTO Podcasters VALUES(8, 'Emma Taylor', 'emma.taylor@gmail.com', 'Unveiling the secrets of successful entrepreneurship.', 'startup101', 'Female', 'StartupInsights');
INSERT INTO Podcasters VALUES(9, 'Alex Johnson', 'alex.johnson@gmail.com', 'Insights into the world of finance and investments.', 'financeguru', 'Male', 'MoneyMatters');
INSERT INTO Podcasters VALUES(10, 'Rachel Green', 'rachel.green@gmail.com', 'Your go-to source for healthy living tips.', 'healthylife', 'Female', 'HealthyHabits');
INSERT INTO Podcasters VALUES(11, 'Daniel Kim', 'daniel.kim@gmail.com', 'Exploring the art and science of cooking.', 'chefdaniel', 'Male', 'CulinaryCrafts');
INSERT INTO Podcasters VALUES(12, 'Michelle Rodriguez', 'michelle.rodriguez@gmail.com', 'Exploring the world of fashion and style.', 'fashionista', 'Female', 'StyleSpotlight');
INSERT INTO Podcasters VALUES(13, 'Ryan Thompson', 'ryan.thompson@gmail.com', 'Discussing the latest trends in automotive engineering.', 'autoenthusiast', 'Male', 'AutoTalk');
INSERT INTO Podcasters VALUES(14, 'Sophia White', 'sophia.white@gmail.com', 'Bringing you the best in classical music.', 'classicallover', 'Female', 'ClassicalEchoes');
INSERT INTO Podcasters VALUES(15, 'Jacob Brown', 'jacob.brown@gmail.com', 'Exploring the world of photography and visual arts.', 'shutterbug', 'Male', 'VisualVoyage');
INSERT INTO Podcasters VALUES(16, 'Olivia Clark', 'olivia.clark@gmail.com', 'All things related to health and fitness.', 'fitandhealthy', 'Female', 'FitnessFusion');
INSERT INTO Podcasters VALUES(17, 'Ethan Carter', 'ethan.carter@gmail.com', 'Bringing you the latest news and updates in the gaming world.', 'gamingnews', 'Male', 'GameNewsUpdate');
INSERT INTO Podcasters VALUES(18, 'Ava Martinez', 'ava.martinez@gmail.com', 'Discovering the world of literature and storytelling.', 'bookworm', 'Female', 'BookNook');
INSERT INTO Podcasters VALUES(19, 'Noah Thompson', 'noah.thompson@gmail.com', 'Exploring the wonders of nature and wildlife.', 'naturelover', 'Male', 'WildlifeWonders');
INSERT INTO Podcasters VALUES(20, 'Isabella Garcia', 'isabella.garcia@gmail.com', 'Your guide to exploring different cuisines from around the world.', 'foodieexplorer', 'Female', 'GlobalGastronomy');
INSERT INTO Podcasters VALUES(21, 'Mason Wilson', 'mason.wilson@gmail.com', 'All about the latest developments in technology and gadgets.', 'techgeek', 'Male', 'TechTrends');



CREATE TABLE Shows (
    Podcast_id INT AUTO_INCREMENT PRIMARY KEY,
    Podcaster_id INT,
    Title VARCHAR(255) NOT NULL,
    Description TEXT NOT NULL,
    Category VARCHAR(255) NOT NULL,
    CoverImageURL VARCHAR(255),
    ReleaseDate DATE NOT NULL,
    FOREIGN KEY (Podcaster_id) REFERENCES Podcasters(Userid)
);
INSERT INTO Shows VALUES(1, 1, 'GameSphere', 'Exploring the latest in the gaming industry.', 'Gaming', 'https://plus.unsplash.com/premium_photo-1682146695688-606d25bea0ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D', '2023-02-01');
INSERT INTO Shows VALUES(2, 2, 'TechTalk', 'Discussions on the latest technological advancements and innovations.', 'Technology', 'https://images.unsplash.com/photo-1581368087049-7034ed0d1e6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D', '2023-03-15');
INSERT INTO Shows VALUES(3, 3, 'HipHopHour', 'Bringing you the best in hip-hop music and culture.', 'Music', 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D');
INSERT INTO Shows VALUES(4, 4, 'CineFiles', 'Exploring classic and contemporary cinema masterpieces.', 'Movies', 'https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D', '2023-05-10');
INSERT INTO Shows VALUES(5, 5, 'MindfulLiving', 'Guidance on incorporating mindfulness into everyday life.', 'Health & Wellness', 'https://plus.unsplash.com/premium_photo-1682146695688-606d25bea0ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D', '2023-06-05');
INSERT INTO Shows VALUES(6, 6, 'CosmicWonders', 'Journeying through the mysteries of the cosmos and beyond.', 'Science', 'https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D', '2023-07-12');
INSERT INTO Shows VALUES(7, 7, 'SportZone', 'In-depth analysis and discussions on various sports events.', 'Sports', 'https://images.unsplash.com/photo-1581368087049-7034ed0d1e6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D', '2023-08-30');
INSERT INTO Shows VALUES(8, 8, 'StartupInsights', 'Insights and advice for aspiring entrepreneurs and startups.', 'Business', 'https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D', '2023-09-25');
INSERT INTO Shows VALUES(9, 9, 'MoneyMatters', 'Expert insights and tips on personal finance and investments.', 'Finance', 'https://plus.unsplash.com/premium_photo-1682146695688-606d25bea0ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D', '2023-10-18');
INSERT INTO Shows VALUES(10, 10, 'HealthyHabits', 'Tips and tricks for maintaining a healthy lifestyle.', 'Health & Wellness', 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D', '2023-11-08');
INSERT INTO Shows VALUES(11, 11, 'CulinaryCrafts', 'Exploring the artistry and science behind cooking and culinary delights.', 'Food & Cooking', 'https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D', '2023-12-22');
INSERT INTO Shows VALUES(12, 12, 'StyleSpotlight', 'Spotlighting the latest trends and styles in the fashion world.', 'Fashion', 'https://plus.unsplash.com/premium_photo-1682146695688-606d25bea0ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D', '2024-01-15');
INSERT INTO Shows VALUES(13, 13, 'AutoTalk', 'Discussions on the latest trends and developments in the automotive industry.', 'Automotive', 'https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D', '2024-02-28');
INSERT INTO Shows VALUES(14, 14, 'ClassicalEchoes', 'Bringing you timeless classical music masterpieces.', 'Music', 'https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D', '2024-03-10');
INSERT INTO Shows VALUES(15, 15, 'VisualVoyage', 'Exploring the world of visual arts and photography.', 'Art & Design', 'https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D', '2024-04-05');
INSERT INTO Shows VALUES(16, 16, 'FitnessFusion', 'Fusing various fitness disciplines for a holistic approach to health.', 'Health & Wellness', 'https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D', '2024-05-20');
INSERT INTO Shows VALUES(17, 17, 'GameNewsUpdate', 'Bringing you the latest news and updates from the gaming world.', 'Gaming', 'https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D', '2024-06-15');
INSERT INTO Shows VALUES(18, 18, 'BookNook', 'Exploring the world of literature and storytelling.', 'Books', 'https://images.unsplash.com/photo-1581368087049-7034ed0d1e6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D', '2024-07-08');
INSERT INTO Shows VALUES(19, 19, 'WildlifeWonders', 'Discovering the wonders of nature and wildlife.', 'Nature & Environment', 'https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D', '2024-08-12');
INSERT INTO Shows VALUES(20, 20, 'GlobalGastronomy', 'Embark on a culinary journey exploring cuisines from around the globe.', 'Food & Cooking', 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D', '2024-09-25');
INSERT INTO Shows VALUES(21, 21, 'TechTrends', 'Exploring the latest trends and innovations in the world of technology.', 'Technology', 'https://plus.unsplash.com/premium_photo-1682146695688-606d25bea0ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D', '2024-10-18');


CREATE TABLE Listeners (
    ListenerId INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Password varchar(255) NOT NULL,
    SignupDate DATE 
);



INSERT INTO Listeners VALUES(1, 'Jordan Rivers', 'jordan.rivers@gmail.com', '2023-02-04');
INSERT INTO Listeners VALUES(2, 'Casey Lee', 'casey.lee@gmail.com', '2023-02-05');
INSERT INTO Listeners VALUES(3, 'Alexis Taylor', 'alexis.taylor@gmail.com', '2023-02-06');
INSERT INTO Listeners VALUES(4, 'Michael Smith', 'michael.smith@gmail.com', '2023-02-07');
INSERT INTO Listeners VALUES(5, 'Emily Johnson', 'emily.johnson@gmail.com', '2023-02-08');
INSERT INTO Listeners VALUES(6, 'Ryan Brown', 'ryan.brown@gmail.com', '2023-02-09');
INSERT INTO Listeners VALUES(7, 'Jessica Martinez', 'jessica.martinez@gmail.com', '2023-02-10');
INSERT INTO Listeners VALUES(8, 'Daniel Wilson', 'daniel.wilson@gmail.com', '2023-02-11');
INSERT INTO Listeners VALUES(9, 'Sarah Anderson', 'sarah.anderson@gmail.com', '2023-02-12');
INSERT INTO Listeners VALUES(10, 'David Thompson', 'david.thompson@gmail.com', '2023-02-13');


CREATE TABLE Reviews (
    ReviewsId INT PRIMARY KEY,
    Podcast_id INT,
    ListenerId INT,
    Rating INT CHECK (Rating >= 1 AND Rating <= 5),
    Comment TEXT,
    ReviewDate DATE NOT NULL,
    FOREIGN KEY (Podcast_id) REFERENCES Shows(Podcast_id),
    FOREIGN KEY (ListenerId) REFERENCES Listeners(ListenerId)
);
INSERT INTO Reviews VALUES(1, 1, 1, 4, 'Really engaging content for gamers!', '2023-03-01');
INSERT INTO Reviews VALUES(2, 2, 2, 5, 'Insightful discussions on culinary topics!', '2023-03-02');
INSERT INTO Reviews VALUES(3, 3, 3, 5, 'Love the stories shared in this travel podcast!', '2023-03-03');
INSERT INTO Reviews VALUES(4, 1, 4, 3, 'Could use more variety in topics.', '2023-03-04');
INSERT INTO Reviews VALUES(5, 2, 5, 4, 'Great advice for amateur chefs!', '2023-03-05');
INSERT INTO Reviews VALUES(6, 3, 6, 5, 'Inspiring travel tales!', '2023-03-06');
INSERT INTO Reviews VALUES(7, 1, 7, 4, 'Always look forward to new episodes!', '2023-03-07');
INSERT INTO Reviews VALUES(8, 2, 8, 3, 'Content is good but audio quality could improve.', '2023-03-08');
INSERT INTO Reviews VALUES(9, 3, 9, 5, 'Makes me want to pack my bags and travel!', '2023-03-09');
INSERT INTO Reviews VALUES(10, 1, 10, 4, 'Informative and entertaining.', '2023-03-10');



CREATE TABLE Subscriptions (
    SubscriptionId INT PRIMARY KEY,
    ListenerId INT,
    PodcastId INT,
    SubscriptionDate DATE NOT NULL,
    FOREIGN KEY (ListenerId) REFERENCES Listeners(ListenerId),
    FOREIGN KEY (PodcastId) REFERENCES Shows(Podcast_id)
);
INSERT INTO Subscriptions VALUES(1, 1, 1, '2023-03-04');
INSERT INTO Subscriptions VALUES(2, 2, 2, '2023-03-05');
INSERT INTO Subscriptions VALUES(3, 3, 3, '2023-03-06');
INSERT INTO Subscriptions VALUES(4, 4, 1, '2023-03-07');
INSERT INTO Subscriptions VALUES(5, 5, 2, '2023-03-08');
INSERT INTO Subscriptions VALUES(6, 6, 3, '2023-03-09');
INSERT INTO Subscriptions VALUES(7, 7, 1, '2023-03-10');
INSERT INTO Subscriptions VALUES(8, 8, 2, '2023-03-11');
INSERT INTO Subscriptions VALUES(9, 9, 3, '2023-03-12');
INSERT INTO Subscriptions VALUES(10, 10, 1, '2023-03-13');
