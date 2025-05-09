import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      {" "}
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
        {" "}
        {/* Header */}{" "}
        <header className="flex justify-between items-center p-6 max-w-6xl mx-auto">
          {" "}
          <h1 className="text-2xl font-bold">SoftSell</h1>{" "}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {" "}
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}{" "}
          </button>{" "}
        </header>
        {/* Hero Section */}
        <section className="text-center py-20 px-4">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Sell Unused Software Licenses Easily
          </motion.h2>
          <p className="text-lg mb-6">
            Turn your unused software into cash in just a few steps.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Sell My Licenses
          </button>
        </section>
        {/* How It Works */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800 text-center">
          <h3 className="text-2xl font-semibold mb-12">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {["Upload License", "Get Valuation", "Get Paid"].map((step, i) => (
              <div
                key={i}
                className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow"
              >
                <div className="text-4xl mb-4">{i + 1}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Why Choose Us */}
        <section className="py-20 px-4 text-center">
          <h3 className="text-2xl font-semibold mb-12">Why Choose Us</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "Fast Payments",
              "Secure Platform",
              "Trusted by 10K+",
              "24/7 Support",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg"
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Testimonials */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800 text-center">
          <h3 className="text-2xl font-semibold mb-12">
            What Our Customers Say
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Jane Doe", role: "IT Manager", company: "TechCorp" },
              { name: "John Smith", role: "CFO", company: "SoftPlus" },
            ].map((t, i) => (
              <div
                key={i}
                className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow"
              >
                <p className="italic mb-2">
                  “Amazing service and super fast process.”
                </p>
                <p className="font-semibold">
                  {t.name}, {t.role} @ {t.company}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Contact Form */}
        <section className="py-20 px-4 max-w-xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Contact Us
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded border"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded border"
              required
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full p-3 rounded border"
              required
            />
            <select className="w-full p-3 rounded border" required>
              <option value="">License Type</option>
              <option value="Windows">Windows</option>
              <option value="Adobe">Adobe</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              placeholder="Message"
              className="w-full p-3 rounded border"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </section>
        {/* Footer */}
        <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
          &copy; 2025 SoftSell. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
