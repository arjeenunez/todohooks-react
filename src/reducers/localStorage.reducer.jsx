import { useEffect, useReducer } from 'react';

function useLocalStorageReducer(key, defaultValue, reducer) {
    const [state, dispatch] = useReducer(reducer, defaultValue, () => {
        let currentValue;
        try {
            currentValue = JSON.parse(window.localStorage.getItem(key)) || defaultValue;
        } catch {
            currentValue = defaultValue;
        }

        return currentValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);

    return [state, dispatch];
}

export default useLocalStorageReducer;
