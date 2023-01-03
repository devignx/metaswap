import bgpc from '../assets/land-bg.webp'

const Swap = () =>{
    return(
        <div>
            <div>
                <img className='w-screen h-screen fixed z-[-9]' src={bgpc} alt="" />
            </div>
            <p className='w-full h-screen fixed text-[3rem] lg:text-[10rem] font-bold uppercase text-center text-white mt-[40%] lg:mt-[5%]'>Swap Page</p>
        </div>
    )
}

export default Swap;