import './EducationalBackground.css';
const EducationalBackground = () => {
    return (
        <>
            <div >
                <div className="pt-28 mb-6 ">

                </div>
              
                <div className="bg-gray-200 rounded-lg shadow-lg py-12 ">
                    <h2 className='text-2xl md:text-4xl text-center font-semibold'><span className='text-red-300 '>My Educational Qualifications
                    </span> </h2>
                    <h1 className="md:text-3xl font-bold w-3/4 mx-auto text-center py-3">
                        Navigating the Educational Landscape: A Journey Through Learning and Development
                    </h1>

                    <div>
                        <div className="edu min-h-screen bg-fixed text-white ">
                            <div className=' '>

                                <figure className="px-10 py-10 rounded-lg text-black ">
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-12'>
                                        <div className="bg-white bg-opacity-40  shadow-xl p-12 space-y-2 rounded-lg ">
                                            <h2 className="text-3xl font-bold">JSC:</h2>
                                            <h2 className="text-2xl font-bold">Uthali High School, 2013</h2>
                                            <h2 className="text-xl font-bold">Result: GPA5.00</h2>
                                            <h2 className="text-lg font-bold">Board: Rajshahi</h2>
                                        </div>
                                        <div className="bg-white bg-opacity-40  shadow-xl p-12 space-y-2 rounded-lg ">
                                            <h2 className="text-3xl font-bold">SSC:</h2>
                                            <h2 className="text-2xl font-bold">Uthali High School, 2016</h2>
                                            <h2 className="text-xl font-bold">Result: GPA5.00</h2>
                                            <h2 className="text-lg font-bold">Board: Rajshahi</h2>
                                        </div>


                                    </div>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-12'>
                                        <div className="bg-white bg-opacity-40  shadow-xl p-12 space-y-2 rounded-lg ">
                                            <h2 className="text-3xl font-bold">HSC:</h2>
                                            <h2 className="text-2xl font-bold">Govt. Azizul Haque College, 2018</h2>
                                            <h2 className="text-xl font-bold">Result: GPA5.00</h2>
                                            <h2 className="text-lg font-bold">Board: Rajshahi</h2>
                                        </div>
                                        <div className="bg-white bg-opacity-40  shadow-xl p-12 space-y-2 rounded-lg ">
                                            <h2 className="text-3xl font-bold">
                                                Undergraduation</h2>
                                            <h2 className="text-2xl font-bold">Daffodil International University</h2>
                                            <h2 className="text-xl font-bold">Session: 2021-now</h2>
                                            <h2 className="text-lg font-bold">Dept. of Computer Science and Engineering</h2>
                                        </div>


                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EducationalBackground;