"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/lib/types';
import ComingSoon from './ComingSoon';
import { FaArrowRight } from "react-icons/fa6";

const Eachproject = ({ limit, excludeId, showNonFeatured, showFeatured }: { limit?: number; excludeId?: number; showNonFeatured?: boolean; showFeatured?: boolean }) => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [showComingSoon, setShowComingSoon] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Projects with active case study pages
    const ACTIVE_PROJECT_IDS = [1, 2, 3, 4, 11];
    // Featured projects on homepage (first 4)
    const FEATURED_PROJECT_IDS = [1, 2, 3, 4];

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/projects');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex flex-col bg-white rounded-[8px]">
                        {/* Image Skeleton */}
                        <div className="aspect-[1.7] rounded-t-[8px] bg-gray-200" />

                        {/* Content Skeleton */}
                        <div className="space-y-4 p-4 py-4">
                            {/* Title Skeleton */}
                            <div className="h-8 w-3/4 bg-gray-200 rounded" />

                            {/* Description Skeleton */}
                            <div className="space-y-2">
                                <div className="h-4 w-full bg-gray-200 rounded" />
                                <div className="h-4 w-5/6 bg-gray-200 rounded" />
                            </div>

                            {/* Tags Skeleton */}
                            <div className="flex gap-2 pt-4">
                                <div className="h-6 w-16 bg-gray-200 rounded-sm" />
                                <div className="h-6 w-20 bg-gray-200 rounded-sm" />
                                <div className="h-6 w-14 bg-gray-200 rounded-sm" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    let displayedProjects = projects;

    console.log('🔍 Eachproject Debug:', {
        totalProjects: projects.length,
        showNonFeatured,
        excludeId,
        limit,
        FEATURED_PROJECT_IDS
    });

    // Filter to show only non-featured projects (5, 6, 7, 8...) if requested
    if (showNonFeatured) {
        displayedProjects = displayedProjects.filter(p => !FEATURED_PROJECT_IDS.includes(p.id));
        console.log('✅ After non-featured filter:', displayedProjects.map(p => ({ id: p.id, name: p.name })));
    }

    // Filter to show only featured projects (1, 2, 3, 4) if requested
    if (showFeatured) {
        displayedProjects = displayedProjects.filter(p => FEATURED_PROJECT_IDS.includes(p.id));
        console.log('✅ After featured filter:', displayedProjects.map(p => ({ id: p.id, name: p.name })));
    }

    if (excludeId) {
        const foundIndex = displayedProjects.findIndex(p => p.id === excludeId);
        console.log('📍 Exclude ID found at index:', foundIndex, 'for ID:', excludeId);
        if (foundIndex !== -1) {
            // Reorder projects starting from the one right after the current one
            const nextProjects = [
                ...displayedProjects.slice(foundIndex + 1),
                ...displayedProjects.slice(0, foundIndex)
            ];
            displayedProjects = limit ? nextProjects.slice(0, limit) : nextProjects;
        } else {
            displayedProjects = limit ? displayedProjects.slice(0, limit) : displayedProjects;
        }
    } else {
        displayedProjects = limit ? displayedProjects.slice(0, limit) : displayedProjects;
    }

    console.log('🎯 Final displayed projects:', displayedProjects.map(p => ({ id: p.id, name: p.name })));

    const handleProjectClick = (e: React.MouseEvent, project: Project) => {
        // For projects ID 5+, check if they have a websiteUrl
        if (project.id >= 5 && project.details?.websiteUrl) {
            // Let the link handle navigation, don't prevent default
            return;
        }

        // Show modal only if project is not active and has no behanceUrl or websiteUrl
        if (!ACTIVE_PROJECT_IDS.includes(project.id)) {
            e.preventDefault();
            setSelectedProject(project);
            setShowComingSoon(true);
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {displayedProjects.map((project, index) => {
                    const isActive = ACTIVE_PROJECT_IDS.includes(project.id);
                    const isBehance = !!project.behanceUrl;
                    const hasWebsiteUrl = project.id >= 5 && !!project.details?.websiteUrl;

                    // Determine wrapper type based on project properties
                    const Wrapper = isBehance
                        ? 'a'
                        : isActive
                            ? Link
                            : hasWebsiteUrl
                                ? 'a'
                                : 'div';

                    const wrapperProps = isBehance
                        ? { href: project.behanceUrl, target: "_blank", rel: "noopener noreferrer", className: "block" }
                        : isActive
                            ? { href: `/projects/${project.id}`, className: "block" }
                            : hasWebsiteUrl
                                ? { href: project.details?.websiteUrl, target: "_blank", rel: "noopener noreferrer", className: "block" }
                                : { className: 'contents' };

                    const canOpen = isActive || isBehance || hasWebsiteUrl;

                    return (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col group cursor-pointer bg-white rounded-[8px] hover:bg-[#000]/20 duration-500"
                            onClick={(e) => !canOpen && handleProjectClick(e, project)}
                        >
                            <Wrapper {...(wrapperProps as any)}>
                                {/* Image Container */}
                                <div
                                    data-aos="zoom-out"
                                    className={`relative aspect-[1.7] rounded-t-[8px] overflow-hidden flex items-center justify-center`}>
                                    <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-115">
                                        {project.image ? (
                                            <Image
                                                src={project.image}
                                                alt={project.name}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-zinc-100 flex items-center justify-center text-zinc-400 text-xs font-medium">
                                                View project
                                            </div>
                                        )}
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Open Project Button */}
                                    <div className="absolute bottom-4 flex items-end justify-center opacity-0 bg-[#3C3C3C26] translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                                        <div className="bg-gradient-to-r from-[#000B15] to-[#3A383D] text-white xl:px-7 md:px-5 px-3 md:py-4 py-3 rounded-[8px] flex items-center gap-4 shadow-2xl border-[#B5B5B5] border">
                                            <span className="xl:text-[14px] md:text-[12px] text-[10px] font-medium">{isBehance ? 'View Case Study' : (isActive ? 'Open Project' : 'View Project')}</span>
                                            {canOpen && (
                                                <FaArrowRight />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-3 p-4 py-4 pt-5">
                                    <h3 className="text-[16px] md:text-[18px] xl:text-[20px] font-[500] text-[#111827]">
                                        <span className="font-bold">{project.name}:</span> <span>{project.title}</span>
                                    </h3>
                                    <p className="text-[#4B5563] text-[12px] md:text-[14px] xl:text-[16px] leading-relaxed line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 pt-4 -z-10">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="tracking-[-0.5px] text-[10px] font-[500] text-[#6B7280] bg-[#000]/5 px-3 py-1.5 rounded-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Wrapper>
                        </motion.div>
                    );
                })}
            </div>

            <ComingSoon
                isOpen={showComingSoon}
                onClose={() => {
                    setShowComingSoon(false);
                    setSelectedProject(null);
                }}
                liveLink={selectedProject?.details?.websiteUrl}
            />
        </>
    );
}

export default Eachproject
