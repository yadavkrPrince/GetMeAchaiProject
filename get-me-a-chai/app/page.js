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
    <div className="bg-white h-1 opacity-6">
    </div>

    <div className="text-white container mx-auto py-12 pt-6 ">
      <h2 className="text-2xl font-bold text-center mb-4">Your Fans can buy you a chai</h2>
      <div className="flex gap-5 justify-around">
           <div className="item space-y-1 flex flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full  text-black" width={55} src="/man.gif" alt="mangif" />
        <p className="text-white font-bold">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>
         <div className="item space-y-1 flex flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full  text-black" width={55} src="/coin.gif" alt="mangif" />
          <p className="text-white font-bold">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>
        <div className="item space-y-1 flex flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full  text-black" width={55} src="/group.gif" alt="mangif" />
          <p className="text-white font-bold">Fans want to help</p>
          <p className="text-center">Your fans are available for you to help you</p>
        </div>

      </div>
    </div>

    <div className="bg-white h-1 opacity-6">
    </div>
    <div className="text-white container mx-auto py-12 pt-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-4">Learn more about us</h2>
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/U29f_TcTDLo?si=719Vvlnghfb0F-nr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </>
  ) 
}