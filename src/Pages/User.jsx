import React from 'react'
import Sidenavbar from '../Components/Sidenavbar';
import Follow from '../Components/Follow';
import {BsImage,BsMic,BsEmojiSmile} from 'react-icons/bs'

function User() {
  return (
    <div>
        <div className='flex lg:justify-between border border-black'>
        <Sidenavbar />
        <div className='  w-[85%] lg:w-[100%] lg:h-[1000px]'>
            <div className='border border-orange-400 h-1/5'>
                <div className='flex justify-evenly gap-x-4 b h-[80%] py-4'>
                    <div className='w-14 h-14 border border-red-300 rounded-[50%] flex items-center'>
                        <img className='object-cover rounded-full w-20 h-14' src='https://steamuserimages-a.akamaihd.net/ugc/1644335490328681808/D0A3A3E24D0E55EE384DF501A74E3204C06089B1/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'></img>
                    </div>
                    <textarea className='w-[80%] h-[80%]' placeholder="What's on your mind?" maxLength={150} />
                </div>
                <div className='flex justify-between mx-4'>
                    <div className=' flex flex-row gap-x-12 text-xl text-blue-700'>
                        <button type='button'><BsImage /></button>
                        <button type='button'><BsMic /></button>
                        <button type='button'><BsEmojiSmile /></button>
                    </div>
                    <div>
                        <button className='px-2 border border-cyan-400 rounded-3xl font-bold text-white bg-blue-500 hover:bg-blue-400 shadow-md shadow-gray-600' type='button'>Share</button>
                    </div>
                </div>
            </div>

            <div>
                
            </div>

        </div>
            <Follow />
        </div>
    </div>
  )
}

export default User;