import React from 'react';
import { configSize } from "@/app/config/configSize";

const Header = () => {
    return (
        <header className={`flex items-center px-6 gap-1 h-[${configSize.headerSize}] w-full border-b border-gray-200`}>
            Logo
        </header>
    );
};

export default Header;