

const HeadLine = () => {
/* This example requires Tailwind CSS v3.0+ */
    return (
        <div className="bg-gray-800">
      <div className="relative isolate overflow-hidden ">
        <div className="bg-gray-800 mx-auto max-w-7xl pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-28 lg:px-8">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
              
               
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Hi! 👋 My name is Daniel Andrei Tubu
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-400">
                As a dedicated frontend developer, I take pleasure in carrying out software engineering tasks and solving problems. My areas of interest are web development and software engineering.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="https://www.docdroid.net/f1jrHPL/daniel-andrei-tubusoftware-engineer-pdf"
                    target="_blank"
                    className="hover:animate-bounce rounded-md bg-gray-900 px-3.5 py-1.5 text-base font-medium leading-7 text-white shadow-sm hover:bg-blue-500  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    View my resume
                  </a>
                  <a href="https://github.com/danielandreitubu" target="_blank" className="text-base font-medium leading-7 text-gray-400 hover:text-gray-300">
                    View my GitHub <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 md:p-0 p-10 flex items-center justify-end lg:order-last">
          <iframe src="https://embed.lottiefiles.com/animation/75296"  className="bg-white md:rounded-full rounded-lg" width={730}
              height={390}></iframe>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gray-800 sm:h-32 " />
      </div>
    </div>
    )
  }
export default HeadLine