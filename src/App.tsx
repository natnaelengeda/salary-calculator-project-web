import { useState } from "react";

// data
import { taxInfo } from "./data/tax";
import { addCommaNumbers } from "./utils/addCommaNumbers";

// Helmet
import { Helmet } from "react-helmet";

export default function App() {
  const [salary, setSalary] = useState<any>("");
  const [showDetails, setShowDetails] = useState(false);

  const [netSalary, setNetSalary] = useState("");
  const [taxedMoney, setTaxedMoney] = useState("");
  const [pensionMoney, setPensionMoney] = useState("");

  const calculateSalary = () => {
    setShowDetails(true);
    const pension = 7;
    let tax = 0;
    let nSalary = 0;
    let tMoney = 0;
    let pMoney = 0;

    // Find the tax rate
    for (let i = 0; i < taxInfo.length; i++) {
      if (salary >= taxInfo[i].min && salary <= taxInfo[i].max) {
        tax = taxInfo[i].tax;
        break;
      } else if (salary > taxInfo[taxInfo.length - 1].max) {
        tax = taxInfo[taxInfo.length - 1].tax;
      }
    }

    tMoney = parseInt(salary) * (tax / 100);
    pMoney = parseInt(salary) * (pension / 100);

    nSalary = parseInt(salary) - (tMoney);

    setNetSalary(nSalary.toString());
    setTaxedMoney(tMoney.toString());
    setPensionMoney(pMoney.toString());

  }

  return (
    <>
      <div className="w-full h-full min-h-screen bg-gray-600 flex flex-col items-center justify-between py-5">

        <div className="w-full h-full flex flex-col items-center justify-start gap-10 py-6 px-5 md:px-0 font-Montserrat">
          {/* Main Content */}
          <div className="w-full md:w-[30rem] bg-white h-full flex flex-col gap-10 py-5 rounded-lg">

            {/* Logo */}
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="/logo.jpeg"
                alt="Logo"
                className="w-20 h-20 rounded-lg shadow-xl shadow-gray-300" />
            </div>

            {/* Form */}
            <div className="w-full h-full flex flex-col gap-10 items-start px-5">

              {/* Salary Input Form */}
              <div className="w-full h-full flex flex-col gap-5 md:gap-10">

                {/* Salary */}
                <div className="w-full h-full flex flex-col gap-2">
                  <label className="px-2" htmlFor="salary">Salary: </label>
                  <input
                    className="w-full h-12 px-5 rounded border border-gray-400 "
                    type="number"
                    placeholder="Enter Your Gross Salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  />
                </div>

                {/* Butotn */}
                <div className="w-full h-full flex ">
                  <button
                    onClick={calculateSalary}
                    className="w-full h-12 bg-[#0A5D4D] hover:bg-[#074539] text-white rounded-lg">
                    Calculate
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* Detils */}
          {
            showDetails &&
            <div className="w-full md:w-[30rem] bg-white h-full flex flex-col items-center gap-10 py-5 rounded-lg">

              {/* Header */}
              <div className="w-full h-full flex flex-col items-center gap-2 px-3">
                <h1 className="text-2xl font-bold">Result</h1>
                <hr className="w-full" />
              </div>

              {/* Result */}
              <div className="w-full flex flex-col gap-3 items-start px-5">

                {/* Gross Salary */}
                <div className="w-full h-full flex flex-row items-end justify-start gap-2">
                  <h1 className="text-xl font-light">Gross Salary: </h1>
                  <p className="font-semibold">{addCommaNumbers(salary)} Birr</p>
                </div>

                {/* Net Salary */}
                <div className="w-full h-full flex flex-row items-end justify-start gap-2">
                  <h1 className="text-xl font-light">Net Salary: </h1>
                  <p className="font-semibold">{addCommaNumbers(netSalary)} Birr</p>
                </div>

                {/* Pension Money */}
                <div className="w-full h-full flex flex-row items-end justify-start gap-2">
                  <h1 className="text-xl font-light">Pension: </h1>
                  <p className="font-semibold">{addCommaNumbers(pensionMoney)} Birr</p>
                </div>

                {/* Tax */}
                <div className="w-full h-full flex flex-row items-end justify-start gap-2">
                  <h1 className="text-xl font-light">Tax: </h1>
                  <p className="font-semibold">{addCommaNumbers(taxedMoney)} Birr</p>
                </div>

              </div>

            </div>
          }
        </div>

        <div className="flex flex-row items-center gap-2">
          <p
            className="text-white text-center">
            Developed by
          </p>
          <a
            className="text-blue-400"
            href="https://portfolio.alamondai.com"
            target="_blank"
            rel="noreferrer">
            @natnaelengeda
          </a>
        </div>
      </div>
    </>
  )
}
