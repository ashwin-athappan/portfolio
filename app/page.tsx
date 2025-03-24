'use client';

import Map from "@/app/components/Map/Map";
import Profile from "@/app/components/Profile/Profile";
import Techs from "@/app/components/Techs/Techs";
import GitHub from "@/app/components/GitHub/GitHub";
import LinkedIn from "@/app/components/LinkedIn/LinkedIn";
import YouTube from "@/app/components/YouTube/YouTube";
import ContactMe from "@/app/components/ContactMe/ContactMe";
import React from "react";

export default function About() {
    return (
        <div>
            <div className="container mt-5 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 px-10 xl:px-32 pb-20 content">
                <Profile/>
                <Map/>
                <Techs />
                <GitHub />
                <LinkedIn />
                <YouTube />
                <ContactMe />
            </div>
        </div>
    );
}
