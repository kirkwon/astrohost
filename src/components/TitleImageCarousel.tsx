import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface TitleImageCarouselProps {
    titleText: string;
    subtitleText: string;
    imageSrc: string;
    imageAlt: string;
    imageTitle?: string;
}

export default function TitleImageCarousel({
    titleText,
    subtitleText,
    imageSrc,
    imageAlt,
    imageTitle,
}: TitleImageCarouselProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        console.log('Flipping! Current state:', isFlipped);
        setIsFlipped((prev) => !prev);
    };

    return (
        <div className="relative w-full h-[300px] md:h-[400px] perspective transform-style-3d">
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
                <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center overflow-hidden rounded-xl bg-background/50 backdrop-blur-sm border border-border/50">
                    {imageTitle && (
                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                            {imageTitle}
                        </h3>
                    )}
                    <div className="relative w-full h-full max-h-[85%] overflow-hidden rounded-lg">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="w-full h-full object-contain p-4"
                        />
                    </div>
                </div>
            </div>

            {/* Toggle Button */}
            <button 
                onClick={handleFlip} 
                className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-md hover:bg-primary/90 transition-all duration-200 z-20"
            >
                {isFlipped ? 'Show Title' : 'Show Image'}
            </button>

            {/* Visual Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                <div className={cn("w-2 h-2 rounded-full transition-colors duration-300", !isFlipped ? "bg-primary" : "bg-muted")} />
                <div className={cn("w-2 h-2 rounded-full transition-colors duration-300", isFlipped ? "bg-primary" : "bg-muted")} />
            </div>
        </div>
    );
}