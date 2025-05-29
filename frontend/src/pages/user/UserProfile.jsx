"use client";

import { useState } from "react";
import {
  BookOpen,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingBag,
  LogOut,
  User,
} from "lucide-react";
import DashboardOverview from "./dashboardOverview";
import ProfileSettings from "./ProfileSetting";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "#dashboard" },
  { name: "Purchase History", icon: ShoppingBag, href: "#purchase-history" },
  { name: "Pending Orders", icon: Package, href: "#pending-orders" },
  { name: "My Books", icon: BookOpen, href: "#my-books" },
  { name: "Profile", icon: Settings, href: "#profile" },
  { name: "Logout", icon: LogOut, href: "#logout" },
];

export default function BookEcommerceDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove auth token
    // optionally redirect to login or home page, e.g.:
    window.location.href = "/login";
  };

  return (
    <div>
      <div className="flex min-h-screen flex-col md:flex-row bg-gray-50">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-white border-r md:h-screen sticky top-0">
          <div className="hidden md:flex items-center space-x-2 p-6 border-b">
            <a href="/">
              <img src="/public/assets/ink.png" className="w-20" alt="Inkwell Logo" />
            </a>
            <span className="font-semibold mr-20 text-lg">Inkwell</span>
          </div>

          {/* ...existing sidebar code above... */}

          <nav className="flex md:flex-col overflow-x-auto md:overflow-x-visible p-2 md:p-4 space-x-2 md:space-x-0 md:space-y-1">
            {navItems.map(({ name, icon: Icon }) => {
              if (name === "Logout") {
                return (
                  <button
                    key={name}
                    onClick={handleLogout}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors w-full text-gray-600 hover:bg-gray-100"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden md:inline">{name}</span>
                  </button>
                );
              }
              return (
                <button
                  key={name}
                  onClick={() => setActiveTab(name)}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors w-full",
                    activeTab === name
                      ? "bg-rose-50 text-indigo-600"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden md:inline">{name}</span>
                </button>
              );
            })}
            {/* Add Go Back Button */}
            <div className="p-4 border-t mt-85">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors w-full bg-indigo-600 text-white hover:bg-indigo-700"
              >
                {/* Optional: You can add an icon here if you want */}
                <span>Go Back to Website</span>
              </a>
            </div>
          </nav>




        </aside>


        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">
          {activeTab === "Dashboard" && <DashboardOverview />}
          {activeTab === "Profile" && <ProfileSettings />}
        </main>
      </div>
    </div>
  );
}
