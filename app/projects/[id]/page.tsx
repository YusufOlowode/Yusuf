import { projects } from '@/lib/data';
import ProjectDetailClient from '@/components/ProjectDetailClient';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        notFound();
    }

    return <ProjectDetailClient project={project} />;
}
