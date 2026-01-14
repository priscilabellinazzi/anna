import * as React from 'react';
import { useState } from "react";
import { TestimonialCard } from "./ui/testimonial-cards";

const testimonials = [
    {
        id: 1,
        testimonial: "Eu estava completamente perdida no início, sem saber por onde começar. O curso é muito organizado e explica tudo passo a passo. Hoje finalmente sou cidadã italiana!",
        author: "Alessandra Silva - Cidadã Italiana"
    },
    {
        id: 2,
        testimonial: "O que mais me surpreendeu foi o cuidado com os detalhes. A explicação sobre análise de certidões abriu meus olhos para erros que eu nem imaginava que poderiam ocorrer.",
        author: "Marcos Oliveira - Processo Concluído"
    },
    {
        id: 3,
        testimonial: "O método Anna Con Te trouxe a clareza que faltava no meu processo. Consegui organizar toda a documentação com segurança e autonomia total!",
        author: "Paula Ribeiro - Aluna Verificada"
    }
];

export function ShuffleCards() {
    const [positions, setPositions] = useState(["front", "middle", "back"]);

    const handleShuffle = () => {
        setPositions((prev) => {
            const newPositions = [...prev];
            const last = newPositions.pop();
            if (last) newPositions.unshift(last);
            return newPositions;
        });
    };

    return (
        <div className="flex flex-col items-center justify-center py-20">
            <div className="relative h-[480px] w-full max-w-[350px]">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={testimonial.id}
                        {...testimonial}
                        handleShuffle={handleShuffle}
                        position={positions[index]}
                    />
                ))}
            </div>

            <div className="mt-8 flex items-center gap-4 text-slate-500 animate-pulse">
                <span className="material-symbols-outlined">swipe_left</span>
                <span className="text-sm font-medium uppercase tracking-widest">Arraste para o lado para ler mais</span>
            </div>
        </div>
    );
}
