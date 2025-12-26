import { createClient } from '@supabase/supabase-js';
import { menuItems } from '../data/menuData';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const seedMenuItems = async () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase credentials not found');
    return;
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {
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

    const { error } = await supabase
      .from('menu_items')
      .upsert(itemsToInsert, { onConflict: 'id' });

    if (error) {
      console.error('Error seeding menu items:', error);
    } else {
      console.log(`Successfully seeded ${itemsToInsert.length} menu items`);
    }
  } catch (error) {
    console.error('Error in seed function:', error);
  }
};
