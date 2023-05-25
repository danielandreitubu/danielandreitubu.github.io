const Projects = () => {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl py-24 lg:py-32 sm:px-6 lg:px-8 ">
        <div className="relative isolate overflow-hidden bg-gray-900 hover:bg-gray-800  px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's Animate
          </h2>
          <p className="mx-auto max-w-2xl text-sm font-medium tracking-tight text-white mt-5">
            Let's animate is a 3D Spinning cube implemented the random word api.
            Just wait for a few minute and you will see. 😉
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://lets-animate-bro.netlify.app/"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Look
            </a>
            <a
              href="https://github.com/danielandreitubu/animate"
              className="text-sm font-semibold leading-6 text-white"
            >
              Github <span aria-hidden="true">→</span>
            </a>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Projects;
