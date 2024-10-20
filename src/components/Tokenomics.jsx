
const Tokenomics = () => {
    return (
        <>
        <div className=" lg:h-[90vh] md:h-[140vh]  h-[120vh] font-poppins overflow-hidden bg-secondary w-full text-white">
            <h1 className="text-center text-6xl font-shadow font-semibold pt-28">Tokenomics</h1>
            <div className="flex lg:flex-row flex-col my-8   md:gap-2">
                <img src="/bitcoin.png" alt="" className=" w-[40vw] mx-auto "  />
                <div className="bg-slate-950 lg:w-[40vw]  lg:mr-10  w-[80vw]  mx-auto rounded-3xl flex items-center justify-center h-[50vh] md:mt-8 mt-16 ">
                    <div className=" text-center md:w-[32vw] w-[70vw] ">
                        <h1 className="text-5xl mt-6">1000000</h1>
                        <p className="text-2xl opacity-50 mb-10">Total supply</p>
                        <p>Mr. Beans Meme Coin is non-mintable with no presale. More liquidity will be frequently added to the pool as its market presence grows.</p>
                        <a href="https://forms.gle/rXJTn6RV8Q487Vy48"><button className="px-8 py-3 rounded-lg my-8 bg-primary text-secondary font-semibold">JOIN SEED SALE</button></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Tokenomics