"use client";
import React, { createContext, useContext } from "react";

interface SplashContextType {
    splashDone: boolean;
}

const SplashContext = createContext<SplashContextType>({ splashDone: false });

export const SplashProvider = ({
    splashDone,
    children,
}: {
    splashDone: boolean;
    children: React.ReactNode;
}) => {
    return (
        <SplashContext.Provider value={{ splashDone }}>
            {children}
        </SplashContext.Provider>
    );
};

export const useSplash = () => useContext(SplashContext);
