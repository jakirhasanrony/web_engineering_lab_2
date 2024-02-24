import './Skills.css';
import react from '../../../assets/images/react.png';
import javascript from '../../../assets/images/javscript.png';
import html from '../../../assets/images/html.png';
import css from '../../../assets/images/css.png';
import tailwind from '../../../assets/images/tailwind.png';
import boostrap from '../../../assets/images/bootstrap.png';
import materialUi from '../../../assets/images/materialUi.png';
import nodejs from '../../../assets/images/node-js.png';
import mongodb from '../../../assets/images/mongodb.png';
import firebase from '../../../assets/images/firebase.png';


const Skills = () => {
    return (
        <div className="featured-item bg-fixed text-white rounded-lg">
            <div className=' bg-white bg-opacity-80'>
               
                <figure className="px-10 py-10 rounded-lg text-black ">




                    <div className=' w-full space-y-10'>
                        <div className='flex flex-wrap gap-8'>
                            <div className='w-1/2 '>
                                <div className='flex  items-center gap-4'>
                                    <img className='w-[80px] ' src={html} alt="" />
                                    <div>
                                        <h3 className='text-3xl font-bold'>HTML 5</h3>
                                        <p className='font-bold'>Expertise in utilizing HTML5 for building responsive and accessible web interfaces.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1 '>
                                <div className='flex  items-center gap-4'>
                                    <img className='w-[80px] ' src={css} alt="" />
                                    <div>
                                        <h3 className='text-3xl font-bold'>CSS3</h3>
                                        <p className='font-bold'>Mastery in utilizing CSS3 animations and transitions for engaging web experiences.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-wrap gap-8'>
                            <div className='w-1/2 '>
                                <div className='flex  items-center gap-4'>
                                    <img className='w-[80px] ' src={tailwind} alt="" />
                                    <div>
                                        <h3 className='text-3xl font-bold'>Tailwind</h3>
                                        <p className='font-bold'>Expertise in leveraging Tailwind CSS utility classes for streamlined and consistent web development.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1 '>
                                <div className='flex  items-center gap-4'>
                                    <img className='w-[80px] ' src={boostrap} alt="" />
                                    <div>
                                        <h3 className='text-3xl font-bold'>Boostrap</h3>
                                        <p className='font-bold'>Proficient in crafting responsive and sleek web designs using Bootstrap framework.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-wrap gap-8'>
                            <div className='w-1/2 '>
                                <div className='flex  items-center gap-4'>
                                    <img className='w-[80px] ' src={materialUi} alt="" />
                                    <div>
                                        <h3 className='text-3xl font-bold'>Material UI</h3>
                                        <p className='font-bold'>Utilizing Material-UIs responsive layout system for seamless cross-device compatibility.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1 '>
                                <div className='flex  items-center gap-4'>
                                    <img className='w-[80px] ' src={javascript} alt="" />
                                    <div>
                                        <h3 className='text-3xl font-bold'>JavaScript</h3>
                                        <p className='font-bold'>Expertise in modern JavaScript ES6+ for scalable and efficient code solutions.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-wrap gap-8'>
                            <div className='w-1/2 '>
                                <div className='flex  items-center gap-4'>
                                    <img className='w-[80px] ' src={nodejs} alt="" />
                                    <div>
                                        <h3 className='text-3xl font-bold'>Node.js</h3>
                                        <p className='font-bold'>Demonstrating proficiency in asynchronous programming with Node.js for optimized performance.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1 '>
                                <div className='flex  items-center gap-4'>
                                    <img className='w-[80px] ' src={react} alt="" />
                                    <div>
                                        <h3 className='text-3xl font-bold'>React.js</h3>
                                        <p className='font-bold'>Proficient in leveraging React.js for efficient state management and dynamic UIs.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-wrap gap-8'>
                            <div className='w-1/2 '>
                                <div className='flex  items-center gap-4'>
                                    <img className='w-[80px] ' src={mongodb} alt="" />
                                    <div>
                                        <h3 className='text-3xl font-bold'>.MongoDB</h3>
                                        <p className='font-bold'>Demonstrating proficiency in indexing and aggregation pipelines within MongoDB for optimized querying.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1 '>
                                <div className='flex  items-center gap-4'>
                                    <img className='w-[80px] ' src={firebase} alt="" />
                                    <div>
                                        <h3 className='text-3xl font-bold'>Firebase</h3>
                                        <p className='font-bold'>Proficient in developing real-time, cloud-powered applications using Firebase.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </figure>
            </div>
        </div>
    );
};

export default Skills;