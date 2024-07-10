import React, { useState, useEffect } from 'react';

function useLocalStorage(key, defaultValue) {
    const [state, setState] = useState(() => {
        let currentValue;
        try {
            currentValue = JSON.parse(window.localStorage.getItem(key)) || String(defaultValue);
        } catch {
            currentValue = defaultValue;
        }
        return currentValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);

    return [state, setState];
}

export default useLocalStorage;
