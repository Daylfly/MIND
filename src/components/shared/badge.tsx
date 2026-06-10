import React from 'react'
import {cn} from "@/lib/utils";

interface Props {
    className?:string;
    children:React.ReactNode;
}

export const Badge: React.FC<Props> = ({className, children}) => {
    return (
        <div className={cn(className, "px-5 text-white py-1.5 border border-white/40 rounded-full")}>
            {children}
        </div>
    );
}