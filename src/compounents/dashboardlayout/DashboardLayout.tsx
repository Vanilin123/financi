import { PropsWithChildren } from "react";

import { Sidebar } from "./sidebar/Sidebar";



export default function DashboardLayout({children}: PropsWithChildren<unknown>){
    return (
        <div>
            <Sidebar/>
            <main className="container">
                {children}
            </main>
        </div>
    )
}