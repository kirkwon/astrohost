import React from 'react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
    titleText: string;
    subtitleText: string;
    imageSrc: string;
    imageAlt: string;
    imageTitle?: string;
    displayMode?: 'title-subtitle' | 'image'; // New prop
}

export default function HeroSection({
    titleText,
    subtitleText,
    imageSrc,
    imageAlt,
    imageTitle,
    displayMode = 'title-subtitle', // Default to title-subtitle
}: HeroSectionProps) {

    return (
        <div className="relative w-full h-[300px] md:h-[400px] flex flex-col items-center justify-center">
            {displayMode === 'title-subtitle' ? (
                // Title and Subtitle Display
                <div className="text-center px-4">
                    <h1 className="scroll-animate font-heading text-6xl md:text-7xl lg:text-8xl font-black mb-6">
                        {titleText} <span className="robot-emoji">🤖</span>
                    </h1>
                    <p className="scroll-animate text-2xl text-muted-foreground font-medium mb-10">
                        {subtitleText}
                    </p>
                </div>
            ) : (
                // Image Display
                <div className="flex flex-col items-center justify-center overflow-hidden rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 w-full h-full">
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
            )}
        </div>
    );
}