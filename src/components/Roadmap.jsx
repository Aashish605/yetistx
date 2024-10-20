
const Roadmap = () => {
    return (
        <>
            <div className=" bg-secondary lg:h-[100vh] md:h-[280vh] h-[230vh] text-white ">
                <h1 className="text-5xl font-shadow font-bold py-16 text-center">Roadmap</h1>
                <div className=" flex items-center justify-center mx-10 flex-col lg:flex-row md:gap-14 ">
                    <div className="h-[60vh] md:h-[70vh]   bg-black  min-w-[300px] grow my-4  rounded-2xl  py-10  ">
                        <div className="flex justify-center">
                            <button className="w-3/4 bg-primary py-4 rounded-lg text-black ">STAGE ONE</button>
                        </div>
                        <p className="text-primary font-shadow my-4 mx-8">Yeti is born</p>
                        <ul className="mx-12">
                            <li className="list-disc">Website Launch</li>
                            <li className="list-disc">Whitepaper Will be Updated</li>
                            <li className="list-disc">Social Media launch and promotion</li>
                            <li className="list-disc">Influencer Marketing Push</li>
                            <li className="list-disc">Audit Report</li>
                            <li className="list-disc">$20M MC</li>
                        </ul>
                    </div>
                    <div className="h-[60vh] md:h-[70vh]  bg-black min-w-[300px] grow my-4  rounded-2xl  py-10 ">
                        <div className="flex justify-center">
                            <button className="w-3/4 bg-primary py-4 rounded-lg text-black ">STAGE TWO</button>
                        </div>
                        <p className="text-primary font-shadow my-4 mx-8">The Great Breakthrough is Begginning</p>
                        <ul className="mx-12">
                            <li className="list-disc">Yeti (yetistx.com)</li>
                            <li className="list-disc">30K Members in the Telegram Group</li>
                            <li className="list-disc">50K Followers on Twitter</li>
                            <li className="list-disc">CEX Listing preps</li>
                            <li className="list-disc">Great Influencer Marketing</li>
                            <li className="list-disc">Certik Audit</li>
                        </ul>
                    </div>
                    <div className="h-[60vh] md:h-[70vh]   bg-black  min-w-[300px] grow my-4  rounded-2xl   py-10">
                        <div className="flex justify-center">
                            <button className="w-3/4 bg-primary py-4 rounded-lg text-black ">STAGE THREE</button>
                        </div>
                        <p className="text-primary font-shadow my-4 mx-8">Yeti Swaps</p>
                        <ul className="mx-12">
                            <li className="list-disc">YETI$ NFT Market Place</li>
                            <li className="list-disc">YETI$ Universe NFT Collection Launch</li>
                            <li className="list-disc">CEX Listings</li>
                            <li className="list-disc">Charity Program and Partnerships</li>
                            <li className="list-disc">$500M MC</li>
                            <li className="list-disc">More to be Announced Partnership</li>
                        </ul>
                    </div>
                </div> 
            </div>
        </>
    )
}   

export default Roadmap