import React, { useState } from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import { formateDate } from '../../utils/formateDate'
import { AiFillStar } from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'

const Feedback = ({reviews, totalRating}) => {

  const [showFeedbackForm, setShowFeedbackForm] = useState(false)
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold
        text-headingColor mb-[30px]">
          All reviews ({totalRating})
        </h4>

        {reviews?.map((review, index) => (
        <div key={index} className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className='w-10 h-10 rounded-full'>
              <img 
                src={review?.user?.photo} 
                alt=''
              />
            </figure>

            <div>
              <h5 className="text-base leading-6 text-primaryColor font-bold">
                {review?.user?.name}
              </h5>
              <p className='text-sm leading-6 text-textColor'>
                {formateDate(review?.createdAt)}
              </p>
              <p className="text__para mt-3 font-medium text-[15px]">
                {review?.reviewText}
              </p>
            </div>
          </div>

          <div className='flex gap-1'>
            {[ ...Array(review?.rating).keys()].map((_,index) => (
              <AiFillStar key={index} color='#0067ff'/>
            ))}
          </div>
        </div>))}
      </div>

      {!showFeedbackForm && (
      <div className="text-center">
        <button 
          className="btn"
          onClick={() => setShowFeedbackForm(true)}
          >Give FeedBack</button>
      </div>
      )}

      {showFeedbackForm && <FeedbackForm /> }
    </div>
  )
}

export default Feedback