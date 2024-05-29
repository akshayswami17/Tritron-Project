INSERT INTO roles (r_name) VALUES
     ('Admin'),
     ('Seller'),
     ('Consumer'),
     ('Manager');


      INSERT INTO city (c_name) VALUES
    -> ('Mumbai'),
    -> ('Pune'),
    -> ('Nagpur'),
    -> ('Nashik'),
    -> ('Thane'),
    -> ('Aurangabad'),
    -> ('Kolhapur'),
    -> ('Solapur'),
    -> ('Amravati'),
    -> ('Jalgaon'),
    -> ('Nanded'),
    -> ('Sangli'),
    -> ('Akola'),
    -> ('Latur'),
    -> ('Dhule');

    


INSERT INTO area (area_name, pincode, city_id) VALUES 
('Andheri', 400053, 1), -- Assuming city_id 1 corresponds to Mumbai
('Bandra', 400050, 1),
('Colaba', 400005, 1),
('Dadar', 400014, 1),
('Koregaon Park', 411005, 2), -- Assuming city_id 2 corresponds to Pune
('Shivaji Nagar', 411006, 2),
('Kothrud', 411007, 2),
('Aundh', 411008, 2),
('Dharampeth', 440001, 3), -- Assuming city_id 3 corresponds to Nagpur
('Sitabuldi ', 440002, 3),
('Civil Lines', 440003, 3),
('Ramdaspeth', 440004, 3)
-- Add more areas as needed
;



INSERT INTO brand (brand_name) VALUES 
('Apple'),
('Samsung'),
('Sony'),
('LG'),
('Dell'),
('HP'),
('Lenovo'),
('Asus'),
('Panasonic'),
('Philips'),
('Microsoft'),
('Intel'),
('Bosch'),
('Whirlpool'),
('Canon'),
('Nikon'),
('Toshiba'),
('Acer'),
('Sharp'),
('JBL');

INSERT INTO category (category_name) VALUES 
('Smartphones'),
('Laptops'),
('Televisions'),
('Cameras'),
('Headphones'),
('Speakers'),
('Tablets'),
('Smartwatches'),
('Printers'),
('Monitors'),
('Gaming Consoles'),
('Refrigerators'),
('Washing Machines'),
('Microwave Ovens'),
('Air Conditioners'),
('Home Theaters'),
('Projectors'),
('Networking Devices'),
('Wearable Technology'),
('Drones');


INSERT INTO model (base_price, description, model_name, brand_id, category_id) VALUES
(699.99, 'Latest smartphone with high-end features', 'Galaxy S21', 1, 1), -- Samsung smartphone
(1299.99, 'High-performance laptop for professionals', 'MacBook Pro', 7, 2), -- Apple laptop
(499.99, 'Smart TV with 4K resolution', 'Bravia X90J', 11, 3), -- Sony television
(299.99, 'DSLR camera with 24.1 MP sensor', 'EOS Rebel T7', 6, 4), -- Canon camera
(199.99, 'Over-ear wireless headphones', 'QuietComfort 35', 4, 5), -- Bose headphones
(99.99, 'Portable Bluetooth speaker', 'SoundLink Micro', 4, 6), -- Bose speaker
(329.99, '10.4-inch tablet with S Pen', 'Galaxy Tab S6 Lite', 1, 7), -- Samsung tablet
(399.99, 'Advanced fitness and health smartwatch', 'Apple Watch Series 6', 7, 8), -- Apple smartwatch
(159.99, 'All-in-one inkjet printer', 'OfficeJet Pro 9025', 8, 9), -- HP printer
(249.99, 'Full HD computer monitor', 'UltraSharp U2415', 3, 10), -- Dell monitor
(499.99, 'Next-gen gaming console', 'PlayStation 5', 11, 11), -- Sony gaming console
(1799.99, 'Side-by-side refrigerator with smart features', 'Smart Refrigerator', 5, 12), -- LG refrigerator
(649.99, 'Front-loading washing machine', 'EcoBubble', 1, 13), -- Samsung washing machine
(299.99, 'Convection microwave oven', 'Quick Touch', 15, 14), -- Breville microwave oven
(999.99, 'Split air conditioner with inverter technology', 'CoolPro Inverter', 16, 15), -- Daikin air conditioner
(799.99, 'Home theater system with 5.1 surround sound', 'SoundStage 5.1', 2, 16), -- Bose home theater
(899.99, '4K UHD projector for home cinema', 'Home Cinema 3200', 12, 17), -- Epson projector
(199.99, 'High-speed wireless router', 'Nighthawk AX12', 14, 18), -- Netgear networking device
(149.99, 'Smart fitness band with heart rate monitor', 'Fitbit Charge 4', 9, 19), -- Fitbit wearable technology
(499.99, 'Advanced drone with 4K camera', 'Mavic Air 2', 10, 20); -- DJI drone


INSERT INTO model (base_price, description, model_name, brand_id, category_id) VALUES
(299.99, 'Portable air purifier with HEPA filter', 'PureCool Me', 13, 21), -- Dyson air purifier
(349.99, 'Smart thermostat with voice control', 'Nest Learning Thermostat', 17, 22), -- Google smart home
(199.99, 'Wireless earbuds with noise cancellation', 'AirPods Pro', 7, 23), -- Apple wireless earbuds
(499.99, 'Professional DSLR camera with 4K video', 'Alpha a7 III', 11, 4), -- Sony camera
(99.99, 'Smart speaker with Alexa', 'Echo Dot', 17, 24), -- Amazon smart speaker
(159.99, 'Robotic vacuum cleaner with mapping', 'Roomba 675', 18, 25), -- iRobot vacuum cleaner
(129.99, 'Smart doorbell with HD video', 'Ring Video Doorbell 3', 17, 26), -- Amazon smart doorbell
(199.99, 'Compact coffee maker with programmable features', 'K-Elite', 19, 27), -- Keurig coffee maker
(89.99, 'Smart light bulb starter kit', 'Hue White and Color', 20, 28), -- Philips smart lighting
(99.99, 'Electric toothbrush with Bluetooth connectivity', 'Oral-B Genius X', 21, 29), -- Oral-B personal care
(199.99, 'Electric pressure cooker with multiple functions', 'Instant Pot Duo Evo Plus', 22, 30), -- Instant Pot kitchen appliance
(299.99, 'Outdoor security camera with night vision', 'Arlo Pro 3', 23, 31), -- Arlo security
(149.99, 'Smart digital picture frame', 'Nixplay Seed Wave', 24, 32), -- Nixplay smart frame
(179.99, 'Smart lock with keyless entry', 'August Smart Lock Pro', 25, 33), -- August smart lock
(149.99, 'Smart irrigation system', 'Rachio 3', 26, 34), -- Rachio smart garden
(199.99, 'Smart garage door opener', 'myQ Smart Garage Hub', 27, 35), -- Chamberlain garage
(99.99, 'Portable SSD with USB-C', 'T7 Touch', 1, 36), -- Samsung storage
(299.99, 'Home security starter kit', 'SimpliSafe 5 Piece', 28, 37), -- SimpliSafe security
(249.99, 'Noise-canceling over-ear headphones', 'WH-1000XM4', 11, 5), -- Sony headphones
(399.99, 'Smartwatch with fitness tracking', 'Galaxy Watch 3', 1, 8), -- Samsung smartwatch
(249.99, 'Smart ceiling fan with LED light', 'Haiku L Series', 29, 38), -- Big Ass Fans smart home
(199.99, '4K streaming media player', 'Roku Ultra', 30, 39), -- Roku streaming device
(179.99, 'Cordless stick vacuum', 'V8 Absolute', 13, 40), -- Dyson vacuum cleaner
(299.99, 'Smart refrigerator with Family Hub', 'Family Hub 4.0', 1, 12), -- Samsung refrigerator
(999.99, 'Electric scooter with long-range battery', 'Xiaomi Mi Electric Scooter Pro 2', 31, 41), -- Xiaomi electric scooter
(79.99, 'Bluetooth portable speaker', 'Flip 5', 32, 6), -- JBL speaker
(199.99, 'Smart baby monitor', 'Nanit Plus', 33, 42), -- Nanit baby monitor
(399.99, 'Mirrorless camera with 4K video', 'EOS M50', 6, 4), -- Canon camera
(119.99, 'Smart thermostat with app control', 'ecobee3 Lite', 34, 22), -- ecobee smart home
(229.99, 'Smart sprinkler controller', 'Orbit B-hyve', 35, 34), -- Orbit smart garden
(59.99, 'Smart LED strip lights', 'Govee LED Strip', 36, 28), -- Govee smart lighting
(249.99, 'Smart pet feeder with HD camera', 'Petnet SmartFeeder', 37, 43), -- Petnet pet tech
(99.99, 'Smart irrigation controller', 'Spruce Smart Watering System', 38, 34), -- Spruce smart garden
(349.99, 'Smart garage door controller', 'Garadget', 39, 35), -- Garadget smart home
(79.99, 'Bluetooth fitness tracker', 'Amazfit Bip U', 31, 19), -- Xiaomi wearable technology
(399.99, 'Smart indoor garden', 'AeroGarden Harvest Elite', 40, 44), -- AeroGarden smart garden
(59.99, 'Smart plug with energy monitoring', 'HS110', 41, 45), -- TP-Link smart home
(199.99, 'Smart video doorbell with HD camera', 'Eufy Security Video Doorbell', 42, 26), -- Eufy smart doorbell
(149.99, 'Smart ceiling fan with remote control', 'Minka-Aire Light Wave', 43, 38), -- Minka-Aire smart home
(249.99, 'Wireless gaming headset', 'Razer Nari Ultimate', 44, 46); -- Razer gaming accessory



INSERT INTO product (discounted_price, model_id, seller_id) VALUES
(279.99, 1, 1),  -- Samsung TV by Seller 1
(129.99, 2, 2),  -- Nike Shoes by Seller 2
(1119.99, 3, 3), -- Apple MacBook Pro by Seller 3
(1619.99, 4, 4), -- LG Refrigerator by Seller 4
(269.99, 5, 1),  -- Dyson Air Purifier by Seller 1
(319.99, 6, 2),  -- Google Thermostat by Seller 2
(179.99, 7, 3),  -- Apple AirPods Pro by Seller 3
(479.99, 8, 4),  -- Sony Camera by Seller 4
(79.99, 9, 1),   -- Amazon Echo Dot by Seller 1
(139.99, 10, 2), -- iRobot Vacuum Cleaner by Seller 2
(119.99, 11, 3), -- Amazon Ring Doorbell by Seller 3
(179.99, 12, 4), -- Keurig Coffee Maker by Seller 4
(69.99, 13, 1),  -- Philips Hue Lights by Seller 1
(89.99, 14, 2),  -- Oral-B Electric Toothbrush by Seller 2
(179.99, 15, 3), -- Instant Pot by Seller 3
(279.99, 16, 4), -- Arlo Security Camera by Seller 4
(129.99, 17, 1), -- Nixplay Digital Frame by Seller 1
(159.99, 18, 2), -- August Smart Lock by Seller 2
(129.99, 19, 3), -- Rachio Smart Irrigation by Seller 3
(179.99, 20, 4), -- Chamberlain Garage Opener by Seller 4
(89.99, 21, 1),  -- Samsung Portable SSD by Seller 1
(279.99, 22, 2), -- SimpliSafe Security Kit by Seller 2
(219.99, 23, 3), -- Sony Noise-Canceling Headphones by Seller 3
(349.99, 24, 4), -- Samsung Galaxy Watch by Seller 4
(219.99, 25, 1), -- Big Ass Fans Ceiling Fan by Seller 1
(179.99, 26, 2), -- Roku Streaming Player by Seller 2
(159.99, 27, 3), -- Dyson Stick Vacuum by Seller 3
(279.99, 28, 4), -- Samsung Smart Refrigerator by Seller 4
(899.99, 29, 1), -- Xiaomi Electric Scooter by Seller 1
(69.99, 30, 2),  -- JBL Bluetooth Speaker by Seller 2
(179.99, 31, 3), -- Nanit Baby Monitor by Seller 3
(369.99, 32, 4), -- Canon Mirrorless Camera by Seller 4
(99.99, 33, 1),  -- ecobee Smart Thermostat by Seller 1
(199.99, 34, 2), -- Orbit Smart Sprinkler by Seller 2
(49.99, 35, 3),  -- Govee LED Strip Lights by Seller 3
(229.99, 36, 4), -- Petnet Smart Feeder by Seller 4
(89.99, 37, 1),  -- Spruce Smart Irrigation by Seller 1
(339.99, 38, 2), -- Garadget Smart Garage by Seller 2
(59.99, 39, 3),  -- Xiaomi Fitness Tracker by Seller 3
(349.99, 40, 4), -- AeroGarden Smart Garden by Seller 4
(49.99, 41, 1),  -- TP-Link Smart Plug by Seller 1
(179.99, 42, 2), -- Eufy Security Doorbell by Seller 2
(129.99, 43, 3), -- Minka-Aire Smart Ceiling Fan by Seller 3
(229.99, 44, 4); -- Razer Gaming Headset by Seller 4


INSERT INTO product (discounted_price, model_id, seller_id) 
VALUES 
(499.99, 1, 1),
(599.99, 2, 2),
(699.99, 3, 3),
(799.99, 4, 4);

INSERT INTO orders (date_of_order, consumer_id, product_id)
VALUES 
('2024-05-16', 1, 45),
('2024-05-17', 2, 46),
('2024-05-18', 3, 47),
('2024-05-19', 4, 48);


