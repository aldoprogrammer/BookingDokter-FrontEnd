import React, { useState } from 'react'
import doctorImg from '../../assets/images/doctor-img02.png'
import starIcon from '../../assets/images/Star.png'
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';
import SidePanel from './SidePanel';
import { useParams } from 'react-router-dom';
import useFecthData from '../../hooks/useFecthData';
import { BASE_URL } from '../../config';
import Loading from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';

const DoctorDetails = () => {
  const [tab, setTab] = useState('about');
  const {id} = useParams();

  const { data: doctor, loading, error } = useFecthData(`${BASE_URL}/doctors/${id}`,
  {
    headers:
      { 'Cache-Control': 'no-cache' }
  });

  const {
    name,
    averageRating,
    photo,
    bio,
    specialization,
    totalRating,
    totalPatients,
    hospital,
    experiences,
    qualifications,
    reviews,
    ticketPrice,
    about,
} = doctor;

  return (
    <section className='mt-10'>
      <div className="max-w-[1170px] px-5 mx-auto">
      {loading && <Loading />}
      {error && <Error />}
        {!loading && !error && (<div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className='max-w-[200px] max-h-[200px]'>
                <img 
                  src={photo} 
                  alt="" 
                  className='w-full'  
                />
              </figure>

              <div>
                <span className='bg-[#ccf0f3] text-irisBlueColor py-1 px-6 lg:py-2
                lg:px-6 text-[12px] leading-4 lg:text-base lg:leading-7
                font-semibold rounded'>
                  {specialization}
                </span>
                <h3 className='text-headingColor text-[22px] leading-9
                font-bold my-1'>
                  {name}
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className='flex items-center gap-[6px] text-sm
                  leading-5 lg:text-base lg:leading-7 font-semibold
                  text-headingColor'>
                    <img 
                      src={starIcon} 
                      alt='' 
                    /> {averageRating}
                  </span>
                  <span className='text-sm
                  leading-5 lg:text-base lg:leading-7 
                  font-normal text-textColor'>
                    ({totalRating})
                  </span>
                </div>

                  <p className='text__para text-sm leading-6
                  md:text-[15px] lg:max-w-[390px]'>
                    {bio}
                  </p>

              </div>


            </div>

            <div className="mt-[50px] border-b border-solid
            border-[#0066ff34]">
              <button
                onClick={() => setTab('about')}
                className={`${
                  tab === 'about' && 'border-b border-solid border-primaryColor'
                }
                py-2 px-5 mr-5 text-base leading-7
                text-headingColor font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setTab('feedback')}
                className={`${
                  tab === 'feedback' && 'border-b border-solid border-primaryColor'
                }
                py-2 px-5 mr-5 text-base leading-7
                text-headingColor font-semibold`}
              >
                Feedback
              </button>
            </div>

            <div className='mt-[50px]'>
                {tab === 'about' && (
                  <DoctorAbout 
                    name={name}
                    about={about}
                    experiences={experiences}
                    qualifications={qualifications}
                  />)
                }
                {tab === 'feedback' && <Feedback />}
            </div>      
          </div>

          <div>
            <SidePanel />
          </div>
        </div>)}
      </div>
    </section>
  )
}

export default DoctorDetails