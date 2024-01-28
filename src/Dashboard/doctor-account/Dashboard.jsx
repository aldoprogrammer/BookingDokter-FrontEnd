import Loader from '../../components/Loader/Loading.jsx'
import Error from '../../components/Error/Error.jsx'
import useGetProfile from '../../hooks/useFecthData.jsx'
import { BASE_URL } from '../../config.js'
import Tabs from './Tabs'
import { useState } from 'react'
import { FaExclamation } from "react-icons/fa";



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
                <div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
                  <p>hi</p>
                  <span className='flex-shrink-0 w-5 h-5'>
                    <FaExclamation />
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Dashboard;
