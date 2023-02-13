import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import axios from 'axios';
import { checkEmail, API_URL } from '../helper';
import { Alert } from 'flowbite-react';
import { useDispatch, } from 'react-redux';
import { loginAction } from '../actions/authAction';

function Login(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [visible, setVisible] = useState("password");
    const klik = () => {
        if (visible === "password") {
            setVisible("text")
        } else {
            setVisible("password")
        }
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const onBtnLogin = async () => {
        try {
            // alert(`${email} ${password}`);
            if (email === '' || password === '') {
                Alert('Fill in all form');
            } else {
                if (checkEmail(email)) {
                    // Lanjut login
                    let response = await axios.get(`${API_URL}/user?email=${email}&password=${password}`);
                    console.log("Check response login", response.data);
                    if (response.data.length === 0) {
                        Alert('Account not found')
                    } else {
                        // Menyimpan data kelocalstorage browser untuk keepLogin
                        localStorage.setItem('socio_login', response.data[0].id);
                        // Lanjut simpan response.data ke reducer
                        dispatch(loginAction(response.data[0]));
                        navigate('/landing', { replace: true });
                        // alert(`Welcome, ${response.data[0].username}`)
                    }
                } else {
                    Alert('Your email is wrong ⚠️')
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    if (props.loading) {
        return <h1>Loading</h1>
    } else {
    return (
        <div className='m-0 p-0 box-border'>
            <div className='md:flex md:justify-evenly '>
                <div className=' title sm:text-center md:text-start md:flex md:flex-col md:justify-center md:w-1/3 sm:py-5 gap-y-4'><h2 className='text-4xl font-bold text-black'><span className='span1 text-red-500'>F</span>.<span className='span1 text-red-400'>A</span>.<span className='span1 text-red-300'>K</span>.<span className='span1 text-red-500'>E</span>-<span className='span1 text-amber-500'>BOOK</span></h2>
                <h3 className='text-2xl'>Do you have an energy to have a fake life on social media right now?</h3>
                <p className='text-xl'>Find your <span className='text-amber-500 font-semibold'>Fake Mate</span> and build a <span className='text-red-500 font-semibold'>relationshit</span>!!!</p></div>
        <div className='flex justify-center items-center min-h-screen'>
            <div class="w-[400px] p-4 bg-white rounded-tl-[50px] rounded-br-[50px] shadow-md shadow-black sm:p-6 md:p-8 dark:border-b-gray-200 dark:border-slate-700 border border-amber-500">
                <form class="space-y-6" action="#">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-gray-600">Sign in</h5>
                    <div className='text-start'>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Your email</label>
                        <input onChange={(element) => setEmail(element.target.value)} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div className='text-start'>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Your password</label>
                        <div className='text-end pt-2 flex'>
                            <input onChange={(element) => setPassword(element.target.value)} type={visible} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            <button type='button' onClick={klik} className="text-lg px-2">
                                {
                                visible === "password" ?
                                <AiFillEyeInvisible/>:
                                <AiFillEye/> 
                                
                                }
                            </button>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500">Remember me</label>
                        </div>
                        <a href="" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot Password?</a>
                    </div>
                    <button onClick={onBtnLogin} type="submit" class="w-full shadow-md shadow-gray-500 text-white bg-amber-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Dive into your Fake life</button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-500">
                        Not registered?
                        <h2 className='text-blue-700 hover:underline dark:text-blue-500' onClick={() => navigate('/register')}>Create account</h2>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </div>
    );
}
}
export default Login;
