import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Book, Phone, Utensils, Sparkles, Bed, MapPin, Building, Clock, Coffee, Dumbbell, Users, Shield, Ambulance, Car, Pill, Landmark, Trees } from 'lucide-react';

interface HotelDirectoryProps {
  onClose: () => void;
  onAdminClick: () => void;
}

export const HotelDirectory: React.FC<HotelDirectoryProps> = ({ onClose, onAdminClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300">
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </motion.button>
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Hotel Directory</h1>
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-md flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
            alt="Hotel Logo"
            className="w-6 h-6 rounded-sm object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = '<span class="text-white font-bold text-xs">TB</span>';
              }
            }}
          />
        </div>
      </div>

      <div className="p-4 space-y-4 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Book className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">About the Hotel</h2>
          </div>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <p><span className="font-semibold text-gray-800 dark:text-white">Opened in:</span> 2015</p>
            <p><span className="font-semibold text-gray-800 dark:text-white">Stars:</span> ⭐⭐⭐⭐</p>
            <p><span className="font-semibold text-gray-800 dark:text-white">Location:</span> Addis Ababa, Ethiopia</p>
            <p className="pt-2">Tewodros Belay International Hotel offers a luxurious and comfortable stay with world-class amenities. Our commitment is to provide exceptional service and memorable experiences for all our guests.</p>
            <p className="italic pt-2">Mission: To deliver outstanding hospitality that exceeds expectations and creates lasting memories.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">Reception</h2>
          </div>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <p><span className="font-semibold text-gray-800 dark:text-white">Phone:</span> +251 11 123 4567</p>
            <p><span className="font-semibold text-gray-800 dark:text-white">Reception Hours:</span> 24/7</p>
            <p><span className="font-semibold text-gray-800 dark:text-white">Check-in:</span> 2:00 PM</p>
            <p><span className="font-semibold text-gray-800 dark:text-white">Check-out:</span> 12:00 PM</p>
            <p><span className="font-semibold text-gray-800 dark:text-white">Luggage Storage:</span> Available at reception, free of charge for all guests</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Utensils className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">Restaurant & Bar</h2>
          </div>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <Coffee className="w-4 h-4 text-gray-500 dark:text-gray-500" />
              <p><span className="font-semibold text-gray-800 dark:text-white">Breakfast:</span> 6:30 AM - 10:30 AM</p>
            </div>
            <p><span className="font-semibold text-gray-800 dark:text-white">Restaurant Hours:</span> 12:00 PM - 11:00 PM</p>
            <p><span className="font-semibold text-gray-800 dark:text-white">Menu:</span> Available via digital menu system</p>
            <p><span className="font-semibold text-gray-800 dark:text-white">Bar Service:</span> 4:00 PM - 12:00 AM</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">Spa & Wellness</h2>
          </div>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <p><span className="font-semibold text-gray-800 dark:text-white">Spa Services:</span> Facials, body treatments, aromatherapy</p>
            <p><span className="font-semibold text-gray-800 dark:text-white">Massage Options:</span> Swedish, deep tissue, hot stone</p>
            <div className="flex items-center space-x-2">
              <Dumbbell className="w-4 h-4 text-gray-500 dark:text-gray-500" />
              <p><span className="font-semibold text-gray-800 dark:text-white">Gym Hours:</span> 24/7</p>
            </div>
            <p><span className="font-semibold text-gray-800 dark:text-white">Sauna & Pool:</span> 6:00 AM - 10:00 PM</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Bed className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">Rooms & Services</h2>
          </div>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <p><span className="font-semibold text-gray-800 dark:text-white">Housekeeping:</span> Daily, 9:00 AM - 4:00 PM</p>
            <p><span className="font-semibold text-gray-800 dark:text-white">Laundry Service:</span> Available, 24-hour turnaround</p>
            <p><span className="font-semibold text-gray-800 dark:text-white">Room Service:</span> 24/7</p>
            <p><span className="font-semibold text-gray-800 dark:text-white">Wi-Fi Password:</span> TBHotel2024</p>
            <p><span className="font-semibold text-gray-800 dark:text-white">Extra Bed:</span> Request at reception, additional charges apply</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">Important Contacts</h2>
          </div>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <Building className="w-4 h-4 text-gray-500 dark:text-gray-500" />
              <p><span className="font-semibold text-gray-800 dark:text-white">Reception:</span> Ext. 0 or +251 11 123 4567</p>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-gray-500 dark:text-gray-500" />
              <p><span className="font-semibold text-gray-800 dark:text-white">Housekeeping:</span> Ext. 101</p>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-gray-500 dark:text-gray-500" />
              <p><span className="font-semibold text-gray-800 dark:text-white">Security:</span> Ext. 200</p>
            </div>
            <div className="flex items-center space-x-2">
              <Ambulance className="w-4 h-4 text-red-500 dark:text-red-400" />
              <p><span className="font-semibold text-gray-800 dark:text-white">Emergency:</span> 911 or Ext. 999</p>
            </div>
            <div className="flex items-center space-x-2">
              <Car className="w-4 h-4 text-gray-500 dark:text-gray-500" />
              <p><span className="font-semibold text-gray-800 dark:text-white">Taxi Service:</span> Ext. 150</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm"
        >
          <div className="flex items-center space-x-2 mb-4">
            <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">Nearby Attractions</h2>
          </div>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <Trees className="w-4 h-4 text-green-600 dark:text-green-400" />
              <p><span className="font-semibold text-gray-800 dark:text-white">Tourist Places:</span> National Museum (2 km), Unity Park (3 km), Ethnological Museum (2.5 km)</p>
            </div>
            <div className="flex items-center space-x-2">
              <Landmark className="w-4 h-4 text-gray-500 dark:text-gray-500" />
              <p><span className="font-semibold text-gray-800 dark:text-white">Banks:</span> Commercial Bank of Ethiopia (500m), Dashen Bank (800m)</p>
            </div>
            <div className="flex items-center space-x-2">
              <Pill className="w-4 h-4 text-green-600 dark:text-green-400" />
              <p><span className="font-semibold text-gray-800 dark:text-white">Pharmacy:</span> Life Pharmacy (300m), open 24/7</p>
            </div>
            <div className="flex items-center space-x-2">
              <Ambulance className="w-4 h-4 text-red-500 dark:text-red-400" />
              <p><span className="font-semibold text-gray-800 dark:text-white">Hospital:</span> St. Paul's Hospital (4 km), Black Lion Hospital (5 km)</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm"
        >
          <div className="flex flex-col items-center space-y-3">
            <motion.button
              onClick={onAdminClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-md"
            >
              Admin Login
            </motion.button>
            <p className="text-xs text-gray-500 dark:text-gray-500 text-center">
              Hotel staff and management only
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
