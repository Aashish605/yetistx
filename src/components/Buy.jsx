
const Buy = () => {
    return (
        <>
        <div className="bg-black text-white lg:h-[75vh] md:h-[120vh] sm:h-[130vh] h-[210vh] ">
            <h1 className="text-5xl font-shadow font-bold text-center pt-24 ">How to buy</h1>
            <div className="flex flex-wrap     gap-8 mx-10   my-14 justify-center">
                <div className="w-[200px]  grow text-center">
                <img src="/wallet.png" alt="image" className=" w-[15%] mx-auto" />
                <p className="font-shadow text-2xl font-semibold mb-10 mt-4">Create a wallet</p>
                <p className=" " >Download the xverse wallet or any wallet that has $STX from the app store or google play store. Desktop users, download the google chrome extension by going to xverse.ap</p>
                </div>
                <div className="w-[200px]  grow text-center">
                <img src="/stx.png" alt="image" className=" w-[15%] mx-auto"/>
                <p className="font-shadow text-2xl font-semibold mt-4 mb-10">Get Some $STX</p>
                <p>Have $STX in your wallet. If you don’t have any $stx, you can buy directly on xverse, transfer from another wallet, or buy on another exchange and send it to your wallet.</p>
                </div>
                <div className="w-[200px]  grow text-center">
                <img src="/phone.png" alt="image" className=" w-[15%] mx-auto "/>
                <p className="font-shadow text-2xl font-semibold mt-4 mb-10">Go to app.alex co</p>
                <p>Go to app.alex and connect your wallet. Paste the $beans token address into xverse, select $beans, and confirm. When xverse prompts you for a wallet signature, sign.</p>
                </div>
                <div className="w-[200px]  grow text-center">
                <img src="/hand.png" alt="image" className=" w-[15%] mx-auto "/>
                <p className="font-shadow text-2xl font-semibold mt-4 mb-10">Swap $STX for $YETI</p>
                <p>Swap $stxfor beans. We have low taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Buy