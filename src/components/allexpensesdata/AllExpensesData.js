"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Modal from "../CustomModal/Modal";
import CustomDeleteModal from "@/modalcomponents/CustomDeleteModal";
import EditExpenses from "@/modalcomponents/EditExpenses";
import { useExpense } from "@/contexts/ExpenseContext";
import Image from "next/image";

const AllExpensesData = () => {
  const { formData, selectedIcon, removeExpense } = useExpense();
  const [isOpenModal, setIsOpenModal] = useState({
    delete: false,
    edit: false,
  });
  const [selectedExpense, setSelectedExpense] = useState(null); // State to store the selected expense

  const handleModalOpen = (type, expense = null) => {
    setSelectedExpense(expense); // Set the selected expense when opening the edit modal
    setIsOpenModal({ delete: false, edit: false, [type]: true });
  };

  const handleModalClose = () => {
    setIsOpenModal({ delete: false, edit: false });
    setSelectedExpense(null); // Clear the selected expense when closing the modal
  };

  const ListHeader = () => (
    <div className="flex justify-between text-sm flex-wrap">
      <h6>August 31-2024</h6>
      <div className="flex gap-5 flex-wrap">
        <p>Number of transactions - {formData.length}</p>
        <p>
          Value - $
          {formData
            .reduce((acc, item) => acc + Number(item.amount), 0)
            .toFixed(2)}
        </p>
      </div>
    </div>
  );

  const ListContained = () => (
    <div className="mt-5 shadow-md">
      {formData.length > 0 ? (
        <div>
          <div className="flex flex-col gap-3 shadow-md">
            {formData.map((item) => (
              <div
                key={item.id}
                className="p-2 md:p-3 shadow-md border rounded-md mt-2 flex justify-between"
              >
                <div className="flex gap-3">
                  <div className="bg-lite-purple-100 md:w-10 h-8 w-8 md:h-10 flex justify-center items-center">
                    <Icon icon={selectedIcon} className="text-dark text-xl" />
                  </div>
                  <div className="leading-none">
                    <h4 className="text-[15px] md:text-[16px] font-semibold">
                      {item.ExpenseName}
                    </h4>
                    <p className="text-[11.5px] mt-1 md:mt-2 text-purple-500">
                      {item.wallet}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 md:gap-3 items-start md:items-center">
                  <h4 className="md:text-md">${item.amount}</h4>
                  <div
                    onClick={() => handleModalOpen("edit", item)} // Pass the selected expense
                    className="bg-lite-purple-100 w-7 md:w-8 cursor-pointer h-7 md:h-8 flex justify-center items-center"
                  >
                    <Icon icon="tabler:edit" className="text-dark text-xl" />
                  </div>
                  <div
                    onClick={() => handleModalOpen("delete", item)}
                    className="bg-lite-purple-100 w-7 md:w-8 cursor-pointer h-7 md:h-8 flex justify-center items-center"
                  >
                    <Icon
                      icon="weui:delete-on-filled"
                      className="text-error text-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {isOpenModal.delete && (
            <Modal isOpen={isOpenModal.delete} onClose={handleModalClose}>
              <CustomDeleteModal
                onClose={handleModalClose}
                itemID={selectedExpense?.id}
                removeExpense={removeExpense}
              />
            </Modal>
          )}
          {isOpenModal.edit && (
            <Modal isOpen={isOpenModal.edit} onClose={handleModalClose}>
              <EditExpenses
                onClose={handleModalClose}
                expenseToEdit={selectedExpense}
              />
            </Modal>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center mt-5 md:mt-10 leading-none overflow-hidden flex-col">
          <Image alt="img" src="/Images/emty.jpg" height={200} width={200} />
          <h1 className="text-md font-semibold text-[#646B94]">
            Your Expenses is Empty
          </h1>
        </div>
      )}
    </div>
  );

  return (
    <div>
      <ListHeader />
      <ListContained />
    </div>
  );
};

export default AllExpensesData;
