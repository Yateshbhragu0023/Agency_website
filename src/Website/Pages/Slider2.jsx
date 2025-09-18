import React, { useContext, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { MainContext } from '../../context/Context';

export default function Slider2() {
    const{ API_BASE_URL, project_URL, FetchAllProjects, ToastNotify, Projects} = useContext(MainContext)

console.log(Projects)
useEffect(
    ()=>{
        FetchAllProjects()
    },[]
)
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
                    {Projects.map((t, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-white/10 border border-white/20 rounded-2xl p-4 shadow-lg max-w-xl mx-auto">
                                <div className="flex justify-center mb-4">
                                    <img
                                        src={API_BASE_URL + `/projectimages/${t.ImageName}`}
                                        alt={t.name}
                                        className="w-full h-full  border-2 border-blue-700"
                                    />
                                </div>
                                <h4 className="font-semibold">{t.title}</h4>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
