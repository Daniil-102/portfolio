import React, { useState } from 'react'
import { cn } from '@/utils/utils';
import { Controller, useForm } from 'react-hook-form'
import { TextField } from '@mui/material';
import { emailValidation, nameValidation, phoneValidation } from '@/utils/validation';
import { toast } from 'sonner'
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion'


const animation = {
    hidden: {
        width: '0%',
    },
    visible: {
        width: '100%',
        transition: { type: 'spring' }
    },
}

const defaultValues = {
    name: '',
    email: '',
    phone: '',
}

const sx = {
    '& .MuiInputBase-input': {
        color: 'white',
    },
    '& label': {
        color: 'gray',
    },
    '& .MuiInput-underline:before': {
        borderBottomColor: 'gray',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottomColor: 'gray',
    },
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
}

export const Form = () => {
    const { handleSubmit, control, formState: { errors }, reset } = useForm({ defaultValues })

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const response = await axios.post(`${process.env.REACT_APP_API_URL}send-email`, data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            if (response.status === 200) {
                toast.success('Your request has been successfully sent, we will process it as soon as possible.');
                reset();
            } else {
                toast.error('Error');
            }
        } catch (error) {
            console.error('Error sending data:', error);
            toast.error('Error', error.message);
        } finally {
            setLoading(false);
        }
    };

    const onError = () => {
        if (errors.email || errors.name || errors.phone) {
            toast.error('Error');
        }
    };


    return (
        <div id='contacts' className='mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-20 max-w-[750px] mx-auto text-center md:border md:border-white md:py-10 md:rounded-3xl'>
            <h2 className='font-extrabold font-syne text-2xl sm:text-3xl md:text-4xl mb-3'>Fuel <span className='text-[#676CE7]'>Your</span> Brand’s Goals with <span className='text-[#676CE7]'>Me</span></h2>
            <p className="text-sm sm:text-base xl:text-lg mb-5 md:mb-10">You can leave your details so I can contact you.</p>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full mx-auto grid gap-5 md:w-[80%] '>
                <Controller
                    control={control}
                    name='name'
                    rules={nameValidation}
                    render={({ field }) => (
                        <motion.div initial='visible' whileInView='hidden' className='relative'>
                            <motion.div transition={{ duration: .8 }} variants={animation} className="absolute z-10 inset-0 bg-white" />
                            <TextField
                                variant='standard'
                                className='w-full '
                                sx={sx}
                                label='Name*'
                                onChange={e => field.onChange(e)}
                                value={field.value}
                                error={Boolean(errors?.name)}
                                helperText={errors?.name?.message}
                            />
                        </motion.div>
                    )}
                />
                <Controller
                    control={control}
                    name='email'
                    rules={emailValidation}
                    render={({ field }) => (
                        <motion.div initial='visible' whileInView='hidden' className='relative'>
                            <motion.div transition={{ duration: .6 }} variants={animation} className="absolute z-10 inset-0 bg-white" />
                            <TextField
                                variant='standard'
                                className='w-full '
                                sx={sx}
                                label='Email*'
                                onChange={e => field.onChange(e)}
                                value={field.value}
                                error={Boolean(errors?.email)}
                                helperText={errors?.email?.message}
                            />
                        </motion.div>

                    )}
                />
                <Controller
                    control={control}
                    name='phone'
                    rules={phoneValidation}
                    render={({ field }) => (
                        <motion.div initial='visible' whileInView='hidden' className='relative'>
                            <motion.div transition={{ duration: 1 }} variants={animation} className="absolute z-10 inset-0 bg-white" />
                            <TextField
                                margin='none'
                                variant='standard'
                                className='w-full '
                                sx={sx}
                                label='Phone number'
                                onChange={e => field.onChange(e)}
                                value={field.value}
                                error={Boolean(errors?.phone)}
                                helperText={errors?.phone?.message}
                            />
                        </motion.div>
                    )}
                />
                <button type='submit' onClick={onError} className={`font-syne text-2xl sm:text-3xl md:text-4xl flex mx-auto items-center mt-3 sm:mt-6 md:mt-8 px-5 py-2 rounded-full lg:hover:bg-white/20 lg:hover:scale-110 transition 
                ${loading ? 'pointer-events-none opacity-50' : ''}`}>
                    Send Data
                    <img src="arrow.svg" alt="arrow" className='ml-4 sm:ml-7 xl:ml-10 w-5 sm:w-7 h-5 sm:h-7 md:w-8 md:h-8  relative sm:left-1 sm:top-0.5' />
                </button>

            </form>
        </div>

    )
}
