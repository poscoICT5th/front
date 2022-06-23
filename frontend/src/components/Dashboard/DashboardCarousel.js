import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function DashboardCarousel() {
    return (
        <div className="text-center">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <a className="block" href="">

                        <div className="p-4">
                            <h5 className="text-xl font-bold text-gray-900">
                                Finding the Journey to Mordor
                            </h5>
                            <p className="mt-2 text-gray-500">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
                                labore natus atque, ducimus sed.
                            </p>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a className="block" href="">

                        <div className="p-4">
                            <h5 className="text-xl font-bold text-gray-900">
                                Finding the Journey to Mordor
                            </h5>
                            <p className="mt-2 text-gray-500">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
                                labore natus atque, ducimus sed.
                            </p>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a className="block" href="">

                        <div className="p-4">
                            <h5 className="text-xl font-bold text-gray-900">
                                Finding the Journey to Mordor
                            </h5>
                            <p className="mt-2 text-gray-500">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
                                labore natus atque, ducimus sed.
                            </p>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a className="block" href="">

                        <div className="p-4">
                            <h5 className="text-xl font-bold text-gray-900">
                                Finding the Journey to Mordor
                            </h5>
                            <p className="mt-2 text-gray-500">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
                                labore natus atque, ducimus sed.
                            </p>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a className="block" href="">

                        <div className="p-4">
                            <h5 className="text-xl font-bold text-gray-900">
                                Finding the Journey to Mordor
                            </h5>
                            <p className="mt-2 text-gray-500">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
                                labore natus atque, ducimus sed.
                            </p>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a className="block" href="">

                        <div className="p-4">
                            <h5 className="text-xl font-bold text-gray-900">
                                Finding the Journey to Mordor
                            </h5>
                            <p className="mt-2 text-gray-500">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
                                labore natus atque, ducimus sed.
                            </p>
                        </div>
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default DashboardCarousel