"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
    const [selectedIcon, setSelectedIcon] = useState(null);
    console.log(selectedIcon, "selectedIcon");

    const [formData, setFormData] = useState(() => {
        // Check if window is defined
        if (typeof window !== "undefined") {
            const storedData = localStorage.getItem("formData");
            return storedData ? JSON.parse(storedData) : [];
        }
        return []; // Default state when localStorage is unavailable
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("formData", JSON.stringify(formData));
        }
    }, [formData]);

    const addExpense = (expense) => {
        setFormData((prevData) => [...prevData, expense]);
    };

    const removeExpense = (id) => {
        setFormData((prevExpenses) =>
            prevExpenses.filter((expense) => expense.id !== id)
        );
    };

    const editExpense = (updatedExpense) => {
        setFormData((prevData) =>
            prevData.map((expense) =>
                expense.id === updatedExpense.id ? updatedExpense : expense
            )
        );
    };

    const searchExpense = (query) => {
        if (!query) return formData;

        return formData
            .filter((expense) =>
                expense.ExpenseName.toLowerCase().includes(query.toLowerCase())
            )
            .sort((a, b) => b.priority - a.priority); // Sort by priority (highest first)
    };

    const removeAllExpenses = () => {
        setFormData([]);
    };

    const value = {
        formData,
        addExpense,
        setSelectedIcon,
        selectedIcon,
        removeExpense,
        removeAllExpenses,
        editExpense,
        searchExpense,
    };

    return (
        <ExpenseContext.Provider value={value}>
            {children}
        </ExpenseContext.Provider>
    );
};

export const useExpense = () => useContext(ExpenseContext);
