import { motion } from "framer-motion"
import { useState } from 'react';

import bgpc from '../assets/land-bg.webp'
import nav from '../assets/btns/nav.svg'
import swit from '../assets/btns/switch.svg'
import { Link } from 'react-router-dom'
import dwnarr from '../assets/btns/dwnarr.svg'
import img1 from '../assets/img1.webp'

const Swap = () =>{
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
            <div>
                { popup?
                    <div className="fixed justify-center items-center text-xs md:text-lg bottom-5 flex flex-row-reverse md:flex-row gap-4 uppercase right-5 border-[3px] toppp drop-shadow-lg shad border-purple-400 bg-white rounded-xl p-5">
                        <button onClick={closePopup} className="p-3 py-2 md:py-1 rounded-full bg-red-400 text-white">x</button>
                        <p>Going Live Sooner than you anticipate 😉</p>
                        <img className='w-[1.2rem]' src={swit} alt="" />
                    </div>
                :""}
            </div>
        </div>
            <div>
                <img className='w-screen h-screen blur-[110px] fixed z-[-999]' src={bgpc} alt="" />
            </div>
            <div id='nav' className='fixed flex justify-between items-center backdrop-blur-[100px] z-[100] top-0 w-full px-8 py-5 md:py-3 bg-white/10'>
                <Link to = '/'><h1 className='font-bold text-white w-full md:text-xl'>META  <span className='gradtxt'>SWAP</span></h1></Link>
                <div className='flex flex-row-reverse'>
                    <button onClick={handleClickOpen}  className='w-fit py-2 rounded-lg px-4 pc uppercase text-sm text-white font-medium grad shrink-0'>Connect Wallet</button>
                    <button  onClick={handleClickOpen} ><img className='mob' src={nav} alt="" /></button>
                </div>
            </div>

            <p className='text-2xl md:text-4xl w-10/12 m-auto relative mt-[7rem] md:mt-[10rem] uppercase text-white font-bold text-center'>Swap your Tokens at <span className="gradtxt">ease</span></p>
            <p className='text-md md:text-lg text-slate-400 text-center m-auto mt-5 w-10/12 md:w-3/5'>With our cutting-edge platform, you can easily exchange your crypto tokens in a matter of seconds. No more worrying about complicated trade processes or high fees.</p>
            <br/><br/>
            <motion.a href='#swap'>
                <motion.img 
                    initial={{ scale:1}}
                    whileHover={{scale:1.1}}
                    transition={{ duration: 0.2 }}
                    className='m-auto' src={dwnarr} alt="" />
            </motion.a><br/>
            
            <section className='w-full mt-10 bg-black/60 backdrop-blur-xl gap-12 md:gap-24 overflow-x-scroll py-12 px-8 flex justify-start md:justify-center'>
                <motion.div
                    initial={{ opacity:0, y:-20}}
                    whileInView={{opacity:1, y:0}}
                    transition={{ duration: 1 }}
                    className='text-center shrink-0 text-white'>
                    <p className='font-semibold text-3xl md:text-4xl  gradtxt'>$15.53M</p>
                    <p className='text-sm mt-2 text-slate-400'>Trading Volume</p>
                </motion.div>
                <motion.div  
                    initial={{ opacity:0, y:-20}}
                    whileInView={{opacity:1, y:0}}
                    transition={{ duration: 1 }}
                    className='text-center shrink-0 text-white'>
                    <p className='font-semibold text-3xl md:text-4xl  gradtxt'>453K</p>
                    <p className='text-sm mt-2 text-slate-400'>NFTs minted</p>
                </motion.div>
                <motion.div  
                    initial={{ opacity:0, y:-20}}
                    whileInView={{opacity:1, y:0}}
                    transition={{ duration: 1 }}
                    className='text-center shrink-0 text-white'>
                    <p className='font-semibold text-3xl md:text-4xl  gradtxt'>3.1M</p>
                    <p className='text-sm mt-2 text-slate-400'>Tokens Swapped</p>
                </motion.div>
                <motion.div  
                    initial={{ opacity:0, y:-20}}
                    whileInView={{opacity:1, y:0}}
                    transition={{ duration: 1 }}
                    className='text-center shrink-0 text-white'>
                    <p className='font-semibold text-3xl md:text-4xl  gradtxt'>112K</p>
                    <p className='text-sm mt-2 text-slate-400'>Daily users</p>
                </motion.div>
                <motion.div  
                    initial={{ opacity:0, y:-20}}
                    whileInView={{opacity:1, y:0}}
                    transition={{ duration: 1 }}
                    className='text-center shrink-0 text-white'>
                    <p className='font-semibold text-3xl md:text-4xl  gradtxt'>$41M</p>
                    <p className='text-sm mt-2 text-slate-400'>Revenue Generated</p>
                </motion.div>
            </section>
            <br/><br/>

            <div className="z-[-999] fixed opacity-30 bottom-0 ">
                <img className="relative mix-blend-screen h-screen w-screen top-0" src={img1} alt="" />
            </div>
            
            <h1 id='swap' className='text-2xl md:text-4xl w-10/12 m-auto  uppercase my-12 text-center text-white font-semibold'>Start <span className='gradtxt' href='#'>Swapping</span> NOW</h1>

            <section className='m-auto flex-col shad py-8 shrink-0 md:p-7 w-full md:w-fit flex text-sm md:text-xl h-auto rounded-none md:rounded-3xl bg-black/40 backdrop-blur-xl  '>
                <div className='flex px-8 justify-center items-center'>
                    <div>
                        <div className='flex gap-5 md: gap-2 justify-center items-center  justify-between py-3 md:py-5'>
                            <button  onClick={handleClickOpen} className='grad font-bold text-white min-w-[8rem] rounded-full text-center text-sm md:text-xl w-auto shrink-0 md:w-[10rem] px-6 p-4'>$ ETH</button>
                            <p className='opacity-0 md:opacity-100 text-white'>:</p>
                            <input className='bg-white/10 text-white w-full max-w-[8rem] md:max-w-full md:w-auto rounded-full pl-7 py-4 outline-none' placeholder='Value' type="number"></input>
                        </div>
                        <div className='flex gap-5 md:gap-2 justify-center items-center  justify-between  py-3 md:py-5'>
                            <button onClick={handleClickOpen}  className='grad font-bold  text-white min-w-[8rem] rounded-full text-sm md:text-xl  w-auto md:w-[10rem] shrink-0 px-6 p-4'>$ MET</button>
                            <p className='opacity-0 md:opacity-100   text-white'>:</p>
                            <input className='bg-white/10 text-white w-full max-w-[8rem] md:max-w-full md:w-auto rounded-full pl-7 py-4 outline-none' placeholder='Value' type="number"></input>
                        </div>
                    </div>
                    <Link><img className='mx-4 pc w-[1.2rem]' src={swit} alt="" /></Link>
                </div>

                <button  onClick={handleClickOpen}  className='w-10/12 m-auto relative md:w-full py-4 my-6 uppercase font-medium mt-10 rounded-lg px-4 bg-white '>Connect Wallet</button>
            </section>

            <p  className='text-lg text-white text-center m-auto mt-12 w-10/12 md:w-3/5'>Join the millions of users already taking advantage of the power and convenience of our platform. Start swapping your crypto tokens today and be a part of the future of digital currency exchange!</p>
            <br/><br/><br/>
            
            <footer className="bottom-0 bg-black/40 backdrop-blur-xl h-auto p-8 ">
                <p className='text-xs text-white text-center m-auto mb-4 mt-12 w-full'>© 2023 Metaswap</p>
            </footer>
        </div>
    )
}

export default Swap;