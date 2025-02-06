-- First create some users (assuming Users table exists)
INSERT INTO users (name) VALUES
('Alex'),
('Sam'),
('Jordan');

-- Create songlists
INSERT INTO songlists (user_id, title, created_at) VALUES
(1, 'Summer Vibes', '2024-03-01 14:30:00'),
(1, 'Workout Mix', '2024-03-05 09:15:00'),
(2, 'Chill Lofi Beats', '2024-03-10 20:45:00');

-- Create songs
INSERT INTO songs (songlist_id, title, artist, link_url, picture_url) VALUES
-- Songs for "Summer Vibes" (songlist_id=1)
(1, 'Sunset Dreams', 'Ocean Waves', 'https://youtu.be/summer1', 'https://example.com/pics/sunset.jpg'),
(1, 'Beach Party', 'The Sandcastles', 'https://youtu.be/summer2', 'https://example.com/pics/beach.jpg'),
(1, 'Tropical Escape', 'Palm Trees', 'https://youtu.be/summer3', 'https://example.com/pics/palm.jpg'),

-- Songs for "Workout Mix" (songlist_id=2)
(2, 'Power Up', 'Energy Crew', 'https://youtu.be/workout1', 'https://example.com/pics/gym.jpg'),
(2, 'Mountain Climber', 'Peak Performance', 'https://youtu.be/workout2', 'https://example.com/pics/mountain.jpg'),

-- Songs for "Chill Lofi Beats" (songlist_id=3)
(3, 'Rainy Café', 'Study Vibes', 'https://youtu.be/lofi1', 'https://example.com/pics/rain.jpg'),
(3, 'Midnight Coding', 'Digital Dreams', 'https://youtu.be/lofi2', 'https://example.com/pics/night.jpg');