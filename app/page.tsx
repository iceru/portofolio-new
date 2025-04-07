import Profile from "./components/Profile";

import { ProjectType } from "./interface";
export default async function Home() {

  const statusBadge = (status: string) => {
    let color = "bg-green-600";
    if (status.includes('Progress')) {
      color = "bg-orange-500"
    }
    return (
      <div className={`${color} px-4 py-2 font-bold border border-white rounded-full text-sm`}>{status}</div>
    )
  }

  const res = await fetch(`http://localhost:3000/api/projects`);

  if (!res.ok) {
    console.error('error')
  }
  let projects;
  let data;
  if (res.ok) {
    data = await res.json();
    projects = data;
  }


  return (
    <main className="flex">
      <Profile />
      <section className="bg-[#3B82F6] w-full lg:w-[60%] rounded-3xl p-6">
        <h2 className="text-center text-white font-mono text-3xl font-bold mb-4">Projects</h2>

        <div>
          {projects?.map((project: ProjectType, i: number) => {
            return (
              <div className="bg-white/15 p-6 rounded-3xl text-white mb-4" key={i}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  {statusBadge(project.status)}
                </div>
                <div className="flex">
                  {project?.stacks?.map((stack, i) => {
                    return (
                      <div className="px-4 py-1 mr-4 font-bold font-mono bg-white text-[#3B82F6] rounded-full" key={i}>
                        {stack.name}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  );
}
