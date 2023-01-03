import bgpc from '../assets/land-bg.webp'
import swit from '../assets/btns/switch.svg'
import { Link } from 'react-router-dom'

const Swap = () =>{
    return(
        <div>
            <div>
                <img className='w-screen h-screen fixed z-[-9]' src={bgpc} alt="" />
            </div>

                <h1 className='font-bold fixed text-white text-center w-full top-[8%] text-2xl md:text-3xl'>META SWAP</h1>
            <div className=' flex justify-center items-center h-screen'>

                <div className='m-auto flex-col absolute p-5 py-8 md:p-7 w-fit flex text-sm md:text-xl h-auto rounded-none md:rounded-3xl backdrop-blur-lg bg-white/10'>
                    <div className='flex  justify-center items-center'>
                        <div>
                            <h1 className='pb-6 ml-3 uppercase mt-3 text-2xl text-white font-semibold'>Swap</h1>

                            <div className='flex gap-5 md: gap-2  justify-center items-center  justify-between py-3 md:py-5'>
                                <button className='bg-white font-bold rounded-full text-center text-sm md:text-xl w-auto shrink-0 md:w-[10rem] px-6 p-4'>$ ETH</button>
                                <p className='opacity-0 md:opacity-100 text-white'>:</p>
                                <input className='bg-white/10 text-white w-full md:w-auto  rounded-full px-7 py-4 outline-none' placeholder='Enter a Number' type="number"></input>
                            </div>
                            <div className='flex gap-5 md:gap-2  justify-center items-center  justify-between  py-3 md:py-5'>
                                <button className='bg-white font-bold rounded-full text-sm md:text-xl  w-auto md:w-[10rem] shrink-0 px-6 p-4'>$ DOGE</button>
                                <p className='opacity-0 md:opacity-100   text-white'>:</p>
                                <input className='bg-white/10 text-white w-full md:w-auto rounded-full px-7  py-4 outline-none' placeholder='Enter a Number' type="number"></input>
                            </div>
                        </div>
                        <Link to= '/swap'><img className='mt-16 pc w-[5rem]' src={swit} alt="" /></Link>
                    </div>

                    <button className='w-full relative md:w-auto py-4 mt-12 rounded-lg px-4 bg-white '>Connect Wallet</button>

                </div>

            </div>

        </div>
    )
}

export default Swap;