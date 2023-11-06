import BGImage from '../assets/images/PixelBG.png';
import { Input, Button } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Login() {
  const [form, setForm] = useState({
    firstName: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3000/user/all');
      const { firstName, password } = response.data;
  
      if (form.firstName === firstName && form.password === password) {
        navigate('/pokemons');
      } else {
        setError('Invalid firstname or password');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred while validating your credentials');
    }
  };
  
 

  return (
    <>
      <div className="w-full bg-cover bg-no-repeat relative aspect-video" style={{ backgroundImage: `url(${BGImage})` }}>
        <form onSubmit={handleSubmit} autoComplete="off" action="">
          <div className='flex flex-col gap-5 items-center justify-center h-screen'>

            <Input isRequired type="text" label="First name" placeholder="Enter your first name" className='glassmorphism-input' style={{ width: '400px' }} name="firstName" value={form.firstName} onChange={handleChange} />

            <Input isRequired type="password" label="Password" placeholder="Enter your password" className='glassmorphism-input' style={{ width: '400px' }} name="password" value={form.password} onChange={handleChange} />

            <div  className="flex flex-row gap-5 items-center justify-center h-screen">
              <Button onSubmit={handleSubmit} className="glassmorphism-button text-black rounded-full p-4" style={{ fontFamily: 'G1', fontSize: '3rem', width: '400px' }} type="submit">
                Start
              </Button>
              <Button onClick={() => navigate('/pokemons')}   className="glassmorphism-button text-black rounded-full p-4" style={{ fontFamily: 'G1', fontSize: '3rem', width: '400px' }}>
                Skip
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
