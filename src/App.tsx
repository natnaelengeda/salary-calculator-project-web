import { useState } from 'react';

// Image
import logo from './assets/image/logo.jpeg';

// Data
import { incomeTax } from './data/incomeTax';

export default function App() {
  const [salary, setSalary] = useState<number>(0);
  const [openDetails, setOpenDetails] = useState<boolean>(false);

  const calculate = () => {
    let tax = 0;

    for (let i = 0; i < incomeTax.length; i++) {
      if (salary >= incomeTax[6].min) {
        tax = incomeTax[6].rate;
        break;
      } else if (salary >= incomeTax[i].min && salary <= incomeTax[i].max) {
        tax = incomeTax[6].rate;
        break;
      }
    }

    console.log("Salary", salary)
    console.log("Tax", tax)
  }




  return (
    <div className="w-full h-full min-h-screen bg-gray-600 flex flex-col items-center gap-10 py-20 px-2">

      {/* Content */}
      <div className="w-full md:w-[30rem] h-full bg-white rounded shadow flex flex-col items-center justify-start py-3 gap-3">

        {/* Logo */}
        <div className='w-full h-full flex items-center justify-center'>
          <img
            className='w-20 h-auto rounded-lg shadow-2xl'
            src={logo}
            alt="Ethiopia Salary Calculator Logo"
          />
        </div>

        <div className='w-full px-5'>
          <hr className='w-full' />
        </div>

        {/* Content */}
        <div className='w-full h-full flex flex-col gap-10 px-5'>

          <div className='w-full h-full flex flex-col gap-2'>
            <label htmlFor="salary">Salary: </label>
            <input
              className='w-full h-10 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              value={salary}
              onChange={(e) => setSalary(parseInt(e.target.value))}
              type="number"
            />
          </div>

          <div className='w-full h-full'>
            <button
              onClick={calculate}
              className='px-3 py-2 bg-[#095D4D] rounded-lg text-white'>Calculate</button>
          </div>
        </div>
      </div>

      {/* Details */}
      {
        openDetails &&
        <div className="w-full md:w-[30rem] h-full bg-white rounded shadow flex flex-col items-center justify-start py-3 gap-3">

        </div>
      }

    </div>
  )
}
