/*
  # Seed Initial Menu Categories and Items

  1. Categories
    - Soup
    - Noodles  
    - Bread & Bakery
    - Salads
    - Main Course
    - Drinks
    - Desserts

  2. Menu Items (14 items)
    - 7 soup items
    - 2 noodle dishes
    - 1 bread item
    - 1 salad
    - 1 main course
    - 1 drink
    - 1 dessert

  All items include images from Pexels, descriptions, prices, and nutritional info.
  RLS policies allow public (anon) users to view all categories and items.
*/

INSERT INTO categories (id, name, icon, display_order) VALUES 
('soup', 'Soup', 'Soup', 1),
('noodles', 'Noodles', 'Noodles', 2),
('bread', 'Bread & Bakery', 'Bread', 3),
('salads', 'Salads', 'Salads', 4),
('main-course', 'Main Course', 'Main', 5),
('drinks', 'Drinks', 'Drink', 6),
('desserts', 'Desserts', 'Dessert', 7)
ON CONFLICT (id) DO NOTHING;

INSERT INTO menu_items (id, name, description, price, image, category_id, sub_category, calories, volume, ingredients, available, quantity, rating) VALUES
('main-soup-1', 'Hungarian Soup', 'Traditional Hungarian soup with beef, vegetables and aromatic spices', 350, 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'soup', 320, '350ml', ARRAY['Beef', 'Carrot', 'Cabbage', 'Zikuni', 'French Beans', 'Garlic', 'Chili', 'Ginger', 'Salt', 'Oil'], true, 12, 4.8),
('main-soup-2', 'Carrot Soup', 'Creamy carrot soup with fresh vegetables', 300, 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'soup', 280, '300ml', ARRAY['Carrot', 'Onion', 'Celery', 'Leek', 'Green Beans', 'Salt', 'Oil'], true, 8, 4.6),
('main-soup-3', 'Tomato Soup', 'Classic tomato soup with fresh herbs', 280, 'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'soup', 250, '350ml', ARRAY['Tomato', 'Onion', 'Garlic', 'Basil', 'Salt', 'Oil'], true, 10, 4.5),
('main-soup-4', 'Pumpkin Soup', 'Smooth and creamy pumpkin soup', 250, 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'soup', 220, '350ml', ARRAY['Pumpkin', 'Onion', 'Celery', 'Leek', 'Salt', 'Oil'], true, 15, 4.7),
('main-soup-5', 'Minestrone Soup', 'Italian vegetable soup with pasta', 400, 'https://images.pexels.com/photos/2703468/pexels-photo-2703468.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'soup', 350, '400ml', ARRAY['Carrot', 'Onion', 'French Beans', 'Celery', 'Garlic', 'Cream', 'Zikuni', 'Leek', 'Salt', 'Oil'], true, 10, 4.6),
('main-soup-6', 'Chicken Cream Soup', 'Rich and creamy chicken soup', 500, 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'soup', 420, '400ml', ARRAY['Chicken', 'Butter', 'Flour', 'Cream', 'Oil', 'Salt', 'Sweet Pepper'], true, 8, 4.9),
('main-soup-7', 'Vegetable Soup', 'Healthy mixed vegetable soup', 250, 'https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&cs=tinysrgb&w=600', 'soup', 'soup', 200, '350ml', ARRAY['Carrot', 'French Beans', 'Leek', 'Onion', 'Zikuni', 'Celery', 'Potato', 'Sweet Pepper', 'Salt', 'Oil'], true, 12, 4.5),
('noodle-1', 'Pad Thai', 'Famous Thai stir-fried noodles with shrimp and peanuts', 450, 'https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'noodles', 380, '400g', ARRAY['Shrimp', 'Noodles', 'Peanuts', 'Lime', 'Garlic', 'Chili', 'Tamarind', 'Fish Sauce'], true, 14, 4.7),
('noodle-2', 'Ramen', 'Japanese ramen noodles in rich broth with toppings', 500, 'https://images.pexels.com/photos/3555857/pexels-photo-3555857.jpeg?auto=compress&cs=tinysrgb&w=600', 'noodles', 'noodles', 420, '450g', ARRAY['Noodles', 'Broth', 'Egg', 'Chicken', 'Green Onion', 'Garlic'], true, 10, 4.8),
('bread-1', 'Garlic Bread', 'Crispy bread with garlic butter', 200, 'https://images.pexels.com/photos/3621622/pexels-photo-3621622.jpeg?auto=compress&cs=tinysrgb&w=600', 'bread', 'bread', 280, '200g', ARRAY['Bread', 'Garlic', 'Butter', 'Parsley'], true, 20, 4.6),
('salad-1', 'Caesar Salad', 'Classic Caesar salad with croutons and parmesan', 350, 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600', 'salads', 'salads', 250, '300g', ARRAY['Romaine', 'Croutons', 'Parmesan', 'Anchovy', 'Lemon'], true, 12, 4.7),
('main-1', 'Grilled Chicken', 'Marinated grilled chicken breast', 600, 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600', 'main-course', 'main-course', 450, '250g', ARRAY['Chicken', 'Olive Oil', 'Lemon', 'Herbs', 'Garlic'], true, 8, 4.9),
('drink-1', 'Fresh Mango Juice', 'Freshly squeezed mango juice', 250, 'https://images.pexels.com/photos/3407881/pexels-photo-3407881.jpeg?auto=compress&cs=tinysrgb&w=600', 'drinks', 'juice', 180, '250ml', ARRAY['Mango', 'Water', 'Honey'], true, 25, 4.5),
('dessert-1', 'Chocolate Cake', 'Rich chocolate cake with ganache', 400, 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600', 'desserts', 'desserts', 380, '150g', ARRAY['Chocolate', 'Flour', 'Egg', 'Butter', 'Sugar'], true, 15, 4.8)
ON CONFLICT (id) DO NOTHING;