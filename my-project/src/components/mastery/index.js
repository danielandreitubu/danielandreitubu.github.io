const Mastery = () => {
    
    const categories = [
        {
          name: 'HTML',
          href: '#',
          imageSrc: '/images/html-logo.png',
        },
        {
          name: 'REACT.JS',
          href: '#',
          imageSrc: '/images/react-logo.png',
        },
        {
          name: 'TAILWINDCSS',
          href: '#',
          imageSrc: '/images/Tailwind_CSS_Logo.png',
        },
        {
          name: 'GIT',
          href: '#',
          imageSrc: '/images/git_icon.png',
        },
        { name: 'MAIZZLE', href: '#', imageSrc: '/images/maizzle.png' },

      ]
      
        return (
          <div className="bg-gray-800" id="mastery">
            <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8 px-6">
              <div className="sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                <h2 className="text-5xl font-bold tracking-tight text-white mb-4">Mastery</h2>
              </div>
        <p class="text-gray-500 md:text-2xl text-lg mb-10 mt-2">
One of the key characteristics of an expert is the ability to process information to make the best decision possible about the situation at hand.</p>
              <div className="mt-4 flow-root mb-20">
                <div className="-my-2">
                  <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible mb-36">
                    <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                      {categories.map((category) => (
                        <a
                          key={category.name}
                          href={category.href}
                          className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                        >
                          <span aria-hidden="true" className="absolute inset-0">
                            <img src={category.imageSrc} alt="" className="h-full w-full object-cover object-center" />
                          </span>
                          <span
                            aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                          />
                          <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
      
            </div>
          </div>
        )
      }
  
export default Mastery