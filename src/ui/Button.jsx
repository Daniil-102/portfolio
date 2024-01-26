import React from 'react';
import { cn } from '../utils/utils';

export const Buttonn = ({ children, className, variants, ...props }) => {

    return (
        <button
            className={cn(
                'font-syne bg-transparent transition px-6 py-2 border rounded-full font-medium text-white lg:hover:bg-white ',
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
};
