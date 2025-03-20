import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup, } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { USER_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'



const Login = () => {


    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });


    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading } = useSelector((store) => store.auth);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                header: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user))
                navigate('/');
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error)
        }
        finally {
            dispatch(setLoading(false));
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border-gray-200 rounded-md p-4 my-10 '>
                    <h1 className='font-bold text-xl mb-5'>Login</h1>

                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder='abc@gmail.com'
                        ></Input>
                    </div>

                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder='********'
                        ></Input>
                    </div>

                    <div className='flex items-center justify-between'>
                        <RadioGroup className='flex items-center gap-4 my5'>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type='radio'
                                    name='role'
                                    value='student'
                                    className='cursor-pointer'
                                    id='student'
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                />
                                <Label htmlFor="student">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type='radio'
                                    name='role'
                                    value='recruiter'
                                    className='cursor-pointer'
                                    id='recruiter'
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                />
                                <Label htmlFor="recruiter">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    {
                        loading ? <Button className="w-full my-4"><Loader2 className='mr-2 h-4 w-4 animate-spin'>Please Wait</Loader2></Button>:<Button type='submit' className='w-full my-4'>Login</Button>
                    }
                    <span className='text-sm'>Don't have an account? <Link to='/signup' className='cursor-pointer text-blue-600'> signup</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login
