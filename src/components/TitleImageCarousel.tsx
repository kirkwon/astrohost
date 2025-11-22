import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TitleImageCarouselProps {
    titleText: string;
    subtitleText: string;
    imageSrc: string;
    imageAlt: string;
}

export default function TitleImageCarousel({
    titleText,
    subtitleText,
    imageSrc,
    imageAlt,
}: TitleImageCarouselProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFlipped((prev) => !prev);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[300px] md:h-[400px] perspective-1000 cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
            <div
                className={cn(
                    "relative w-full h-full transition-transform duration-1000 transform-style-3d",
                    isFlipped ? "rotate-y-180" : ""
                )}
            >
                {/* Front Face (Text) */}
                <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="scroll-animate font-heading text-6xl md:text-7xl lg:text-8xl font-black mb-6">
                            {titleText} <span className="robot-emoji">🤖</span>
                        </h1>
                        <p className="scroll-animate text-2xl text-muted-foreground font-medium mb-10">
                            {subtitleText}
                        </p>
                    </div>
                </div>

                {/* Back Face (Image) */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center overflow-hidden rounded-xl">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="w-full h-full object-contain md:object-cover rounded-xl shadow-2xl"
                    />
                </div>
            </div>

            {/* Visual Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                <div className={cn("w-2 h-2 rounded-full transition-colors duration-300", !isFlipped ? "bg-primary" : "bg-muted")} />
                <div className={cn("w-2 h-2 rounded-full transition-colors duration-300", isFlipped ? "bg-primary" : "bg-muted")} />
            </div>
        </div>
    );
}
