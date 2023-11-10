import BGImage from '../assets/images/PixelBG.png';
import { Input, Button } from "@nextui-org/react";
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Logo from '../components/Logo';
import {useUserContext} from '../context/userContext';

const backend = import.meta.env.VITE_BACKEND;

export default function Login() {

  const {setUser} = useUserContext();


  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };


  const getUserData = async () => {
    try {
      const response = await axios.get(`${backend}/user/all`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return [];
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await getUserData();
  
      const foundUser = userData.find((user) => user.userName === form.userName && user.password === form.password);
  
      if (foundUser) {
        setUser(foundUser);
        navigate(`/pokemon`); 
      } else {
        console.error('Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
      }
    }
  };
  

  return (
    <>
      <div className="w-full bg-cover bg-no-repeat relative aspect-video" style={{ backgroundImage: `url(${BGImage})` }}>
        <Logo/>
        <form onSubmit={handleSubmit} autoComplete="off" action="">
          <div className="flex items-center justify-center h-screen">
            <div className="glassmorphism-container flex flex-col items-center gap-5">
              <Input
                isRequired
                type="text"
                label="Username"
                placeholder="Enter your username"
                className=""
                name="userName"
                value={form.userName}
                onChange={handleChange}
              />

              <Input
                isRequired
                type="password"
                label="Password"
                placeholder="Enter your password"
                className=""
                name="password"
                value={form.password}
                onChange={handleChange}
              />
               <Link to="/signup">Dont have an account? Sign up</Link>
              <div className='flex flex-row gap-5'>
              <Button
                onSubmit={handleSubmit}
                className="text-black rounded-full p-10 mt-5 mb-5"
                style={{ fontFamily: 'G1', fontSize: '2rem' , backgroundColor: '#ffcc01' }}
                type="submit"
              >
                Start
              </Button>
              <Button
              onClick={() => navigate('/pokemon')}
              className="text-black rounded-full p-10 mt-5 mb-5"
              style={{ fontFamily: 'G1', fontSize: '2rem' , backgroundColor: '#ffcc01' }}
               >
                 Skip
               </Button>
             
</div>
             
            </div>
          </div>
        </form>
      </div>
    </>
  );
}