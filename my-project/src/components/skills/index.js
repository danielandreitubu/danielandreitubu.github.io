const Skills = () => {
    
   
      
        return (
         
            <div className="bg-gray-800" id="skills">
            <div className="mx-auto max-w-7xl py-12 px-6 lg:py-44 lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 mb-10">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-10">
                   What I Do
                  </h2>
                  <p className="mt-3 max-w-3xl text-2xl text-gray-500 text-justify">
                  An aspiring Frontend developer who has studied a wide range of technologies but without specialized knowledge
                  </p>
                  <div class="mt-2">
                  <p class="text-2xl text-gray-500">✨ Develop highly interactive Front end / User Interfaces for your web and mobile applications</p>
                  <p class="text-2xl text-gray-500">✨ Develop responsive mobile view for your web and mobile applications </p>
                  </div>
                  <div className="mt-8 sm:flex space-x-2">
                    <div className="rounded-md shadow">
                      <a
                        href="#contact"
                        className="hover:animate-bounce flex items-center justify-center rounded-md border border-transparent bg-gray-900 px-5 py-3 text-base font-medium text-white hover:bg-blue-500"
                      >
                        Contact Me
                      </a>
                    </div>
                
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-0.5 md:grid-cols-1 lg:mt-0 lg:grid-cols-1 max-w-full max-h-full">
                <div className="col-span-2 flex justify-center h-96 max-w-full">
                  <iframe src="https://embed.lottiefiles.com/animation/99312"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      
export default Skills