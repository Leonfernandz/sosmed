import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import{GiSnake} from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../actions/authAction';
function Navbar (props){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const username = useSelector((state)=> state.auth.username);
    return(
<nav>
    <div className='flex flex-row items-center mx-auto justify-between bg-slate-400'>
        <div className='flex w-1/2'>
        <GiSnake className='text-gray-900 text-4xl ml-3' />
        <Link to='/User' className='text-red-500 font-normal text-2xl'>Fake<span className='font-bold text-amber-300'>BOOK</span></Link>
        </div>
        {
            props.loading ?
            <div className='animate-spin'></div> :
            username ?
            <button onClick={() => dispatch(logoutAction())} className='bg-blue-500 rounded-xl px-2 mr-4 shadow-md shadow-emerald-100 hover:scale-105 duration-700 hover:text-white hover:text-md'>Log Out</button>
            :
    <div className='px-4 py-2 w-1/4 flex justify-end text-white'>
       <button className='bg-amber-400 rounded-xl px-2 mr-4 shadow-md shadow-emerald-100 hover:scale-105 duration-700 hover:text-white hover:text-md' onClick={() => navigate('/')}>Login</button>
        <button className='bg-amber-400 rounded-xl px-2 mr-1 shadow-md shadow-emerald-100 hover:scale-105 duration-700 hover:text-white hover:text-md' onClick={() => navigate('/register')}>Register</button>
    </div>
    }
    </div>
</nav>
    )
}
export default Navbar;