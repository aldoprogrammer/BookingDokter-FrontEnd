import Loader from '../../components/Loader/Loading.jsx'
import Error from '../../components/Error/Error.jsx'
import useGetProfile from '../../hooks/useFecthData.jsx'
import { BASE_URL } from '../../config.js'
import Tabs from './Tabs'
import { useState } from 'react'
import { FaExclamation, FaExclamationCircle } from "react-icons/fa";



const Dashboard = () => {
  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/doctors/profile/me`,
    { headers: { 'Cache-Control': 'no-cache' } }
  );
  

  const [tab, setTab] = useState('overview');
  console.log("Data:", data); // Log the complete data object

  return (
    <section className='my-10'>
      <div className='max-w-[1170px] px-5 mx-auto'>
        {loading && !error && <Loader />}
        {error && !loading && <Error />}

        {!loading && !error && (
          <div className='grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]'>
            <Tabs tab={tab} setTab={setTab} />
            <div className="lg:col-span-2">
              {data.isApproved === "pending" && (
                <div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 
                rounded-lg items-center">
                  
                  <FaExclamationCircle className='flex-shrink-0 w-5 h-5'/>
                  
                  <span className="sr-only">Info</span>
                  <div className="ml-2 text-sm font-medium">
                    To get approval, please complete your profile.
                    Review manually and approvae within 3 days.
                  </div>
                </div>
              )}

              <div className="mt-8">
                {
                  tab === 'overview' && (
                    <div>
                      <div className="flex items-center gap-4 mb-10">
                        <figure className='max-w-[200px] max-h-[200px]'>
                          <img 
                            src={data?.photo} 
                            alt=''
                            className='w-full' />
                        </figure>
                      </div>
                    </div>
                  )
                }
                {
                  tab === 'appointments' && (
                    <div>appointments</div>
                  )
                }
                {
                  tab === 'settings' && (
                    <div>settings</div>
                  )
                }

              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Dashboard;
