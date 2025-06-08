"use client"

import { NextPage } from 'next'
import { Dispatch, SetStateAction, useState } from 'react'
import { StackType } from '../interface'
import Image from 'next/image'

interface Props {
    setSelectedStacks: Dispatch<SetStateAction<StackType[]>>
    selectedStacks: StackType[]
    stacks: StackType[]
}

const Filter: NextPage<Props> = ({ setSelectedStacks, selectedStacks, stacks }) => {
    const [openStacks, setOpenStacks] = useState(false);
    // const [openStatus, setOpenStatus] = useState(false);
    const selectStack = (stack: StackType) => {
        const isSelected = selectedStacks.some((s) => s.id === stack.id)
        if (isSelected) {
            setSelectedStacks((prev) => prev.filter((s) => s.id !== stack.id))
        } else {
            setSelectedStacks((prev) => [...prev, stack])
        }
    }

    const isChecked = (stack: StackType) => {
        return selectedStacks.some((s) => s.id === stack.id)
    }

    return (
        <section className='flex items-center mb-4 pb-4 border-b border-neutral-800'>
            <div className='font-bold font-mono text-bold mr-4 text-xl'>
                Filter:
            </div>
            <div className='relative mr-4'>
                <button type='button' onClick={() => setOpenStacks(!openStacks)} className='px-3 py-1.5 lg:px-4 font-bold font-mono lg:py-2 text-sm lg:text-ba rounded-xl border-2 border-neutral-800 text-neutral-800 relative z-10'>
                    {selectedStacks?.length > 0 ? (<div className='flex gap-2 items-center max-w-[300px] text-ellipsis overflow-hidden'>
                        {selectedStacks?.map((stack) => {
                            return (
                                <div className='whitespace-nowrap' key={stack.id}>{stack.name}</div>
                            )
                        })}
                    </div>) : (<div className='flex items-center'>Stacks <span className="material-symbols-outlined ml-0.5">
                        keyboard_arrow_down
                    </span></div>)}
                </button>
                <div className={`grid lg:grid-cols-2 gap-2 absolute left-0 top-12 bg-white border-2 border-neutral-800 lg:w-[320px] w-[200px] overflow-hidden p-4
                    rounded-3xl z-50 transition-all duration-300 ease-in-out ${openStacks ? 'max-h-[1000px] opacity-100' : 'max-h-[0] opacity-0'}`}>
                    {stacks?.map((stack) => {
                        return (
                            <label key={stack.id} className='flex items-center gap-1 whitespace-nowrap'>
                                <input
                                    type='checkbox'
                                    checked={isChecked(stack)}
                                    onChange={() => selectStack(stack)}
                                />
                                <Image src={stack.image} width={16} height={16} className='mr-0.5' alt={stack.name} />
                                <span className='font-mono text-neutral-800'>{stack.name}</span>
                            </label>
                        )
                    })}
                </div>
            </div>
            {/* <div className='relative'>
                <button type='button' onClick={() => setOpenStatus(!openStatus)} className='px-3 py-1.5 lg:px-4 font-bold font-mono lg:py-2 text-sm lg:text-ba rounded-xl border-2 border-neutral-800 text-neutral-800 relative z-10'>
                    {selectedStacks?.length > 0 ? (<div className='flex gap-2 items-center max-w-[300px] text-ellipsis overflow-hidden'>
                        {selectedStacks?.map((stack) => {
                            return (
                                <div className='whitespace-nowrap' key={stack.id}>{stack.name}</div>
                            )
                        })}
                    </div>) : (<div className='flex items-center'>Status <span className="material-symbols-outlined ml-0.5">
                        keyboard_arrow_down
                    </span></div>)}
                </button>
                <div className={`grid lg:grid-cols-2 gap-2 absolute left-0 top-12 bg-white border-2 border-neutral-800 w-[320px] overflow-hidden p-4
                    rounded-3xl z-50 transition-all duration-300 ease-in-out ${openStatus ? 'max-h-[1000px] opacity-100' : 'max-h-[0] opacity-0'}`}>
                    <label className='flex items-center gap-1 whitespace-nowrap'>
                        <input
                            type='checkbox'
                        />
                        <span className='font-mono text-neutral-800'>On Progress</span>
                    </label>
                    <label className='flex items-center gap-1 whitespace-nowrap'>
                        <input
                            type='checkbox'
                        />
                        <span className='font-mono text-neutral-800'>Completed</span>
                    </label>
                </div>
            </div> */}
        </section>
    )
}

export default Filter
