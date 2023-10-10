
const Contact = () => {
    return (
        <div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leadi lg:text-5xl text-center"> Contact Now!</h2>
                        <div className="dark:text-gray-400 text-center">Contact to share your opeinion.</div>
                    </div>
                    <img src="https://i.ibb.co/XDpVztS/image-removebg-preview-3.png" alt="" className="p-6 w-full h-52 md:h-64" />
                </div>
                <form  className="space-y-6">
                    <div>
                        <label  className="text-sm">Full name</label>
                        <input  type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800 border-2" />
                    </div>
                    <div>
                        <label  className="text-sm">Email</label>
                        <input  type="email" className="w-full p-3 rounded dark:bg-gray-800 border-2" />
                    </div>
                    <div>
                        <label className="text-sm">Message</label>
                        <textarea rows="3" className="w-full p-3 rounded dark:bg-gray-800 border-2"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-violet-400 text-gray-900">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;