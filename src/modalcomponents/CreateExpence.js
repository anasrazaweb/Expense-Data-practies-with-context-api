"use client";

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import * as yup from 'yup';
import { useExpense } from '@/contexts/ExpenseContext';
import Modal from '@/components/CustomModal/Modal';
import IconeModal from './IconeModal';

const schema = yup.object().shape({
    ExpenseName: yup.string().required('Expense Name is required'),
    amount: yup.number().typeError('Amount must be a number').required('Amount is required'),
    wallet: yup.string().required('Wallet is required'),
});

const CreateExpense = ({ setIsOpenCreate }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleModalOpen = () => {
        setIsOpenModal(true);
    };

    const handleModalClose = () => {
        setIsOpenModal(false);
    };

    const [formValues, setFormValues] = useState({
        ExpenseName: '',
        amount: '',
        wallet: '',
    });

    const [errors, setErrors] = useState({});
    const { addExpense, selectedIcon } = useExpense();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({ ...prevValues, [name]: value }));
    };

    const validateForm = async () => {
        try {
            await schema.validate(formValues, { abortEarly: false });
            setErrors({});
            return true;
        } catch (err) {
            if (err instanceof yup.ValidationError) {
                const errorMessages = err.inner.reduce((acc, error) => {
                    acc[error.path] = error.message;
                    return acc;
                }, {});
                setErrors(errorMessages);
            }
            return false;
        }
    };

    const handleSubmit = async () => {
        const isValid = await validateForm();
        if (isValid) {
            const newExpense = { ...formValues, id: Math.random() };
            addExpense(newExpense);
            setFormValues({ ExpenseName: '', amount: '', wallet: '', iconOne: selectedIcon });
            setIsOpenCreate(false);
            // setSelectedIcon(null)
        }
    };

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='font-semibold flex gap-2 items-center'>
                    <div className='bg-lite-purple-100 h-9 w-9 rounded-md flex justify-center items-center text-dark'>
                        <Icon icon="material-symbols:send-money-rounded" fontSize="25px" />
                    </div>
                    <span className='text-[18px]'>Add Expense</span>
                </div>
                <div>
                    <Icon onClick={() => setIsOpenCreate(false)} icon="mdi:close-thick" className='text-error cursor-pointer' />
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
                                value={formValues.ExpenseName}
                                onChange={handleChange}
                            />
                            {errors.ExpenseName && <p className='text-red-500 text-xs'>{errors.ExpenseName}</p>}
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
                                value={formValues.amount}
                                onChange={handleChange}
                            />
                            {errors.amount && <p className='text-red-500 text-xs'>{errors.amount}</p>}
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
                                value={formValues.wallet}
                                onChange={handleChange}
                            />
                            {errors.wallet && <p className='text-red-500 text-xs'>{errors.wallet}</p>}
                        </label>
                    </div>
                </div>
            </div>
            <div className='font-semibold mt-7 flex justify-end gap-5'>
                <button
                    type="button"
                    onClick={() => setIsOpenCreate(false)}
                    className='border-error border rounded-md px-3 py-[2px] text-sm text-error'
                >
                    Cancel
                </button>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className='bg-dark text-white px-3 rounded-md py-2 text-sm'
                >
                    Add Expense
                </button>
            </div>
        </div>
    );
};

export default CreateExpense;
