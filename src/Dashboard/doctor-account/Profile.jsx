import React, { useState } from 'react'
import { AiOutlineDelete} from 'react-icons/ai'
import uploadImageToCloudinary from '../../utils/uploadCloudinary';


const Profile = () => {
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        phone: '',
        bio: '',
        gender: '',
        specialization: '',
        ticketPrice: 0,
        qualifications: [],
        experiences: [],
        timeSlots: [],
        about: '',
        photo: '',
    })

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleFileInputChange = async (e) => {
        const file = e.target.files[0];
        const data = await uploadImageToCloudinary(file);
        setFormData({...formData, photo: data?.url})
        
    }

    const updateProfileHandler = async e => {
        e.preventDefault();
    }


    const addItem = (key, item) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [key]: [...prevFormData[key], item]
        }))
    }

    const deleteItem = (key, index) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [key]: prevFormData[key].filter((_, i) => i !== index)
        }))
    }


    // function experiences

    const handleExperienceChange = (event, index) => {
        handleReusableInputChangeFund('experiences', index, event)
    }

    const deleteExperience = (event, index) => {
        event.preventDefault()
        deleteItem("experiences", index);
    }

    const addExperience = (e) => {
        e.preventDefault();

        addItem('experiences', {
            startingDate: '',
            endingDate: '',
            position: '',
            hospital: '',
        })
    }

    // function qualifications
    const addQualtification = (e) => {
        e.preventDefault();

        addItem('qualifications', {
            startingDate: '',
            endingDate: '',
            degree: '',
            university: '',
        })
    }

    const handleQualificationChange = (event, index) => {
        handleReusableInputChangeFund('qualifications', index, event)
    }

    const deleteQualification = (event, index) => {
        event.preventDefault()
        deleteItem("qualifications", index);
    }

        // function qualifications

        const addTimeSlot = (e) => {
            e.preventDefault();
    
            addItem('timeSlots', {day: '', startingTime: '', endingTime: ''})
        }
    
        const handleTimeSlotsChange = (event, index) => {
            handleReusableInputChangeFund('timeSlots', index, event)
        }
    
        const deleteTimeSlots = (event, index) => {
            event.preventDefault()
            deleteItem("timeSlots", index);
        }
    

    const handleReusableInputChangeFund = (key, index, event) => {
        const { name, value } = event.target

        setFormData(prevFormData => {
            const updateItems = [...prevFormData[key]]

            updateItems[index][name] = value

            return {
                ...prevFormData,
                [key]: updateItems,
            }
        })
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
                                        onChange={(e) => handleQualificationChange(e, index)}
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
                                        onChange={(e) => handleQualificationChange(e, index)}
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
                                        onChange={(e) => handleQualificationChange(e, index)}
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
                                        onChange={(e) => handleQualificationChange(e, index)}
                                        />
                                </div>
                            </div>

                            <button 
                                onClick={e => deleteQualification(e, index)}
                            className='bg-red-600 p-2 rounded-full text-white
                            text-[18px] mt-2 mb-[30px]'>
                                <AiOutlineDelete />
                            </button>
                        </div>
                    </div>
                ))}

                <button 
                onClick={addQualtification}
                className='bg-[#000] py-2 px-5 rounded text-white
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
                                        onChange={(e) => handleExperienceChange(e, index)}
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
                                        onChange={(e) => handleExperienceChange(e, index)}
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
                                        onChange={(e) => handleExperienceChange(e, index)}
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
                                        onChange={(e) => handleExperienceChange(e, index)}
                                        />
                                </div>
                            </div>

                            <button onClick={e => deleteExperience(e, index)} 
                            className='bg-red-600 p-2 rounded-full text-white
                            text-[18px] mt-2 mb-[30px]'>
                                <AiOutlineDelete />
                            </button>
                        </div>
                    </div>
                ))}

                <button onClick={addExperience} className='bg-[#000] py-2 px-5 rounded text-white
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
                                        className="form__input py-3.5"
                                        onChange={e => handleTimeSlotsChange(e, index)}
                                        >
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
                                        onChange={e => handleTimeSlotsChange(e, index)}
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
                                        onChange={e => handleTimeSlotsChange(e, index)}
                                        />
                                </div>
                                <div className='flex items-center'>
                                <button onClick={e => deleteTimeSlots(e, index)} className='bg-red-600 p-2 rounded-full text-white
                                    text-[18px] mt-6'>
                                <AiOutlineDelete />
                            </button>
                                </div>
                            </div>
                        
                           
                        </div>
                    </div>
                ))}

                <button onClick={addTimeSlot} className='bg-[#000] py-2 px-5 rounded text-white
                h-fit cursor-pointer'>
                    Add TimeSlotes
                </button>
            </div>

            <div className="mb-5">
                <p className="form__label">
                    About
                </p>
                <textarea 
                    name="about" 
                    rows={5} 
                    value={formData.about}
                    placeholder="Write your bio"    
                    onChange={handleInputChange}
                    className='form__input'
                    >
                </textarea>
            </div>

            <div className="mb-5 flex items-center gap-3">
            {formData.photo && ( 
              <figure className='w-[60px] h-[60px] rounded-full border-2
              border-solid border-primaryColor flex items-center justify-center'>
                <img 
                  src={formData.photo}
                  alt=""
                  className='w-full 
                  rounded-full'
                />
              </figure>)}

              <div className="relative w-[130px] h-[50px]">
                <input 
                  type="file" 
                  name="photo"
                  onChange={handleFileInputChange} 
                  id="customFile"
                  accept='.jpg, .png'
                  className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                  />
                  <label 
                    htmlFor="customFile"
                    className='absolute top-0 left-0 w-full h-full flex items-center
                    px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden
                    bg-[#0066ff46] text-headingColor font-semibold
                    rounded-lg truncate cursor-pointer'
                  >
                    Upload Photo
                  </label>
              </div>
            </div>  

            <div className="mt-7">
                <button 
                type='submit'
                onClick={updateProfileHandler}
                className='bg-primaryColor text-white text-[18px] leading-[30px]
                w-full py-3 px-3 rounded-lg'>
                    Update Profile
                </button>    
            </div>      
        </form>
    </div>
  )
}

export default Profile