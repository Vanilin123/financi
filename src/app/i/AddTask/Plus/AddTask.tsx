'use client'

import { FormProvider, useForm } from "react-hook-form"
import { IncomeForm } from "./form/TimeBlockingForm"
import { TypeExpenses } from "@/types/expenses.types"
import { IncomeList } from "./ExpensesList"
import { Pie } from "./PieList"
import { LineList } from "./LineList"
import Link from "next/link"





export function AddTask() {
	const methods = useForm<TypeExpenses>()

	return( <div>
        <div className="flex__expenses">
        <Link
			
            href={'/i/AddTask'}
            className='header__list'
        >
            <span>Расходы</span>
        </Link>
        <Link
			
            href={'/i/AddTask/Plus'}
            className='header__list'
        >
            <span>Доходы</span>
        </Link>
        </div>
        <FormProvider {...methods}>
            <div className="FormBlocking">
            <div className="graffic">
            <Pie/>
            </div>
            <div className="graffic__line">
               <LineList/> 
            </div>
            <div className="form-filter">
            <IncomeForm/>
            </div>
             <IncomeList/> 
            </div>
        </FormProvider>
       
    </div>
    )
}
