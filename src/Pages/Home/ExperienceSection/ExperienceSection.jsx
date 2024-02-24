import brandCar from '../../../assets/images/brandCar.jpg';
import touristGuide from '../../../assets/images/touristGuide.jpg';

const ExperienceSection = () => {
    return (
        <div className="bg-white p-12 ">
            <div className="py-8">
                <h2 className='text-2xl md:text-4xl text-center font-semibold'><span className='text-red-300 '>My Experiences</span> </h2>
                <h1 className="md:text-3xl font-bold w-3/4 mx-auto text-center py-3">
                    Demonstrating Proficiency and Innovation in JavaScript, React, Node.js, and Database Technologies
                </h1>
                <div className="border-b-4 my-2 mx-11 border-red-300">

                </div>
                <p className='w-3/4 mx-auto text-center py-3'>As a junior web developer, while I may not have professional working experience, I have gained valuable practical knowledge through various projects related to web development. These projects have allowed me to apply my skills and learning in building websites, implementing functionalities, and solving real-world problems. </p>
            </div>
            <div>
                <h2 className='text-2xl md:text-4xl text-center font-semibold'><span className='text-red-300 '>My Projects</span> </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="card  bg-base-100 ">
                    <figure className="px-10 pt-10">
                        <img src={brandCar} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">BrandCar Website</h2>
                        <p>This web application is tailored to simplify the exploration and management of products across a spectrum of prestigious car brands, such as Lamborghini, Ferrari, and more. The platform revolves around dedicated brand pages, each offering a user-friendly interface for effortless browsing and interaction with a diverse range of automotive products.</p>
                        <p className='font-bold'>Live Link: <a href="https://brand-car-client.web.app/"><span className='text-blue-400'>https://brand-car-client.web.app/</span></a></p>
                    </div>
                </div>

                <div className="card  bg-base-100 ">
                    <figure className="px-10 pt-10">
                        <img src={touristGuide} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">TouristGuide Website</h2>
                        <p>
                            This website is designed to cater to the distinct needs and preferences of three primary user roles: Tourists, Admins, and Tour Guides. Each role enjoys specialized functionalities aimed at delivering a personalized and efficient experience throughout their interactions with the platform, ultimately fostering a harmonious and efficient ecosystem for all.
                        </p>
                        <p className='font-bold'>Live Link: <a href="https://final-effort-c524d.web.app/"><span className='text-blue-400'>https://final-effort-c524d.web.app/</span></a></p>

                    </div>
                </div>

            </div>
            <div className='my-12 p-12 mx-auto'>
                <p className='font-bold text-center'>To see more projects please visit my gitHub profile: <a href="https://github.com/jakirhasanrony?tab=repositories"><span className='text-blue-400'>https://github.com/jakirhasanrony?tab=repositories</span></a></p>
            </div>

        </div>
    );
};

export default ExperienceSection;