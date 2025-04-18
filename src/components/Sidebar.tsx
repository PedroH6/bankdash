import { CreditCard } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export interface SidebarItem {
    icon: React.ReactElement,
    label: string,
    path: string // Opacional: para navegação
    active?: boolean, //Opacional: para inidicar o item ativo
}

interface SidebarProps {
    items: SidebarItem[],
}




export function Sidebar({ items }: SidebarProps ) {
    return(
        <div className="flex flex-col w-64 border-r bg-secondary h-screen">
            <div className="flex item-center justify-start h-16 pt-5 px-4">
                <CreditCard  className="mr-1 h-10 w-8 text-blue-900"/>
                <span className="font-bold text-3xl text-blue-950">BankDash.</span>
            </div>
            <nav className="flex flex-col space-y-1 mt-6 px-2">
                {items.map((item, index) => (
                    <Button
                        key={index}
                        variant="ghost"
                        className={cn(
                            "w-fuill justify-start font-normal",
                            item.active && "bg-accent text-accent-foreground hover:text-accent-foreground",
                            "!pl-6" // Adiciona um padding á esquerda
                        )}
                        >
                            <span>{item.label}</span>
                        </Button>
                ))}
            </nav>
        </div>
    )
}