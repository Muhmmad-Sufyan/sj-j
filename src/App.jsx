import {  useState } from "react"
import RecentCom from "./components/RecentCom";
import Team from "./components/Team";
import TopNavbar from "./components/TopNavbar";

function App() {
 const [toogle,setToogle] = useState(false)

  return (
    <>
    <header>
   
      <TopNavbar />
    <div>
    <div className="text-white bg-black flex justify-between  gap-x-3 p-5">
      <div className="h-[49px] flex justify-center gap-x-2 items-center">
       <div className="border relative px-2 flex items-center hover:bg-red-600">
       <img className="h-[47px]" src="/eg.png" alt="" />
       <h1 className="font-bold">Ehsas Lab</h1>
       {toogle ?
      <ul className="flex-col z-50 border-t-2 border-gray-400 px-11  absolute top-[63px] w-full left-[-1.5rem] bg-black items-center md:hidden  md:font-bold">
                    <a href=""><li className="hover:border-b-2 hover:border-gray-600 hover:bg-green-600">Home</li></a>
            <a href="/about"><li className="hover:border-b-2 hover:border-gray-600 hover:bg-green-600">About</li></a>
           <a href="/course"><li className="hover:border-b-2 hover:border-gray-600 hover:bg-green-600">Course</li></a>
            <a href="/pages"><li className="hover:border-b-2 hover:border-gray-600 hover:bg-green-600">Pages</li></a>
          <a href="/feature"><li className="hover:border-b-2 hover:border-gray-600 hover:bg-green-600">Features</li></a>
             <a href="/blog"><li className="hover:border-b-2 hover:border-gray-600 hover:bg-green-600">Blog</li></a>
           <a href="/forums"><li className="hover:border-b-2 hover:border-gray-600 hover:bg-green-600">Forums</li></a>
          <a href="/contact"><li className="hover:border-b-2 hover:border-gray-600 hover:bg-green-600">Contact</li></a>
        </ul>:''
     }
       </div>
      
      
        <ul className="md:flex z-auto md:items-center hidden md:gap-x-4 md:font-bold">
          <a href="/"><li className="cursor-pointer active:text-blue-400 hover:border-b-2">Home</li></a>
          <a href="/about"><li className="cursor-pointer active:text-blue-400 hover:border-b-2">About</li></a>
          <a href="/course"><li className="cursor-pointer active:text-blue-400 hover:border-b-2">Course</li></a>
          <a href="/pages"><li className="cursor-pointer active:text-blue-400 hover:border-b-2">Pages</li></a>
          <a href="/feature"><li className="cursor-pointer active:text-blue-400 hover:border-b-2">Features</li></a>
          <a href="/blog"><li className="cursor-pointer active:text-blue-400 hover:border-b-2">Blog</li></a>
          <a href="/forums"><li className="cursor-pointer active:text-blue-400 hover:border-b-2">Forums</li></a>
          <a href="/contact"><li className="cursor-pointer active:text-blue-400 hover:border-b-2">Contact</li></a>
        </ul>
        </div>

      
      <div className="md:flex md:items-center md:gap-x-4 hidden">
      <i className='bx bxs-shopping-bag text-xl' ></i>
      <i className='bx bx-search text-xl' ></i>
      </div>
      <div onClick={()=>setToogle(!toogle)} className="md:hidden flex group items-center ">
      <i class='bx bx-menu bg-gray-500 text-4xl' ></i>
     
      

      </div>
    </div>
    
    </div>
    
    </header>
    {/* Hero Section */}
    <div className="relative bg-cover bg-center h-[40vh] md:h-[80vh]" style={{ backgroundImage: `url('/h.jpg')` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <h1 className="text-white text-2xl md:text-5xl font-bold mb-2 md:mb-4 text-center">20,000+ COMMUNITY MEMBERS</h1>
        <p className="text-white text-sm md:text-lg mb-4 text-center">WELCOME TO THE TEACHME COMMUNITY PAGES</p>
        <div className="w-full max-w-md flex flex-col md:flex-row items-center">
          <input
            type="email"
            placeholder="Enter your email here..."
            className="px-4 py-2 w-full md:mr-2 mb-2 md:mb-0 text-gray-700 rounded md:rounded-r-none"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded md:rounded-l-none w-full md:w-auto">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>

    {/* Introdection */}
    <div className="flex flex-col md:flex-row bg-white gap-x-4 md:my-10 my-2 md:max-w-[80%] w-[90%] mx-auto  overflow-hidden">
      <div className="relative w-full md:w-1/2 h-64">
        <video  controls
          className="w-full h-full"
          poster="/eg.png"
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
            <source src="https://0.s3.envato.com/h264-video-previews/ec34ad1d-cba5-43a6-a1d0-a537b10e5879/759078.mp4" 
          />
        </video>
      </div>
      <div className=" flex-1 md:mt-0 mt-4">
        <p className="text-sm text-gray-600 uppercase font-semibold mb-2">Create Your Own Online Course</p>
        <h2 className="text-xl font-bold mb-1">Course Introduction</h2>
        <p className="text-gray-700 mb-2">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised believable. Suffered alteration in some form, by injected humour, or randomised..
        </p>
        <div className="flex items-center mb-1">
          <img 
            className="w-10 h-10 rounded-full mr-3"
            src="https://randomuser.me/api/portraits/women/68.jpg" 
            alt="Author" 
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Amanda Ergony</p>
            <p className="text-gray-600">2 Months</p>
          </div>
        </div>
        <button className="md:w-[30%] w-full bg-blue-500 text-white py-2 px-4 mt-2  hover:bg-blue-600 transition duration-300">
          Start Here
        </button>
      </div>
    </div>
    {/* Recent Courses */}
    <RecentCom title='Courses' />
    {/* Our Services */}
    <Team title="Our Services" de={true}/>
    {/* Recent Post */}
    <RecentCom title='Post'/>
    {/* Our Pro Teacher */}
    <Team  title="Our Pro Teacher" de={false}/>
    <TopNavbar />
    </>
    
    
  )
}

export default App
