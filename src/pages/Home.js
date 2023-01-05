import bgpc from '../assets/land-bg.webp'
import start from '../assets/btns/start.svg'
import { Link } from 'react-router-dom'

const Home = () =>{
    return(
        <div className='overflow-y-hidden'>
            <div>
                <img className='w-screen h-screen  blur-[110px]  fixed z-[-9]' src={bgpc} alt="" />
            </div>

            <div className='fixed w-full h-full flex flex-col gap-5 justify-center items-center'> 
                <h1 className='font-bold text-white text-center gradtxt text-2xl md:text-3xl'>META SWAP</h1>
                <p className='text-center text-slate-400'>One stop solution for Swapping your <br></br> <span className='text-white'>Crypto Tokens</span></p>
                <Link to= '/swap'><img className='mt-3 w-[5rem]' src={start} alt="" /></Link>
            </div>
        </div>
    )
}

export default Home;