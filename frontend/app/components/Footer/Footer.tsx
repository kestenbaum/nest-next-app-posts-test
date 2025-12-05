import React from 'react';
import { configSize } from "@/app/config/configSize";

const Footer = () => {
    return (
        <footer className={`flex items-center h-[${configSize.footerSize}] px-6 w-full border-t border-gray-200`}>
            Footer
        </footer>
    );
};

export default Footer;