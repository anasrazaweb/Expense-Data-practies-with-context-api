import AllExpensesData from "@/components/allexpensesdata/AllExpensesData";
import Header from "@/components/header/Header";
import SubHeader from "@/components/subheader/SubHeader";
import { ExpenseProvider } from "@/contexts/ExpenseContext";
import React from "react";

export default function Home() {
  return (
    <ExpenseProvider>
      <main className="h-full w-full">
        <div className="h-screen w-full bg-gradient-purple flex justify-center items-center">
          <div className="w-full md:w-[70%] h-full sm:h-[90vh] bg-white md:rounded-md p-6 md:p-10 overflow-auto">
            <header>
              <Header />
              <SubHeader />
            </header>
            <div className="mt-10 overflow-auto">
              <AllExpensesData />
            </div>
          </div>
        </div>
      </main>
    </ExpenseProvider>
  );
}
