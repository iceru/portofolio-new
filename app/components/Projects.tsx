"use client"

import { NextPage } from 'next'
import React from 'react'
import { ProjectType } from '../interface'
// import Image from 'next/image'
import Carousel from './Carousel'

interface Props {
    projects: ProjectType[]
    isCollapsed: boolean
}

const ProjectsPage: NextPage<Props> = ({ projects, isCollapsed }) => {
    const statusBadge = (status: string) => {
        let color = "bg-green-600";
        if (status.includes('Progress')) {
            color = "bg-orange-500"
        }
        return (
            <div className={`${color} px-4 py-2 font-bold border border-white rounded-full text-sm`}>{status}</div>
        )
    }
    return (
        <section className={`bg-[#3B82F6] w-full ${isCollapsed ? "lg:w-[90%]" : 'lg:w-[60%]'} rounded-3xl p-6`}>
            <h2 className="text-center text-white font-mono text-3xl font-bold mb-4">Projects</h2>

            <div>
                {projects?.map((project: ProjectType, i: number) => {
                    return (
                        <div className="bg-white/15 p-6 rounded-3xl text-white mb-4" key={i}>
                            <div className="flex items-center justify-between mb-2">
                                <a href={project.url} target="_blank">
                                    <h3 className="text-xl font-bold">{project.name}</h3>
                                </a>
                                {statusBadge(project.status)}
                            </div>
                            <div className="flex mb-4">
                                {project?.stacks?.map((stack, i) => {
                                    return (
                                        <div className="px-4 py-1 mr-4 font-bold font-mono bg-white text-[#3B82F6] rounded-full" key={i}>
                                            {stack.name}
                                        </div>
                                    )
                                })}
                            </div>
                            {/* <div className='flex overflow-x-auto whitespace-nowrap gap-4 w-full pb-2'>
                                {project?.images?.length > 0 && project?.images.map((image) => {
                                    return (
                                        <div key={image.id} className='min-w-[50%] flex-shrink-0'>
                                            <Image src={image.path} width={500} height={350} className='w-full h-auto' alt={project.name} />
                                        </div>
                                    )
                                })}
                            </div> */}
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