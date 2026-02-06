import { Testimony } from "@/lib/types/Testimony";

export const mockTestimonials: Testimony[] = [
    {
        _id: "1",
        name: 'John Doe',
        comment: 'This is an amazing product! Highly recommended.',
        imageUrl: "default_user_image",
        relation: "FRIEND",
    },
    {
        _id: "2",
        name: 'Jane Smith',
        comment: 'Great service and excellent support.',
        imageUrl: "default_user_image",
        relation: "FAMILY",
    },
    {
        _id: "3",
        name: 'Alice Johnson',
        comment: 'The best experience I\'ve ever had.',
        imageUrl: "default_user_image",
        relation: "COLLEAGUE",
    },
    {
        _id: "4",
        name: 'Bob Brown',
        comment: 'Absolutely love it! Will buy again.',
        imageUrl: "default_user_image",
        relation: "OTHER",
    },
    {
        _id: "5",
        name: 'Charlie Davis',
        comment: 'Top-notch quality and service.',
        imageUrl: "default_user_image",
        relation: "FRIEND",
    },
    {
        _id: "6",
        name: 'Eve White',
        comment: 'Exceeded my expectations!',
        imageUrl: "default_user_image",
        relation: "COLLEAGUE",
    },
];
