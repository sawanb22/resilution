import React, { useState } from 'react';

const FaqSection = () => {
    const faqs = [
        {
            question: 'How is Resilution different from traditional investment platforms?',
            answer:
                'Resilution uses blockchain technology to provide real-time transparency, automated revenue sharing, and direct engagement between businesses and investors without intermediaries.',
        },
        {
            question: 'What are Credits and how do they work?',
            answer:
                'Credits are USD-pegged units used on the platform to make investing simple and stable while avoiding crypto volatility.',
        },
        {
            question: 'How are profits distributed to investors?',
            answer:
                'Smart contracts automatically distribute profits based on agreed investment terms and real-time performance data.',
        },
    ];

    // State to track expanded accordion items (by index)
    // Defaulting to the first item open as shown in the design
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white text-black py-24" id="faq">
            <div className="max-w-[1000px] mx-auto px-8 md:px-16">

                {/* Header */}
                <h2
                    className="text-center uppercase mb-20"
                    style={{ fontSize: '36px', lineHeight: '42px', fontWeight: 500 }}
                >
                    Frequently Asked Questions
                </h2>

                {/* Accordion List */}
                <div className="space-y-0">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-200"
                        >
                            <button
                                className="w-full flex justify-between items-center py-8 text-left focus:outline-none group"
                                onClick={() => toggleFaq(index)}
                            >
                                <h3
                                    className="font-medium pr-8"
                                    style={{ fontSize: '20px', lineHeight: '28px' }}
                                >
                                    {faq.question}
                                </h3>

                                {/* Chevron Icon */}
                                <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </button>

                            {/* Expandable Content */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[200px] opacity-100 mb-8' : 'max-h-0 opacity-0 mb-0'}`}
                            >
                                <p
                                    className="text-gray-500 font-normal leading-relaxed"
                                    style={{ fontSize: '16px', maxWidth: '800px' }}
                                >
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FaqSection;
