import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextareaInput({ className = '', value, onChange, placeholder, isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    const onInputChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <input
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
