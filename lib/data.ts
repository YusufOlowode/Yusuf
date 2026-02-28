



import { Project, ProjectSection } from './types';

export const projects: Project[] = [

    {
        id: 1,
        name: "KaiFinance",
        title: "Designing an AI-powered finance platform for business owners",
        description: "A unified AI finance platform designed to help business owners, finance experts, and internal teams manage accounting, insights, and complex financial work with clarity and ease.",
        image: "/projects/kaifinance/main.png",
        tags: ["FINTECH", "AI", "WEB APP"],
        bgColor: "bg-[#E6F4F1]",
        details: {
            role: "Product Designer (UX/UI Designer), UX Researcher, Design System",
            duration: "",
            client: "",
            sector: "",
            platform: "Webapp, Website Design",
            collaborators: "PM, CEO & Engineers",
            about: [
                "Managing business finances often requires switching between multiple tools, people, and workflows. KaiFinance brings business owners, finance experts, and administrators into a single platform where AI supports everyday financial tasks, analysis, and system oversight.",
                "The focus of this project was to design clear, role-based experiences that allow different users to work effectively with the same underlying data and AI system, without adding confusion or unnecessary complexity."
            ],
            sections: [
                {
                    title: "The Challenge",
                    heading: "",
                    content: [
                        "KaiFinance serves three distinct user groups with different expectations.",
                        "Business owners prioritise speed and quick answers, finance experts require deeper analysis and control, while administrators need visibility and operational oversight. The challenge was designing a single system that supports all three roles—without compromising clarity, focus, or usability for any of them."
                    ],
                    image: "/projects/kaifinance/challenge.png",
                    layout: 'imageRight'
                },
                {
                    title: "Understanding User Needs",
                    heading: "",
                    content: [
                        "Research revealed clear differences in how each user group approaches financial work. Business owners prioritise speed and quick answers, finance experts require deeper analytical context, and administrators focus on control and governance.",
                        "These differences made it clear that a single, uniform experience would introduce friction rather than clarity."
                    ],
                    image: "/projects/kaifinance/userneeds.png",
                    layout: 'imageLeft'
                },
                {
                    title: "Design Direction",
                    heading: "",
                    content: [
                        "To address these differences, the platform was structured around distinct roles rather than shared workflows.",
                        "Each role operates within the same system but with a tailored interaction model, supporting execution for business owners, analysis for finance experts, and control for administrators."
                    ],
                    image: "/projects/kaifinance/designdir.png",
                    layout: 'imageRight'
                }
            ],
            coreFeatures: [
                {
                    title: "AI-powered financial tasks",
                    content: [
                        "KaiFinance provides a task-driven AI workspace where users can quickly perform common financial actions such as analysis, reporting, and anomaly detection. Instead of navigating complex menus, users start with clear, goal-oriented tasks."
                    ],
                    image: "/projects/kaifinance/financialtasks.png",
                },
                {
                    title: "Clear performance insights",
                    content: "This dashboard presents key financial metrics and trends in a clear and structured way. It helps users understand business performance at a glance and supports more informed financial decisions without overwhelming them with raw data.",
                    image: "/projects/kaifinance/clearperf.png",
                    layout: 'imageRight'
                },
                {
                    title: "AI-assisted getting started",
                    content: "This introduces users to KaiFinance by allowing them to begin working with AI from the start. Instead of a traditional setup flow, users can explore AI-driven tasks.",
                    image: "/projects/kaifinance/gettingstarted.png",
                    layout: 'imageLeft'
                },
                {
                    title: "Learning environment for finance experts",
                    content: "KaiFinance provides finance experts with an environment to learn, apply, and refine AI-supported financial workflows. Through structured tasks and guided insights, experts can improve their efficiency while maintaining accuracy and professional judgment.",
                    image: "/projects/kaifinance/learningenv.png",
                    layout: 'imageRight'
                },
                {
                    title: "Managing financial relationships and records.",
                    content: "This interface supports users involved in the academy or platform ecosystem by enabling structured management of financial records, participation, and related activities.",
                    image: "/projects/kaifinance/finrecords.png",
                    layout: 'imageLeft'
                },
                {
                    title: "In-depth financial analysis",
                    content: "For users who need deeper insight, KaiFinance offers detailed analytics and reporting views. These screens support trend analysis and performance evaluation while maintaining visual clarity.",
                    image: "/projects/kaifinance/finanalysis.png",
                    layout: 'imageRight'
                }
            ],
            favouriteScreen: "/projects/kaifinance/favouritescreens.png",
            websiteDesign: "/projects/kaifinance/websitedesign.png",
            websiteUrl: "https://www.kaifinance.io/home/business-owners",
            reflection: {
                title: "Key Learnings",
                content: [
                    "Clear role separation reduces complexity.",
                    "One system can support different workflows.",
                    "User thinking matters more than feature parity"
                ],
                image: '',
                layout: 'imageRight'
            }
        }
    },
    {
        id: 2,
        name: "Pryme",
        title: "Designing a modern banking experience for simpler everyday finance",
        description: "Traditional banking apps feel cluttered and draining. Pryme is a digital banking platform designed to deliver speed, clarity, and intentional money management.",
        image: "/projects/pryme/pryme.png",
        tags: ["FINTECH", "MOBILE APP", "RESPONSIVE WEBSITE"],
        bgColor: "bg-[#E6F0F9]",
        details: {
            role: "Product Designer (UX/UI Designer), UX Researcher, Design System",
            duration: "3 Months",
            client: "Pryme",
            sector: "Fintech",
            platform: "iOS, Andriod, Web",
            collaborators: "PM, CEO, CTO, Engineers & Graphic Designer",
            about: [
                "Many users struggle with traditional banking apps that feel cluttered, confusing, and mentally draining. Pryme was created to simplify everyday financial experiences, enabling people to manage money, save intentionally, and make confident financial decisions without friction",
                "This project focused on designing a clear, intuitive, and engaging financial product where users feel in control of their finances rather than overwhelmed by them."
            ],
            sections: [
                {
                    heading: "The Challenge",
                    content: [
                        "Before Pryme, users struggled with mentally draining interfaces, unclear separation between savings and spending, and limited context for financial decisions.",
                        "Also, most banking apps assume a level of financial knowledge users don't actually have, when in reality, people just want to complete everyday tasks easily and without friction."
                    ],
                    image: "/projects/pryme/challenge.png",
                    layout: 'imageRight'
                },
                {
                    heading: "Understanding User Needs",
                    content: [
                        "Research showed that users approach personal finance with varying levels of confidence and attention. Most users want quick clarity on their financial status, engaging with deeper details only when necessary.",
                        "Information overload emerged as the primary source of friction, making it difficult for users to act confidently even when useful features were available."
                    ],
                    image: "/projects/pryme/userneeds.png",
                    layout: 'imageLeft'
                },
                {
                    title: "Design Direction",
                    content: [
                        "The experience was guided by three core principles: clarity, speed, and intention.",
                        "Early information architecture explored how existing features could be structured into clear navigation paths, reducing unnecessary depth and friction."
                    ],
                    image: "/projects/pryme/designdirection.png",
                    layout: 'imageRight'
                },
            ],
            coreFeatures: [
                {
                    title: "Home Screen",
                    content: [
                        "The Home Screen serves as the central hub of the Pryme app, giving users quick access to core features like Spaces, Boxes, bill payments, and top-ups. Users can create and manage multiple currency accounts, including NGN, GBP, USD, EUR, and CAD.",
                        "Selecting any currency opens the Focus Screen, where actions and information are tailored specifically to that account,  helping users manage each currency with clarity and control."
                    ],
                    image: "/projects/pryme/homescreen.png",
                },
                {
                    title: "Fast & Simple Transactions",
                    content: "Sending and receiving money was optimized to feel quick and reliable, with fewer steps and clearer confirmation states.",
                    image: "/projects/pryme/fastandsimple.png",
                    layout: 'imageRight'
                },
                {
                    title: "Pryme Boxes",
                    content: "A goal-based saving feature that allows users to organize, track, and manage savings intentionally.",
                    image: "/projects/pryme/prymeboxes.png",
                    layout: 'imageLeft'
                },
                {
                    title: "Pryme Spaces",
                    content: "Dedicated funds for everyday needs such as rent, utilities, groceries, transport, and entertainment, helping users mentally and financially separate their spending.",
                    image: "/projects/pryme/prymespaces.png",
                    layout: 'imageRight'
                },
                {
                    title: "Swap",
                    content: "The Swap feature allows users to quickly exchange between supported currencies directly within the Pryme app. Designed for speed and clarity, the flow shows real-time rates and fees upfront before confirmation.",
                    image: "/projects/pryme/swap.png",
                    layout: 'imageLeft'
                },
                {
                    title: "In-App Bill Payments",
                    content: "A secure, seamless way to pay bills directly within the app without switching platforms.",
                    image: "/projects/pryme/inapp.png",
                    layout: 'imageRight'
                }
            ],
            favouriteScreen: "/projects/pryme/favouritescreen.png",
            websiteDesign: "/projects/pryme/webdesign.png",
            // websiteUrl: "https://mypryme.com/",
            appStoreUrl: "https://apps.apple.com/gb/app/pryme-previously-ojirehprime/id1665362585",
            playStoreUrl: "https://play.google.com/store/apps/details?id=com.ojirehprime.mobile.android",
            reflection: {
                title: "Key Learnings",
                content: [
                    "Financial clarity comes from removing visual noise.",
                    "Progressive disclosure builds confidence without hiding detail.",
                    "Strong hierarchy matters more than adding features."
                ],
                image: '',
                layout: 'imageRight'
            }
        }
    },
    {
        id: 3,
        name: "DigiSpray",
        title: "A Digital platform for spraying money and gift at events",
        description: "A digital platform that enables seamless money spraying and gifting during events, making celebration moments more simple and organized.",
        image: '/projects/digispray/main.png',
        tags: ["ENTERTAINMENT", "MOBILE APP", "WEB APP"],
        bgColor: "bg-[#F3F4ED]",
        details: {
            role: "Product Designer (UX/UI Designer), UX Researcher, Design System",
            duration: "",
            client: "",
            sector: "",
            platform: "iOS, Andriod, Webapp",
            collaborators: "PM, CEO & Engineers",
            about: [
                "DigiSpray reimagines traditional money spraying as a digital experience, allowing hosts to spray money or gifts at events while ensuring fairness, safety, and transparency.",
                "The platform balances celebration with structure, making it easy for hosts to manage events and for guests to participate without discomfort or pressure."
            ],
            sections: [
                {
                    title: "The Challenge",
                    heading: "",
                    content: [
                        "Traditional money spraying is often impractical and raises ethical concerns. Guests competing to pick up money can feel uncomfortable, and tracking who received what is nearly impossible.",
                        "The challenge was to preserve the joy of the tradition while removing discomfort, unfairness, and logistical complexity for both hosts and guests.",
                    ],
                    image: '/projects/digispray/challenge.png',
                    layout: 'imageRight'
                },
                {
                    title: "Understanding User Needs",
                    heading: "",
                    content: [
                        "Research revealed a shared desire for fun and celebration, but with different pressures. Hosts needed control, visibility, and accountability, while guests wanted an easy and pressure-free way to participate.",
                        "Ethical concerns emerged as a critical factor, participation should feel fair, safe, and inclusive, without competition or social discomfort."
                    ],
                    image: '/projects/digispray/userneeds.png',
                    layout: 'imageLeft'
                },
                {
                    title: "Design Direction",
                    heading: "",
                    content: [
                        "The experience was designed to translate the excitement of physical spraying into a digital interaction that prioritises fairness and clarity.",
                        "Event creation, sharing, and participation were structured to reduce friction, remove competitive stress, and give both hosts and guests confidence throughout the experience."
                    ],
                    image: '/projects/digispray/designdir.png',
                    layout: 'imageRight'
                }
            ],
            coreFeatures: [
                {
                    title: "Homepage",
                    content: [
                        "The homepage gives users a clear overview of upcoming events, wallet balance, and quick access to key actions. It’s designed to make navigation simple so users know exactly where to start."
                    ],
                    image: "/projects/digispray/homepage.png",
                },
                {
                    title: "Event Creation & Embedded Calendar",
                    content: "Hosts can create and schedule events easily using a step-by-step process. The embedded calendar allows them to manage their schedule and preview events, ensuring every detail is organized.",
                    image: "/projects/digispray/eventcreate.png",
                    layout: 'imageRight'
                },
                {
                    title: "Event Management",
                    content: "Hosts can track RSVPs, manage invited guests, and oversee multiple events in one place. This feature ensures events run smoothly and transparently.",
                    image: "/projects/digispray/eventmanag.png",
                    layout: 'imageLeft'
                },
                {
                    title: "Spraying Page",
                    content: "The spraying page offers a fun, interactive way to distribute money or gifts digitally. It keeps the tradition exciting while removing the ethical issues of stepping on cash.",
                    image: "/projects/digispray/spraypage.png",
                    layout: 'imageRight'
                },
                {
                    title: "Wallet Page",
                    content: "Users can buy and redeem tokens, track balances, and see transaction history. This ensures all gifting is transparent and controlled.",
                    image: "/projects/digispray/walletpage.png",
                    layout: 'imageLeft'
                },
                {
                    title: "Event Sharing",
                    content: "Events can be shared via QR code, link, or event code, allowing hosts to invite guests easily and making participation simple for everyone.",
                    image: "/projects/digispray/eventsharing.png",
                    layout: 'imageRight'
                },
                {
                    title: "Guest Participation & RSVP Tracking",
                    content: "Guests can join events quickly and RSVP with ease. Hosts can monitor participation, creating a smooth and engaging experience for both sides.",
                    image: "/projects/digispray/guestpart.png",
                    layout: 'imageLeft'
                }
            ],
            favouriteScreen: "/projects/digispray/favouritescreen.png",
            appStoreUrl: "https://apps.apple.com/ng/app/digispray/id6720749950",
            playStoreUrl: "https://play.google.com/store/apps/details?id=com.hyinitiative.digispray",
            reflection: {
                title: "Key Learnings",
                content: [
                    "Digital experiences can preserve cultural joy without ethical compromise.",
                    "Fairness and transparency reduce social pressure.",
                    "Playful interactions work best when structure is clear."
                ],
                image: '',
                layout: 'imageRight'
            }
        }
    },
    {
        id: 4,
        name: "Sqwads",
        title: "Connecting learners to real-world projects that build practical experience.",
        description: "A platform that bridge the gap between learning and doing by connecting interns & career-transitioning people to projects.",
        image: '/projects/sqwads/sqwad.png',
        tags: ["EDTECH", "WEB APP", "RESPONSIVE WEBSITE"],
        bgColor: "bg-[#DEE1FF]",
        details: {
            role: "Product Designer (UX/UI Designer), UX Researcher, Design System",
            duration: "",
            client: "",
            sector: "",
            platform: "Webapp and Website",
            collaborators: "Designer, PM, CEO & Engineers",
            about: [
                "Many people struggle to gain real-world experience while learning. Traditional courses often teach theory but don’t give students or career-switchers the chance to work on real tech projects. ",
                "Sqwads changes that by connecting learners, designers, developers, AI specialists, PMs, and even CTOs to live projects where they can collaborate, practice real skills, and create actual work they can show to recruiters."
            ],
            sections: [
                {
                    title: "The Challenge",
                    heading: "",
                    content: [
                        "Sqwads needed to support multiple user types; learners, mentors, and administrators, without creating confusion or friction.",
                        "Learners needed access to meaningful projects and visible progress, mentors needed tools to guide and track teams effectively, and administrators required oversight across users and projects. At the same time, collaboration, fairness, and skill growth had to remain central to the experience."
                    ],
                    image: '/projects/sqwads/challenge.png',
                    layout: 'imageRight'
                },
                {
                    title: "Understanding User Needs",
                    heading: "",
                    content: [
                        "Research highlighted clear differences in motivation and responsibility. Learners focused on gaining experience and building portfolios, mentors prioritised guidance and progress tracking, and all users needed simple, reliable ways to collaborate.",
                        "Across roles, users valued clarity, feedback on growth, and outcomes they could measure and present."
                    ],
                    image: '/projects/sqwads/understand.png',
                    layout: 'imageLeft'
                },
                {
                    title: "Design Direction",
                    heading: "",
                    content: [
                        "The platform was structured around clearly defined roles, each with a focused interaction model.",
                        "Learners are guided toward discovery, collaboration, and portfolio building; mentors are equipped to support teams and track progress; administrators maintain visibility and platform integrity, all within a shared system."
                    ],
                    image: '/projects/sqwads/designdir.png',
                    layout: 'imageRight'
                }
            ],
            coreFeatures: [
                {
                    title: "Homepage",
                    content: [
                        "The homepage provides a clear overview of projects, mentors, chats, and skills. It’s designed to prevent confusion and ensure users know where to start, avoiding overwhelm common in multi-role platforms."
                    ],
                    image: "/projects/sqwads/homepage.png",
                },
                {
                    title: "Project Page",
                    content: [
                        "Users can browse and join real-world tech projects. This feature focuses on practical outcomes rather than theory, helping learners gain skills that matter in actual work settings."
                    ],
                    image: "/projects/sqwads/project.png",
                    layout: 'imageLeft'
                },
                {
                    title: "Mentor Section",
                    content: "Learners can book sessions, while mentors track progress and manage mentees. This ensures guidance is structured and measurable, avoiding the common problem of unorganized mentoring.",
                    image: "/projects/sqwads/mentor.png",
                    layout: 'imageRight'
                },
                {
                    title: "Portfolio Page",
                    content: "Completed projects feed directly into a portfolio visible to recruiters. This addresses the critical challenge of translating learning into tangible career outcomes.",
                    image: "/projects/sqwads/portfolio.png",
                    layout: 'imageLeft'
                },
                {
                    title: "Admin Platform",
                    content: "Gives oversight of users, projects, and mentors. This prevents mismanagement and ensures the platform scales while keeping operations smooth and transparent.",
                    image: "/projects/sqwads/admin.png",
                    layout: 'imageRight'
                },
                {
                    title: "Settings Page",
                    content: "Centralizes account and preference management, reducing friction and allowing users to focus on projects instead of administrative tasks.",
                    image: "/projects/sqwads/setting.png",
                    layout: 'imageLeft'
                },
            ],
            favouriteScreen: "/projects/sqwads/favouritescreens.png",
            websiteDesign: "/projects/sqwads/webdesign.png",
            websiteUrl: "https://sqwads.com/",
        }
    },
    {
        id: 5,
        name: "Jointly",
        title: "Lowering barriers to fractional real estate investment",
        description: "A platform built to help users access shared property investments through clear flows, trust-driven design, and accessible information.",
        image: '/projects/jointly/jointly.png',
        tags: ["PROPTECH", "REAL ESTATE", "WEB APP"],
        bgColor: "bg-[#FDF2F2]",
        details: {
            role: "",
            duration: "",
            client: "",
            sector: "",
            platform: "",
            collaborators: "",
            about: ["", ""],
            sections: [{ title: "", heading: "", content: "", image: '', layout: 'imageRight' }],
            allScreens: [],
            websiteUrl: "https://ownjointly.netlify.app/",
        }
    },
    {
        id: 6,
        name: "WESOnline",
        title: "Designing structure for digital learning at scale",
        description: "An education platform focused on delivering organized, accessible online learning experiences that help learners and educators stay aligned.",
        image: '/projects/wesonline/wesonline.png',
        tags: ["EDTECH", "LEARNING PLATFORM", "WEB APP"],
        bgColor: "bg-[#F0FDF4]",
        details: {
            role: "",
            duration: "",
            client: "",
            sector: "",
            platform: "",
            collaborators: "",
            about: [
                "",
                ""
            ],
            sections: [
                {
                    title: "",
                    heading: "",
                    content: "",
                    image: null,
                    layout: 'imageRight'
                }
            ],
            allScreens: [],
            websiteUrl: "https://wesonline.ng/",
        }
    },

    {
        id: 7,
        name: "Filmland",
        title: "Designing a seamless movie ticket booking experience",
        description: "Filmland is a movie ticket application that allows users to search for preferred movies, book tickets, and choose viewing options with ease.",
        image: '/projects/filmland/filmland.png',
        tags: ["ENTERTAINMENT", "MOBILE APP", "CASE STUDY"],
        bgColor: "bg-[#FFF1F2]",
        behanceUrl: "https://www.behance.net/gallery/156701187/FilmLand-Movie-Cinema-Ticket-Booking-UI-UX-Case-Study",
        details: {
            role: "",
            duration: "",
            client: "",
            sector: "",
            platform: "",
            collaborators: "",
            about: ["", ""],
            sections: [{ title: "", heading: "", content: "", image: '', layout: 'imageRight' }],
            allScreens: [],
        }
    },
    {
        id: 8,
        name: "Surba",
        title: "Subscription management platform to give businesses clear control over payments",
        description: "A subscription management platform designed to give businesses clear control over plans, payments, and renewals.",
        image: '/projects/surba/surba.png',
        tags: ["SAAS", "SUBSCRIPTION MANAGEMENT", "WEB APP"],
        bgColor: "bg-[#EAF2FF]",
        details: {
            role: "",
            duration: "",
            client: "",
            sector: "",
            platform: "",
            collaborators: "",
            about: [
                "",
                ""
            ],
            sections: [
                {
                    title: "",
                    heading: "",
                    content: "",
                    image: null,
                    layout: 'imageRight'
                }
            ],
            allScreens: [],
        }
    },
];
