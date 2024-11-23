// import React from 'react'
// import { Controller, useFormContext } from 'react-hook-form'
// const RHFInput = ({ name, label, placeholder, type, className }) => {
//     const { control, formState: { errors } } = useFormContext()

//     return (
//         <Controller
//             name={name}
//             control={control}
//             render={({ field }) => (
//                 <div className=' flex  flex-col w-full'>
//                     <label className=' text-sm  font-semibold mb-[3px]'>{label}</label>
//                     <input
//                         autoComplete='off'
//                         placeholder={placeholder}
//                         {...field}
//                         type={type}

//                         className={`${className} text-sm w-full bg-transparent  py-1.5 px-2  rounded-sm  outline-none `}
//                     />
//                     {errors && <p className=' text-error !text-xs'>{errors[name]?.message}</p>}
//                 </div>
//             )}

//         />
//     )
// }

// export default RHFInput





"use client";

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const RHFInput = ({ name, label, placeholder, type = "text", className }) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, formState: { errors } }) => (
                <div className='flex flex-col w-full'>
                    {label && <label className='text-sm font-semibold mb-[3px]'>{label}</label>}
                    <input
                        autoComplete='off'
                        placeholder={placeholder}
                        {...field}
                        type={type}
                        className={`${className} text-sm w-full bg-transparent py-1.5 px-2 rounded-sm outline-none`}
                    />
                    {errors[name] && <p className='text-error text-sm'>{errors[name].message}</p>}
                </div>
            )}
        />
    );
};

export default RHFInput;
