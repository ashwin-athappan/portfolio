"use client";

import React from 'react';

interface StaticPillProps {
    content: string | number | undefined;
}

const LinkArrow = ({content}: StaticPillProps): React.JSX.Element => {

    return (
        <div
            className="bg-white dark:bg-dark-element min-w-10 h-10 p-1 rounded-3xl absolute bottom-4 right-4 flex justify-center items-center ring-1 ring-gray-400 hover:ring-4 hover:ring-gray-200 transition-all duration-700 ease-in-out">
            Subscribers: {content}
        </div>
    );
};

export default LinkArrow;