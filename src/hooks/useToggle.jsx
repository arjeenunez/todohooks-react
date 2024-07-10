import React, { useState } from 'react';

export default val => {
    const [value, setValue] = useState(val);
    const handleToggle = () => {
        setValue(!value);
    };
    return [value, handleToggle];
};
