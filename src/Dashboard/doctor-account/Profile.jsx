import React, { useState } from 'react'
import { AiOutlineDelete} from 'react-icons/ai'

const Profile = () => {
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        phone: '',
        bio: '',
        gender: '',
        specialization: '',
        ticketPrice: 0,
        qualifications: [
            {startingDate: '', endingDate: '', degree: '', university: '',}
        ],
        experiences: [
            {startingDate: '', endingDate: '', position: '', hospital: '',}
        ],
        timeSlots: [
            {day: '', startingTime: '', endingTime: ''}
        ],
    })

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }


  return (
    <div>
        <h2 className="text-headingColor font-bold text-2xl leading-9
        mb-10">
            Profile Information    
        </h2>
        <form>
            <div className="mb-5">
                <p className="form__label">
                    Full Name
                </p>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange}
                        placeholder='Full Name'
                        className='form__input'
                        />
                
            </div>
            <div className="mb-5">
                <p className="form__label">
                    Email
                </p>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange}
                        placeholder='Email'
                        className='form__input'
                        aria-readonly
                        readOnly
                        disabled='true'
                        />
                
            </div>
            <div className="mb-5">
                <p className="form__label">
                    Phone
                </p>
                    <input 
                        type="number" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange}
                        placeholder='Phone Number'
                        className='form__input'
                        />
                
            </div>
            <div className="mb-5">
                <p className="form__label">
                    Bio
                </p>
                    <input 
                        type="text" 
                        name="bio" 
                        value={formData.bio} 
                        onChange={handleInputChange}
                        placeholder='Bio'
                        className='form__input'
                        maxLength={100}
                        />
            </div>

            <div className="mb-5">
                <div className="grid grid-cols-3 gap-5 mb-[30px]">
                    <div>
                        <p className="form__label">
                            Gender
                        </p>
                        <select 
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className='form__input py-3.5'    
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <p className="form__label">
                            Specialization
                        </p>
                        <select 
                            name="specialization"
                            value={formData.specialization}
                            onChange={handleInputChange}
                            className='form__input py-3.5'    
                        >
                            <option value="">Select</option>
                            <option value="surgeon">Surgeon</option>
                            <option value="neurologist">Neurologist</option>
                            <option value="dermatologist">Dermatologist</option>
                        </select>
                    </div>
                    <div>
                        <p className="form__label">
                            Ticket Price
                        </p>
                        <input 
                            type="number" 
                            name="ticketPrice" 
                            value={formData.ticketPrice} 
                            onChange={handleInputChange}
                            placeholder='100'
                            className='form__input'
                            />
                    </div>
                </div>
            </div>

            <div className="mb-5">
                <p className="form__label">
                    Qualifications
                </p>
                {formData.qualifications?.map((item, index) => (
                    <div key={index}>
                        <div>
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <p className="form__label">
                                        Starting Date
                                    </p>
                                    <input 
                                        type="date" 
                                        name="startingDate"
                                        value={item.startingDate}
                                        className='form__input'
                                        />
                                </div>
                                <div>
                                    <p className="form__label">
                                        Ending Date
                                    </p>
                                    <input 
                                        type="date" 
                                        name="endingDate"
                                        value={item.endingDate}
                                        className='form__input'
                                        />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <p className="form__label">
                                        Degree
                                    </p>
                                    <input 
                                        type="text" 
                                        name="degree"
                                        value={item.degree}
                                        className='form__input'
                                        />
                                </div>
                                <div>
                                    <p className="form__label">
                                        University
                                    </p>
                                    <input 
                                        type="text" 
                                        name="university"
                                        value={item.university}
                                        className='form__input'
                                        />
                                </div>
                            </div>

                            <button className='bg-red-600 p-2 rounded-full text-white
                            text-[18px] mt-2 mb-[30px]'>
                                <AiOutlineDelete />
                            </button>
                        </div>
                    </div>
                ))}

                <button className='bg-[#000] py-2 px-5 rounded text-white
                h-fit cursor-pointer'>
                    Add Qualification
                </button>
            </div>

            <div className="mb-5">
                <p className="form__label">
                    Experiences
                </p>
                {formData.experiences?.map((item, index) => (
                    <div key={index}>
                        <div>
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <p className="form__label">
                                        Starting Date
                                    </p>
                                    <input 
                                        type="date" 
                                        name="startingDate"
                                        value={item.startingDate}
                                        className='form__input'
                                        />
                                </div>
                                <div>
                                    <p className="form__label">
                                        Ending Date
                                    </p>
                                    <input 
                                        type="date" 
                                        name="endingDate"
                                        value={item.endingDate}
                                        className='form__input'
                                        />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <p className="form__label">
                                        Position
                                    </p>
                                    <input 
                                        type="text" 
                                        name="position"
                                        value={item.position}
                                        className='form__input'
                                        />
                                </div>
                                <div>
                                    <p className="form__label">
                                        Hospital
                                    </p>
                                    <input 
                                        type="text" 
                                        name="hospital"
                                        value={item.hospital}
                                        className='form__input'
                                        />
                                </div>
                            </div>

                            <button className='bg-red-600 p-2 rounded-full text-white
                            text-[18px] mt-2 mb-[30px]'>
                                <AiOutlineDelete />
                            </button>
                        </div>
                    </div>
                ))}

                <button className='bg-[#000] py-2 px-5 rounded text-white
                h-fit cursor-pointer'>
                    Add Experiences
                </button>
            </div>

            
            <div className="mb-5">
                <p className="form__label">
                    TIme Slots
                </p>
                {formData.timeSlots?.map((item, index) => (
                    <div key={index}>
                        <div>
                            <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px]
                             gap-5">
                                <div>
                                    <p className="form__label">
                                        Day
                                    </p>
                                    <select 
                                        value={item.day}    
                                        name="day"  
                                        className="form__input py-3.5">
                                        <option value="">Select</option>
                                        <option value="saturday">Saturday</option>
                                        <option value="sunday">Sunday</option>
                                        <option value="monday">Monday</option>
                                        <option value="tuesday">Tuesday</option>
                                        <option value="wednesday">Wednesday</option>
                                        <option value="thursday">Thursday</option>
                                        <option value="friday">Friday</option>    
                                    </select>
                                </div>
                                <div>
                                    <p className="form__label">
                                        Starting Time
                                    </p>
                                    <input 
                                        type="time" 
                                        name="startingTime"
                                        value={item.startingTime}
                                        className='form__input'
                                        />
                                </div>
                                <div>
                                    <p className="form__label">
                                        Ending Time
                                    </p>
                                    <input 
                                        type="time" 
                                        name="endingTime"
                                        value={item.endingTime}
                                        className='form__input'
                                        />
                                </div>
                                <div className='flex items-center'>
                                <button className='bg-red-600 p-2 rounded-full text-white
                                    text-[18px] mt-6'>
                                <AiOutlineDelete />
                            </button>
                                </div>
                            </div>
                        
                           
                        </div>
                    </div>
                ))}

                <button className='bg-[#000] py-2 px-5 rounded text-white
                h-fit cursor-pointer'>
                    Add TimeSlotes
                </button>
            </div>
        </form>
    </div>
  )
}

export default Profile