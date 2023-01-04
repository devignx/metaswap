import bgpc from '../assets/land-bg.webp'
import nav from '../assets/btns/nav.svg'
import swit from '../assets/btns/switch.svg'
import { Link } from 'react-router-dom'
import dwnarr from '../assets/btns/dwnarr.svg'

const Swap = () =>{
    return(
        <div>
            <div>
                <img className='w-screen h-screen blur-[110px] fixed z-[-999]' src={bgpc} alt="" />
            </div>
            <div id='nav' className='fixed flex justify-between items-center backdrop-blur-[100px] z-[100] top-0 w-full px-8 py-5 md:py-3 bg-white/10'>
                <Link to = '/'><h1 className='font-bold text-white w-full md:text-xl'>META  <span className='gradtxt'>SWAP</span></h1></Link>
                <div className='flex flex-row-reverse'>
                    <button className='w-fit py-2 rounded-lg px-4 pc uppercase text-sm text-white font-medium grad shrink-0'>Connect Wallet</button>
                    <button><img className='mob' src={nav} /></button>
                </div>
            </div>

            <p className='text-3xl md:text-4xl w-10/12 m-auto relative mt-[7rem] md:mt-[10rem] text-white font-bold text-center'>Swap your Tokens at ease</p>
            <p className='text-md md:text-lg text-slate-400 text-center m-auto mt-5 w-10/12 md:w-3/5'>With our cutting-edge platform, you can easily exchange your crypto tokens in a matter of seconds. No more worrying about complicated trade processes or high fees.</p>
            <br/><br/><a href='#swap'><img className='m-auto' src={dwnarr} /></a><br/>
            
            <section className='w-full mt-10 bg-black gap-10 overflow-x-scroll py-12 p-5 flex justify-start md:justify-evenly'>
                <div className='text-center shrink-0 text-white'>
                    <p className='font-semibold text-3xl md:text-4xl  gradtxt'>$15.53M</p>
                    <p className='text-sm mt-2 text-slate-400'>Trading Volume</p>
                </div>
                <div className='text-center shrink-0 text-white'>
                    <p className='font-semibold text-3xl md:text-4xl  gradtxt'>453K</p>
                    <p className='text-sm mt-2 text-slate-400'>NFTs minted</p>
                </div>
                <div className='text-center shrink-0 text-white'>
                    <p className='font-semibold text-3xl md:text-4xl  gradtxt'>3.1M</p>
                    <p className='text-sm mt-2 text-slate-400'>Tokens Swapped</p>
                </div>
                <div className='text-center shrink-0 text-white'>
                    <p className='font-semibold text-3xl md:text-4xl  gradtxt'>112K</p>
                    <p className='text-sm mt-2 text-slate-400'>Active users</p>
                </div>
                <div className='text-center shrink-0 text-white'>
                    <p className='font-semibold text-3xl md:text-4xl  gradtxt'>$41M</p>
                    <p className='text-sm mt-2 text-slate-400'>Revenue Generated</p>
                </div>
            </section>
            <br/><br/>
            
            <h1 className='text-3xl md:text-4xl w-10/12 m-auto  uppercase my-12 text-center text-white font-semibold'>Start <a className='gradtxt' href='#swap'>Swapping</a> NOW</h1>

            <section id='swap' className='m-auto flex-col shad p-5 py-8 shrink-0 md:p-7 w-full md:w-fit flex text-sm md:text-xl h-auto rounded-none md:rounded-3xl bg-black '>
                <div className='flex  justify-center items-center'>
                    <div>
                        <div className='flex gap-5 md: gap-2 justify-center items-center  justify-between py-3 md:py-5'>
                            <button className='grad font-bold text-white min-w-[8rem] rounded-full text-center text-sm md:text-xl w-auto shrink-0 md:w-[10rem] px-6 p-4'>$ ETH</button>
                            <p className='opacity-0 md:opacity-100 text-white'>:</p>
                            <input className='bg-white/10 text-white w-full max-w-[8rem] md:max-w-full md:w-auto rounded-full pl-7 py-4 outline-none' placeholder='Value' type="number"></input>
                        </div>
                        <div className='flex gap-5 md:gap-2 justify-center items-center  justify-between  py-3 md:py-5'>
                            <button className='grad font-bold  text-white min-w-[8rem] rounded-full text-sm md:text-xl  w-auto md:w-[10rem] shrink-0 px-6 p-4'>$ MET</button>
                            <p className='opacity-0 md:opacity-100   text-white'>:</p>
                            <input className='bg-white/10 text-white w-full max-w-[8rem] md:max-w-full md:w-auto rounded-full pl-7 py-4 outline-none' placeholder='Value' type="number"></input>
                        </div>
                    </div>
                    <Link to= '#'><img className='mx-4 pc w-[2rem]' src={swit} alt="" /></Link>
                </div>

                <button className='w-full relative md:w-auto py-4 my-6 mt-10 rounded-lg px-4 bg-white '>Connect Wallet</button>
            </section>

            <p  className='text-lg text-slate-400 text-center m-auto mt-12 w-10/12 md:w-3/5'>Join the millions of users already taking advantage of the power and convenience of our platform. Start swapping your crypto tokens today and be a part of the future of digital currency exchange!</p>
            <br/><br/><br/>
            
            <p className='text-xs text-white text-center m-auto mb-4 mt-12 w-full'>Copyright Recieved 2023 - Metaswap</p>
        </div>
    )
}

export default Swap;