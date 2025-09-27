'use client';

// pages/maps.js (or components/Maps.js)
import {useEffect, useState} from 'react';
import styles from './Map.module.css';
import Image from "next/image";

import not_bragging from '@/public/assets/me/not_bragging.png';

// Simple in-memory cache service (equivalent to MapCacheService)
const mapCache = {
    cachedUrl: "",
    getMapDetails: () => mapCache.cachedUrl,
    setMapDetails: (url: string) => {
        mapCache.cachedUrl = url;
    }
};

const Map = () => {
    const [mapUrl, setMapUrl] = useState("");

    useEffect(() => {
        // Equivalent to ngOnInit with setTimeout
        const timer = setTimeout(() => {
            loadMapUrl();
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const loadMapUrl = () => {
        const cachedUrl = mapCache.getMapDetails();

        if (cachedUrl) {
            setMapUrl(cachedUrl);
        } else {

            // To replace this URL go to Google Maps, find a location, share -> embed then copy url.

            const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.198732530188!2d-97.12248772392206!3d32.73391328618675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d0c29dff3f5%3A0x6664eeaccb6a1a47!2s402%20Kerby%20St%2C%20Arlington%2C%20TX%2076013!5e0!3m2!1sen!2sus!4v1758909094897!5m2!1sen!2sus"
            mapCache.setMapDetails(url);
            setMapUrl(url);
        }
    };

    return (
        <div className="md:row-span-1 col-span-1 md:col-span-1 bg-white border-2 border-transparent
            dark:bg-dark-element dark:border-2 dark:border-dark-nav-border p-1
            rounded-[30px] relative h-[280px] justify-center overflow-hidden flex hover:shadow-lg dark:hover:shadow-xl">
            <div className="">
                {mapUrl && (
                    <iframe
                        className="dark:invert-90"
                        src={mapUrl}
                        width="100%"
                        height="100%"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                        style={{borderRadius: '20px'}}
                    />
                )}
            </div>
        </div>
    );
};

export default Map;