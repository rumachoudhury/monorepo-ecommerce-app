import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-100">
      <Link
        href="/"
        className="m-8 text-green-600 text-2xl flex items-center gap-2"
      >
        <ArrowLeft />
        Go to admin home
      </Link>
      {/* 🔥 Animated Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-300/30 blur-3xl animate-pulse" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <main className="relative z-10 p-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
          <p className="text-gray-500 mt-2">
            Manage your account and system preferences
          </p>
        </div>

        {/* Settings Card */}
        <div className="bg-white rounded-2xl shadow p-6 transition duration-300 hover:shadow-xl">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Admin Settings
          </h2>

          <p className="text-gray-600 mb-6">
            Configure your application settings, security, and preferences.
          </p>

          {/* Options */}
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center justify-between border-b pb-3 transition hover:bg-gray-50 px-2 rounded-lg">
              <span className="text-gray-700">Email Notifications</span>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm transition hover:bg-purple-700 hover:scale-[1.03] active:scale-95">
                Enable
              </button>
            </div>

            {/* 2FA */}
            <div className="flex items-center justify-between border-b pb-3 transition hover:bg-gray-50 px-2 rounded-lg">
              <span className="text-gray-700">Two-Factor Auth</span>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm transition hover:bg-gray-900 hover:scale-[1.03] active:scale-95">
                Setup
              </button>
            </div>

            {/* Dark Mode */}
            <div className="flex items-center justify-between transition hover:bg-gray-50 px-2 py-3 rounded-lg">
              <span className="text-gray-700">Dark Mode</span>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm transition hover:bg-green-700 hover:scale-[1.03] active:scale-95">
                Active
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
