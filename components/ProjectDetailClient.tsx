"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/lib/types";
import Eachproject from "@/components/Eachproject";
import { FaApple } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { PlayStore } from "./SvgLogo";

interface ProjectDetailClientProps {
  project: Project;
}

const ProjectDetailClient = ({ project }: ProjectDetailClientProps) => {
  if (!project || !project.details) {
    return (
      <div className="min-h-screen flex flex-col pt-40 items-center bg-white px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md">
          The project you are looking for doesn't exist or doesn't have details
          yet.
        </p>
        <Link
          href="/projects"
          className="px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-800 transition-all"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  const { details } = project;

  return (
    <div className="bg-white font-sans bg-[#FAFAFF] selection:bg-blue-200 selection:text-gray-900 overflow-hidden mt-[6rem]">
      {/* Header section (Section 1) */}
      <section className="pt-10 px-6 md:px-26 lg:px-42">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-left md:text-center space-y-6"
        >
          <h1 className="tracking-[-1] text-[21px] md:text-[26px] lg:text-[36px] xl:text-[42px] font-medium text-[#111827] leading-[1.15]">
            <span className="font-bold">{project.name}:</span>{" "}
            {project.title.split(":").slice(1).join(":") || project.title}
          </h1>

          <p className="text-[#4B5563] text-[13px] md:text-[18px] xl:text-[19px] leading-relaxed max-w-2xl md:max-w-[73rem] mx-auto text-justify md:text-center">
            {project.description}
          </p>

          <div className="flex flex-wrap justify-start md:justify-center gap-3 md:gap-4 pt-4">
            {details.websiteUrl && (
              <Link
                href={details.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#111827] text-white px-4 md:px-5 py-2.5 md:py-3 rounded-[6px] hover:bg-[#273241] shadow-[0_4px_10px_0_[#273241]] transition-colors font-bold text-[12px] md:text-[14px] whitespace-nowrap"
              >
                View live project <FaArrowRight />
              </Link>
            )}

            {details.appStoreUrl && (
              <Link
                href={details.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 md:gap-3 bg-[#111827] text-white px-4 md:px-5 py-2.5 md:py-3 rounded-[6px] hover:bg-[#273241] shadow-[0_4px_10px_0_[#273241]] transition-colors font-bold text-[12px] md:text-[14px] whitespace-nowrap"
              >
                <FaApple className="text-xl" />
                <p className="font-bold text-left leading-tight">
                  Get on App Store
                </p>
              </Link>
            )}

            {details.playStoreUrl && (
              <Link
                href={details.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 md:gap-3 bg-[#111827] text-white px-4 md:px-5 py-2.5 md:py-3 rounded-[6px] hover:bg-[#273241] shadow-[0_4px_10px_0_[#273241]] transition-colors font-bold text-[12px] md:text-[14px] whitespace-nowrap"
              >
                <PlayStore />
                <p className="font-bold text-left leading-tight">
                  Get on PlayStore
                </p>
              </Link>
            )}
          </div>
        </motion.div>
      </section>

      {/* Hero Image Section (Section 2) */}
      <section className="px-6 md:px-26 lg:px-42 pb-16 mt-12 md:mt-24">
        <div
          data-aos="zoom-out"
          className="w-full h-[270px] md:h-[600px] rounded-[12px] overflow-hidden"
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              priority
            />
          ) : (
            <div className="w-full h-full bg-zinc-50 flex items-center justify-center text-zinc-400 font-medium text-xl rounded-[12px]">
              {project.name} Project Image
            </div>
          )}
        </div>
      </section>

      {/* Meta Info Section (Section 3) */}
      <section className="mx-auto px-6 md:px-26 lg:px-42 pb-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Left Column: Meta Details */}
          <div className="w-full lg:w-4/12 md:space-y-6 space-y-2">
            <div className="md:space-y-2 space-y-1">
              <p className="tracking-[-.8] text-[13px] md:text-[18px] xl:text-[20px] font-bold text-[#111827]">
                My Role
              </p>
              <p className="text-[#4B5563] text-[12px] md:text-[15px] xl:text-[17px] font-normal leading-relaxed">
                {details.role}
              </p>
            </div>
            <div className="md:space-y-2 space-y-1">
              <p className="tracking-[-.8] text-[13px] md:text-[18px] xl:text-[20px] font-bold text-[#111827]">
                Collaborators
              </p>
              <p className="text-[#4B5563] text-[12px] md:text-[15px] xl:text-[17px] font-normal leading-relaxed">
                {details.collaborators}
              </p>
            </div>
            <div className="md:space-y-2 space-y-1">
              <p className="tracking-[-.8] text-[13px] md:text-[18px] xl:text-[20px] font-bold text-[#111827]">
                Platform
              </p>
              <p className="text-[#4B5563] text-[12px] md:text-[15px] xl:text-[17px] font-normal leading-relaxed">
                {details.platform}
              </p>
            </div>
          </div>

          {/* Right Column: About Section */}
          <div className="w-full lg:w-8/12 space-y-6">
            <h2 className="tracking-[-.8] text-[15px] md:text-[18px] xl:text-[21px] font-bold text-[#111827] mb-2">
              About {project.name}
            </h2>
            <div className="space-y-6">
              {details.about.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#4B5563] text-[12px] md:text-[16px] xl:text-[17px] leading-relaxed font-normal"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Project Sections */}
      {details.sections?.map((section, index) => (
        <section
          key={index}
          className="mx-auto px-6 md:px-26 lg:px-42 pb-24 md:pb-32"
        >
          <div
            className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${section.layout === "imageLeft" ? "lg:flex-row-reverse" : ""
              }`}
          >
            {/* Text Content */}
            <div
              data-aos="fade-up"
              className={`w-full ${section.image ? "lg:w-1/2" : "lg:w-full"} md:space-y-6 space-y-2`}
            >
              {section.heading && (
                <h2 className="tracking-[-1] md:tracking-[-2] text-[15px] md:text-[20px] lg:text-[24px] xl:text-[30px] font-bold text-[#111827]">
                  {section.heading}
                </h2>
              )}
              {section.title && (
                <h2 className="tracking-[-1] md:tracking-[-2] text-[15px] md:text-[20px] lg:text-[24px] xl:text-[30px] font-bold text-[#111827]">
                  {section.title}
                </h2>
              )}
              <div className="md:space-y-6 space-y-3">
                {(Array.isArray(section.content)
                  ? section.content
                  : [section.content]
                ).map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-[#4B5563] text-[12px] md:text-[16px] xl:text-[17px] leading-relaxed font-normal"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Image Content */}
            {section.image && (
              <div className="w-full lg:w-1/2">
                <div
                  data-aos="zoom-out"
                  className="w-full h-auto rounded-[11.5px] overflow-hidden bg-[#F9FAFB] border-[#EFEFEF] border-[1px]"
                >
                  <Image
                    src={section.image}
                    alt={section.heading || section.title || "Section Image"}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Core Features & Solutions Section */}
      {details.coreFeatures && details.coreFeatures.length > 0 && (
        <section className="pb-18">
          {/* Section Title */}
          <div className="flex items-center justify-center gap-4 py-10 mb-20 bg-[#F4F2F3]">
            <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#111827] uppercase">
              Core Features & Solutions
            </h2>
            <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
          </div>

          <div className="space-y-24 md:space-y-32">
            {details.coreFeatures.map((feature, index) => (
              <div key={index} className="px-6 md:px-26 lg:px-42">
                {/* Conditional Layout */}
                {!feature.layout ? (
                  // Stacked Layout (e.g. Home Screen)
                  <div className="space-y-12">
                    <div data-aos="fade-up" className="space-y-6 max-w-3xl">
                      <h3 className="tracking-[-1] md:tracking-[-2] text-[15px] md:text-[20px] lg:text-[24px] xl:text-[30px] font-bold text-[#111827]">
                        {feature.title}
                      </h3>
                      <div className="md:space-y-6 space-y-3">
                        {(Array.isArray(feature.content)
                          ? feature.content
                          : [feature.content]
                        ).map((paragraph, idx) => (
                          <p
                            key={idx}
                            className="text-[#4B5563] text-[12px] md:text-[16px] xl:text-[17px] leading-relaxed font-normal w-full lg:w-3/4"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                    {feature.image ? (
                      <div
                        data-aos="zoom-out"
                        className="w-full h-auto rounded-t-[12px] overflow-hidden"
                      >
                        <Image
                          src={feature.image}
                          alt={feature.title || "Feature Image"}
                          width={1200}
                          height={800}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-64 bg-zinc-50 rounded-t-[12px] flex items-center justify-center text-zinc-400">
                        Feature Image Coming Soon
                      </div>
                    )}
                  </div>
                ) : (
                  // Split Layout
                  <div
                    className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${feature.layout === "imageLeft" ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div
                      data-aos="fade-up"
                      className="w-full lg:w-1/2 md:space-y-6 space-y-3"
                    >
                      <h3 className="tracking-[-1] md:tracking-[-2] text-[15px] md:text-[20px] lg:text-[24px] xl:text-[30px] font-bold text-[#111827]">
                        {feature.title}
                      </h3>
                      <div className="md:space-y-6 space-y-3">
                        {(Array.isArray(feature.content)
                          ? feature.content
                          : [feature.content]
                        ).map((paragraph, idx) => (
                          <p
                            key={idx}
                            className="text-[#4B5563] text-[12px] md:text-[16px] xl:text-[17px] leading-relaxed font-normal"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                      {feature.image ? (
                        <div
                          data-aos="zoom-out"
                          className="w-full h-auto rounded-[11.5px] overflow-hidden bg-[#F9FAFB]"
                        >
                          <Image
                            src={feature.image}
                            alt={feature.title || "Feature Image"}
                            width={800}
                            height={600}
                            className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-64 bg-zinc-50 rounded-[11.5px] flex items-center justify-center text-zinc-400">
                          Feature Image Coming Soon
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Other Favourite Screens Section */}
      {details.favouriteScreen && (
        <section className="pb-0 bg-[#FAFAFF]">
          <div className="flex items-center justify-center gap-4 py-6 md:py-10 bg-[#F4F2F3]">
            <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#111827] uppercase">
              Other Favourite Screens
            </h2>
            <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
          </div>
          <div className="w-full h-auto overflow-hidden">
            <Image
              src={details.favouriteScreen}
              alt="Favourite Screen"
              width={1920}
              height={1080}
              className="w-full h-auto block"
              sizes="100vw"
            />
          </div>
        </section>
      )}

      {details.websiteDesign && (
        <section className="pb-0">
          <div className="flex items-center justify-center gap-4 py-6 md:py-10 bg-[#F4F2F3]">
            <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#111827] uppercase">
              Website Design
            </h2>
            <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
          </div>
          <div className="w-full h-auto overflow-hidden">
            <Image
              src={details.websiteDesign}
              alt="Website Design"
              width={1920}
              height={1080}
              className="w-full h-auto block"
              sizes="100vw"
            />
          </div>
        </section>
      )}

      {/* Key Learnings & Thank You Section */}
      {details.reflection && (
        <section className="px-6 md:px-26 lg:px-42 py-20 md:py-32 bg-[#FAFAFF]">
          <div className="mx-auto flex flex-col lg:flex-row items-center gap-20 lg:gap-40">
            {/* Left Column: Key Learnings */}
            <div className="w-full lg:w-1/2 md:space-y-6">
              <h3 className="tracking-[-1] md:tracking-[-2] text-[15px] md:text-[20px] lg:text-[24px] xl:text-[30px] font-bold text-[#111827]">
                Key Learnings
              </h3>
              <ul className="md:space-y-6 space-y-3">
                {(Array.isArray(details.reflection.content)
                  ? details.reflection.content
                  : [details.reflection.content]
                ).map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#4B5563] text-[12px] md:text-[16px] xl:text-[17px] leading-relaxed font-normal"
                  >
                    <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#9CA3AF] shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Thank You */}
            <div className="w-full lg:w-1/2 hidden md:flex justify-center items-center py-12 lg:py-0">
              <div className="relative">
                {/* Decorative Oval */}
                <div className="absolute inset-0 border border-zinc-100 rounded-[100%] rotate-[-6deg] scale-[1.2]"></div>
                {/* Text */}
                <h2 className="text-[40px] md:text-[64px] font-[400] leading-none bg-linear-to-t from-[#1A1A1A] to-transparent inline-block text-transparent bg-clip-text transition-opacity duration-700 opacity-40 group-hover:opacity-60 select-none pointer-events-none px-10 py-4">
                  Thank you!
                </h2>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recommended Projects Footer Section */}
      <section>
        <div className="flex items-center justify-center gap-4 py-8 md:py-10 bg-[#F4F2F3]">
          <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#111827] uppercase">
            {" "}
            CHECK MORE PROJECTS
          </h2>
          <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
        </div>
        <section className="py-10 md:py-14 px-6 md:px-26 lg:px-42">
          <Eachproject limit={2} excludeId={project.id} showFeatured={true} />
        </section>
      </section>
    </div>
  );
};

export default ProjectDetailClient;
