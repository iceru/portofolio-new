import Navigation from "./components/Navigation";

export default function Home() {
  const calculateYears = () => {
    const current = new Date().getFullYear();
    const old = new Date('08 Oct 2020').getFullYear();
    return current - old;
  }
  return (
    <main className="grid lg:grid-cols-2">

      <section className="bg-teal-400 text-slate-900 rounded-3xl p-6">
        <Navigation />
        <div>
          Hello, My Name is Hafiz!
          I’m a Passionate Front-End Web Developer with {calculateYears()} years of experience with building all aspects of user interface and user experience. Specialize in HTML, CSS, Vue.Js, React.js, Laravel and Wordpress to build various types of websites.
        </div>
      </section>
    </main>
  );
}
