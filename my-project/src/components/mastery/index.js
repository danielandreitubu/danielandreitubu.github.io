import { HeartIcon, AcademicCapIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'

const Mastery = () => {
    
    const features = [
      {
        name: 'Health and fitness.',
        description:
          'The most significant value you need to protect is your health. As long as we can work on an issue, we can prepare for practically any situation.',
        icon: HeartIcon,
      },
      {
        name: 'Self-development.',
        description: 'Enhancing strengths, enhancing mental health, and even mending relationships are all benefits of self-improvement. Simple actions like reading a book, meditating, o getting up early are some ways to improve oneself.',
        icon: AcademicCapIcon,
      },
      {
        name: 'Gaming.',
        description: 'We can use our imaginations, discover our hobbies, and develop our talents in a variety of ways when we have time to play by ourselves. Play ultimately promotes new ways of thinking and boosts self-esteem.',
        icon: RocketLaunchIcon,
      },
      ]
      
        return (
          <div className="overflow-hidden bg-gray-800 py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-28">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-500">A list of the interests I have</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-50 sm:text-6xl">About Me
</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-200">
                      <feature.icon className="absolute top-1 left-1 h-5 w-5 text-gray-50" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline text-gray-400">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-center justify-end lg:order-first">
          <iframe src="https://embed.lottiefiles.com/animation/33502" width={632} height={542}></iframe>
          </div>
        </div>
      </div>
    </div>
        )
      }
  
export default Mastery