"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import {  ThemeProviderProps } from "next-themes/dist/types"
import { Toaster } from "react-hot-toast"
import { Provider } from "react-redux"
import { store } from "@/hook/store"
import { SessionProvider } from "next-auth/react"

export default function ThemeProvider({ children }) {
  return <NextThemesProvider attribute="class" defaultTheme="system">
    <Toaster position="top-center" reverseOrder={false}/>
    <SessionProvider>

   
    <Provider store={store}>
    {children}
    </Provider>
    </SessionProvider>
    </NextThemesProvider>
}
