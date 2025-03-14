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

            const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d311.8305188159363!2d-97.11503502124208!3d32.72689034513839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d133a6a4ab1%3A0x68fc7be57ddc95e9!2s721%20W%20Mitchell%20Cir%2C%20Arlington%2C%20TX%2076013!5e0!3m2!1sen!2sus!4v1740872727981!5m2!1sen!2sus"
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
                <div
                    className={`${styles.hoverShake} absolute inset-0 m-auto w-28 h-28 border-[5px] border-white rounded-full flex items-center justify-center bg-sky-400/55 dark:bg-slate-500/50`}>
                    <Image
                        src={not_bragging}
                        alt="Default Image"
                        className={`${styles.shake} ${styles.defaultImage} w-20`}
                        height={150}
                        width={150}
                    />
                    <Image
                        src={not_bragging}
                        alt="Hover Image"
                        className={`${styles.shake} ${styles.hoverImage} w-20`}
                        height={50}
                        width={50}
                    />
                </div>
            </div>
        </div>
    );
};

export default Map;