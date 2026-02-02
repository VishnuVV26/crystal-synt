"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login
    console.log("Login:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen flex bg-brand-light">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-transparent" />
        {/* Animated decorative elements */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-orange/10 rounded-full animate-wave" />
        <div className="absolute top-20 -right-10 w-40 h-40 bg-brand-orange/10 rounded-full animate-wave" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-brand-orange/10 rounded-full animate-wave" style={{ animationDelay: '1s' }} />
        
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20">
          <div className="mb-8 animate-drop">
            <h1 className="text-4xl xl:text-5xl font-bold text-white mb-4">
              Crystal Building Materials
            </h1>
            <p className="text-xl text-brand-gray">
              Your trusted partner for steel, tools, and building materials in
              Bahrain
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-brand-orange transition-colors">
                Wide Range of Products
              </h3>
              <p className="text-brand-gray group-hover:text-white transition-colors">
                Access our complete catalog of steel products, power tools,
                chemicals, and building materials.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-brand-orange transition-colors">
                Quick Ordering
              </h3>
              <p className="text-brand-gray group-hover:text-white transition-colors">
                Place orders online and track your shipments in real-time.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-brand-orange transition-colors">
                Exclusive Pricing
              </h3>
              <p className="text-brand-gray group-hover:text-white transition-colors">
                Get special pricing and volume discounts for registered
                customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8 animate-drop">
            <h1 className="text-2xl font-bold text-brand-dark">
              Crystal Building Materials
            </h1>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-up group">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-brand-dark mb-2 group-hover:text-brand-orange transition-colors">
                Welcome Back
              </h2>
              <p className="text-brand-gray group-hover:text-brand-dark transition-colors">
                Sign in to access your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group/input">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-brand-dark mb-1 group-hover/input:text-brand-orange transition-colors"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gray group-hover/input:text-brand-orange transition-colors"
                    size={20}
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-brand-gray/30 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="group/input">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-brand-dark mb-1 group-hover/input:text-brand-orange transition-colors"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gray group-hover/input:text-brand-orange transition-colors"
                    size={20}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-12 py-3 rounded-lg border border-brand-gray/30 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brand-gray hover:text-brand-dark transition-colors hover:scale-110"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 text-brand-orange border-brand-gray/30 rounded focus:ring-brand-orange"
                  />
                  <span className="text-sm text-brand-gray group-hover:text-brand-dark transition-colors">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-sm text-brand-orange hover:text-brand-orange/80 transition-colors hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange text-white py-3 rounded-lg font-semibold hover:bg-brand-orange/90 transition-all hover:scale-[1.02] animate-slide-up stagger-1 group/btn"
              >
                Sign In
                <span className="group-hover/btn:translate-x-1 transition-transform inline-block ml-2">→</span>
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-brand-gray">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="text-brand-orange font-medium hover:text-brand-orange/80 transition-colors hover:underline"
                >
                  Create Account
                </a>
              </p>
            </div>
          </div>

          <p className="text-center text-sm text-brand-gray mt-8 animate-fade">
            © {new Date().getFullYear()} Crystal Building Materials. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
