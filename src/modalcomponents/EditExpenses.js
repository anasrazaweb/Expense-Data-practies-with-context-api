"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useExpense } from '@/contexts/ExpenseContext'; // Import your context
import { Icon } from '@iconify/react';

const EditExpense = ({ onClose, expenseToEdit, itemData }) => {
    console.log(itemData, "itemData")

    const schema = yup.object().shape({
        ExpenseName: yup.string().required('Expense Name is required'),
        amount: yup.number().typeError('Amount must be a number').required('Amount is required'),
        wallet: yup.string().required('Wallet is required'),
    });

    const defaultValues = {
        ExpenseName: expenseToEdit?.ExpenseName || '',
        amount: expenseToEdit?.amount || '',
        wallet: expenseToEdit?.wallet || '',
    };

    const { editExpense } = useExpense(); // Use the correct context function
    console.log(editExpense, "editExpense")

    const methods = useForm({
        resolver: yupResolver(schema),
        defaultValues
    });


    const { handleSubmit, reset, formState: { errors } } = methods;

    const onSubmit = async (data) => {
        try {
            await editExpense({ ...data, id: expenseToEdit.id });
            reset();
            onClose();
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className='flex justify-between items-center'>
                <div className='font-semibold flex gap-2 items-center'>
                    <div className='bg-lite-purple-100 h-9 w-9 rounded-md flex justify-center items-center text-dark'>
                        {/* Replace with appropriate icon */}
                        <span className='text-[25px]'>
                            <Icon icon="hugeicons:note-edit" />
                        </span>
                    </div>
                    <span className='text-[18px]'>Edit Expense</span>
                </div>
                <div>
                    <button type="button" onClick={onClose} className='text-error'>
                        <span className='text-error cursor-pointer'>
                            <Icon icon="ep:close-bold" />
                        </span>
                    </button>
                </div>
            </div>

            <div className='mt-10'>
                <div className='flex items-end gap-2'>
                    <div className='md:w-[570px]'>
                        <label className='block'>
                            <span className='text-sm'>Expense Name</span>
                            <input
                                className="border-[1px] border-zinc-300 w-full py-2 px-2 rounded-md text-sm"
                                name="ExpenseName"
                                type="text"
                                placeholder="Expense Name"
                                {...methods.register('ExpenseName')}
                            />
                            {errors.ExpenseName && <p className='text-red-500 text-xs'>{errors.ExpenseName.message}</p>}
                        </label>
                    </div>
                </div>
                <div className='block md:flex gap-2 mt-4'>
                    <div className='w-full'>
                        <label className='block'>
                            <span className='text-sm'>Amount</span>
                            <input
                                className="border-[1px] border-zinc-300 w-full py-2 px-2 rounded-md text-sm"
                                name="amount"
                                type="text"
                                placeholder="Enter Your Amount"
                                {...methods.register('amount')}
                            />
                            {errors.amount && <p className='text-red-500 text-xs'>{errors.amount.message}</p>}
                        </label>
                    </div>
                    <div className='w-full md:mt-0 mt-3'>
                        <label className='block'>
                            <span className='text-sm'>Wallet</span>
                            <input
                                className="border-[1px] border-zinc-300 w-full py-2 px-2 rounded-md text-sm"
                                name="wallet"
                                type="text"
                                placeholder="Enter Your Wallet"
                                {...methods.register('wallet')}
                            />
                            {errors.wallet && <p className='text-red-500 text-xs'>{errors.wallet.message}</p>}
                        </label>
                    </div>
                </div>
            </div>

            <div className='font-semibold mt-7 flex justify-end gap-5'>
                <button
                    type="button"
                    onClick={onClose}
                    className='border-error border rounded-md px-3 py-[2px] text-sm text-error'
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className='bg-dark text-white px-3 rounded-md py-2 text-sm'
                >
                    Edit Expense
                </button>
            </div>
        </form>
    );
};

export default EditExpense;
