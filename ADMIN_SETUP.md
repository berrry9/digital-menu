# Admin Dashboard Setup

This document contains important information about the admin dashboard and login credentials.

## Admin Login Credentials

**Username:** `admin@hotel.com`
**Password:** `TewodrosAdmin2024!`

**IMPORTANT:** Store these credentials securely and change the password after first login if needed.

## Accessing the Admin Dashboard

1. Open the menu application
2. Click the "Info" button (top right)
3. Scroll to the bottom of the Hotel Directory
4. Click "Admin Login"
5. Enter the credentials above
6. You'll be redirected to the Admin Dashboard

## Admin Dashboard Features

### Categories Management
- View all menu categories
- Add new categories
- Edit existing categories (name, icon, display order)
- Delete categories (warning: deletes all items in that category)

### Menu Items Management
- View all menu items
- Add new items with full details:
  - Name, description, price
  - Image URL
  - Category and subcategory
  - Calories, volume, ingredients
  - Availability status
- Edit existing items
- Delete items
- Update prices in real-time

## Database Setup

The database is already configured with:
- Categories table (5 default categories)
- Menu items table (ready for items)
- Admin users table (with your admin account)

### Seeding Menu Items

To populate the database with the default menu items:

```bash
# Make sure you have a .env file with your Supabase credentials
node scripts/seedMenu.js
```

Or you can use the admin dashboard to manually add menu items.

## Security Notes

1. The admin password is securely hashed using bcrypt in the database
2. Admin sessions are stored in sessionStorage (cleared on browser close)
3. All database operations use Row Level Security (RLS)
4. Public users can only read menu data
5. Only authenticated admins can modify data

## For Reusing This Project

To deploy this for another hotel:

1. Copy the entire project
2. Create a new Supabase project
3. Update the `.env` file with new Supabase credentials
4. Run the database migrations (already applied if using same Supabase project)
5. Create a new admin user or keep the existing one
6. Customize the hotel information in `src/components/HotelDirectory.tsx`
7. Update menu items through the admin dashboard or seed script

Each hotel gets its own separate deployment with isolated data.
