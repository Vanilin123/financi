'use client'

import { FormProvider, useForm } from "react-hook-form"
import Link from "next/link"
import { BdrForm } from "./form/TimeBlockingForm"
import { TypeBdr } from "@/types/bdr.types"
import { BdrList } from "./ExpensesList"





export function Bdr() {
    const methods = useForm<TypeBdr>()
	return( <div>
        <FormProvider{...methods}>
        <div className="FormBlocking">
            <BdrForm/>
            <BdrList/>
        </div>
        </FormProvider>
       
    </div>
    )
}
