export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#7a9de4] to-[#612fd5] text-white">
      <nav className="bg-white text-black py-4 px-6 shadow-md">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a href="/" className="text-2xl font-bold"></a>
          <div className="flex space-x-4">
            <a href="/about" className="hover:text-gray-600 mt-2">
              About Us
            </a>
            <a href="/contact" className="hover:text-gray-700 mt-2">
              Contact Us
            </a>
            <a href="/mentors" className="hover:text-gray-700 mt-2">
              Mentors
            </a>
            <a
              href="/signup"
              className="bg-[#2b2675] text-white py-2 px-4 rounded-full font-semibold shadow-md transition duration-300 ease-in-out hover:bg-[#1b064f]"
            >
              Register
            </a>
            <a
              href="/signup"
              className="bg-[#2b2675] text-white py-2 px-4 rounded-full font-semibold shadow-md transition duration-300 ease-in-out hover:bg-[#1b064f]"
            >
              Sign in
            </a>
          </div>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Margdarshan Mentors
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Connecting you with industry experts to guide your professional
          journey.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="/mentors"
            className="bg-white text-black py-3 px-6 rounded-full font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Explore Mentors
          </a>
          <a
            href="/contact"
            className="bg-transparent border border-white py-3 px-6 rounded-full font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-black"
          >
            Contact Us
          </a>
        </div>
      </section>

      <section className="bg-white text-black py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-black">
            Why Choose Margdarshan?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            We offer personalized mentorship programs designed to help you
            achieve your career goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-300 rounded-lg shadow-md">
              <h3 className="text-2xl font-medium mb-2 text-black">
                Expert Mentors
              </h3>
              <p>
                Learn from the best in the industry who have years of experience
                in their respective fields.
              </p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg shadow-md">
              <h3 className="text-2xl font-medium mb-2 text-black">
                Tailored Programs
              </h3>
              <p>
                Get access to programs that are customized to your career
                aspirations and goals.
              </p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg shadow-md">
              <h3 className="text-2xl font-medium mb-2 text-black">
                Comprehensive Resources
              </h3>
              <p>
                Utilize a wide range of resources that can help you grow both
                personally and professionally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-[#a889f1] to-[#485bc7]">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Join Margdarshan Mentors today and take the first step towards
          achieving your career goals.
        </p>
        <a
          href="/signup"
          className="bg-white text-black py-3 px-6 rounded-full font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Sign Up Now
        </a>
      </section>

      <footer className="text-center text-black py-6 bg-[#dfdde5]">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Margdarshan Mentors. All rights
          reserved.
        </p>
      </footer>
    </div>
  )
}
