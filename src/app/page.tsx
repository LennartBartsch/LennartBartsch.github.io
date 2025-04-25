import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-slate-800 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-4">Welcome to My Personal Website</h1>
          <div className="flex justify-center mb-4">
            <div className="relative w-24 h-24">
              <Image 
                src="/images/profile.jpeg" 
                alt="Profile Picture" 
                width={96}
                height={96}
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <nav>
            <ul className="flex justify-center space-x-6">
              <li><Link href="/about" className="hover:text-blue-300 transition-colors">About Me</Link></li>
              <li><Link href="/projects" className="hover:text-blue-300 transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-blue-300 transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <section id="introduction" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-lg">Hello! Im Lennart Bartsch, a passionate developer with a love for creating innovative solutions. Welcome to my personal space on the web!</p>
        </section>
        
        <section id="projects" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">My Projects</h2>
          <p className="mb-2">Check out some of my work:</p>
          <div>
            <Link href="/projects" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
              View Projects
            </Link>
          </div>
        </section>
      </main>
      
      <footer className="bg-slate-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Lennart Bartsch. All rights reserved.</p>
      </footer>
    </div>
  );
}
