import { BellIcon, SearchIcon, SettingsIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarImage } from "./ui/avatar";

export function Header() {
    return(
        <div className="container bg-white shadow-md px-5 py-3 flex items-center justify-between">
            <div className="text-xl font-semibold">Overview</div>

            <div className="flex items-center space-x-4">

                <div className="relative flex items-center mt-2">
                    <span className="absolute">
                        <SearchIcon className="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500"/>
                    </span>
                    <Input type="text" placeholder="Search for something" className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-xl pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                </div>

                <Button variant="ghost" size="icon" >
                    <SettingsIcon className="h-5 w-5"/>
                </Button>
                <Button variant="ghost" size="icon">
                    <BellIcon className="h-5 w-5"/>
                </Button>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="Avatar"/>
                </Avatar>
            </div>
        </div>
    )
}