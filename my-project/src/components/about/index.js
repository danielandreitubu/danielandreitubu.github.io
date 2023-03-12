import { AcademicCapIcon, RocketLaunchIcon, HeartIcon } from '@heroicons/react/20/solid'

const About = () => {
    

const cards = [
  {
    name: 'Health and fitness',
    description: 'The most significant value you need to protect is your health. As long as we can work on an issue, we can prepare for practically any situation.',
    icon: HeartIcon,
  },
  {
    name: 'Self-development',
    description: 'Enhancing strengths, enhancing mental health, and even mending relationships are all benefits of self-improvement. Simple actions like reading a book, meditating, o getting up early are some ways to improve oneself.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Gaming',
    description: 'We can use our imaginations, discover our hobbies, and develop our talents in a variety of ways when we have time to play by ourselves. Play ultimately promotes new ways of thinking and boosts self-esteem.',
    icon: RocketLaunchIcon,
  },
]

  return (
    <div class="bg-gray-800 p-10" id="about">
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <img
        src="images/read.png"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <svg
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
      >
        <path
          fill="url(#7c63f5ae-130c-4c0f-963f-50ac7fe8d2e1)"
          fillOpacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        
      </svg>
      <svg
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
      >
        <path
          fill="url(#49c00522-612e-41d3-bb32-ce7d1fa28850)"
          fillOpacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
       
      </svg>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Me</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          A list of the interests I have          
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              <card.icon className="h-7 w-5 flex-none text-indigo-400" aria-hidden="true" />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-white">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

      
      

export default About