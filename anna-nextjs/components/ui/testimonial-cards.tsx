"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
    handleShuffle: () => void;
    testimonial: string;
    position: "front" | "middle" | "back";
    id: number;
    author: string;
}

export function TestimonialCard({
    handleShuffle,
    testimonial,
    position,
    id,
    author
}: TestimonialCardProps) {
    const dragRef = React.useRef(0);
    const isFront = position === "front";

    return (
        <motion.div
            style={{
                zIndex: position === "front" ? 2 : position === "middle" ? 1 : 0
            }}
            animate={{
                rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
                x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%"
            }}
            drag={true}
            dragElastic={0.35}
            dragListener={isFront}
            dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }}
            onDragStart={(e: any) => {
                dragRef.current = e.clientX;
            }}
            onDragEnd={(e: any) => {
                if (dragRef.current - e.clientX > 150) {
                    handleShuffle();
                }
                dragRef.current = 0;
            }}
            transition={{ duration: 0.35 }}
            className={cn(
                "absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 p-6 shadow-xl backdrop-blur-md",
                "bg-primary/90 border-accent/30",
                isFront ? "cursor-grab active:cursor-grabbing" : ""
            )}
        >
            {/* Initial circle with first letter */}
            <div className="mx-auto w-32 h-32 rounded-full bg-accent/20 flex items-center justify-center border-2 border-accent/50">
                <span className="text-6xl font-bold text-accent">{author.charAt(0)}</span>
            </div>

            <span className="text-center text-lg italic text-stone-100 leading-relaxed">
                "{testimonial}"
            </span>

            <span className="text-center text-sm font-medium text-accent">{author}</span>
        </motion.div>
    );
}
