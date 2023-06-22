import React, { useEffect , useState , useRef } from 'react'
import Wrapper from './Wrapper'
import poster from "../assets/10219.jpg";
import { useNavigate } from 'react-router-dom';
import Ordercontext from '../context/Context';
import { useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
import About from "../components/About";
import Contact from './Contact';

const Homepage = () => {
  const navigate  = useNavigate();
  const { isAdmin } = useContext(Ordercontext);
  const [refreshKey, setRefreshKey] = useState(0);
  const headingRef = useRef(null);
  const buttonRef = useRef();


  useEffect(() => {
    if (isAdmin) {
      setRefreshKey(prevKey => prevKey + 1);
    }
    gsap.fromTo(".head" , {x: "random(-200 , 200)" ,opacity:0 } , {duration: 1.5, x:0 , opacity : 100 ,stagger : 0.25 , ease:"power3.out"});
    gsap.fromTo(".img" , {x:0 ,opacity:0  , scale : 0.6} , {duration: 1.5, x:0 , opacity : 100 ,scale:1, ease:"power3.out"});
    gsap.fromTo(".card", {y:100 , opacity : 0},{
      scrollTrigger: {
        trigger: ".card",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",// Optional: Adds visual markers for testing/debugging
      },
      opacity: 100,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger : 0.25
    });
    gsap.fromTo(".social", {y:100 , opacity : 0},{
      scrollTrigger: {
        trigger: ".card",
        start: "top 20%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",// Optional: Adds visual markers for testing/debugging
      },
      opacity: 100,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger : 0.25
    });
  },[])
  return (
    <Wrapper>
    <div className='p-4 my-10'>
      <div className='w-full h-fit bg-cover md:flex justify-between '>
        <div className='items-center mt-10'>
        <h1 className='text-7xl font-poppins font-bold head' >
          The Best
        </h1>
        <h1 className='text-7xl font-poppins font-bold head'>
          Pizza Services
        </h1>
        <h1 className='text-7xl font-poppins font-bold text-red-400 head'>
          in Your City
        </h1>
        <p className='text-xl font-poppins font-medium mt-10 head'>OEat assures quality and freshness of every pizza we delivery without geeting late.</p>
        {!localStorage.getItem("token")? (        <div className='mt-10'>
            <button
              className="shadow-3xl text-xl head  font-medium font-poppins px-4 py-4 bg-[#222222] rounded-md hover:bg-red-400 hover:text-black transition-transform"
              id='btn'
              onClick={() => navigate("/login")}
            >
              Get Started
            </button>
          </div>): (        <div className='mt-10'>
            {localStorage.getItem("isadmin")? (            <button
              className="shadow-3xl text-xl head  font-medium font-poppins px-4 py-4 bg-[#222222] rounded-md hover:bg-red-400 hover:text-black transition-transform"
              onClick={() => navigate("/dashboard")}
              id='btn'
            >
              Go to Dashboard
            </button>) : (            <button
              className="shadow-3xl text-xl head  font-medium font-poppins px-4 py-4 bg-[#222222] rounded-md hover:bg-red-400 hover:text-black transition-transform"
              onClick={() => navigate("/shop")}
              id='btn'
            >
              Start Shopping
            </button>)}

          </div>)}

        </div>
        <img src={poster} alt="poster" className='hidden  md:flex h-[80vh] rounded-lg img' />
      </div>  
    </div>
    <About/>
    <Contact/>
    </Wrapper>
  )
}

export default Homepage