import React, { useState } from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {

    const [isClick, setIsClick] = useState(false);

    const addPopup = () => {
        setIsClick(true);
        setTimeout(()=> {
            setIsClick(false);
        }, 1500)
    }

    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download <br /> Tomato App</p>
            <div className="app-download-platforms">
                <img onClick={addPopup} src={assets.play_store} alt="" />
                <img onClick={addPopup} src={assets.app_store} alt="" />
            </div>
            {isClick?
                <div className='popup-container'>
                    <div className='popup'>
                    Oops! This button doesn’t work yet. Check back soon! 
                    </div>
                </div>
                :''}
        </div>
    )
}

export default AppDownload
