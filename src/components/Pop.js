import swit from '../assets/btns/switch.svg'
import { useState } from 'react';

const Pop = () =>{
    const [popup,setPop] = useState(false);
    
    const handleClickOpen = () => {
        setPop(!popup);
    }
    const closePopup = () => {
        setPop(!popup);
    }

    return(
        <div>
            <div>
                { popup?
                    <div className="fixed text-sm md:text-xl bottom-5 flex gap-3 right-5 border-[3px] toppp drop-shadow-lg shad border-purple-400 bg-white rounded-xl p-5">
                        <img className='w-[1.2rem]' src={swit} />
                        <p>Going Live Sooner that you expect</p>
                    </div>
                :""}
            </div>
        </div>
    )
}

export default Pop;