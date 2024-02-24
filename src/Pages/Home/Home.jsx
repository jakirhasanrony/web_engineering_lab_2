import bannerImg from './../../assets/images/img5.png';
import resume from '../../assets/images/resume.pdf';
import Skills from './Skills/Skills';
import { Typewriter } from 'react-simple-typewriter'
import AboutSection from './AboutSection/AboutSection';
import ExperienceSection from './ExperienceSection/ExperienceSection';
// import { Link } from 'react-router-dom';
// import react from '../../assets/images/react.png';
// import javascript from '../../assets/images/javscript.png';

const Home = () => {
    const roundedCorners = {
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
    };
    return (
        <div className="shadow-2xl pt-20 rounded-lg">
            <div className="flex rounded-lg justify-center flex-wrap  gap-4 p-8 ">
                <div className='flex flex-wrap w-1/2 justify-center items-center p-4 card '>
                    <div className='px-4 space-y-2 '>
                        <h2 className='md:text-3xl  font-bold'><span className='text-red-300'>Hello,</span> I am Jakir Hasan Rony</h2>
                        <h1 className="md:text-4xl font-extrabold  py-3">Junior
                            <span style={{ color: 'black', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={[' MERN Stack', ' Developer']}
                                    loop={1115}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span></h1>
                        <p>
                            Develop robust, responsive web applications leveraging a tech stack comprising JavaScript, React for dynamic front-end interfaces, Node.js for scalable server-side handling, and MongoDB/Firebase for efficient data management. This comprehensive setup enables seamless integration, real-time updates, and optimal performance across the applications components, ensuring a user-friendly and engaging experience
                        </p>



                        <div className='flex items-center gap-2 py-5 '>
                            
                            <a className='btn bg-red-100 btn-outline w-1/2 font-bold uppercase' href="https://github.com/jakirhasanrony?tab=repositories">See My Projects</a>

                            <a className="btn bg-red-100 btn-outline w-1/2 font-bold uppercase" href={resume} download="Resume">
                                Download Resume
                            </a>

                        </div>
                    </div>
                </div>
                <div className='card  p-4 '>
                    <div className='bg-red-200   flex justify-center items-center' style={roundedCorners}>
                        <div>
                            <img className='rounded-lg ' src={bannerImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <AboutSection></AboutSection>


            <div className='shadow-lg mt-16'>

                <div className="card p-8 rounded-none bg-gray-100  ">
                    <div>
                        <h2 className='text-xl text-center font-semibold'><span className='text-red-300 '>WHAT I DO</span> </h2>
                        <h1 className="text-3xl  text-center font-bold  py-2 mb-6">
                            <span style={{ color: 'black', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={[' SPECIALIZING IN']}
                                    loop={1115}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>
                        <Skills></Skills>
                        {/* <figure className="px-10 py-10 bg-white rounded-lg  ">



                            <div className=' w-full space-y-10'>
                                <div className='flex flex-wrap gap-8'>
                                    <div className='w-1/2 '>
                                        <div className='flex  items-center gap-4'>
                                            <img className='w-[80px] ' src={react} alt="" />
                                            <div>
                                                <h3 className='text-3xl font-bold'>React.js</h3>
                                                <p>Specializing in developing high-performance React.js applications.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex-1 '>
                                        <div className='flex  items-center gap-4'>
                                            <img className='w-[80px] ' src={javascript} alt="" />
                                            <div>
                                                <h3 className='text-3xl font-bold'>JavaScript</h3>
                                                <p>Expertise in modern JavaScript ES6+ for scalable and efficient code solutions.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='flex flex-wrap gap-8'>
                                    <div className='w-1/2 '>
                                        <div className='flex  items-center gap-4'>
                                            <img className='w-[80px] ' src={react} alt="" />
                                            <div>
                                                <h3 className='text-3xl font-bold'>React.js</h3>
                                                <p>Specializing in developing high-performance React.js applications.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex-1 '>
                                        <div className='flex  items-center gap-4'>
                                            <img className='w-[80px] ' src={javascript} alt="" />
                                            <div>
                                                <h3 className='text-3xl font-bold'>JavaScript</h3>
                                                <p>Expertise in modern JavaScript ES6+ for scalable and efficient code solutions.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='flex flex-wrap gap-8'>
                                    <div className='w-1/2 '>
                                        <div className='flex  items-center gap-4'>
                                            <img className='w-[80px] ' src={react} alt="" />
                                            <div>
                                                <h3 className='text-3xl font-bold'>React.js</h3>
                                                <p>Specializing in developing high-performance React.js applications.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex-1 '>
                                        <div className='flex  items-center gap-4'>
                                            <img className='w-[80px] ' src={javascript} alt="" />
                                            <div>
                                                <h3 className='text-3xl font-bold'>JavaScript</h3>
                                                <p>Expertise in modern JavaScript ES6+ for scalable and efficient code solutions.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </figure> */}
                    </div>
                </div>
            </div>
            <ExperienceSection>F</ExperienceSection>
        </div>
    );
};

export default Home;