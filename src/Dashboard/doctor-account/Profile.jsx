import React, { useState } from 'react'

const Profile = () => {
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        phone: '',
        bio: '',
    })

    const handleInputChange = (e) => {

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
        </form>
    </div>
  )
}

export default Profile