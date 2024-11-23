
"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Icon } from '@iconify/react';
import RHFInput from '../hookform/RHFInput';
import FormProviderComponent from '../hookform/form-provider';
import Modal from '../CustomModal/Modal';
import CreateExpence from '@/modalcomponents/CreateExpence';
import { useExpense } from '@/contexts/ExpenseContext';

const Header = () => {
    const [isOpenModal, setIsOpenModal] = useState({ AllExpenses: false });
    const { searchExpense } = useExpense(); // Access searchExpense from context
    const methods = useForm(); // Initialize useForm hook here
    const [searchResults, setSearchResults] = useState([]);
    console.log(searchResults,"searchResults")

    const handleModalOpen = (type) => {
        setIsOpenModal({ [type]: true });
    };

    const handleModalClose = () => {
        setIsOpenModal({ AllExpenses: false });
    };

    const onSubmit = (data) => {
        const results = searchExpense(data.SearchExpense);
        setSearchResults(results);
        console.log(results); // Handle or display search results
    };

    const Logo = () => (
        <div className='flex items-center'>
            <Icon icon="ic:round-payments" fontSize={30} />
            <div className='text-logo font-logoBold'>
                Exp<span className=' text-dark'>Money</span>
            </div>
        </div>
    );

    const SearchBox = () => (
        <FormProviderComponent methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex items-center text-sm shadow-sm justify-center bg-lite-purple-50 border border-[#f3ceff] py-[1px] rounded-full px-5">
                <Icon icon="ic:sharp-search" fontSize={"23px"} color='purple' />
                <RHFInput className=" w-full " type="text" placeholder="Search Your Expense " name="SearchExpense" />
            </div>

            <Modal isOpen={isOpenModal.AllExpenses}>
                <CreateExpence setIsOpenCreate={handleModalClose} />
            </Modal>
        </FormProviderComponent>
    );

    const CreateExpense = () => (
        <button
            onClick={() => handleModalOpen("AllExpenses")}
            className=' bg-btn-contained flex  gap-1 text-sm items-center px-3 py-2 hover:bg-btn-hover transition-all border-none rounded-md font-btnBold  text-white'>
            <Icon icon="ri:add-line" fontSize="22px" />
            <span>Expense</span>
        </button>
    );

    return (
        <div>
            <div className=' flex items-center justify-between'>
                <Logo />
                <div className=' md:flex hidden '><SearchBox /></div>
                <CreateExpense />
            </div>
            <div className=' md:hidden mt-5 flex  justify-center'><SearchBox /></div>
        </div>
    );
};

export default Header;


