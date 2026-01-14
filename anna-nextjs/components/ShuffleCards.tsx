"use client";

import { TestimonialCard } from "@/components/ui/testimonial-cards";
import { useState } from "react";

const testimonials = [
    {
        id: 1,
        testimonial: "Com o Anna Con Te, consegui entender cada etapa do processo. Evitei erros que me custariam muito tempo e dinheiro.",
        author: "Maria Rossi"
    },
    {
        id: 2,
        testimonial: "Método claro e objetivo. A Anna me deu a segurança que eu precisava para conduzir meu próprio processo sem gastar uma fortuna.",
        author: "Giovanni Ferrari"
    },
    {
        id: 3,
        testimonial: "Economizei mais de R$ 15 mil em consultoria. O investimento no curso se pagou logo na primeira etapa do reconhecimento.",
        author: "Luca Bianchi"
    },
    {
        id: 4,
        testimonial: "A orientação técnica da Anna fez toda a diferença. Hoje sei exatamente o que fazer em cada fase do meu processo.",
        author: "Sofia Romano"
    },
    {
        id: 5,
        testimonial: "Material completo e didático. Consegui organizar toda a documentação da minha família com clareza e método.",
        author: "Marco Conti"
    }
];

export function ShuffleCards() {
    const [positions, setPositions] = useState<("front" | "middle" | "back")[]>([
        "front",
        "middle",
        "back"
    ]);

    const handleShuffle = () => {
        const newPositions = [...positions];
        newPositions.unshift(newPositions.pop()!);
        setPositions(newPositions);
    };

    return (
        <div className="grid place-content-center overflow-hidden bg-primary px-8 py-32 text-stone-50">
            <div className="mb-12 text-center">
                <span className="mb-4 uppercase tracking-[0.3em] text-accent font-bold text-xs flex items-center justify-center gap-2">
                    Prova Social Interativa
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
                    Arraste para ver mais depoimentos
                </h2>
                <p className="text-stone-300 max-w-lg mx-auto">
                    Deslize os cards para a esquerda ou clique nas setas para conhecer histórias reais de sucesso
                </p>
            </div>

            <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]">
                {testimonials.slice(0, 3).map((testimonial, index) => (
                    <TestimonialCard
                        key={testimonial.id}
                        {...testimonial}
                        handleShuffle={handleShuffle}
                        position={positions[index]}
                    />
                ))}
            </div>

            <div className="mt-8 flex justify-center gap-4">
                <button
                    onClick={handleShuffle}
                    className="bg-accent text-primary px-6 py-3 rounded-xl font-bold hover:scale-105 transition shadow-xl uppercase tracking-widest text-sm"
                >
                    Próximo depoimento →
                </button>
            </div>
        </div>
    );
}
