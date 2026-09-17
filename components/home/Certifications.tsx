const certifications = [
    {
        title: "Data Science",
        institution: "Duoc UC",
        type: "Specialization Certificate",
        description:
            "Academic specialization focused on data analytics, machine learning and applied data science.",
        skills: [
            "Data Science",
            "Machine Learning",
            "Analytics",
            "Python",
            "Data Visualization",
        ],
        status: "Completed",
        accent: "blue",
        featured: true,
        icon: "award",
    },
    {
        title: "Fundamentos de Programación I",
        institution: "Cisco",
        type: "Programming Certificate",
        description:
            "Foundational training in programming concepts, computational thinking and structured problem solving.",
        skills: [
            "Programming Fundamentals",
            "Logic",
            "Algorithms",
            "Problem Solving",
        ],
        status: "Completed",
        accent: "cyan",
        featured: false,
        icon: "code",
    },
    {
        title: "Fundamentos de Programación II",
        institution: "Cisco",
        type: "Programming Certificate",
        description:
            "Continuation of programming fundamentals with deeper practice in structured development and problem-solving techniques.",
        skills: [
            "Programming",
            "Algorithms",
            "Data Structures",
            "Problem Solving",
        ],
        status: "Completed",
        accent: "violet",
        featured: false,
        icon: "terminal",
    },
];

const accentStyles = {
    blue: {
        icon: "border-blue-400/25 bg-blue-400/[0.06] text-blue-400 shadow-[0_0_22px_rgba(59,130,246,0.10)]",
        label: "text-blue-400",
    },

    cyan: {
        icon: "border-cyan-400/25 bg-cyan-400/[0.06] text-cyan-400 shadow-[0_0_22px_rgba(34,211,238,0.10)]",
        label: "text-cyan-400",
    },

    violet: {
        icon: "border-violet-400/25 bg-violet-400/[0.06] text-violet-400 shadow-[0_0_22px_rgba(167,139,250,0.10)]",
        label: "text-violet-400",
    },
};

function CertificationIcon({ icon }: { icon: string }) {
    if (icon === "code") {
        return (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
            >
                <path d="m8 9-4 3 4 3" />
                <path d="m16 9 4 3-4 3" />
                <path d="m14 5-4 14" />
            </svg>
        );
    }

    if (icon === "terminal") {
        return (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
            >
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="m7 9 3 3-3 3" />
                <path d="M13 15h4" />
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
            className="h-7 w-7"
        >
            <path d="M12 15 6.5 18l1-6L3 7.5l6.2-.9L12 1l2.8 5.6 6.2.9-4.5 4.5 1 6Z" />
            <path d="M9 18v4l3-2 3 2v-4" />
        </svg>
    );
}

export default function Certifications() {
    return (
        <section
            id="certifications"
            className="
                relative
                overflow-hidden
                bg-transparent
                pb-0
                pt-0
            "
        >
            {/* Ambient glows */}
            <div className="pointer-events-none absolute left-[10%] top-[10%] h-[360px] w-[360px] rounded-full bg-blue-500/[0.03] blur-[140px]" />

            <div className="pointer-events-none absolute bottom-[-120px] right-[5%] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.025] blur-[160px]" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-3 min-[390px]:px-4 sm:px-5 md:px-6">
                {/* Header */}
                <div className="mx-auto mb-6 mt-1 max-w-2xl text-center sm:mt-2 md:mb-7 md:mt-3">
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                        Certifications
                    </h2>

                    <p className="mx-auto mt-2 max-w-xl text-[11px] leading-5 text-slate-500 sm:text-xs sm:leading-6 lg:mt-3 lg:text-sm">
                        Credentials that complement my academic background and
                        technical specialization.
                    </p>
                </div>

                {/* Certification grid */}
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                    {certifications.map((certification) => {
                        const styles =
                            accentStyles[
                            certification.accent as keyof typeof accentStyles
                            ];

                        return (
                            <article
                                key={certification.title}
                                className={`
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-[22px]
                                    border
                                    border-cyan-400/20
                                    bg-[#07111b]/55
                                    p-5
                                    shadow-[0_0_0_1px_rgba(34,211,238,0.03),0_0_35px_rgba(34,211,238,0.05)]
                                    backdrop-blur-xl
                                    transition-all
                                    duration-300

                                    hover:-translate-y-1
                                    hover:border-cyan-400/35
                                    hover:shadow-[0_0_0_1px_rgba(34,211,238,0.06),0_12px_50px_rgba(34,211,238,0.07)]

                                    sm:p-6
                                    lg:p-7

                                    ${certification.featured
                                        ? "md:col-span-2"
                                        : ""
                                    }
                                `}
                            >
                                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/[0.035] blur-[100px]" />

                                {certification.featured ? (
                                    <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-7">
                                        <div
                                            className={`
                                                flex
                                                h-14
                                                w-14
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-2xl
                                                border
                                                sm:h-16
                                                sm:w-16
                                                ${styles.icon}
                                            `}
                                        >
                                            <CertificationIcon
                                                icon={certification.icon}
                                            />
                                        </div>

                                        <div className="min-w-0">
                                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                                                <p
                                                    className={`
                                                        text-[9px]
                                                        font-semibold
                                                        uppercase
                                                        tracking-[0.18em]
                                                        ${styles.label}
                                                    `}
                                                >
                                                    {certification.type}
                                                </p>

                                                <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />

                                                <p className="text-[10px] text-slate-500 sm:text-xs">
                                                    {
                                                        certification.institution
                                                    }
                                                </p>
                                            </div>

                                            <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl lg:text-2xl">
                                                {certification.title}
                                            </h3>

                                            <p className="mt-3 max-w-2xl text-[10px] leading-5 text-slate-400 sm:text-xs sm:leading-6">
                                                {certification.description}
                                            </p>

                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {certification.skills.map(
                                                    (skill) => (
                                                        <span
                                                            key={skill}
                                                            className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-[8px] font-medium text-slate-300 sm:text-[9px]"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ),
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between gap-4 md:flex-col md:items-end md:justify-center">
                                            <div className="inline-flex items-center gap-2 rounded-md border border-emerald-400/20 bg-emerald-400/[0.05] px-3 py-1.5 text-[9px] font-medium text-emerald-400">
                                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

                                                {certification.status}
                                            </div>

                                            <button
                                                type="button"
                                                className="group/button inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-cyan-400/20 bg-white/[0.025] px-4 py-2.5 text-[10px] font-medium text-slate-200 transition-all duration-200 hover:border-cyan-400/45 hover:bg-cyan-400/[0.05] hover:text-white sm:text-xs"
                                            >
                                                View Credential

                                                <span className="text-cyan-400 transition-transform duration-200 group-hover/button:translate-x-1">
                                                    →
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative z-10 flex h-full flex-col">
                                        <div className="flex items-start justify-between gap-4">
                                            <div
                                                className={`
                                                    flex
                                                    h-12
                                                    w-12
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-xl
                                                    border
                                                    ${styles.icon}
                                                `}
                                            >
                                                <CertificationIcon
                                                    icon={certification.icon}
                                                />
                                            </div>

                                            <div className="inline-flex items-center gap-2 rounded-md border border-emerald-400/20 bg-emerald-400/[0.05] px-2.5 py-1.5 text-[8px] font-medium text-emerald-400">
                                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />

                                                {certification.status}
                                            </div>
                                        </div>

                                        <div className="mt-5">
                                            <p
                                                className={`
                                                    text-[9px]
                                                    font-semibold
                                                    uppercase
                                                    tracking-[0.18em]
                                                    ${styles.label}
                                                `}
                                            >
                                                {certification.type}
                                            </p>

                                            <h3 className="mt-2 text-base font-semibold text-white sm:text-lg">
                                                {certification.title}
                                            </h3>

                                            <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                                                {certification.institution}
                                            </p>

                                            <p className="mt-4 text-[10px] leading-5 text-slate-400 sm:text-xs sm:leading-6">
                                                {certification.description}
                                            </p>
                                        </div>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {certification.skills.map(
                                                (skill) => (
                                                    <span
                                                        key={skill}
                                                        className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-[8px] font-medium text-slate-300 sm:text-[9px]"
                                                    >
                                                        {skill}
                                                    </span>
                                                ),
                                            )}
                                        </div>

                                        <div className="mt-auto pt-5">
                                            <button
                                                type="button"
                                                className="group/button inline-flex items-center gap-2 rounded-lg border border-cyan-400/20 bg-white/[0.025] px-4 py-2.5 text-[10px] font-medium text-slate-200 transition-all duration-200 hover:border-cyan-400/45 hover:bg-cyan-400/[0.05] hover:text-white sm:text-xs"
                                            >
                                                View Credential

                                                <span className="text-cyan-400 transition-transform duration-200 group-hover/button:translate-x-1">
                                                    →
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}