import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';
import { useOnboarding } from '../../contexts/OnboardingContext';
import { MenuLottieAnimation } from '../animations/LottieAnimation';

const onboardingSteps = [
  {
    title: "Welcome to Tewodros Hotel",
    description: "Discover our digital menu with interactive features and seamless ordering experience.",
    target: "header",
    position: "bottom"
  },
  {
    title: "Browse Categories",
    description: "Tap on different categories to explore our diverse menu offerings. Each category has subcategories for easy navigation.",
    target: "categories",
    position: "bottom"
  },
  {
    title: "Add to Cart & Order",
    description: "Tap the Add button to add items to your cart, or tap on any item to view details. Your cart will appear on the right side.",
    target: "menu-grid",
    position: "top"
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
        className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
      >
        {/* Skip button */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={skipOnboarding}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </motion.button>

        {/* Onboarding card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
        >
          {/* Animation */}
          <div className="flex justify-center mb-6">
            <MenuLottieAnimation className="w-24 h-24" loop autoplay />
          </div>

          {/* Content */}
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-gray-800 dark:text-white mb-4"
            >
              {currentStepData.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              {currentStepData.description}
            </motion.p>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {onboardingSteps.map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentStep
                    ? 'bg-blue-600'
                    : index < currentStep
                    ? 'bg-blue-300'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                currentStep === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              onClick={nextStep}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>{currentStep === onboardingSteps.length - 1 ? 'Get Started' : 'Next'}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Spotlight effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};