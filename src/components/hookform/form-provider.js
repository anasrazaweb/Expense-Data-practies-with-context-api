// import React from 'react'
// import { FormProvider as Form } from 'react-hook-form'

// const FormProvider = ({ children, methods, onSubmit }) => {
//     return (
//         <Form {...methods} className="w-full">
//             <form className='' onSubmit={onSubmit}>{children}</form>
//         </Form>
//     )
// }


// export default FormProvider


"use client";

import React from 'react';
import { FormProvider as RHFormProvider } from 'react-hook-form';

const FormProvider = ({ children, onSubmit, methods }) => {
    return (
        <RHFormProvider {...methods}>
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </RHFormProvider>
    );
};

export default FormProvider;

