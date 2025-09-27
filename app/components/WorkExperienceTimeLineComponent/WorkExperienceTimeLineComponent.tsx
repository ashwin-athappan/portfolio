import React from 'react';

interface WorkExperienceTimelineEvent {
    duration: string;
    position: string;
    company: string;
    location: string;
    startDate: Date;
    details: string | string[];
}

interface TimelineProps {
    events: WorkExperienceTimelineEvent[];
    className?: string;
}

const WorkExperienceTimeLineComponent: React.FC<TimelineProps> = ({
                                                                      events = [],
                                                                      className = ""
                                                                  }) => {

    return (
        <div
            className="min-h-screen py-8 bg-white border-2 border-transparent dark:bg-dark-element dark:border-2 dark:border-dark-nav-border p-6 rounded-lg shadow-sm">
            <div className={`mt-12 text-center ${className}`}>
                <ul className="relative bg-opacity-5 border-l-4 border-blue-400 right-[-175px] pl-12 rounded-r-lg mx-auto list-none text-left font-light text-base leading-6 tracking-wide text-gray-900 dark:text-white text-opacity-80">
                    {events.map((event, index) => (
                        <li
                            key={index}
                            className={`relative pb-6 mb-12 border-b border-dashed border-white border-opacity-10 ${
                                index === events.length - 1 ? 'pb-0 mb-0 border-b-0' : ''
                            }`}
                            data-date={event.duration}
                        >
                            <div className="flex justify-between">
                                {/* Date label */}
                                <div
                                    className="absolute top-0 text-gray-900 dark:text-white text-opacity-40 text-sm text-right min-w-30"
                                    style={{
                                        left: 'calc(-180px - 12px - 4px - 11px - 8px)'
                                    }}
                                >
                                    {event.duration}
                                </div>

                                {/* Timeline dot */}
                                <div
                                    className="absolute w-3 h-3 rounded-full top-2"
                                    style={{
                                        left: 'calc(-12px - 4px - 5px)',
                                        boxShadow: '0 0 0 4px rgb(66, 152, 195)'
                                    }}
                                />

                                <div className="w-[50vw]">
                                    {/* Content */}
                                    <h3 className="font-light text-xl tracking-widest mb-3">
                                        {event.position}
                                    </h3>

                                    <p className="text-sm text-gray-600 dark:text-gray-300">{event.company} | {event.location}</p>

                                    {Array.isArray(event.details) ? (
                                        <ul>
                                            {event.details.map((paragraph, idx) => (
                                                <li key={idx} className="mb-3 last:mb-0 max-w-[450px]">
                                                    {paragraph}
                                                </li>
                                            ))
                                            }
                                        </ul>
                                    ) : (
                                        <p>{event.details}</p>
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WorkExperienceTimeLineComponent;