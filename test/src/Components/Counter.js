'use client';
import React, { useCallback, useEffect, useRef, useState } from "react";
import "../css/stat-counter.css";

const StatCounter = ({ value, valueTag, position }) => {
    const [statValue, setStatValue] = useState(0);

    const incrementValue = useCallback(() => {
        setTimeout(() => {
            if (statValue < value) {
                setStatValue(statValue + 1);
            }
        }, 10);
        // eslint-disable-next-line
    }, [statValue]);

    const statCounter = useRef(null);

    useEffect(() => {
        if (statValue < value) {
            incrementValue();
        }
        // eslint-disable-next-line
    }, [statValue, incrementValue]);

    useEffect(() => {
        const config = {
            threshold: 0.8
        };

        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    incrementValue();
                    observer.unobserve(entry.target);
                }
            });
        };

        const itemObserver = new IntersectionObserver(callback, config);

        if (statCounter.current) {
            itemObserver.observe(statCounter.current);
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className={'stat-counter'} ref={element => statCounter.current = element}>
            {position === 'before' ? <span className={'value-before'}>{valueTag}</span> : null}
            <span className={'main-value'}>{statValue}</span>
            {position === 'after' ? <span className={'value-after'}>{valueTag}</span> : null}
        </div>
    );
};

export default StatCounter;
