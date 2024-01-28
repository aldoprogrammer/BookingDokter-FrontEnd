import React from 'react'
import useFecthData from '../../hooks/useFecthData'
import { BASE_URL } from '../../config'
import Loading from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';
import DoctorCard  from '../../components/Doctors/DoctorCard.jsx';

const MyBookings = () => {
  const {
    data: appointments,
    loading,
    error
  } = useFecthData(`${BASE_URL}/users/appointment/my-appointments`);


  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2
        gap-5">
          {
            appointments.map(doctor => (
              <DoctorCard 
                doctor={doctor}
                key={doctor._id}
              />
            ))}
        </div>
      )}

      {!loading && !error && appointments.length === 0 && (
        <h2 className='mt-5 text-center 
        leading-7 text-[20px] font-semibold
        text-primaryColor'>
          You don't have any appointments yet</h2>
      )}
    </div>
  )
}

export default MyBookings