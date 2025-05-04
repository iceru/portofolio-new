"use client"

import { useEffect, useState } from "react";
import { ProjectType, StackType } from "../interface";
import { baseUrl } from "../lib/utils";
import Filter from "../components/Filter";
import Image from "next/image";
import Carousel from "../components/Carousel";

export default function Projects() {
    const [selectedStacks, setSelectedStacks] = useState<StackType[]>([]);
    const [stacks, setStacks] = useState<StackType[]>([]);
    const [projects, setProjects] = useState<ProjectType[]>([]);
    const [allProjects, setAllProjects] = useState<ProjectType[]>([]);

    const getProjects = async () => {
        const res = await fetch(`${baseUrl}/api/projects`);
        if (res.ok) {
            const data = await res.json();
            setAllProjects(data);
            setProjects(data);
        } else {
            console.error('Error fetching projects');
        }
    };

    const getStacks = async () => {
        const res = await fetch(`${baseUrl}/api/stacks`);
        if (res.ok) {
            const data = await res.json();
            setStacks(data);
        } else {
            console.error('Error fetching stacks');
        }
    }

    useEffect(() => {
        getProjects();
        getStacks();
    }, []);


    useEffect(() => {
        if (selectedStacks.length > 0) {
            const filtered = allProjects.filter((project) =>
                selectedStacks.some((selected) =>
                    project.stacks.some((stack) => stack.name === selected.name)
                )
            );
            setProjects(filtered);
        } else {
            setProjects(allProjects);
        }
    }, [selectedStacks, allProjects]);

    const statusBadge = (status: string) => {

        return (
            <div className={`font-mono inline-flex items-center font-bold rounded-full text-sm`}>
                <span className="material-symbols-outlined !text-base mr-1">
                    {status.includes('Completed') ? "task_alt" : "timelapse"}
                </span>
                {status}

            </div>
        )
    }

    return (
        <main className="bg-white min-h-[80vh] w-full p-4 lg:p-8 rounded-3xl items-center container mx-auto">
            <Filter setSelectedStacks={setSelectedStacks} selectedStacks={selectedStacks} stacks={stacks} />
            <section className="block lg:grid lg:grid-cols-2 gap-12">
                {projects?.map((project: ProjectType, i: number) => {
                    return (
                        <div className="rounded-3xl text-neutral-800 mb-8 lg:mb-0" key={i}>
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-2 lg:mb-4">
                                <a href={project.url} target="_blank" className='block mb-2 lg:mb-0'>
                                    <h3 className="text-2xl font-bold">{project.name}</h3>
                                </a>
                                <div>
                                    {statusBadge(project.status)}
                                </div>
                            </div>
                            <div className="flex flex-wrap mb-2 lg:mb-4">
                                {project?.stacks?.map((stack, i) => {
                                    return (
                                        <div className="px-3 py-1 mr-2 flex items-center lg:mr-3 mb-2 font-bold text-sm lg:text-base font-mono text-neutral-800 border border-neutral-800 rounded-xl" key={i}>
                                            <div className='mr-2'>
                                                <Image src={stack.image} width={20} height={20} className='object-contain' alt={stack.name} />
                                            </div>
                                            <div>
                                                {stack.name}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div>
                                {project?.images?.length > 0 && (<Carousel images={project?.images} />)}
                            </div>
                        </div>
                    )
                })}
            </section>
        </main>
    );
}
