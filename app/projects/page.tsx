import React from 'react'
import Eachproject from '@/components/Eachproject'

const ProjectsPage = () => {
    return (
        <div className="bg-[#FCFCFF] min-h-screen">
            <div className="bg-[#F4F3FF] pt-40 pb-20 px-6 md:px-26 lg:px-42">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-[#111827] text-[28px] md:text-[36px] lg:text-[42px] xl:text-[46px] font-[800] leading-tight tracking-[-0.03em]">
                        A selection of projects across <br className="hidden md:block" /> product, systems, and brand work.
                    </p>
                </div>
            </div>
            <div className="mx-auto px-6 md:px-26 lg:px-42 py-20">
                <Eachproject />
            </div>
        </div>
    )
}

export default ProjectsPage