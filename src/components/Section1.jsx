
const Section1 = () => {
    return (
        <>
        <div className="bg-slate-900 lg:h-[80vh] h-full text-white flex flex-col lg:flex-row md:gap-8" >
            <div className=" md:px-20 lg:pt-40 mx-auto  px-14 py-16 lg:w-1/2">
                <h1 className="md:text-[5rem] text-7xl font-shadow">Yeti comes to stacks</h1>
                <p className="my-4  ">Yeti comes to the STACKS ($STX) universe arriving on a bitcoin space ship and is here to bring awareness throughout the crypto galaxy about the amazing works happening on the Stacks Network, that is working to bring DeFi to the Bitcoin Network. </p>
                <a href="https://forms.gle/rXJTn6RV8Q487Vy48"><button className="px-8 py-3 rounded-lg my-4 bg-primary text-secondary font-semibold">JOIN SEED SALE</button></a>
            </div>
            <div className=" flex justify-center">
                <img src="/yeti.png" alt="yeti holding bitcoin" className="h-full overflow-hidden scale-x-[-1] lg:w-full lg:h-full w-[80vw]  " />
            </div>
        </div>  
        </>
    )   
}

export default Section1