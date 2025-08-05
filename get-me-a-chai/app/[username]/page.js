import React from 'react'

const username= ({params}) => {
  return (
    <>
    <div className='cover w-full bg-red-50 relative'>
      <img  className="object-cover w-full h-[310px]" src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/18.gif?token-hash=7q1qsk9Wsp_KlKf1x_S4aY0Z7pIsXTswUDzKeEDa-r0%3D&token-time=1756944000" alt="" />
      <div className='absolute -bottom-10 right-[45%] border-1 border-white rounded-full'>
        <img className="rounded-full"
         width={140} height={150} src="https://imgs.search.brave.com/m-gFfu6d9rm8ZWWBsijnS_rWnxL4vU0hfaoDstbLg00/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzLzQ3NS9teXN0/ZXJpb3VzLWJsYWNr/LWNhdC0wNDEwLTU3/MDAxMjMuanBnP2Zt/dA" alt="" />
      </div>
    </div>
    <div className="info flex justify-center items-center my-16 flex-col">
      <div className='font-bold text-lg'>

      {params.username}
      </div>
      <div className='text-slate-400'>
        Creating Animated art for VIT's
      </div>
      <div className='text-slate-400'>
        19,321 members101. posts$20,780/release
      </div>
      <div className="payment flex gap-3 w-[80%] mt-11">
        <div className="supporter w-1/2 bg-slate-700 text-slate-900 rounded-lg p-5 text-white">
      {/* Show list of all the supporters as a leaderboard */}
      <h2 className='text-2xl font-bold '>Supporters</h2>
      <ul className='mx-4'>
        <li className='my-2 flex gap-2 items-center'>
          <img width={33} src="avatar.gif" alt="" />
          <span>
            
          Shubham donated <span className='font-bold'>$30</span> with a message"I support you bro.Lots of"
          </span>
          </li>
        <li className='my-2 flex gap-2 items-center'>
          <img width={33} src="avatar.gif" alt="" />
          <span>
            
          Shubham donated <span className='font-bold'>$30</span> with a message"I support you bro.Lots of"
          </span>
          </li>
        <li className='my-2 flex gap-2 items-center'>
          <img width={33} src="avatar.gif" alt="" />
          <span>
            
          Shubham donated <span className='font-bold'>$30</span> with a message"I support you bro.Lots of"
          </span>
          </li>
       <li className='my-2 flex gap-2 items-center'>
          <img width={33} src="avatar.gif" alt="" />
          <span>
            
          Shubham donated <span className='font-bold'>$30</span> with a message"I support you bro.Lots of"
          </span>
          </li>
      </ul>
        </div>
        <div className="makepayment w-1/2 bg-slate-700 rounded-lg">
        <h2 className='text-2xl font-bold my-5 mx-5'>Make a Payment </h2>
        <div className="flex gap-2 flex-col">
          <div className=''>
          <input type="text" className='w-[94%] p-1  m-1 rounded-lg bg-slate-800' placeholder='Enter Name' />
          <input type="text" className='w-[94%]  p-1   m-1 rounded-lg bg-slate-800' placeholder='Enter Amount' />
          <input type="text" className='w-[94%] p-1  m-1 rounded-lg bg-slate-800' placeholder='Enter Message' />

          </div>
          <button className='w-[94%]  p-1   m-1 rounded-lg bg-slate-800'>Pay</button>
        </div>

      {/* or choose from these amounts */}
      <div className="flex gap-2 mt-5">
        <button className='bg-slate-800 p-2 rounded-lg'>Pay $10</button>
        <button className='bg-slate-800 p-2 rounded-lg'>Pay $20</button>
        <button className='bg-slate-800 p-2 rounded-lg'>Pay $30</button>
      </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default username
