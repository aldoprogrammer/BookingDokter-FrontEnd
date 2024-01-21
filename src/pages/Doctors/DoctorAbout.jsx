import React from 'react'
import { formateDate } from '../../utils/formateDate'

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className="text-[20px] leading-[30px] text-headingColor
            font-semibold flex items-center gap-2">
                About of
                <span className='text-irisBlueColor font-bold
                text-2xl leading-9'>
                    Aldo lata soba
                </span>
            </h3>
            <p className="text__para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid aut, delectus dolore ratione cumque dolores earum cupiditate, nihil quibusdam voluptas modi culpa dolorem. Id reiciendis deleniti maxime praesentium quibusdam ipsa.
            </p>
        </div>

        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor
            font-semibold">
                Education
            </h3>

            <ul className="pt-4 md:p-5">
                <li className="flex flex-col sm:flex-row sm:justify-between
                sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6
                        font-semibold'>
                            {formateDate("03-20-2014")} - {formateDate("03-20-2014")}
                        </span>
                        <p className="text-base leading-6 font-medium text-textColor">
                            Informatich of Engineering
                        </p>
                    </div>  
                    <p className="text-sm leading-5 font-medium text-textColor">
                            Universitas Muhammadiyah Bengkulu, Indonesia
                        </p>  
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between
                sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6
                        font-semibold'>
                            {formateDate("09-20-2014")} - {formateDate("03-20-2014")}
                        </span>
                        <p className="text-base leading-6 font-medium text-textColor">
                            Informatich of Engineering
                        </p>
                    </div>  
                    <p className="text-sm leading-5 font-medium text-textColor">
                            Universitas Muhammadiyah Bengkulu, Indonesia
                        </p>  
                </li>
            </ul>
        </div>

        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor
            font-semibold">
                Experience
            </h3>
            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                <li className="p-4 bg-[#fff9ea]">
                    <span className='text-yellowColor text-base leading-6
                    font-semibold'>
                            {formateDate("09-20-2014")} - {formateDate("03-20-2014")}
                    </span>
                    <p className="text-base leading-6 font-medium text-textColor">
                            Frontend Web Developer
                        </p>
                    <p className="text-sm leading-5 font-medium text-textColor">
                            Borrow4Less, Canada.
                        </p>  
                </li>
                <li className="p-4 bg-[#fff9ea]">
                    <span className='text-yellowColor text-base leading-6
                    font-semibold'>
                            {formateDate("09-20-2014")} - {formateDate("03-20-2014")}
                    </span>
                    <p className="text-base leading-6 font-medium text-textColor">
                            Frontend Web Developer
                        </p>
                    <p className="text-sm leading-5 font-medium text-textColor">
                            Borrow4Less, Canada.
                        </p>  
                </li>
            </ul>
        </div>

    </div>
  )
}

export default DoctorAbout