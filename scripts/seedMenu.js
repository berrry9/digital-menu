#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read environment variables
const envPath = join(__dirname, '../.env');
let supabaseUrl, supabaseKey;

try {
  const envContent = readFileSync(envPath, 'utf8');
  const envVars = {};
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length) {
      envVars[key.trim()] = valueParts.join('=').trim();
    }
  });

  supabaseUrl = envVars.VITE_SUPABASE_URL;
  supabaseKey = envVars.VITE_SUPABASE_ANON_KEY;
} catch (error) {
  console.error('Error reading .env file:', error.message);
  process.exit(1);
}

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials in .env file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Import menu data
const menuDataPath = join(__dirname, '../src/data/menuData.ts');
let menuItems;

try {
  const content = readFileSync(menuDataPath, 'utf8');
  // Extract menuItems array from the TypeScript file
  const menuItemsMatch = content.match(/export const menuItems[^=]*=\s*\[([\s\S]*)\];/);
  if (menuItemsMatch) {
    // Convert TypeScript to JSON-compatible format
    const itemsStr = menuItemsMatch[1]
      .replace(/isFavorite:\s*false/g, '"isFavorite": false')
      .replace(/available:\s*true/g, '"available": true')
      .replace(/'/g, '"');

    menuItems = JSON.parse(`[${itemsStr}]`);
  }
} catch (error) {
  console.error('Error parsing menu data:', error.message);
  process.exit(1);
}

async function seedDatabase() {
  console.log('Starting database seed...');

  if (!menuItems || menuItems.length === 0) {
    console.error('No menu items to seed');
    return;
  }

  const itemsToInsert = menuItems.map(item => ({
    id: item.id,
    name: item.name,
    description: item.description,
    price: item.price,
    image: item.image,
    category_id: item.category,
    sub_category: item.subCategory,
    calories: item.calories,
    volume: item.volume,
    ingredients: item.ingredients,
    available: item.available,
    quantity: item.quantity,
    rating: item.rating
  }));

  console.log(`Seeding ${itemsToInsert.length} menu items...`);

  const { error } = await supabase
    .from('menu_items')
    .upsert(itemsToInsert, { onConflict: 'id' });

  if (error) {
    console.error('Error seeding menu items:', error);
    process.exit(1);
  } else {
    console.log(`Successfully seeded ${itemsToInsert.length} menu items!`);
  }
}

seedDatabase();
