import './App.css'
import { BsArrowLeft } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";
import img from "../src/assets/cactus.avif"
import img1 from "../src/assets/orang.avif"
import img2 from "../src/assets/man.jpg"

function App() {


  return (
    <>
      <div className="main h-[100vh] w-[100vw] flex flex-col sm:flex-row overflow-hidden select-none">


        <div className="left sm:w-[40%] h-[100%] w-[100%] overflow-hidden">

          <div className="nav w-[100%] h-[10%] py-[20px] px-[40px] flex justify-between items-center">
            <div className="left">
              <BsArrowLeft className='text-xl' />
            </div>
            <div className="right list-none  flex  items-center gap-[40px] text-xl">
              <li className='border-b-[2px] border-[#3a1616] w-fit cursor-pointer'>Home</li>
              <li className='cursor-pointer'>Work</li>
              <li className='cursor-pointer'><FaTwitter className='text-[#1DA1F2]' /></li>
            </div>
          </div>

          <div className="content h-[90%] flex justify-center items-center list-none ">
            <div className="text">
              <h1 className='text-[80px] font-bold pop'>Hello<span className='font-serif'>,</span></h1>
              <p className='opacity-60 pop'>Oh. You need a little dummy text <br /> for your mockup? How quaint.</p>
              <li className='border-b-[2px] border-[#3a1616] w-fit mt-5 text-xl cursor-pointer'>Read</li>
            </div>
          </div>

        </div>


        <div className="right sm:w-[60%] h-[100%] bg-slate-100 w-[100%] overflow-hidden">

          <div className="rtop w-[100%] h-[50%] bg-blue-950 flex">
            <div className="rtopleft w-[55%] h-[100%] bg-zinc-900">
              <img className='object-cover object-center w-[100%] h-[100%]' src={img} alt="" />
            </div>
            <div className="rtopright w-[45%] h-[100%] bg-green-600">
              <img className='object-cover object-bottom w-[100%] h-[100%]' src={img1} alt="" />
            </div>
          </div>

          <div className="rbottom w-[100%] h-[50%] bg-yellow-700">
            <img className='object-cover object-center  w-[100%] h-[100%]' src={img2} alt="" />
          </div>


        </div>


      </div>
    </>
  )
}

export default App
