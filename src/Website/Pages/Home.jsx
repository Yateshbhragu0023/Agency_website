import React, { useEffect, useState } from 'react'
import officeImg from '../../assets/Img/office img.png'
import { FaRegCheckCircle } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoTrendingDownSharp, IoTrendingUpSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa6";
import Slider from './Slider';
import Slider2 from './Slider2';


const sections = [
  {
    title: "Optimization & SEO",
    desc: "We optimize for performance and implement SEO best practices to ensure your website ranks and performs well.",
  },
  {
    title: "Launch & Support",
    desc: "After launching, we continue to optimize and provide support to ensure long-term success.",
  },
  {
    title: "Scaling & Growth",
    desc: "We help scale your product with modern practices, automation, and continuous improvements.",
  },
];

export default function Home() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1520975922219-8309e0f0c5fa",
    "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    "https://images.unsplash.com/photo-1496483648148-47c686dc86a8",
  ];

  const [pause, setPause] = useState(false);


  return (
    <>
      <div className=' border border-blue-700 rounded-xl py-12 my-4 body ' id='top' >
        <div className='text-center space-y-10 starry-bg'>
          <h1 className='md:text-8xl sm:text-7xl text-4xl  leading-none opacity-70 text-gray-200 font-semibold ' >Lets's Boost your Business with your Professional Looking Website</h1>
          <h1 className='md:text-[18px] md:px-96 sm:px-[96px] px-4  leading-none opacity-70 text-gray-200 font-normal '>Your website is your first impression. We make sure it’s unforgettable, high-converting, and built to dominate.</h1>
          <button className="relative overflow-hidden border border-blue-600 p-2 px-6 font-semibold font-sans rounded-md text-white
before:absolute before:inset-0 before:bg-blue-600 before:translate-y-full before:transition-transform before:duration-500 hover:before:translate-y-0
after:absolute after:left-0  after:bottom-0 after:w-full after:h-1/2 after:bg-blue-600/40 after:animate-[wave_3s_linear_infinite]">
            <span className="relative z-10 ">Book 1 : 1 call</span>
          </button>
        </div>
      </div>
      {/* exxpreriemce section start  */}
      <section className='my-4 py-12'>
        <div className='text-center space-y-2'>
          <h1 className='text-white font-semibold text-[18px] bg-[#0D0D0D] border border-blue-700 cursor-pointer w-32 py-1 mx-auto rounded-md' >Expertise </h1>
          <p className='text-white font-semibold text-5xl'>Because Experience Matter</p>
          <div className='grid grid-cols-6 ' >
            <div className='col-span-2 text-white mt-8 ' >
              <motion.img
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,   // smooth time (seconds)
                  ease: "anticipate"  // you can also try: "easeInOut", "circOut", "anticipate"
                }}
                src={officeImg} className='rounded-xl h-[350px] transition-all ' alt="" />

            </div>
            <div className='col-span-4 ml-8 mt-8 space-y-5' >
              <h1 className='text-gray-200 opacity-70 text-6xl font-semibold text-start' > We have 2 Years+ Experience
                Of Web development
              </h1>
              <p className='text-white/65 text-start font-semibold text-[19px]'>
                At WEB TH, we specialize in crafting innovative website development strategies that drive real business growth. Our expertise ensures your brand stays ahead in the competitive digital landscape.
              </p>
              <div className='flex justify-between gap-5'>
                <div className='w-[30%] py-5 rounded-2xl text-center text-[22px] text-white/75 bg-opacity-20 font-semibold bg-blue-700'>
                  <h1> 3 Years+</h1>
                  <h1>Experience</h1>
                </div>
                <div className='w-[30%] py-5 rounded-2xl text-center text-[22px] text-white/75 bg-opacity-20 font-semibold bg-blue-700'>
                  <h1> 30+</h1>
                  <h1>Projects</h1>
                </div>
                <div className='w-[30%] py-5 rounded-2xl text-center text-[22px] text-white/75 bg-opacity-20 font-semibold bg-blue-700'>
                  <h1> 40+</h1>
                  <h1>Worldwide Client</h1>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* exxpreriemce section end  */}

      {/* Our Portfolio work  start*/}
      <section className='my-4 py-12'>
        <div className='text-center space-y-2'>
          <h1 className='text-white font-semibold text-[18px] bg-[#0D0D0D] border border-blue-700 cursor-pointer w-32 py-1 mx-auto rounded-md' >Our Work </h1>
          <p className='text-white font-semibold text-5xl'>Let's see Our Porfolio Work</p>
        </div>
        <div>
          <Slider2/>
        </div>
      </section>
      {/* Our Portfolio work  end*/}

      {/* servise section start  */}
      <section className='my-4 pb-12  '>
        <div className='text-center space-y-2'>
          <h1 className='text-white font-semibold text-[18px] bg-[#0D0D0D] border border-blue-700 cursor-pointer w-32 py-1 mx-auto rounded-md' >Services </h1>
          <p className='text-white font-semibold text-5xl'>What we do Best</p>
        </div>
        <div className=' bg-gray-900 p-10 rounded-xl border border-gray-500 flex gap-8 mt-10 mx-auto'>
          <div className='w-[50%]'>
            <h1 className='text-white/75 text-start font-semibold text-3xl'>What we Do Best</h1>
            <ul className='space-y-3 mt-2'>
              <li className='font-semibold uppercase  text-white/60 flex gap-2 place-items-center'>
                <span className='text-blue-600 text-xl ' ><FaRegCheckCircle /></span>
                <span>End-to-End Website Development</span>
              </li>
              <li className='font-semibold uppercase text-white/60 flex gap-2 place-items-center'>
                <span className='text-blue-600 text-xl ' ><FaRegCheckCircle /></span>
                <span>e-commerce Website </span>
              </li>
              <li className='font-semibold uppercase text-white/60 flex gap-2 place-items-center'>
                <span className='text-blue-600 text-xl ' ><FaRegCheckCircle /></span>
                <span> custom Website Design</span>
              </li>
              <li className='font-semibold uppercase text-white/60 flex gap-2 place-items-center'>
                <span className='text-blue-600 text-xl ' ><FaRegCheckCircle /></span>
                <span>Website optimization</span>
              </li>
              <li className='font-semibold uppercase text-white/60 flex gap-2 place-items-center'>
                <span className='text-blue-600 text-xl ' ><FaRegCheckCircle /></span>
                <span>landing page</span>
              </li>
              <li className='font-semibold uppercase text-white/60 flex gap-2 place-items-center'>
                <span className='text-blue-600 text-xl ' ><FaRegCheckCircle /></span>
                <span>SEo (search engine optimization)</span>
              </li>
            </ul>
          </div>
          <div className='bg-gray-950 shadowC  rounded-xl p-5 w-[50%] space-y-5 text-start'>
            <div className='bg-blue-700 p-4 rounded-lg '>
              <h1 className='text-white/80 text-3xl text-start font-semibold '>All Your Website Need,
                Expertly Handled
              </h1>
            </div>
            <h1 className='text-start text-white/80 font-semibold'>
              End-to-end website solutions ❤️‍🔥 that ensure your website looks great, functions flawlessly, and drives results.🚀
            </h1>
            <button className='bg-black text-white p-2 px-4 font-semibold hover:bg-blue-700 transition-all duration-150'>
              Book A Call 🚀
            </button>
          </div>
        </div>
      </section>
      {/* servise section start  */}

      {/* Benefit section start */}
      <section className='my-4 py-12'>
        <div className='text-center space-y-2'>
          <h1 className='text-white font-semibold text-[18px] bg-[#0D0D0D] border border-blue-700 cursor-pointer w-32 py-1 mx-auto rounded-md' >Benefits </h1>
          <p className='text-white font-semibold text-5xl'>What benefits work with me</p>
        </div>
        <div className='grid grid-cols-3 gap-7 mt-12 w-[90%] mx-auto ' >
          <div className='col-span-1 rounded-3xl border border-white/55  p-4 px-9 bg-blue-950/20 text-white space-y-3' >
            <h1 className='bg-gray-700/30 p-2 w-12 rounded-md text-center text-3xl'><IoTrendingDownSharp /></h1>
            <h1 className='font-semibold text-xl' >End-To-End Services</h1>
            <p className='font-semibold text-white/60' >From ideation to launch, we handle every step of your website’s journey, ensuring a seamless process.</p>
          </div>
          <div className='col-span-1 rounded-3xl border border-white/55  p-4 px-9 bg-blue-950/20 text-white space-y-3' >
            <h1 className='bg-gray-700/30 p-2 w-12 rounded-md text-center text-3xl'><FaCheck /></h1>
            <h1 className='font-semibold text-xl' >Budget-Friendly Packages</h1>
            <p className='font-semibold text-white/60' >No hidden fees. We offer clear and upfront pricing, so you know exactly what you’re investing in.</p>
          </div>
          <div className='col-span-1 rounded-3xl border border-white/55  p-4 px-9 bg-blue-950/20 text-white space-y-3' >
            <h1 className='bg-gray-700/30 p-2 w-12 rounded-md text-center text-3xl'><IoTrendingUpSharp /></h1>
            <h1 className='font-semibold text-xl' >Long-Term Partnership</h1>
            <p className='font-semibold text-white/60' >Our work doesn’t stop at launch. We continually optimize your website to keep it ahead of the competition.</p>
          </div>

        </div>
      </section>
      {/* Benefit section end */}

      {/*  work process section start  */}
      <section className='my-4 md:py-12 py-5'>
        <div className='text-center space-y-2'>
          <h1 className='text-white font-semibold text-[17px] bg-[#0D0D0D] border border-blue-700 cursor-pointer w-40 py-1 mx-auto rounded-md' >How we Work ? </h1>
          <p className='text-white font-semibold sm:text-5xl text-3xl md:text-5xl'>Let's see How We Work</p>
        </div>
        <div>
          <div className='flex sm:w-[80%] md:w-[40%] gap-4 mx-auto my-8 md:p-5  p-3 border   border-orange-200 bg-orange-100/10 rounded-2xl'>
            <div className='text-2xl text-center py-2'><FaRegLightbulb /></div>
            <div>
              <h1 className='font-semibold text-white text-xl'>Planning And designing</h1>
              <p className='py-3'>We start by understanding your brand And goals, followed by creating a design tailored to your vision </p>
            </div>
          </div>
          <div className='flex sm:w-[80%] md:w-[40%] gap-4 mx-auto my-8 md:p-5 p-3 border border-green-200 bg-green-100/10 rounded-2xl'>
            <div className='text-2xl text-center py-2'><FaRegLightbulb /></div>
            <div>
              <h1 className='font-semibold text-white text-xl'>Development</h1>
              <p className='py-3'>Our team brings the design to life with clean, efficient code, ensuring your website is fast and scalable</p>
            </div>
          </div>
          <div className='flex sm:w-[80%] md:w-[40%] gap-4 mx-auto my-8 md:p-5 p-3 border border-yellow-200 bg-yellow-100/10 rounded-2xl'>
            <div className='text-2xl text-center py-2'><FaRegLightbulb /></div>
            <div>
              <h1 className='font-semibold text-white text-xl'>Optimization and SEO</h1>
              <p className='py-3'>We optimize for performance and implement SEO best practices to ensure your website ranks and performans well </p>
            </div>
          </div>
          <div className='flex sm:w-[80%] md:w-[40%] gap-4 mx-auto my-8 md:p-5 p-3 border border-purple-200 bg-purple-200/10 rounded-2xl'>
            <div className='text-2xl text-center py-2'><FaRegLightbulb /></div>
            <div>
              <h1 className='font-semibold text-white text-xl'>Launch & Support</h1>
              <p className='py-3'>After launching, we continue to optimize and provide support to ensure long-term succes </p>
            </div>
          </div>
        </div>

      </section>
      {/*  work process section end  */}

      {/* testemonial section start */}
      <section className='my-4 py-8'>
        <div className='text-center space-y-4'>
          <h1 className='text-white font-semibold text-[17px] bg-[#0D0D0D] border border-blue-700 cursor-pointer w-40 py-1 mx-auto rounded-md' >Testemonials </h1>
          <p className='text-white font-semibold text-5xl'>What Our Clients Say</p>
          <p className="text-gray-300 mb-12 mt-">
            Hear from businesses we’ve helped grow with powerful websites.
          </p>
        </div>

        <div>
          {/* // animatee slider start  */}
          {/* <div
            className="w-full overflow-hidden relative mt-8"
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
          >
            <div
              className="flex animate-marquee"
              style={{
                animationPlayState: pause ? "paused" : "running",
              }}
            >
              {[...images, ...images].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="slider"
                  className="w-80 h-52 object-cover rounded-lg m-2 shrink-0"
                />
              ))}
            </div>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>
          </div> */}
          {/* // animatee slider end  */}
          <Slider />
        </div>

      </section>
      {/* testemonial section start */}

      {/* FAQ section FAQ start */}
      <section className='my-4 py-8 text-white items-center '>
        <div className='text-center space-y-2'>
          <h1 className='text-white font-semibold text-[18px] bg-[#0D0D0D] border border-blue-700 cursor-pointer w-32 py-1 mx-auto rounded-md' >FAQ </h1>
          <p className='text-white font-semibold text-5xl'>Questions? Answers.</p>
        </div>
        <div className='w-[60%] mx-auto space-y-3 mt-10'>

          <div className="collapse collapse-arrow bg-gray-900 border border-base-300 text-white">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-[18px]">
              What is your website development Process?
            </div>
            <div className="collapse-content text-[15px] font-semibold text-white/70">
              <p>
                Our process ensures high-quality, timely delivery while keeping you involved. Here's how we do it:
              </p>
              <p className='py-2'><span className='font-bold text-white'>Consultation:</span> We understand your business goals, audience, and requirements.</p>
              <p className='py-2'><span className='font-bold text-white'>Design & Prototyping:</span> We create wireframes and prototypes in Figma.</p>
              <p className='py-2'><span className='font-bold text-white'>Development:</span> We build your site using ReactJS, NextJS, NodeJS.</p>
              <p className='py-2'><span className='font-bold text-white'>Testing & QnA:</span> We test across devices and browsers.</p>
              <p className='py-2'><span className='font-bold text-white'>Launch:</span> We deploy and assist with hosting/domain.</p>
              <p className='py-2'><span className='font-bold text-white'>Post-Launch Support:</span> 1 month free support.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-gray-900 border border-base-300 text-white">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-[18px]">
              What is your web design Process?
            </div>
            <div className="collapse-content text-[15px] font-semibold text-white/70">
              <p>
                Our design process creates user-friendly websites that align with your brand.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-gray-900 border border-base-300 text-white">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-[18px]">
              How long does it take to design and develop a website?
            </div>
            <div className="collapse-content text-[15px] font-semibold text-white/70">
              The timeline varies depending on the complexity of your project.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-gray-900 border border-base-300 text-white">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-[18px]">How do we Collaborate During the Project</div>
            <div className="collapse-content text-[15px] font-semibold text-white/70">
              We keep thing Simple and transparent. you'll get a dedicated project manager and acces to your collaboration tools ( Whatsapp , Notion, Trello ) to Track Progress and share feedback,, sand stay in the loop
            </div>
          </div>
          <div className="collapse collapse-arrow bg-gray-900 border border-base-300 text-white">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-[18px]">What if I need my Website done urgently ?</div>
            <div className="collapse-content text-[15px] font-semibold text-white/70">
              We understan Deadlines! With our Superfast Priorty Service, we can accelerate your project and deliver a high quality Website in record time.
            </div>
          </div>
        </div>

      </section>
      {/* FAQ section FAQ end */}


    </>
  )
}
