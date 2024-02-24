
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const ContactInformation = () => {
    const formRef = useRef(null);


    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_dmshxn3', 'template_uou104c', e.target, 'J_YwqwjAwiLpTzJ6b')
            .then((result) => {
                console.log(result.text);
                resetForm();
            }, (error) => {
                console.log(error.text);
            });

    }
    function resetForm() {
        if (formRef.current) {
            formRef.current.reset();
        }
    }

    return (
        <div>
            <div className="pt-28 mb-6 ">

            </div>
            <div className='p-12'>
                <h2 className='text-2xl md:text-4xl text-center font-semibold'><span className='text-red-300 '>For Any Queries, Please Contact 
                </span> </h2>
                
            </div>
            <div className="mx-auto rounded-lg bg-base-200">
                <div className="w-3/4 mx-auto">
                    <div className="">
                        <form ref={formRef}  onSubmit={sendEmail} className="card-body">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="user_email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" />

                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea name='message' className="textarea textarea-secondary w-full" placeholder="message"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Send" />

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInformation;