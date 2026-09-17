const experienceItems = [
    {
        title: "Data Engineering & Cloud",
        subtitle: "SmartGreen — Academic Project",
        description:
            "Designed a real-time IoT data pipeline using Python, Pub/Sub, Dataflow, Apache Beam and BigQuery, with analytics and monitoring through Looker Studio.",
        technologies: [
            "Python",
            "GCP",
            "Pub/Sub",
            "Dataflow",
            "BigQuery",
        ],
        icon: "cloud",
    },

    {
        title: "Full-Stack Web Development",
        subtitle: "FERREMAS — Academic Project",
        description:
            "Developed a full-stack web project using Django and Spring Boot with MySQL, REST APIs and Postman for backend integration and API testing.",
        technologies: [
            "Django",
            "Spring Boot",
            "MySQL",
            "REST API",
            "Postman",
        ],
        icon: "code",
    },

    {
        title: "Mobile App Development",
        subtitle: "QuickHelp — Academic Project",
        description:
            "Built a mobile application project using Ionic, Angular and TypeScript with Firebase, Google Maps and Twilio integrations following a Scrum workflow.",
        technologies: [
            "Ionic",
            "Angular",
            "TypeScript",
            "Firebase",
            "Google Maps",
            "Twilio",
        ],
        icon: "mobile",
    },

    {
        title: "Machine Learning & Data Science",
        subtitle: "StarCraft II — Academic Project",
        description:
            "Applied classification, clustering, dimensionality reduction and cross-validation techniques to analyze player behavior and identify meaningful patterns.",
        technologies: [
            "Python",
            "Pandas",
            "Scikit-learn",
            "K-Means",
            "PCA",
        ],
        icon: "brain",
    },

    {
        title: "ETL, Analytics & Business Intelligence",
        subtitle: "Academic Projects",
        description:
            "Built ETL workflows, performed data profiling and quality validation, and created analytical dashboards focused on KPIs and decision-making.",
        technologies: [
            "Python",
            "SQL",
            "Pandas",
            "Power BI",
            "ETL",
        ],
        icon: "database",
    },
];

function ExperienceIcon({ icon }: { icon: string }) {
    if (icon === "cloud") {
        return (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
            >
                <path d="M17.5 19H6a4 4 0 0 1-.5-7.97A6.5 6.5 0 0 1 18 9.5v.5a4.5 4.5 0 0 1-.5 9Z" />
            </svg>
        );
    }

    if (icon === "code") {
        return (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
            >
                <path d="m8 9-4 3 4 3" />
                <path d="m16 9 4 3-4 3" />
                <path d="m14 5-4 14" />
            </svg>
        );
    }

    if (icon === "mobile") {
        return (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
            >
                <rect x="6" y="2" width="12" height="20" rx="2" />
                <path d="M10 5h4" />
                <path d="M11 18h2" />
            </svg>
        );
    }

    if (icon === "brain") {
        return (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
            >
                <path d="M9.5 4.5A3 3 0 0 0 6 7.45 3 3 0 0 0 4.5 13a3 3 0 0 0 2 5.5A3 3 0 0 0 12 20V5.5a3 3 0 0 0-2.5-3Z" />
                <path d="M14.5 4.5A3 3 0 0 1 18 7.45 3 3 0 0 1 19.5 13a3 3 0 0 1-2 5.5A3 3 0 0 1 12 20V5.5a3 3 0 0 1 2.5-3Z" />
            </svg>
        );
    }

    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
        >
            <ellipse cx="12" cy="5" rx="8" ry="3" />
            <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
            <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </svg>
    );
}

export default function ExperienceEducation() {
    return (
        <section
            id="experience"
            className="
                relative
                overflow-hidden
                bg-transparent
                pb-0
                pt-0
            "
        >
            {/* Ambient glows */}
            <div className="pointer-events-none absolute left-[-160px] top-[20%] h-[420px] w-[420px] rounded-full bg-blue-500/[0.035] blur-[150px]" />

            <div className="pointer-events-none absolute bottom-[5%] right-[-180px] h-[460px] w-[460px] rounded-full bg-cyan-400/[0.03] blur-[160px]" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-3 min-[390px]:px-4 sm:px-5 md:px-6">
                {/* Header */}
                <div className="mx-auto mb-7 mt-3 max-w-2xl text-center sm:mt-4 md:mb-8 md:mt-5">
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                        Experience & Education
                    </h2>

                    <p className="mx-auto mt-2 max-w-2xl text-[11px] leading-5 text-slate-500 sm:text-xs sm:leading-6 lg:mt-3 lg:text-sm">
                        Hands-on project experience across software development,
                        data engineering, cloud, mobile applications and machine
                        learning.
                    </p>
                </div>

                {/* Main grid */}
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-6

                        lg:grid-cols-[1.35fr_0.65fr]
                        lg:items-stretch

                        xl:grid-cols-[1.4fr_0.6fr]
                    "
                >
                    {/* =================================================
                        TECHNICAL EXPERIENCE
                    ================================================= */}
                    <article className="flex h-full flex-col rounded-[22px] border border-cyan-400/20 bg-[#07111b]/55 p-5 shadow-[0_0_0_1px_rgba(34,211,238,0.03),0_0_35px_rgba(34,211,238,0.05)] backdrop-blur-xl sm:p-6 lg:p-7">
                        <div className="mb-7 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/[0.05] text-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.10)]">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    className="h-5 w-5"
                                >
                                    <rect
                                        x="3"
                                        y="7"
                                        width="18"
                                        height="13"
                                        rx="2"
                                    />

                                    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    <path d="M3 12h18" />
                                </svg>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white sm:text-xl">
                                    Technical Experience
                                </h3>

                                <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                                    Project-based experience
                                </p>
                            </div>
                        </div>

                        <div className="relative flex-1">
                            <div className="absolute bottom-4 left-[19px] top-4 w-px bg-gradient-to-b from-cyan-400/40 via-cyan-400/15 to-transparent" />

                            <div className="space-y-7">
                                {experienceItems.map((item) => (
                                    <div
                                        key={item.title}
                                        className="relative flex gap-4"
                                    >
                                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/25 bg-[#07111b] text-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.08)]">
                                            <ExperienceIcon icon={item.icon} />
                                        </div>

                                        <div className="min-w-0 flex-1 pb-2">
                                            <h4 className="text-sm font-semibold text-white sm:text-base">
                                                {item.title}
                                            </h4>

                                            <p className="mt-1 text-[10px] font-medium text-cyan-400/80 sm:text-xs">
                                                {item.subtitle}
                                            </p>

                                            <p className="mt-3 max-w-3xl text-[10px] leading-5 text-slate-400 sm:text-xs sm:leading-6">
                                                {item.description}
                                            </p>

                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {item.technologies.map(
                                                    (technology) => (
                                                        <span
                                                            key={technology}
                                                            className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1 text-[8px] font-medium text-slate-300 sm:text-[9px]"
                                                        >
                                                            {technology}
                                                        </span>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>

                    {/* =================================================
                        EDUCATION
                    ================================================= */}
                    <article className="flex h-full flex-col rounded-[22px] border border-cyan-400/20 bg-[#07111b]/55 p-5 shadow-[0_0_0_1px_rgba(34,211,238,0.03),0_0_35px_rgba(34,211,238,0.05)] backdrop-blur-xl sm:p-6 lg:p-7">
                        {/* Header */}
                        <div className="mb-7 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-400/[0.05] text-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.10)]">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    className="h-5 w-5"
                                >
                                    <path d="m3 10 9-5 9 5-9 5-9-5Z" />
                                    <path d="M7 12v5c3 2 7 2 10 0v-5" />
                                </svg>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white sm:text-xl">
                                    Education
                                </h3>

                                <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                                    Academic background
                                </p>
                            </div>
                        </div>

                        {/* Education blocks */}
                        <div className="flex flex-1 flex-col gap-5">
                            {/* Degree */}
                            <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.035]">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                                            Current
                                        </p>

                                        <h4 className="mt-2 text-base font-semibold text-white sm:text-lg">
                                            Ingeniería Informática
                                        </h4>

                                        <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                                            Duoc UC
                                        </p>
                                    </div>

                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/[0.05]">
                                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                                    </div>
                                </div>

                                <div className="mt-5 border-t border-white/[0.06] pt-4">
                                    <div className="flex items-center justify-between gap-4 text-[10px] sm:text-xs">
                                        <span className="text-slate-500">
                                            Status
                                        </span>

                                        <span className="text-right text-slate-300">
                                            Final semester
                                        </span>
                                    </div>

                                    <div className="mt-3 flex items-center justify-between gap-4 text-[10px] sm:text-xs">
                                        <span className="text-slate-500">
                                            Expected graduation
                                        </span>

                                        <span className="text-right text-cyan-400">
                                            Dec 2026
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Data Science specialization */}
                            <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-5 transition-all duration-300 hover:border-blue-400/20 hover:bg-white/[0.035]">
                                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-blue-400">
                                    Specialization
                                </p>

                                <h4 className="mt-2 text-base font-semibold text-white sm:text-lg">
                                    Data Science
                                </h4>

                                <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                                    Duoc UC
                                </p>

                                <p className="mt-4 text-[10px] leading-5 text-slate-500 sm:text-xs sm:leading-6">
                                    Academic specialization focused on data
                                    analytics, machine learning and applied data
                                    science.
                                </p>
                            </div>

                            {/* GCP Course */}
                            <div className="rounded-xl border border-cyan-400/10 bg-cyan-400/[0.025] p-5 transition-all duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.04]">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.04] text-cyan-400">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-4 w-4"
                                        >
                                            <path d="M17.5 19H6a4 4 0 0 1-.5-7.97A6.5 6.5 0 0 1 18 9.5v.5a4.5 4.5 0 0 1-.5 9Z" />
                                        </svg>
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                                            Cloud Course
                                        </p>

                                        <h4 className="mt-2 text-base font-semibold leading-snug text-white sm:text-lg">
                                            Introducción a la Ciencia de Datos
                                        </h4>

                                        <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                                            Google Cloud Platform (GCP)
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-4 text-[10px] leading-5 text-slate-500 sm:text-xs sm:leading-6">
                                    Introductory training in data science
                                    concepts and the use of cloud technologies
                                    within the Google Cloud ecosystem.
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {[
                                        "GCP",
                                        "Data Science",
                                        "Cloud",
                                        "Data Analytics",
                                    ].map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-md border border-cyan-400/10 bg-cyan-400/[0.025] px-2.5 py-1 text-[8px] text-cyan-100/80 sm:text-[9px]"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Main Focus */}
                            <div className="mt-auto rounded-xl border border-cyan-400/10 bg-cyan-400/[0.025] p-5">
                                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                                    Main Focus
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {[
                                        "Software Development",
                                        "Web Development",
                                        "Mobile Development",
                                        "Data Engineering",
                                        "Cloud",
                                        "Analytics",
                                        "Machine Learning",
                                    ].map((focus) => (
                                        <span
                                            key={focus}
                                            className="rounded-md border border-cyan-400/10 bg-cyan-400/[0.03] px-2.5 py-1.5 text-[9px] text-cyan-100/80"
                                        >
                                            {focus}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}