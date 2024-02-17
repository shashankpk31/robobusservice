import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App flex flex-col bg-gray-100  ">
      <nav className='flex flex-row bg-purple-900 text-white h-10 items-center px-1'>
        <i className='bx bx-menu bx-md '></i>
        <div className='flex w-80 px-2'>
          Digital Bus Pass
        </div>
        <i className='bx bxs-bell bx-md '></i>
      </nav>
      <div className='flex flex-col justify-between place-center mx-2'>
        <div className='flex flex-col  text-white p-2 items-center rounded-md my-1 bg-gradient-to-r from-indigo-600 to-fuchsia-900'>
          <div className='flex flex-col items-center'>
            <p>Dankuni Station</p>
            <div className='rotate-180' >
              <i className='bx bx-sort bx-md ' id='route-symbol'></i>
            </div>
            <p>Gitanjali Park</p>
          </div>
          <div className="flex flex-row justify-between p-1 py-2 w-full ">
            <p>Office In - 09:30</p>
            <p>Office Out - 18:30</p>
          </div>
        </div>
        <div className='flex text-gray-500 rounded shadow-md my-2 justify-between flex-row flex-wrap bg-white p-2 items-center'>
          <div className='text-left ' id='left' >
            <p className='my-1 mt-2'>Name</p>
            <p className='font-light'>Shashank Pathak</p>
            <p className='my-1 mt-2'>Bus Stop Name</p>
            <p className='font-light'>Bally Khal</p>
            <p className='my-1 mt-2'>Start Date</p>
            <p className='font-light'>1st Feb,2024</p>
          </div>
          <div className='text-right ' right='right'>
            <p className='my-1 mt-2'>Employee ID</p>
            <p className='font-light'>2436490</p>
            <p className='my-1 mt-2'>Route Type</p>
            <p className='font-light'>Both</p>
            <p className='my-1 mt-2'>End Date</p>
            <p className='font-light'>29th Feb,2024</p>
          </div>
          <div className='text-left py-2 my-1' >Route:<span className='font-light'> Dankuni Station To Gitanjali Park And Return Via-Airport 1No.</span>   </div>
        </div>
      </div>
      <footer className='flex justify-center mt-2'>
        <img src={logo} alt='companylogo' className='h-10 p-2' />
      </footer>
    </div>
  );
}

export default App;
