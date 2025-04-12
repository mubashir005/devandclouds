"use client"; // Required since it's a UI component

export default function Hero() {
  return (
    <div className="">
      <section className="w-max-full h-screen flex items-center justify-center overflow-hidden relative bg-none">
        {/* Background Overlay */}
        <div className="absolute inset-0 w-full overflow-hidden z-0" 
        style={{
          backgroundImage: 'url("/bg_Artboard.jpg")',
          backgroundSize: 'cover', // Ensures the image covers the whole container
          backgroundPosition: 'center', // Centers the image in the div
          backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        }}></div> {/* Dark overlay for contrast */}

        <div className="relative z-10 w-full px-50  text-center text-[#F3F4F6]">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Providing Cutting-Edge
            <span className="relative whitespace-nowrap text-[#0EB494] dark:text-[#0EB494]">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-[#0D9488]/70 dark:fill-[#0D9488]/60"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span className="relative">Systems Solutions</span>
            </span>
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg">
            Your IT Development and Support, Delivered Seamlessly!
          </p>

          {/* Button */}
          <div className="flex justify-center items-center mt-6" data-aos="fade-up" data-aos-delay="400">
            <a
              href="schedule"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center px-4 py-2 bg-[#0EB494] hover:bg-[#10B89D] text-white text-md font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200"
            >
              <span className="absolute inset-0 rounded-full bg-[#0EB494] opacity-50 animate-ping"></span>
              <span className="relative z-10 pr-2">Schedule a Consultation</span>
            </a>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute sm:bottom-14 bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#F3F4F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
