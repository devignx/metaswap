import bgpc from '../assets/land-bg.webp'
import start from '../assets/btns/start.svg'
import { Link } from 'react-router-dom'

const Home = () =>{
    return(
        <div className='overflow-y-hidden'>
            <div>
                <img className='w-screen h-screen fixed z-[-9]' src={bgpc} alt="" />
            </div>
            <div className='fixed w-full h-full flex flex-col gap-5 justify-center items-center'> 
                <div className='w-[38rem] h-[60%] fixed z-[-99] backdrop-blur-lg bg-white/10 rounded-xl'>
                    <br></br>
                </div>
                <h1 className='font-bold text-white text-center text-2xl md:text-3xl'>META SWAP</h1>
                <p className='text-center text-slate-400'>One stop solution for Swapping your <br></br> <span className='text-white'>Crypto Currencies</span></p>
                <Link to= '/swap'><img className='mt-3 w-[5rem]' src={start} alt="" /></Link>
            </div>
        </div>
    )
}

export default Home;