
const Wallets = () => {
    return (
    <>
    <div className="bg-primary md:h-[110vh] h-full overflow-hidden text-black">
        <div className="flex flex-col  md:flex-row">
            <div className="md:w-1/2 font-semibold text-center mt-24">
            <h1 className="text-4xl text-center font-shadow">Supported Wallets</h1>
            <p className="m-8">Yeti is supported by Xverse and Leather wallets, ensuring secure and <p>user-friendly storage and transactions for its growing community of users.</p></p>
            <div className="flex flex-col md:flex-row gap-4">
                <img src="/xverse.png" alt="" className=" w-[40%] h-[40%]  md:ml-auto mx-auto"  />
                <img src="/leather.png" alt="" className=" w-[40%] h-[40%] md:mr-auto mx-auto"  />
            </div>
            </div>
            <div className="md:w-1/2 font-semibold text-center mt-24">
            <h1 className="text-4xl text-center font-shadow">Supported Swaps</h1>
            <p className="m-8">Yeti is seamlessly integrated with Stackswap and Alex, offering efficient,<p>user-friendly swap options to enhance trading flexibility and liquidity.</p></p>
            <div className="flex flex-col md:flex-row gap-4">
                <img src="/stackswap.png" alt="" className=" w-[40%] h-[40%]  md:ml-auto mx-auto"  />
                <img src="/alex.png" alt="" className=" w-[40%] h-[40%] md:mr-auto mx-auto "  />
            </div>
            </div>
        </div>
            <img src="/yeti1.png" alt="" className="mx-auto relative bottom-0" />
    </div>
    </> 
    )
}

export default Wallets