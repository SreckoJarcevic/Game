import React from 'react';

const generateLevelPicker = level => {
    const options = [];

    for (; level > 0; level--) {
        options.push(
            <option key={level} value={level}>Level {level}</option>
        );
    }

    return options;
}

export default generateLevelPicker;
