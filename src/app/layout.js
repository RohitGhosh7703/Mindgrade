'use client'
// importiing css'
import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { Navbar } from "@/components/Navbar";
import localFont from "next/font/local";
import BelowNavbar from "@/components/BelowNavbar";
import "./globals.css";

export default function RootLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex h-screen">
          {/* Sidebar */}
          <AppSidebar isMobile={isMobileMenuOpen} />

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Navbar */}
            <Navbar onToggleSidebar={() => setIsMobileMenuOpen((prev) => !prev)} />
           <div className="block  md:hidden">   
              <BelowNavbar/>
            </div>   

            {/* Page Content */}
            <main className="flex-1 overflow-auto p-4 pb-[70px] md:pb-0 ">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
