import { forwardRef, useEffect, useRef, useState } from 'react';

export default forwardRef(function TextareaInput({ className = '', value, onChange, placeholder, autoResize = true, isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, [isFocused]);

    function adjustHeight () {
        if (autoResize) {
            input.current.style.height = 'auto';
            input.current.style.height = input.current.scrollHeight + 'px';
        }
    }

    const onInputChange = (e) => {
        onChange(e); // Pass the event object
        adjustHeight()
    };

    useEffect(() => {
        adjustHeight()
    }, [])

    return (
        <textarea
            {...props}
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
            value={value}
            onChange={onInputChange}
            ref={input}
            placeholder={placeholder}
        />
    );
});
