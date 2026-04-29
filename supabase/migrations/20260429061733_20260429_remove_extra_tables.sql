/*
  # Remove Extra Tables

  Removing orders and user_preferences tables - keeping only menu management tables
*/

DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS user_preferences CASCADE;
