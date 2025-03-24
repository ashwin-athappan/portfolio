"use client";

import React, {useEffect} from 'react';
import styles from './Testimonials.module.css';
import axios from "axios";
import Image from "next/image";

import blank_user_black from "@/public/assets/svg/user_black.svg";
// import {useTheme} from "next-themes";

interface TestimonialRelation {
    FRIEND: "Friend";
    FAMILY: "Family";
    COLLEAGUE: "Colleague";
    OTHER: "Other";
}

interface TestimonialProps {
    _id: number;
    name: string;
    comment: string;
    image: string; // New field for profile image
    relation?: keyof TestimonialRelation;
}

const Testimonials = (): React.JSX.Element => {

    // const {theme} = useTheme();

    const testimonials: TestimonialProps[] = [
        {
            _id: 1,
            name: 'John Doe',
            comment: 'This is an amazing product! Highly recommended.',
            image: blank_user_black,
            relation: "FRIEND",
        },
        {
            _id: 2,
            name: 'Jane Smith',
            comment: 'Great service and excellent support.',
            image: blank_user_black,
            relation: "FAMILY",
        },
        {
            _id: 3,
            name: 'Alice Johnson',
            comment: 'The best experience I’ve ever had.',
            image: blank_user_black,
            relation: "COLLEAGUE",
        },
        {
            _id: 4,
            name: 'Bob Brown',
            comment: 'Absolutely love it! Will buy again.',
            image: blank_user_black,
            relation: "OTHER",
        },
        {
            _id: 5,
            name: 'Charlie Davis',
            comment: 'Top-notch quality and service.',
            image: blank_user_black,
            relation: "FRIEND",
        },
        {
            _id: 6,
            name: 'Eve White',
            comment: 'Exceeded my expectations!',
            image: blank_user_black,
            relation: "COLLEAGUE",
        },
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            axios.get('/api/testimonials')
                .then((response) => {
                    console.log('Testimonials:', response.data.testimonies);
                })
                .catch((error) => {
                    console.error('Failed to fetch testimonials:', error);
                });
        }, 3000000); // 50 minutes

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="max-w-full flex space-y-8">
            {[1, 2].map((row) => (
                <div
                    key={row}
                    className="relative mx-5 overflow-hidden"
                    // onMouseEnter={(e) => {
                    //     const container = e.currentTarget.querySelector('#animate_scroll');
                    //     if (container) container.style.animationPlayState = 'paused';
                    // }}
                    // onMouseLeave={(e) => {
                    //     const container = e.currentTarget.querySelector('#animate_scroll');
                    //     if (container) container.style.animationPlayState = 'running';
                    // }}
                >
                    <div id="animate_scroll" className={`flex ${styles.animate_scroll}`}>
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div
                                key={`${row}-${testimonial._id}-${index}`}
                                className="flex flex-col w-64 p-4 my-5 bg-white dark:bg-dark-element dark:border-2 dark:border-dark-nav-border shadow-lg rounded-lg mx-2"
                            >
                                <hr/>
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    height={50}
                                    width={50}
                                    className="w-16 h-16 rounded-full mx-auto mb-2"
                                />
                                <hr/>
                                <h3 className="font-bold text-center">{testimonial.name}</h3>
                                <p className="text-justify">{testimonial.comment}</p>
                                <hr/>
                                <div className="w-full flex justify-center">
                                    {testimonial.relation && (
                                        <p className="text-xs rounded-2xl p-2 bg-amber-200 w-fit
                                     text-gray-500 text-center mt-1">
                                            Relation: {testimonial.relation}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
