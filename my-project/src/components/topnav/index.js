const TopNav = () => {
    
    const navigation = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Mastery', href: '#mastery' },
        { name: 'Contact', href: '#contact' }

      ]

    return(
     <header className="bg-gray-800 sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl" aria-label="Top">
        <div className="flex w-full items-center md:justify-between justify-center border-b border-gray-500 lg:border-none">
          <div className="flex items-center">
          <img className="h-36 w-36" src="/images/daniel.png" alt=""/>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-xl font-medium text-white hover:bg-blue-500 italic px-4 py-3 rounded-sm">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
         
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-xl font-medium text-white hover:bg-indigo-50">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
export default TopNav