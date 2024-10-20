
const Last = () => {
    return (
        <>
        <div className=" bg-black  lg:h-[80vh] md:h-[90vh] h-[120vh]  text-white ">
            <div className=" flex flex-col md:gap-10   justify-center  md:flex-row">
            <button className=" min-w-[15vw] mx-auto md:mx-0 md:max-w-[35vw] w-[55vw] grow  rounded-lg md:my-24 my-10 bg-black border-2 border-primary">
                <img src="/twitter.png" alt="" className="mx-auto w-[22%]" />
            </button>
            <button className=" min-w-[15vw] mx-auto md:mx-0 md:max-w-[35vw] w-[55vw] grow rounded-lg md:my-24 bg-black border-2 border-primary">
                <img src="/telegram.png" alt="" className="mx-auto w-[20%]" />
            </button>
            </div>
            <div className="my-14 md:my-0" >
                <h1 className="text-4xl text-center font-bold">Yetistx</h1>
                <p className="opacity-40 w-[70vw] text-center my-4 mx-auto text-sm">This website does not constitute an offer to purchase or solicitation to sell, nor is it a recommendation to buy or sell, any token or other product. Purchasing and selling tokens is inherently risky and holders must bear their risk of loss. Neither the authors of this website nor any participants in the yeti Stacks project accept any liability for losses or taxes that holders, purchasers or sellers of Mr Beans Stacks may incur. The value of yeti Stacks may decrease and may be highly volatile.</p>
                <p className="opacity-40 w-[70vw] text-center my-4 mx-auto text-sm">
                This website is not directed towards any person located in a jurisdiction where purchasing, selling or holding yeti Stacks is prohibited or regulated. Consult your local laws before transacting in any cryptocurrency.
                </p>
            </div>
        </div>
        </>
    )
}

export default Last