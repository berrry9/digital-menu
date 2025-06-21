import React, { createContext, useContext, useState, useEffect } from 'react';

interface OnboardingContextType {
  isFirstVisit: boolean;
  currentStep: number;
  totalSteps: number;
  nextStep: () => void;
  prevStep: () => void;
  skipOnboarding: () => void;
  completeOnboarding: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};

export const OnboardingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isFirstVisit, setIsFirstVisit] = useState(() => {
    return !localStorage.getItem('hotelOnboardingCompleted');
  });
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 3;

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeOnboarding();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipOnboarding = () => {
    completeOnboarding();
  };

  const completeOnboarding = () => {
    setIsFirstVisit(false);
    localStorage.setItem('hotelOnboardingCompleted', 'true');
  };

  return (
    <OnboardingContext.Provider value={{
      isFirstVisit,
      currentStep,
      totalSteps,
      nextStep,
      prevStep,
      skipOnboarding,
      completeOnboarding
    }}>
      {children}
    </OnboardingContext.Provider>
  );
};