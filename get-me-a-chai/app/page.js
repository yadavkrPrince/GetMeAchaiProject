import Image from "next/image";


export default function Home(){
  return(
    <>
    <div className="flex justify-center flex-col items-center gap-4 text-white h-[44vh] ">
    <div className="text-white font-bold flex gap-2 justify-center items-center text-5xl ">Buy Me a Chai <span><img src="./tea.gif" width={88} alt="teagif" /></span></div>
    <div>
      <p> A crowdfunding plarform for creators. Get funded by your fans and followers. Start now</p>
    </div>
    <div>
<button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>

<button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
    </div>
    </div>
    <div className="bg-white h-1 opacity-10">
    </div>

    <div>
      <h1 className="text-white">Your Fans can buy you a chai</h1>
      <div className="flex gap-5">
        <div className="item ">
          <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="mangif" />
          <p className="text-white">Fund YourSelf</p>
        </div>

      </div>
    </div>
    </>
  ) 
}