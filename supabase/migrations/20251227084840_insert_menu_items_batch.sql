/*
  # Insert All Menu Items

  1. New Items
    - Adding all menu items across all categories
    - Items organized by category and subcategory
    - All prices in Birr currency

  2. Note
    - Prices include 10% service charge and 15% VAT
*/

-- SOUP items
INSERT INTO menu_items (id, name, description, price, image, category_id, sub_category, calories, volume, ingredients, available, quantity, rating) VALUES
('soup-hungarian-001', 'Hungarian Soup', 'Traditional Hungarian soup with beef, vegetables and aromatic spices', 350, 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'soup', 320, '350ml', ARRAY['Beef', 'Vegetables', 'Spices'], true, 12, 4.8),
('soup-carrot-002', 'Carrot Soup', 'Creamy carrot soup with fresh vegetables', 300, 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'soup', 280, '300ml', ARRAY['Carrot', 'Cream'], true, 8, 4.6),
('soup-tomato-003', 'Tomato Soup', 'Classic tomato soup with fresh herbs', 300, 'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'soup', 250, '350ml', ARRAY['Tomato', 'Herbs'], true, 10, 4.5),
('soup-pumpkin-004', 'Pumpkin Soup', 'Smooth and creamy pumpkin soup', 250, 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'soup', 220, '350ml', ARRAY['Pumpkin', 'Cream'], true, 15, 4.7),
('soup-minestrone-005', 'Minestrone Soup', 'Italian vegetable soup with pasta', 400, 'https://images.pexels.com/photos/2703468/pexels-photo-2703468.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'soup', 350, '400ml', ARRAY['Vegetables', 'Pasta'], true, 10, 4.6),
('soup-chicken-cream-006', 'Chicken Cream Soup', 'Rich and creamy chicken soup', 500, 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'soup', 420, '400ml', ARRAY['Chicken', 'Cream'], true, 8, 4.9),
('soup-vegetable-007', 'Vegetable Soup', 'Healthy mixed vegetable soup', 250, 'https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'soup', 200, '350ml', ARRAY['Mixed Vegetables'], true, 12, 4.5)
ON CONFLICT (id) DO UPDATE SET price = EXCLUDED.price;

-- SPAGHETTI items
INSERT INTO menu_items (id, name, description, price, image, category_id, sub_category, calories, volume, ingredients, available, quantity, rating) VALUES
('spaghetti-bolognese-001', 'Bolognese Sauce', 'Classic Italian spaghetti with rich meat sauce', 600, 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'spaghetti', 650, '400g', ARRAY['Spaghetti', 'Meat Sauce'], true, 20, 4.8),
('spaghetti-tomato-002', 'Tomato Sauce', 'Simple and fresh tomato spaghetti', 350, 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'spaghetti', 480, '350g', ARRAY['Spaghetti', 'Tomato'], true, 25, 4.5),
('spaghetti-mushroom-003', 'Mushroom Sauce', 'Creamy mushroom spaghetti', 600, 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'spaghetti', 580, '400g', ARRAY['Spaghetti', 'Mushroom', 'Cream'], true, 18, 4.7),
('spaghetti-carbonara-004', 'Carbonara', 'Rich and creamy carbonara with ham', 800, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'spaghetti', 720, '400g', ARRAY['Spaghetti', 'Eggs', 'Ham', 'Cheese'], true, 15, 4.9),
('spaghetti-vegetable-005', 'Spaghetti With Vegetable', 'Healthy vegetable spaghetti', 350, 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'spaghetti', 450, '350g', ARRAY['Spaghetti', 'Vegetables'], true, 20, 4.4),
('spaghetti-cooked-veg-006', 'Cooked Vegetable', 'Mixed cooked vegetables with herbs', 350, 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'spaghetti', 280, '300g', ARRAY['Mixed Vegetables'], true, 15, 4.3),
('spaghetti-ravioli-007', 'Ravioli', 'Homemade ravioli with spinach and cheese', 500, 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'spaghetti', 550, '350g', ARRAY['Ravioli', 'Spinach', 'Cheese'], true, 12, 4.8),
('spaghetti-tagliatelle-008', 'Tagliatelle', 'Fresh tagliatelle with beef and cream', 650, 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'spaghetti', 680, '400g', ARRAY['Tagliatelle', 'Beef', 'Cream'], true, 10, 4.7),
('spaghetti-lasagna-009', 'Lasagna Bolognese', 'Layered lasagna with rich bolognese', 900, 'https://images.pexels.com/photos/4079520/pexels-photo-4079520.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'spaghetti', 750, '450g', ARRAY['Lasagna', 'Meat Sauce', 'Cheese'], true, 8, 4.9)
ON CONFLICT (id) DO UPDATE SET price = EXCLUDED.price;

-- RICE items
INSERT INTO menu_items (id, name, description, price, image, category_id, sub_category, calories, volume, ingredients, available, quantity, rating) VALUES
('rice-bolognese-001', 'Bolognese Sauce', 'Rice with classic meat sauce', 600, 'https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'rice', 620, '400g', ARRAY['Rice', 'Meat Sauce'], true, 20, 4.7),
('rice-tomato-002', 'Tomato Sauce', 'Rice with fresh tomato sauce', 350, 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'rice', 450, '350g', ARRAY['Rice', 'Tomato'], true, 25, 4.4),
('rice-mushroom-003', 'Mushroom Sauce', 'Rice with creamy mushroom sauce', 600, 'https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'rice', 550, '400g', ARRAY['Rice', 'Mushroom', 'Cream'], true, 18, 4.6),
('rice-carbonara-004', 'Carbonara', 'Rice with carbonara sauce', 800, 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'rice', 690, '400g', ARRAY['Rice', 'Eggs', 'Ham'], true, 15, 4.8),
('rice-vegetable-005', 'Rice With Vegetable', 'Healthy rice with mixed vegetables', 350, 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'rice', 420, '350g', ARRAY['Rice', 'Vegetables'], true, 20, 4.3)
ON CONFLICT (id) DO UPDATE SET price = EXCLUDED.price;

-- TRADITIONAL DISH items
INSERT INTO menu_items (id, name, description, price, image, category_id, sub_category, calories, volume, ingredients, available, quantity, rating) VALUES
('traditional-quanta-001', 'Quanta Firfir', 'Traditional Ethiopian dish with dried meat', 550, 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'traditional', 580, '350g', ARRAY['Dried Meat', 'Injera'], true, 10, 4.8),
('traditional-tibs-002', 'Tibs Firfir', 'Spicy Ethiopian firfir with meat', 550, 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'traditional', 600, '350g', ARRAY['Meat', 'Injera', 'Spices'], true, 12, 4.7),
('traditional-bozena-003', 'Bozena Shiro', 'Traditional shiro with meat', 550, 'https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'traditional', 520, '350g', ARRAY['Chickpea Flour', 'Meat'], true, 15, 4.9),
('traditional-beef-fillet-004', 'Beef Fillet', 'Tender beef fillet Ethiopian style', 700, 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'traditional', 650, '300g', ARRAY['Beef Fillet', 'Spices'], true, 8, 4.9),
('traditional-tegabino-005', 'Tegabino Shiro', 'Traditional shiro in clay pot', 350, 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'traditional', 380, '300g', ARRAY['Chickpea Flour'], true, 20, 4.6),
('traditional-fasting-006', 'Fasting Firfir', 'Vegan firfir for fasting days', 350, 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'traditional', 320, '300g', ARRAY['Injera', 'Oil'], true, 18, 4.5)
ON CONFLICT (id) DO UPDATE SET price = EXCLUDED.price;

-- PIZZA items
INSERT INTO menu_items (id, name, description, price, image, category_id, sub_category, calories, volume, ingredients, available, quantity, rating) VALUES
('pizza-margarita-001', 'Margarita Pizza', 'Classic pizza with tomato and mozzarella', 650, 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600', 'rice', 'pizza', 720, '12 inch', ARRAY['Dough', 'Tomato', 'Mozzarella'], true, 15, 4.7),
('pizza-special-002', 'Special Pizza', 'House special with premium toppings', 900, 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=600', 'rice', 'pizza', 850, '12 inch', ARRAY['Dough', 'Premium Toppings'], true, 10, 4.9),
('pizza-chicken-003', 'Chicken Pizza', 'Grilled chicken with vegetables', 750, 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600', 'rice', 'pizza', 780, '12 inch', ARRAY['Dough', 'Chicken', 'Vegetables'], true, 12, 4.8),
('pizza-mushroom-004', 'Mushroom Pizza', 'Fresh mushrooms with cheese', 650, 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600', 'rice', 'pizza', 700, '12 inch', ARRAY['Dough', 'Mushroom', 'Cheese'], true, 15, 4.6),
('pizza-calzone-005', 'Calzone Pizza', 'Folded pizza with ham and cheese', 650, 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=600', 'rice', 'pizza', 750, '350g', ARRAY['Dough', 'Ham', 'Cheese'], true, 10, 4.7),
('pizza-oriental-006', 'Oriental Pizza', 'Pizza with eastern spices', 700, 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=600', 'rice', 'pizza', 760, '12 inch', ARRAY['Dough', 'Beef', 'Spices'], true, 12, 4.8),
('pizza-tuna-007', 'Tuna Pizza', 'Tuna with olives and onions', 800, 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600', 'rice', 'pizza', 720, '12 inch', ARRAY['Dough', 'Tuna', 'Olives'], true, 10, 4.7),
('pizza-vegetable-008', 'Vegetable Pizza', 'Fresh vegetables on pizza', 600, 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600', 'rice', 'pizza', 650, '12 inch', ARRAY['Dough', 'Vegetables'], true, 15, 4.5),
('pizza-fasting-009', 'Fasting Vegetable Pizza', 'Vegan pizza for fasting', 450, 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600', 'rice', 'pizza', 580, '12 inch', ARRAY['Dough', 'Vegetables'], true, 12, 4.4)
ON CONFLICT (id) DO UPDATE SET price = EXCLUDED.price;

-- BURGER items
INSERT INTO menu_items (id, name, description, price, image, category_id, sub_category, calories, volume, ingredients, available, quantity, rating) VALUES
('burger-special-001', 'Tewodros Special Burger', 'Signature burger with premium beef', 800, 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600', 'rice', 'burger', 850, '350g', ARRAY['Beef Patty', 'Bun', 'Special Sauce'], true, 12, 4.9),
('burger-beef-002', 'Beef Burger', 'Classic beef burger', 650, 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600', 'rice', 'burger', 750, '300g', ARRAY['Beef Patty', 'Bun'], true, 15, 4.7),
('burger-cheese-003', 'Beef With Cheese Burger', 'Cheeseburger with premium beef', 750, 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600', 'rice', 'burger', 820, '320g', ARRAY['Beef Patty', 'Cheese', 'Bun'], true, 15, 4.8)
ON CONFLICT (id) DO UPDATE SET price = EXCLUDED.price;

-- FISH items
INSERT INTO menu_items (id, name, description, price, image, category_id, sub_category, calories, volume, ingredients, available, quantity, rating) VALUES
('fish-grilled-perch-001', 'Grilled Nile Perch', 'Fresh Nile perch grilled to perfection', 650, 'https://images.pexels.com/photos/2374946/pexels-photo-2374946.jpeg?auto=compress&cs=tinysrgb&w=600', 'rice', 'fish', 520, '300g', ARRAY['Nile Perch', 'Herbs', 'Spices'], true, 8, 4.8),
('fish-fried-tilapia-002', 'Fried Fish Tilapia', 'Crispy fried tilapia', 550, 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=600', 'rice', 'fish', 480, '280g', ARRAY['Tilapia', 'Flour', 'Spices'], true, 10, 4.7),
('fish-goulash-003', 'Fish Goulash', 'Rich fish stew', 600, 'https://images.pexels.com/photos/2374946/pexels-photo-2374946.jpeg?auto=compress&cs=tinysrgb&w=600', 'rice', 'fish', 540, '350g', ARRAY['Fish', 'Tomato', 'Spices'], true, 8, 4.6)
ON CONFLICT (id) DO UPDATE SET price = EXCLUDED.price;

-- BEEF items
INSERT INTO menu_items (id, name, description, price, image, category_id, sub_category, calories, volume, ingredients, available, quantity, rating) VALUES
('beef-kife-001', 'Beef Kife', 'Traditional Ethiopian beef dish', 700, 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=600', 'rice', 'beef', 680, '300g', ARRAY['Beef', 'Berbere', 'Spices'], true, 10, 4.8),
('beef-steak-002', 'Saute Fillet Steak', 'Tender fillet steak sautéed', 700, 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600', 'rice', 'beef', 650, '280g', ARRAY['Beef Fillet', 'Butter', 'Herbs'], true, 8, 4.9),
('beef-gunpowder-003', 'Tewodros Gun Powder', 'Spicy signature beef dish', 700, 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=600', 'rice', 'beef', 720, '300g', ARRAY['Beef', 'Special Spices'], true, 8, 4.9)
ON CONFLICT (id) DO UPDATE SET price = EXCLUDED.price;

-- CHICKEN items
INSERT INTO menu_items (id, name, description, price, image, category_id, sub_category, calories, volume, ingredients, available, quantity, rating) VALUES
('chicken-grilled-001', 'Grilled Chicken', 'Juicy grilled chicken breast', 650, 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'chicken', 580, '300g', ARRAY['Chicken Breast', 'Herbs'], true, 12, 4.8),
('chicken-breast-002', 'Chicken Breast', 'Pan-seared chicken breast', 650, 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'chicken', 560, '280g', ARRAY['Chicken Breast', 'Butter'], true, 12, 4.7),
('chicken-stir-fry-003', 'Chicken Stir Fried', 'Stir-fried chicken with vegetables', 650, 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'chicken', 620, '320g', ARRAY['Chicken', 'Vegetables'], true, 10, 4.7),
('chicken-leg-004', 'Chicken Leg (3 pcs)', 'Three crispy chicken legs', 650, 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'chicken', 720, '350g', ARRAY['Chicken Legs', 'Spices'], true, 10, 4.8)
ON CONFLICT (id) DO UPDATE SET price = EXCLUDED.price;

-- SANDWICH items
INSERT INTO menu_items (id, name, description, price, image, category_id, sub_category, calories, volume, ingredients, available, quantity, rating) VALUES
('sandwich-club-001', 'Club Sandwich', 'Triple-decker club sandwich', 600, 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'sandwich', 650, '320g', ARRAY['Bread', 'Chicken', 'Bacon'], true, 15, 4.7),
('sandwich-chicken-002', 'Chicken Sandwich', 'Grilled chicken sandwich', 600, 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'sandwich', 580, '280g', ARRAY['Bread', 'Chicken'], true, 15, 4.6),
('sandwich-steak-003', 'Steak Sandwich', 'Tender steak sandwich', 700, 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'sandwich', 720, '320g', ARRAY['Bread', 'Steak'], true, 10, 4.8),
('sandwich-tuna-004', 'Tuna Sandwich', 'Fresh tuna sandwich', 600, 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'sandwich', 520, '280g', ARRAY['Bread', 'Tuna'], true, 12, 4.6),
('sandwich-vegetable-005', 'Vegetable Sandwich', 'Fresh vegetable sandwich', 350, 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'sandwich', 380, '250g', ARRAY['Bread', 'Vegetables'], true, 18, 4.4),
('sandwich-fries-006', 'French Fries', 'Crispy golden fries', 350, 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'sandwich', 450, '250g', ARRAY['Potatoes', 'Salt'], true, 20, 4.7)
ON CONFLICT (id) DO UPDATE SET price = EXCLUDED.price;

-- SALAD items
INSERT INTO menu_items (id, name, description, price, image, category_id, sub_category, calories, volume, ingredients, available, quantity, rating) VALUES
('salad-mixed-001', 'Mixed Salad', 'Fresh mixed green salad', 400, 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'salad', 180, '250g', ARRAY['Lettuce', 'Vegetables'], true, 20, 4.5),
('salad-chicken-002', 'Chicken Salad', 'Grilled chicken with greens', 450, 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'salad', 320, '300g', ARRAY['Chicken', 'Lettuce'], true, 15, 4.7),
('salad-tuna-003', 'Tuna Salad', 'Fresh tuna with vegetables', 525, 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'salad', 340, '300g', ARRAY['Tuna', 'Vegetables'], true, 12, 4.6),
('salad-beef-004', 'Roasted Beef Salad', 'Roasted beef with fresh greens', 525, 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'salad', 420, '320g', ARRAY['Beef', 'Lettuce'], true, 10, 4.8)
ON CONFLICT (id) DO UPDATE SET price = EXCLUDED.price;

-- BREAKFAST items
INSERT INTO menu_items (id, name, description, price, image, category_id, sub_category, calories, volume, ingredients, available, quantity, rating) VALUES
('breakfast-omelet-001', 'Plain Omelet', 'Classic plain omelet', 350, 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'breakfast', 280, '200g', ARRAY['Eggs', 'Butter'], true, 20, 4.5),
('breakfast-cheese-002', 'Cheese Omelet', 'Omelet with melted cheese', 500, 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'breakfast', 380, '220g', ARRAY['Eggs', 'Cheese'], true, 18, 4.7),
('breakfast-scrambled-003', 'Scrambled Egg', 'Fluffy scrambled eggs', 350, 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'breakfast', 260, '200g', ARRAY['Eggs', 'Milk'], true, 20, 4.6),
('breakfast-fasting-004', 'Fasting Firfir', 'Vegan breakfast firfir', 300, 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'breakfast', 320, '250g', ARRAY['Injera', 'Oil'], true, 15, 4.5),
('breakfast-toast-005', 'French Toast', 'Golden French toast', 400, 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'breakfast', 380, '200g', ARRAY['Bread', 'Eggs'], true, 15, 4.7),
('breakfast-pancake-006', 'Pancake', 'Fluffy pancakes with syrup', 400, 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'breakfast', 420, '220g', ARRAY['Flour', 'Eggs', 'Butter'], true, 15, 4.8),
('breakfast-porridge-007', 'Oats Porridge', 'Warm oats porridge', 300, 'https://images.pexels.com/photos/216951/pexels-photo-216951.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'breakfast', 280, '300ml', ARRAY['Oats', 'Milk'], true, 18, 4.5),
('breakfast-meat-008', 'Egg With Meat', 'Eggs with grilled meat', 560, 'https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'breakfast', 520, '280g', ARRAY['Eggs', 'Meat'], true, 12, 4.8),
('breakfast-chechebsa-009', 'Chechebsa', 'Traditional Ethiopian breakfast', 350, 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'breakfast', 380, '250g', ARRAY['Injera', 'Butter'], true, 15, 4.7)
ON CONFLICT (id) DO UPDATE SET price = EXCLUDED.price;

-- HOT DRINKS items
INSERT INTO menu_items (id, name, description, price, image, category_id, sub_category, calories, volume, ingredients, available, quantity, rating) VALUES
('hotdrink-milk-001', 'Milk', 'Fresh hot milk', 100, 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'hot-drinks', 150, '250ml', ARRAY['Milk'], true, 30, 4.5),
('hotdrink-tea-002', 'Tea', 'Classic black tea', 80, 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'hot-drinks', 20, '200ml', ARRAY['Tea'], true, 40, 4.4),
('hotdrink-flavour-003', 'Flavour Tea', 'Tea with natural flavors', 80, 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'hot-drinks', 25, '200ml', ARRAY['Tea', 'Flavoring'], true, 35, 4.5),
('hotdrink-coffee-004', 'Coffee', 'Ethiopian coffee', 90, 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'hot-drinks', 5, '120ml', ARRAY['Coffee'], true, 40, 4.8),
('hotdrink-coffee-milk-005', 'Coffee With Milk', 'Coffee with steamed milk', 100, 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'hot-drinks', 80, '180ml', ARRAY['Coffee', 'Milk'], true, 35, 4.7),
('hotdrink-tea-milk-006', 'Tea With Milk', 'Tea with fresh milk', 100, 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'hot-drinks', 90, '200ml', ARRAY['Tea', 'Milk'], true, 35, 4.6),
('hotdrink-macchiato-vegan-007', 'Fasting Macchiato', 'Vegan macchiato', 150, 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'hot-drinks', 60, '150ml', ARRAY['Coffee', 'Plant Milk'], true, 25, 4.5),
('hotdrink-macchiato-008', 'Macchiato', 'Ethiopian macchiato', 100, 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'hot-drinks', 90, '150ml', ARRAY['Coffee', 'Milk'], true, 30, 4.8),
('hotdrink-mint-tea-009', 'Mint Tea', 'Refreshing mint tea', 80, 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'hot-drinks', 15, '200ml', ARRAY['Mint', 'Water'], true, 30, 4.6),
('hotdrink-moringa-010', 'Moringa Tea', 'Healthy moringa tea', 80, 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'hot-drinks', 20, '200ml', ARRAY['Moringa', 'Water'], true, 25, 4.5),
('hotdrink-special-tea-011', 'Special Tea', 'Premium special tea blend', 200, 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'hot-drinks', 30, '250ml', ARRAY['Special Tea Blend'], true, 15, 4.8),
('hotdrink-spice-012', 'Spice', 'Spiced hot beverage', 90, 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'hot-drinks', 40, '180ml', ARRAY['Spices', 'Water'], true, 20, 4.4),
('hotdrink-latte-013', 'Caffelatte', 'Smooth caffè latte', 100, 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'hot-drinks', 120, '250ml', ARRAY['Espresso', 'Steamed Milk'], true, 30, 4.7),
('hotdrink-ginger-014', 'Ginger Tea', 'Warming ginger tea', 100, 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'hot-drinks', 25, '200ml', ARRAY['Ginger', 'Water'], true, 25, 4.6),
('hotdrink-lemon-015', 'Lemon Tea', 'Refreshing lemon tea', 80, 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'hot-drinks', 30, '200ml', ARRAY['Tea', 'Lemon'], true, 30, 4.5)
ON CONFLICT (id) DO UPDATE SET price = EXCLUDED.price;

-- JUICE items
INSERT INTO menu_items (id, name, description, price, image, category_id, sub_category, calories, volume, ingredients, available, quantity, rating) VALUES
('juice-papaya-001', 'Papaya Juice', 'Fresh papaya juice', 180, 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'juice', 140, '350ml', ARRAY['Papaya'], true, 15, 4.7),
('juice-watermelon-002', 'Watermelon Juice', 'Refreshing watermelon juice', 180, 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'juice', 120, '350ml', ARRAY['Watermelon'], true, 15, 4.6),
('juice-mixed-003', 'Mixed Juice', 'Blend of fresh fruits', 180, 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'juice', 160, '350ml', ARRAY['Mixed Fruits'], true, 15, 4.8)
ON CONFLICT (id) DO UPDATE SET price = EXCLUDED.price;

-- BEER items
INSERT INTO menu_items (id, name, description, price, image, category_id, sub_category, calories, volume, ingredients, available, quantity, rating) VALUES
('beer-st-george-001', 'St. George Beer', 'Premium Ethiopian beer', 110, 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'beer', 150, '330ml', ARRAY['Malt', 'Hops'], true, 50, 4.7),
('beer-habesha-002', 'Habesha Beer', 'Classic Ethiopian beer', 110, 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'beer', 150, '330ml', ARRAY['Malt', 'Hops'], true, 50, 4.6),
('beer-castle-003', 'Castle Beer', 'Refreshing lager', 120, 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'beer', 155, '330ml', ARRAY['Malt', 'Hops'], true, 40, 4.5),
('beer-harar-004', 'Harar Beer', 'Traditional Ethiopian beer', 110, 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'beer', 150, '330ml', ARRAY['Malt', 'Hops'], true, 45, 4.6),
('beer-dashen-005', 'Dashen Beer', 'Popular local beer', 110, 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'beer', 150, '330ml', ARRAY['Malt', 'Hops'], true, 50, 4.7),
('beer-waliya-006', 'Waliya Beer', 'Smooth Ethiopian beer', 110, 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'beer', 150, '330ml', ARRAY['Malt', 'Hops'], true, 45, 4.5),
('beer-nigus-007', 'Nigus', 'Premium local brew', 110, 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'beer', 150, '330ml', ARRAY['Malt', 'Hops'], true, 40, 4.6),
('beer-sofi-malt-008', 'Sofi Malt', 'Non-alcoholic malt beverage', 110, 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'beer', 140, '330ml', ARRAY['Malt'], true, 50, 4.4),
('beer-sinq-009', 'Sinq', 'Refreshing beer', 110, 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'beer', 150, '330ml', ARRAY['Malt', 'Hops'], true, 40, 4.5),
('beer-heineken-010', 'Heineken Beer', 'International premium beer', 135, 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'beer', 150, '330ml', ARRAY['Malt', 'Hops'], true, 30, 4.8),
('beer-big-bedele-011', 'Big Bedele', 'Large bottle beer', 140, 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'beer', 200, '500ml', ARRAY['Malt', 'Hops'], true, 35, 4.6)
ON CONFLICT (id) DO UPDATE SET price = EXCLUDED.price;

-- SOFT DRINK & WATER items
INSERT INTO menu_items (id, name, description, price, image, category_id, sub_category, calories, volume, ingredients, available, quantity, rating) VALUES
('softdrink-drinks-001', 'Soft Drinks', 'Assorted soft drinks', 70, 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'soft-drinks', 150, '330ml', ARRAY['Carbonated Water'], true, 50, 4.3),
('water-ambo-001', 'Ambo Water', 'Natural mineral water', 70, 'https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'mineral-water', 0, '500ml', ARRAY['Mineral Water'], true, 60, 4.6),
('water-big-002', 'Big Water 2L', 'Large bottle of water', 80, 'https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'mineral-water', 0, '2000ml', ARRAY['Water'], true, 40, 4.5),
('water-medium-003', 'Medium Water 1L', 'Medium bottle of water', 50, 'https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'mineral-water', 0, '1000ml', ARRAY['Water'], true, 50, 4.5),
('water-small-004', 'Small Water 1/2L', 'Small bottle of water', 40, 'https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=600', 'salad', 'mineral-water', 0, '500ml', ARRAY['Water'], true, 60, 4.5)
ON CONFLICT (id) DO UPDATE SET price = EXCLUDED.price;

-- WINE DRINKS items
INSERT INTO menu_items (id, name, description, price, image, category_id, sub_category, calories, volume, ingredients, available, quantity, rating) VALUES
('wine-accacia-white-001', 'Accacia White Bottle', 'Premium white wine', 1771, 'https://images.pexels.com/photos/2467/wine-glass-white.jpg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'wine', 120, '750ml', ARRAY['Grapes'], true, 10, 4.7),
('wine-accacia-rose-002', 'Accacia Rose Medium Sweet Red Bottle', 'Medium sweet rose wine', 1518, 'https://images.pexels.com/photos/2467/wine-glass-white.jpg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'wine', 125, '750ml', ARRAY['Grapes'], true, 10, 4.6),
('wine-accacia-glass-003', 'Accacia Glass', 'Single glass of Accacia wine', 300, 'https://images.pexels.com/photos/2467/wine-glass-white.jpg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'wine', 120, '150ml', ARRAY['Grapes'], true, 20, 4.7),
('wine-axumite-004', 'Axumite', 'Local Ethiopian wine', 950, 'https://images.pexels.com/photos/2467/wine-glass-white.jpg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'wine', 115, '750ml', ARRAY['Grapes'], true, 15, 4.5),
('wine-kemila-005', 'Kemila', 'Ethiopian red wine', 950, 'https://images.pexels.com/photos/2467/wine-glass-white.jpg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'wine', 120, '750ml', ARRAY['Grapes'], true, 15, 4.5)
ON CONFLICT (id) DO UPDATE SET price = EXCLUDED.price;

-- SPIRITS & RUM items
INSERT INTO menu_items (id, name, description, price, image, category_id, sub_category, calories, volume, ingredients, available, quantity, rating) VALUES
('spirits-black-label-bottle-001', 'Black Label Bottle', 'Premium scotch whisky bottle', 12000, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'spirits', 250, '750ml', ARRAY['Scotch Whisky'], true, 5, 4.9),
('spirits-black-label-half-002', 'Black Label 1/2 L', 'Premium scotch whisky 500ml', 11400, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'spirits', 250, '500ml', ARRAY['Scotch Whisky'], true, 8, 4.9),
('spirits-black-label-shot-003', 'Black Label Shot', 'Premium scotch whisky shot', 300, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'spirits', 250, '50ml', ARRAY['Scotch Whisky'], true, 20, 4.9),
('spirits-red-label-bottle-004', 'Red Label Bottle', 'Quality scotch whisky bottle', 6000, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'spirits', 250, '750ml', ARRAY['Scotch Whisky'], true, 8, 4.7),
('spirits-red-label-half-005', 'Red Label 1/2 L', 'Quality scotch whisky 500ml', 5700, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'spirits', 250, '500ml', ARRAY['Scotch Whisky'], true, 10, 4.7),
('spirits-red-label-shot-006', 'Red Label Shot', 'Quality scotch whisky shot', 285, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'spirits', 250, '50ml', ARRAY['Scotch Whisky'], true, 25, 4.7),
('spirits-gordon-bottle-007', 'Gordon Gin Bottle', 'Gordon Gin bottle', 10200, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'spirits', 250, '750ml', ARRAY['Gin'], true, 6, 4.8),
('spirits-gordon-half-008', 'Gordon Gin 1/2 L', 'Gordon Gin 500ml', 5100, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'spirits', 250, '500ml', ARRAY['Gin'], true, 8, 4.8),
('spirits-gordon-shot-009', 'Gordon Gin Shot', 'Gordon Gin shot', 255, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'spirits', 250, '50ml', ARRAY['Gin'], true, 30, 4.8),
('spirits-jack-bottle-010', 'Jack Daniel Bottle', 'Tennessee whiskey bottle', 9600, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'spirits', 250, '750ml', ARRAY['Tennessee Whiskey'], true, 6, 4.8),
('spirits-jack-half-011', 'Jack Daniel 1/2 L', 'Tennessee whiskey 500ml', 5000, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'spirits', 250, '500ml', ARRAY['Tennessee Whiskey'], true, 8, 4.8),
('spirits-jack-shot-012', 'Jack Daniel Shot', 'Tennessee whiskey shot', 250, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'spirits', 250, '50ml', ARRAY['Tennessee Whiskey'], true, 30, 4.8),
('spirits-vodka-bottle-013', 'Absolute Vodka Bottle', 'Premium Swedish vodka bottle', 8000, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'spirits', 230, '750ml', ARRAY['Vodka'], true, 8, 4.7),
('spirits-vodka-half-014', 'Absolute Vodka 1/2 L', 'Premium Swedish vodka 500ml', 4000, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'spirits', 230, '500ml', ARRAY['Vodka'], true, 10, 4.7),
('spirits-vodka-shot-015', 'Absolute Vodka Shot', 'Premium Swedish vodka shot', 218, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'spirits', 230, '50ml', ARRAY['Vodka'], true, 35, 4.7),
('spirits-stoli-bottle-016', 'Stolichnaya Bottle', 'Russian vodka bottle', 4800, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'spirits', 230, '750ml', ARRAY['Vodka'], true, 10, 4.6),
('spirits-stoli-half-017', 'Stolichnaya 1/2 L', 'Russian vodka 500ml', 2530, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'spirits', 230, '500ml', ARRAY['Vodka'], true, 12, 4.6),
('spirits-stoli-shot-018', 'Stolichnaya Shot', 'Russian vodka shot', 150, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'spirits', 230, '50ml', ARRAY['Vodka'], true, 40, 4.6),
('spirits-amarula-shot-019', 'Amarula Shot', 'Cream liqueur shot', 160, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'spirits', 280, '50ml', ARRAY['Cream Liqueur'], true, 30, 4.7),
('spirits-winter-palace-bottle-020', 'Winter Palace Bottle', 'Local spirit bottle', 3000, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'rum', 240, '750ml', ARRAY['Distilled Spirit'], true, 15, 4.4),
('spirits-winter-palace-half-021', 'Winter Palace 1/2 L', 'Local spirit 500ml', 1500, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'rum', 240, '500ml', ARRAY['Distilled Spirit'], true, 20, 4.4),
('spirits-winter-palace-shot-022', 'Winter Palace Shot', 'Local spirit shot', 150, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'rum', 240, '50ml', ARRAY['Distilled Spirit'], true, 40, 4.4),
('spirits-bacardi-white-shot-023', 'Bacardi White Rum Shot', 'White rum shot', 160, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'rum', 230, '50ml', ARRAY['White Rum'], true, 30, 4.6),
('spirits-bacardi-gold-shot-024', 'Bacardi Gold Rum Shot', 'Gold rum shot', 160, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'rum', 230, '50ml', ARRAY['Gold Rum'], true, 30, 4.6),
('spirits-campari-shot-025', 'Campari Gold Rum Shot', 'Campari aperitif shot', 160, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'rum', 120, '50ml', ARRAY['Campari'], true, 25, 4.5),
('spirits-melloti-shot-026', 'Melloti Liquor Shot', 'Sweet liqueur shot', 125, 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=600', 'sushi', 'rum', 150, '50ml', ARRAY['Liqueur'], true, 30, 4.4)
ON CONFLICT (id) DO UPDATE SET price = EXCLUDED.price;
