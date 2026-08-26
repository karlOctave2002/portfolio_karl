const expertise = [
    {
        name: "Data Engineering & GCP",
        level: "Advanced",
        width: "92%",
    },
    {
        name: "SQL / Python / Pandas",
        level: "Advanced",
        width: "90%",
    },
    {
        name: "BigQuery / Dataflow / Pub/Sub",
        level: "Advanced",
        width: "88%",
    },
    {
        name: "Analytics / BI",
        level: "Intermediate",
        width: "84%",
    },
    {
        name: "Machine Learning",
        level: "Intermediate",
        width: "80%",
    },
];

export default function HomeOverview() {
    return (
        <section className="relative z-20 -mt-[52px] bg-transparent pb-16 md:-mt-16 md:pb-20">
            <div
                className="
                    mx-auto grid
                    w-full max-w-7xl
                    grid-cols-1
                    gap-5
                    px-1

                    min-[390px]:px-2

                    sm:px-4

                    md:grid-cols-[0.8fr_1.2fr]
                    md:gap-6
                    md:px-6
                "
            >
                {/* =====================================================
                    ABOUT ME
                ===================================================== */}
                <article
                    className="
                        group
                        overflow-hidden
                        rounded-[20px]
                        border
                        border-cyan-400/20
                        bg-[#07111b]/55
                        p-5
                        shadow-[0_0_0_1px_rgba(34,211,238,0.04),0_0_28px_rgba(34,211,238,0.07)]
                        backdrop-blur-xl
                        transition-all
                        duration-300

                        hover:border-cyan-400/35
                        hover:shadow-[0_0_0_1px_rgba(34,211,238,0.08),0_10px_45px_rgba(34,211,238,0.10)]

                        sm:p-6

                        md:p-7
                        md:hover:-translate-y-1
                    "
                >
                    {/* Header */}
                    <div className="mb-4 flex items-center gap-3 md:mb-5">
                        <div
                            className="
                                flex h-9 w-9
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-cyan-400/25
                                bg-cyan-400/[0.05]
                                text-cyan-400
                                shadow-[0_0_16px_rgba(34,211,238,0.12)]

                                sm:h-10
                                sm:w-10
                            "
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                className="h-4 w-4 sm:h-5 sm:w-5"
                            >
                                <path d="M20 21a8 8 0 0 0-16 0" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>

                        <h2 className="text-lg font-semibold text-white sm:text-xl">
                            About Me
                        </h2>
                    </div>

                    {/* Compact summary */}
                    <p className="text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7">
                        I&apos;m an Informatics Engineering student focused on Data
                        Engineering, Analytics, Cloud and Machine Learning, building
                        data-driven solutions with Python, SQL and GCP.
                    </p>

                    {/* Information */}
                    <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6">
                        {/* Role */}
                        <div className="flex items-start gap-2.5 sm:gap-3">
                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 sm:h-9 sm:w-9">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    className="h-4 w-4"
                                >
                                    <path d="M20 21a8 8 0 0 0-16 0" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </div>

                            <div className="min-w-0">
                                <p className="text-[9px] uppercase tracking-[0.16em] text-slate-500 sm:text-[10px]">
                                    Role
                                </p>

                                <p className="mt-1 text-[11px] text-slate-200 sm:text-sm">
                                    Data Engineer
                                </p>
                            </div>
                        </div>

                        {/* Focus */}
                        <div className="flex items-start gap-2.5 sm:gap-3">
                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 sm:h-9 sm:w-9">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    className="h-4 w-4"
                                >
                                    <circle cx="12" cy="12" r="8" />
                                    <path d="M12 8v4l3 2" />
                                </svg>
                            </div>

                            <div className="min-w-0">
                                <p className="text-[9px] uppercase tracking-[0.16em] text-slate-500 sm:text-[10px]">
                                    Focus
                                </p>

                                <p className="mt-1 text-[11px] text-slate-200 sm:text-sm">
                                    Data · Cloud · AI
                                </p>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="flex items-start gap-2.5 sm:gap-3">
                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 sm:h-9 sm:w-9">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    className="h-4 w-4"
                                >
                                    <path d="m3 10 9-5 9 5-9 5-9-5Z" />
                                    <path d="M7 12v5c3 2 7 2 10 0v-5" />
                                </svg>
                            </div>

                            <div className="min-w-0">
                                <p className="text-[9px] uppercase tracking-[0.16em] text-slate-500 sm:text-[10px]">
                                    Education
                                </p>

                                <p className="mt-1 text-[11px] leading-4 text-slate-200 sm:text-sm">
                                    Ingeniería Informática
                                </p>
                            </div>
                        </div>

                        {/* Status */}
                        <div className="flex items-start gap-2.5 sm:gap-3">
                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/[0.04] sm:h-9 sm:w-9">
                                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] sm:h-2.5 sm:w-2.5" />
                            </div>

                            <div className="min-w-0">
                                <p className="text-[9px] uppercase tracking-[0.16em] text-slate-500 sm:text-[10px]">
                                    Status
                                </p>

                                <p className="mt-1 text-[11px] leading-4 text-emerald-400 sm:text-sm">
                                    Open to Opportunities
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Temporary button */}
                    <button
                        type="button"
                        className="
                            mt-6 inline-flex
                            items-center gap-3
                            rounded-lg
                            border
                            border-cyan-400/20
                            bg-white/[0.025]
                            px-4
                            py-2.5
                            text-xs
                            font-medium
                            text-white
                            shadow-[0_0_16px_rgba(34,211,238,0.04)]
                            transition-all
                            duration-200

                            hover:border-cyan-400/45
                            hover:bg-cyan-400/[0.05]

                            sm:px-5
                            sm:text-sm
                        "
                    >
                        Read More
                        <span className="text-cyan-400">→</span>
                    </button>
                </article>

                {/* =====================================================
                    MY EXPERTISE
                ===================================================== */}
                <article
                    className="
                        group
                        overflow-hidden
                        rounded-[20px]
                        border
                        border-cyan-400/20
                        bg-[#07111b]/55
                        p-5
                        shadow-[0_0_0_1px_rgba(34,211,238,0.04),0_0_28px_rgba(34,211,238,0.07)]
                        backdrop-blur-xl
                        transition-all
                        duration-300

                        hover:border-cyan-400/35
                        hover:shadow-[0_0_0_1px_rgba(34,211,238,0.08),0_10px_45px_rgba(34,211,238,0.10)]

                        sm:p-6

                        md:p-7
                        md:hover:-translate-y-1
                    "
                >
                    {/* Header */}
                    <div className="mb-5 flex items-center gap-3 md:mb-6">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/[0.05] text-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.12)] sm:h-10 sm:w-10">
                            <span className="font-mono text-xs font-bold sm:text-sm">
                                &lt;/&gt;
                            </span>
                        </div>

                        <h2 className="text-lg font-semibold text-white sm:text-xl">
                            My Expertise
                        </h2>
                    </div>

                    {/* Skills */}
                    <div className="space-y-4 sm:space-y-5">
                        {expertise.map((skill) => (
                            <div key={skill.name}>
                                <div className="mb-2 flex items-center justify-between gap-3">
                                    <span className="text-[11px] text-slate-300 sm:text-sm">
                                        {skill.name}
                                    </span>

                                    <span className="shrink-0 text-[9px] font-medium text-cyan-400/70 sm:text-xs">
                                        {skill.level}
                                    </span>
                                </div>

                                <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.30)]"
                                        style={{
                                            width: skill.width,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Temporary button */}
                    <button
                        type="button"
                        className="
                            mt-6 inline-flex
                            items-center gap-3
                            rounded-lg
                            border
                            border-cyan-400/20
                            bg-white/[0.025]
                            px-4
                            py-2.5
                            text-xs
                            font-medium
                            text-white
                            shadow-[0_0_16px_rgba(34,211,238,0.04)]
                            transition-all
                            duration-200

                            hover:border-cyan-400/45
                            hover:bg-cyan-400/[0.05]

                            sm:px-5
                            sm:text-sm
                        "
                    >
                        Read More
                        <span className="text-cyan-400">→</span>
                    </button>
                </article>
            </div>
        </section>
    );
}