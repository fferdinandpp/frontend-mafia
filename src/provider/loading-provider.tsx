"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface LoadingContextType {
  isSplashing: boolean;
  setIsSplashing: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isSplashing, setIsSplashing] = useState(true);
  return (
    <LoadingContext.Provider value={{ isSplashing, setIsSplashing }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useSplashScreen() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useSplashScreen must be used within a LoadingProvider");
  }
  return context;
}
