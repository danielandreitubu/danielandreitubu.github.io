
const About = () => {
    

  const applications = [
    {
      applicant: {
        name: 'Eulogio "Amang" Rodriguez Institute of Science and Technology',
        email: 'Bachelor of Science in Computer Science',
        imageUrl:
          '/images/earistlogo.png',
      },
      date: '2020-01-07',
      dateFull: '2018 - 2022',
      href: '#',
    },
    {
      applicant: {
        name: 'Southeast Asian College Inc. ',
        email: 'Information and Communications Technology',
        imageUrl:
          '/images/saci.jpeg',
      },
      date: '2020-01-07',
      dateFull: '2016 - 2018',
      href: '#',
    },
  ]

  return (
    <div className="bg-gray-800 shadow mx-auto max-w-8xl py-12 px-6 lg:py-16 lg:px-14" id="mastery">
      <h2 className="text-3xl font-medium tracking-tight text-white sm:text-6xl mb-10">
                   Education
                  </h2>
      <ul role="list" className="divide-y divide-gray-200">
        {applications.map((application) => (
          <li key={application.applicant.email}>
            <a href={application.href} className="block hover:bg-gray-700">
              <div className="flex items-center px-4 py-10 sm:px-6">
                <div className="flex min-w-0 flex-1 items-center">
                  <div className="flex-shrink-0">
                    <img className="md:h-32 md:w-32 w-24 h-24 rounded-full" src={application.applicant.imageUrl} alt="" />
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div className='w-full'>
                      <p className="md:text-3xl text-xl font-medium text-white truncate">{application.applicant.name}</p>
                      <p className="mt-2 flex items-center md:text-xl text-lg text-gray-500">
                        <span className="truncate">{application.applicant.email}</span>
                      </p>
                      <p className="md:text-lg text-base text-gray-500 mt-2">
                         <time dateTime={application.date}>{application.dateFull}</time>
                        </p>
                    </div>
                  </div>
                </div>
                <div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

      
      

export default About