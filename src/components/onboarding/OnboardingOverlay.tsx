import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, Utensils, ShoppingCart, Clock } from 'lucide-react';
import { useOnboarding } from '../../contexts/OnboardingContext';

const onboardingSteps = [
  {
    title: "Welcome to Tewodros Belay International Hotel",
    subtitle: "Experience Luxury Dining",
    description: "Discover our exquisite culinary offerings through our interactive digital menu. From traditional Ethiopian cuisine to international favorites, we bring you a world-class dining experience.",
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    icon: <Utensils className="w-8 h-8" />,
    gradient: "from-blue-600 to-blue-800"
  },
  {
    title: "Browse Our Diverse Menu",
    subtitle: "Curated Selection",
    description: "Explore our carefully crafted categories including soups, noodles, rice dishes, fresh salads, and premium sushi. Each dish is prepared with the finest ingredients by our expert chefs.",
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    icon: <Utensils className="w-8 h-8" />,
    gradient: "from-orange-500 to-red-600"
  },
  {
    title: "Seamless Room Service",
    subtitle: "Order with Ease",
    description: "Add your favorite dishes to cart and enjoy convenient room service delivery. Our dedicated staff ensures your meal arrives fresh and perfectly presented to your room.",
    image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    icon: <Clock className="w-8 h-8" />,
    gradient: "from-green-500 to-emerald-600"
  }
];

export const OnboardingOverlay: React.FC = () => {
  const { isFirstVisit, currentStep, nextStep, prevStep, skipOnboarding } = useOnboarding();

  if (!isFirstVisit) return null;

  const currentStepData = onboardingSteps[currentStep];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm"
      >
        {/* Skip button */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={skipOnboarding}
          className="absolute top-6 right-6 z-10 p-3 bg-white/10 rounded-full text-white hover:text-gray-300 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
        >
          <X className="w-6 h-6" />
        </motion.button>

        {/* Main onboarding card */}
        <div className="flex items-center justify-center min-h-screen p-4">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Hero Image Section */}
            <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                src={currentStepData.image}
                alt={currentStepData.title}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${currentStepData.gradient} opacity-60`} />
              
              {/* Icon overlay */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white"
              >
                {currentStepData.icon}
              </motion.div>

              {/* Hotel logo */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center"
              >
                <img 
                  src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Hotel Logo"
                  className="w-8 h-8 rounded-lg object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<span class="text-white font-bold text-sm">TB</span>';
                    }
                  }}
                />
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="p-8 sm:p-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-8"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 tracking-wide uppercase"
                >
                  {currentStepData.subtitle}
                </motion.p>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4 leading-tight"
                >
                  {currentStepData.title}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto"
                >
                  {currentStepData.description}
                </motion.p>
              </motion.div>

              {/* Progress indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex justify-center space-x-3 mb-8"
              >
                {onboardingSteps.map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentStep
                        ? 'bg-blue-600 scale-125'
                        : index < currentStep
                        ? 'bg-blue-300'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </motion.div>

              {/* Navigation buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex justify-between items-center"
              >
                <motion.button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  whileHover={{ scale: currentStep === 0 ? 1 : 1.05 }}
                  whileTap={{ scale: currentStep === 0 ? 1 : 0.95 }}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-200 ${
                    currentStep === 0
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="font-medium">Back</span>
                </motion.button>

                <motion.button
                  onClick={nextStep}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-8 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    currentStep === onboardingSteps.length - 1
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  <span>
                    {currentStep === onboardingSteps.length - 1 ? 'Start Exploring' : 'Continue'}
                  </span>
                  {currentStep === onboardingSteps.length - 1 ? (
                    <ShoppingCart className="w-5 h-5" />
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Background pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              repeatType: 'reverse' 
            }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 25% 25%, white 2px, transparent 2px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};