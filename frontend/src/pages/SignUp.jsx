import BGImage from '../assets/images/PixelBG.png';
import { Input, Button } from "@nextui-org/react";
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';



const backend = import.meta.env.VITE_BACKEND;

export default function SignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,20}$/.test(form.password)) {
      console.error('Invalid password format');
      return;
    }
    try {
      const response = await axios.post(`${backend}/user/login`, form);
      console.log(response.data);
      if (response.status === 200) {
        navigate(`/pokemon?userName=${form.userName}`); 
        
      }
    } catch (error) {
      console.error('Error signing up:', error);
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
      }
    }
  };
  
  

  return (
    <>
      <div className="w-full bg-cover bg-no-repeat relative aspect-video" style={{ backgroundImage: `url(${BGImage})` }}>
        <form onSubmit={handleSubmit} autoComplete="off" action="">
          <div className="flex items-center justify-center h-screen ">
            <div className="glassmorphism">
              <Input
                isRequired
                type="text"
                label="First Name"
                placeholder="Enter your first name"
                className="glassmorphism-input"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
              />

              <Input
                isRequired
                type="text"
                label="Last Name"
                placeholder="Enter your last name"
                className="glassmorphism-input mt-5" 
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
              />

              <Input
                isRequired
                type="text"
                label="Username"
                placeholder="Choose a username"
                className="glassmorphism-input mt-5" 
                name="userName"
                value={form.userName}
                onChange={handleChange}
              />

              <Input
                isRequired
                type="password"
                label="Password"
                placeholder="Create a password"
                className="glassmorphism-input mt-5" 
                name="password"
                value={form.password}
                onChange={handleChange}
              />

              <div className="flex flex-row gap-5 items-center justify-center">
                <Button
                  onSubmit={handleSubmit}
                  className="glassmorphism-button text-black rounded-full p-4 mt-5 mb-5"
                  style={{ fontFamily: 'G1', fontSize: '3rem' }}
                  type="submit"
                >
                  Sign Up
                </Button>
              </div>
              
              <Link to="/login">Already have an account? Log in</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
