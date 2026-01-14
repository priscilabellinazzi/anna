"use client";

import * as React from 'react';
import { motion } from 'framer-motion';

export function TestimonialCard({ handleShuffle, testimonial, position, id, author }) {
    const dragRef = React.useRef(0);
    const isFront = position === "front";

    return (
        <motion.div
            style={{
                zIndex: position === "front" ? "2" : position === "middle" ? "1" : "2"
            }}
            animate={{
                rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
                x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%",
                opacity: position === "back" ? 0.3 : 1
            }}
            drag={isFront}
            dragElastic={0.35}
            dragListener={isFront}
            dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }}
            onDragStart={(e) => {
                if (e instanceof MouseEvent) {
                    dragRef.current = e.clientX;
                } else if (e instanceof TouchEvent) {
                    dragRef.current = e.touches[0].clientX;
                }
            }}
            onDragEnd={(e, info) => {
                if (info.offset.x < -150) {
                    handleShuffle();
                }
                dragRef.current = 0;
            }}
            transition={{ duration: 0.35 }}
            className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-primary/20 bg-white p-8 shadow-2xl backdrop-blur-md ${isFront ? "cursor-grab active:cursor-grabbing border-accent/40" : "pointer-events-none"
                }`}
        >
            <div className="relative mx-auto h-32 w-32">
                <img
                    src={`https://i.pravatar.cc/128?u=${id}`}
                    alt={`Avatar de ${author}`}
                    className="pointer-events-none h-full w-full rounded-full border-4 border-accent/20 object-cover shadow-inner"
                />
                <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full shadow-lg">
                    <i className="fa-solid fa-quote-right text-xs"></i>
                </div>
            </div>

            <div className="space-y-4 text-center">
                <div className="flex justify-center gap-1 text-accent text-sm mb-2">
                    {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                </div>
                <p className="text-lg italic text-slate-700 leading-relaxed font-serif">"{testimonial}"</p>
                <div className="pt-4">
                    <p className="text-sm font-bold text-primary uppercase tracking-widest">{author}</p>
                    <p className="text-[10px] text-accent font-bold uppercase tracking-tighter mt-1">Cidadania Italiana</p>
                </div>
            </div>
        </motion.div>
    );
};
