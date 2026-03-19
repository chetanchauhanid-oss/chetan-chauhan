"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
    {
        project: "3 BHK Premium Duplex",
        client: "Rajesh Patel",
        text: "When we bought our duplex, I was very confused about how to make it look 'premium' without making it look like a hotel lobby. Chetanbhai didn’t just design a house; he gave us a home. His 18 years of experience really shows in the way he handles space planning. He knew exactly where we needed storage and where we needed open space. The finishing is top-notch, and even after a year, everything looks brand new. He is a thorough gentleman and a true professional."
    },
    {
        project: "3 BHK Duplex (Creative & Nature-inspired)",
        client: "Kuldeep Parmar",
        text: "My brief to Chetan was very difficult—I wanted a modern home but with the soul of nature. I didn't want typical glossy interiors. I am amazed at how he visualized my thoughts. He brought in so much natural light and used earthy textures that walking into my home feels like a retreat now. Every corner has a creative touch that starts a conversation when guests come over. If you want a designer who actually listens rather than just imposing his own ideas, Chetan is the man."
    },
    {
        project: "5 BHK High-End Bungalow",
        client: "Ravi M.",
        text: "Handling a large 5 BHK bungalow is not easy because every family member has a different requirement. My parents wanted something traditional, my kids wanted something funky, and I wanted pure luxury. Chetan managed to balance everyone’s wish-list perfectly. The grandeur of the bungalow is intact, yet it feels warm and cozy. He respected our budget and delivered the project on time, which is rare in this industry. Highly recommended for big luxury projects."
    },
    {
        project: "4,500 Sq. Ft. Farmhouse",
        client: "Anand Parmar",
        text: "For our farmhouse, we didn't want the usual city-apartment look. We wanted a place where we could disconnect and relax. Chetan created a vibe that is just magical. The way he utilized the 4,500 sq. ft. area is brilliant—it’s spacious for our big family gatherings but intimate enough when it's just us. It has become our pride in Kutch. His team works very efficiently, and the material quality suggests this farmhouse will last for generations."
    },
    {
        project: "840 Sq. Ft. Shipping Company Office",
        client: "Jeetu L.",
        text: "In the shipping business, efficiency is everything. We had a limited space of 840 sq. ft., and we needed to fit a lot of staff and files without it looking cluttered. Chetan Chauhan turned this challenge into an opportunity. He designed the office in such a smart way that it actually looks much bigger
