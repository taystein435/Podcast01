CREATE DATABASE PodcastDB;
USE PodcastDB;


CREATE TABLE Podcasters (
    Userid INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Bio TEXT,
    Password VARCHAR(255) NOT NULL,
    Gender ENUM('Male', 'Female', 'Other') NOT NULL,
    ShowShows VARCHAR(255)
);


CREATE TABLE Shows (
    Podcast_id INT AUTO_INCREMENT PRIMARY KEY,
    Podcaster_id INT,
    Title VARCHAR(255) NOT NULL,
    Description TEXT NOT NULL,
    Category VARCHAR(255) NOT NULL,
    CoverImageURL VARCHAR(255),
    ReleaseDate DATE NOT NULL,
    FOREIGN KEY (Podcaster_id) REFERENCES Podcasters(Userid) ON DELETE CASCADE
);


CREATE TABLE Listeners (
    ListenerId INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    SignupDate DATE NOT NULL
);


CREATE TABLE Reviews (
    ReviewsId INT AUTO_INCREMENT PRIMARY KEY,
    Podcast_id INT,
    ListenerId INT,
    Rating INT CHECK (Rating >= 1 AND Rating <= 5),
    Comment TEXT,
    ReviewDate DATE NOT NULL,
    FOREIGN KEY (Podcast_id) REFERENCES Shows(Podcast_id) ON DELETE CASCADE,
    FOREIGN KEY (ListenerId) REFERENCES Listeners(ListenerId) ON DELETE CASCADE
);


CREATE TABLE Subscriptions (
    SubscriptionId INT AUTO_INCREMENT PRIMARY KEY,
    ListenerId INT,
    PodcastId INT,
    SubscriptionDate DATE NOT NULL,
    FOREIGN KEY (ListenerId) REFERENCES Listeners(ListenerId) ON DELETE CASCADE,
    FOREIGN KEY (PodcastId) REFERENCES Shows(Podcast_id) ON DELETE CASCADE
);
