import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

export default function Slider() {

    const testimonials = [
        {
            name: "Yatesh Bhragu ",
            role: "Founder, Startup Co.",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
            review:
                "They built my business website in record time. Super responsive and elegant design. Highly recommend!",
        },
        {
            name: "Priya Verma",
            role: "Owner, Fashion Store",
            img: "https://randomuser.me/api/portraits/women/45.jpg",
            review:
                "Best team for website development. My ecommerce site now gets more sales thanks to their SEO & design.",
        },
        {
            name: "Amit Patel",
            role: "CEO, Tech Solutions",
            img: "https://randomuser.me/api/portraits/men/74.jpg",
            review:
                "From design to deployment, everything was smooth. They really care about quality and client success.",
        },
        {
            name: "Sneha Gupta",
            role: "Marketing Head, Brandify",
            img: "https://randomuser.me/api/portraits/women/12.jpg",
            review:
                "They completely transformed our online presence. The team is very professional and supportive.",
        },
    ];

    // #302b63 
    return (
        <section className="relative py-16 bg-gradient-to-b from-[#000000] via-[#12074e] to-[#000000] text-white">
            <div className="max-w-6xl mx-auto px-6 text-center relative">
                {/* Heading */}
               

                {/* Swiper Slider */}
                <Swiper
                    modules={[Pagination, Autoplay, Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    className="pb-12"
                    
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg max-w-xl mx-auto">
                                <div className="flex justify-center mb-4">
                                    <img
                                        src={t.img}
                                        alt={t.name}
                                        className="w-16 h-16 rounded-full border-2 border-blue-700"
                                    />
                                </div>
                                <p className="italic text-gray-200 mb-4">"{t.review}"</p>
                                <div className="flex justify-center text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
                                <h4 className="font-semibold">{t.name}</h4>
                                <p className="text-gray-400 text-sm">{t.role}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
