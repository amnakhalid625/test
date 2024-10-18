const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
        <article>
            <h2 className="text-2xl font-extrabold text-center text-gray-900 mt-10">Contact</h2>
            <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
                <article className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1675455137349-399d41cfcd72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vYmlsZSUyMHBob25lc3xlbnwwfHwwfHx8MA%3D%3D')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                        <h3 className="text-center">
                            <a className="text-white text-2xl font-bold text-center" href="#">
                                <span className="absolute inset-0"></span>
                                Top 10 highest paid programming languages of 2021
                            </a>
                        </h3>
                    </div>
                </article>
                <article className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
                    style={{ backgroundImage: "url('https://i.pinimg.com/control/474x/ae/ef/2a/aeef2af41136d83e20f9b28cfa8b4f2b.jpg')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                        <h3 className="text-center">
                            <a className="text-white text-2xl font-bold text-center" href="#">
                                <span className="absolute inset-0"></span>
                            Good Quality
                            </a>
                        </h3>
                    </div>
                </article>
                <article className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
                    style={{ backgroundImage: "url('https://i.pinimg.com/564x/dc/1b/2e/dc1b2e881af1822c8f63dca57160c175.jpg')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                        <h3 className="text-center">
                            <a className="text-white text-2xl font-bold text-center" href="#">
                                <span className="absolute inset-0"></span>
                                The best one Result
                            </a>
                        </h3>
                    </div>
                </article>
            </section>
        </article>
    </section>
  )
}

export default Contact;
