"use client"

import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import Carousel from './Carousel'
import Filter from './Filter'

import { ProjectType, StackType } from '../interface'
import { baseUrl } from '../lib/utils'

interface Props {
    isCollapsed: boolean
}

const ProjectsPage: NextPage<Props> = ({ isCollapsed }) => {
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
        let color = "bg-green-600";
        if (status.includes('Progress')) {
            color = "bg-orange-500"
        }
        return (
            <div className={`${color} inline-flex px-3 py-1 lg:px-4 lg:py-2 font-bold rounded-full text-sm`}>{status}</div>
        )
    }
    return (
        <section className={`bg-[#3B82F6] w-full ${isCollapsed ? "lg:w-[90%]" : 'lg:w-[60%]'} rounded-3xl p-4 lg:p-6`} id='projects'>
            <h2 className="text-center text-white font-mono text-3xl font-bold mb-4">Projects</h2>
            <Filter setSelectedStacks={setSelectedStacks} selectedStacks={selectedStacks} stacks={stacks} />
            <div>
                {projects?.map((project: ProjectType, i: number) => {
                    return (
                        <div className="bg-white/15 p-4 lg:p-6 rounded-3xl text-white mb-4" key={i}>
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                                <a href={project.url} target="_blank" className='block mb-2 lg:mb-0'>
                                    <h3 className="text-xl font-bold">{project.name}</h3>
                                </a>
                                <div>
                                    {statusBadge(project.status)}
                                </div>
                            </div>
                            <div className="flex flex-wrap mb-4">
                                {project?.stacks?.map((stack, i) => {
                                    return (
                                        <div className="px-4 py-1 mr-2 flex items-center lg:mr-4 mb-2 lg:mb-0 font-bold text-sm lg:text-base font-mono bg-white text-[#3B82F6] rounded-full" key={i}>
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
                                {project?.images?.length > 0 && (<Carousel collapse={isCollapsed} images={project?.images} />)}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ProjectsPage