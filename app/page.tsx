
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const calculateYears = () => {
    const current = new Date().getFullYear();
    const old = new Date('08 Oct 2020').getFullYear();
    return current - old;
  };


  return (
    <main className="bg-white h-[80vh] w-full p-4 lg:p-8 lg:px-16 rounded-3xl grid lg:grid-cols-2 gap-8 items-center container mx-auto">
      <div>
        <div>
          <h2 className="text-2xl lg:text-4xl mb-4">
            Hello, My Name is <span className="font-mono font-bold">Hafiz!</span>
          </h2>
          <p className="mb-4 lg:text-xl">
            I’m a Passionate Full-Stack Developer with <span className="font-mono font-bold">{calculateYears()} years</span> of experience with building all aspects of user interface and user experience. Specialize in <span className="font-mono font-bold">HTML, CSS, React.js, Vue.js, Express.Js, Laravel and Wordpress</span> to build various types of websites.
          </p>
        </div>
        <div className="flex items-center">
          <div className='inline-flex mr-4 items-center transition-all duration-500 ease-in-out px-4 py-2 border-2 border-neutral-800 rounded-xl'>
            <p className="mr-2 font-bold text-lg">Social:</p>
            <a href="https://github.com/iceru" target="_blank" className="hover:opacity-80 transition mr-4">
              <Image width={24} height={24} src="/images/github.png" alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/hafizeto/" target="_blank" className="hover:opacity-80 transition mr-4">
              <Image width={24} height={24} src="/images/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://x.com/Hafizeto" target="_blank" className="hover:opacity-80 transition">
              <Image width={24} height={24} src="/images/twitter.png" alt="Twitter" />
            </a>
          </div>
          <Link href="/projects" className="px-5 py-2.5 font-bold bg-neutral-800 hover:bg-neutral-700 transition text-white text-lg rounded-xl">
            Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
