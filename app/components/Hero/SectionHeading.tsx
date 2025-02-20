import React from "react";

interface headingProps {
    heading: string;
}

export default function SectionHeading(props: headingProps) {
    return (
        <div className="p-5 mr-[10rem] min-w-[200px]">
            <h1 className="text-3xl text-jetBlack dark:text-jetWhite">{props.heading}</h1>
            <hr />
            <br />
        </div>
    );
}