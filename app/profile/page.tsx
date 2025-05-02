import Image from "next/image";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";

const Profile = ({ }) => {
    const calculateYears = () => {
        const current = new Date().getFullYear();
        const old = new Date('08 Oct 2020').getFullYear();
        return current - old;
    };

    return <section className="bg-white h-[80vh] w-full p-8 rounded-3xl grid lg:grid-cols-2 gap-8 items-center">
        <div>
            <div>
                <h2 className="text-4xl mb-4">
                    Hello, My Name is <span className="font-mono font-bold">Hafiz!</span>
                </h2>
                <p className="mb-4 text-lg">
                    I’m a Passionate Full-Stack Developer with <span className="font-mono font-bold">{calculateYears()} years</span> of experience with building all aspects of user interface and user experience. Specialize in <span className="font-mono font-bold">HTML, CSS, React.js, Vue.js, Express.Js, Laravel and Wordpress</span> to build various types of websites.
                </p>
            </div>
            <div className='inline-flex items-center transition-all duration-500 ease-in-out px-4 py-2 border-2 border-neutral-800 rounded-xl'>
                <p className="mr-2 font-bold text-lg">Social:</p>
                <a href="https://github.com/iceru" target="_blank" className="hover:opacity-80 transition mr-4">
                    <Image width={24} src={github} alt="Github" />
                </a>
                <a href="https://www.linkedin.com/in/hafizeto/" target="_blank" className="hover:opacity-80 transition mr-4">
                    <Image width={24} src={linkedin} alt="LinkedIn" />
                </a>
                <a href="https://x.com/Hafizeto" target="_blank" className="hover:opacity-80 transition">
                    <Image width={24} src={twitter} alt="Twitter" />
                </a>
            </div>
        </div>
    </section>


}

export default Profile