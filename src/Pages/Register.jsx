import axios from 'axios';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Register(props) {
    const [username,setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onBtnRegister = async () => {
        try {
            // console.log(username, email, password);
            // 1. Memeriksa form sudah terisi semua atau belum
            if (username === '' || email === '' || password === '') {
                alert('Fill in all form');
            } else {
                let domain = /\.(com|id|co.id|org|gov|ac.id|my.id|xyz|tv)/;
                console.log(email.match(domain));
                // 2. Memeriksa email benar atau tidak
                if (email.includes('@') && email.match(domain)) {
                    // 3. Memeriksa emailnya sudah terdaftar atau tidak, get data dr db
                    let res = await axios.get(`http://localhost:2000/user?email=` + email);//pake await biar proses get selesai dlu bru jalanin line 31
                    if (res.data.length > 0) {
                        alert("Email is existed, change your email ⚠️");
                    } else {
                        // 4. Mengirim data kedatabase
                        let resPost = await axios.post("http://localhost:2000/user", {
                            username,
                            email,
                            password,
                            status: "unverified",
                            imgProfile: "",
                            role: 'user'
                        });
                        if (resPost.data.id) {
                            alert("Register successfully ✅")
                        } else {
                            alert("Register Failed ❌")
                        }
                    }
                } else {
                    alert("Your email is wrong ⚠️");
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    if (props.loading) {
        return <h1>Loading</h1>
    } else {
    return (
        <div className='m-0 p-0 box-border'>
        <div className='flex justify-center items-center min-h-screen'>
            <div class="w-full max-w-sm p-4 border-2 border-amber-400 bg-white rounded-tl-[50px] rounded-br-[50px] shadow-lg shadow-black sm:p-6 md:p-8 dark:bg-gray-400 dark:border-gray-700">
                <form class="space-y-6" action="#">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Register</h5>
                    <div className='text-start'>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input onChange={(element) => setUsername(element.target.value)} type="text" name="username" id="text" placeholder="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className='text-start'>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input onChange={(element) => setEmail(element.target.value)}type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="youremail@mail.com" required />
                    </div>
                    <div className='text-start'>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input onChange={(element) => setPassword(element.target.value)} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <button onClick={() => onBtnRegister()} type="button" class="w-full text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create your fake life</button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        <Link className='text-blue-700 hover:underline dark:text-blue-600' to="/login">Login</Link>
                    </div>
                </form>
            </div>

        </div>
        </div>
    );
}
}
export default Register;
