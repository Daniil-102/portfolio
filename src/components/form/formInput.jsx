'use client'

import React, { forwardRef } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { cn } from '@/utils/utils'



export const FormInput = forwardRef(({
    id, label, type, placeholder, required, disabled, errors, className, defaultValue, onBlur
}, ref) => {

    return (
        <div className="space-y-2">
            <div className="space-y-1">
                {label ? (
                    <Label htmlFor={id} className='text-xs font-semibold text-neutral-700'>
                        {label}
                    </Label>
                ) : null}
                <Input onBlur={onBlur}
                    defaultValue={defaultValue}
                    ref={ref}
                    required={required}
                    id={id}
                    type={type}
                    disabled={disabled}
                    placeholder={placeholder}
                    name={id}
                    className={cn('text-sm px-2 py-1 h-7', className)}
                    aria-describedby={`${id}-error`}
                />

            </div>
            {/* <FormErrors
                id={id}
                errors={errors}
            /> */}
        </div>
    )
})


FormInput.displayName = 'FormInput'