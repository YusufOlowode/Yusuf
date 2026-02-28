'use client';

import { useEffect, useRef, useState } from 'react';

interface ProgressRingProps {
    percentage: number;
    label: string;
    color?: 'green' | 'yellow' | 'red';
    barCount?: number;
    animationDuration?: number;
}

const Progress: React.FC<ProgressRingProps> = ({
    percentage,
    label,
    color = 'green',
    barCount = 30,
    animationDuration = 3000,
}) => {
    const [currentPercent, setCurrentPercent] = useState(0);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const colorMap = {
        green: '#000000',
    };

    useEffect(() => {
        // Animate counter
        const startDelay = 0;

        const timeout = setTimeout(() => {
            const increment = 2;
            const intervalTime = animationDuration / (percentage / increment);

            const interval = setInterval(() => {
                setCurrentPercent((prev) => {
                    const next = prev + increment;
                    if (next >= percentage) {
                        clearInterval(interval);
                        return percentage;
                    }
                    return next;
                });
            }, intervalTime);

            return () => clearInterval(interval);
        }, startDelay);

        return () => clearTimeout(timeout);
    }, [percentage, barCount, animationDuration]);

    const selectedBars = Math.round(barCount * currentPercent / 100);

    return (
        <div
            className={'progress'}
            ref={wrapperRef}
            style={{ '--bar-count': barCount, '--color': colorMap.green } as React.CSSProperties}
        >
            {Array.from({ length: barCount }).map((_, index) => (
                <i
                    key={index}
                    style={{ '--i': index } as React.CSSProperties}
                    className={index < selectedBars ? 'selected' : ''}
                />
            ))}
            <p className={'percentText'}>{currentPercent}%</p>
            <p className={'labelText'}>{label}</p>
        </div>
    );
};

export default Progress;