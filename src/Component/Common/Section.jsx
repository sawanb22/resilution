import React from 'react';

const Section = ({
    children,
    className = '',
    containerClassName = '',
    id = '',
    ...props
}) => {
    return (
        <section
            id={id}
            className={`relative w-full py-20 md:py-32 overflow-hidden bg-black text-white ${className}`}
            {...props}
        >
            <div className={`w-full max-w-[1300px] mx-auto px-8 md:px-16 ${containerClassName}`}>
                {children}
            </div>
        </section>
    );
};

export default Section;
