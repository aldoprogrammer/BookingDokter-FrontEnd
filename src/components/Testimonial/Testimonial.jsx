import React from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import patientAvatar from '../../assets/images/patient-avatar.png'
import { HiStar } from 'react-icons/hi'

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
        <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }}
        >
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img 
                            src={patientAvatar}
                            alt=''
                        />
                        <div>
                            <h2 className="leading-[30px] text-lg font-semibold
                            text-headingColor">
                                Aldo Lata Soba
                            </h2>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-base leading-7 mt-4 text-textColor font-normal'>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam quaerat quidem quasi, quibusdam quod quaerat 
                        quasi, quibusdam quod quaerat quasi, quibusdam quod quaerat"
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img 
                            src={patientAvatar}
                            alt=''
                        />
                        <div>
                            <h2 className="leading-[30px] text-lg font-semibold
                            text-headingColor">
                                Aldo Lata Soba
                            </h2>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-base leading-7 mt-4 text-textColor font-normal'>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam quaerat quidem quasi, quibusdam quod quaerat 
                        quasi, quibusdam quod quaerat quasi, quibusdam quod quaerat"
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img 
                            src={patientAvatar}
                            alt=''
                        />
                        <div>
                            <h2 className="leading-[30px] text-lg font-semibold
                            text-headingColor">
                                Aldo Lata Soba
                            </h2>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-base leading-7 mt-4 text-textColor font-normal'>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam quaerat quidem quasi, quibusdam quod quaerat 
                        quasi, quibusdam quod quaerat quasi, quibusdam quod quaerat"
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img 
                            src={patientAvatar}
                            alt=''
                        />
                        <div>
                            <h2 className="leading-[30px] text-lg font-semibold
                            text-headingColor">
                                Aldo Lata Soba
                            </h2>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-base leading-7 mt-4 text-textColor font-normal'>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam quaerat quidem quasi, quibusdam quod quaerat 
                        quasi, quibusdam quod quaerat quasi, quibusdam quod quaerat"
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img 
                            src={patientAvatar}
                            alt=''
                        />
                        <div>
                            <h2 className="leading-[30px] text-lg font-semibold
                            text-headingColor">
                                Aldo Lata Soba
                            </h2>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-base leading-7 mt-4 text-textColor font-normal'>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam quaerat quidem quasi, quibusdam quod quaerat 
                        quasi, quibusdam quod quaerat quasi, quibusdam quod quaerat"
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Testimonial