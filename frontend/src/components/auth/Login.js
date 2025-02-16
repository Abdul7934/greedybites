import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

export default function App() {
  const [search, setSearch] = useState("");
  const data = ["React", "JavaScript", "Python", "Django", "Tailwind CSS"];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-particles pointer-events-none"></div>
      <motion.h1
        className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        AI-Powered Search
      </motion.h1>
      <Input
        className="w-full md:w-1/2 p-3 my-6 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 transition"
        placeholder="Search topics..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {data
          .filter((item) => item.toLowerCase().includes(search.toLowerCase()))
          .map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-2xl shadow-lg bg-white/30 backdrop-blur-md border border-white/20 transition-all"
            >
              <Card>
                <CardContent className="text-lg font-semibold text-gray-800 text-center p-6">
                  {item}
                </CardContent>
              </Card>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
}
