type ProjectAccent = "green" | "violet" | "cyan" | "blue";

interface ProjectCardProps {
    title: string;
    description: string;
    status: string;
    technologies: string[];
    accent: ProjectAccent;
    icon: "leaf" | "brain" | "database" | "chart";
}

const accentStyles = {
    green: {
        iconContainer:
            "border-emerald-400/30 bg-emerald-400/[0.07] text-emerald-400 shadow-[0_0_22px_rgba(52,211,153,0.10)]",
        status:
            "border-emerald-400/20 bg-emerald-400/[0.07] text-emerald-400",
        dot: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]",
    },

    violet: {
        iconContainer:
            "border-violet-400/30 bg-violet-400/[0.07] text-violet-400 shadow-[0_0_22px_rgba(167,139,250,0.10)]",
        status:
            "border-violet-400/20 bg-violet-400/[0.07] text-violet-400",
        dot: "bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.8)]",
    },

    cyan: {
        iconContainer:
            "border-cyan-400/30 bg-cyan-400/[0.07] text-cyan-400 shadow-[0_0_22px_rgba(34,211,238,0.10)]",
        status:
            "border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-400",
        dot: "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]",
    },

    blue: {
        iconContainer:
            "border-blue-400/30 bg-blue-400/[0.07] text-blue-400 shadow-[0_0_22px_rgba(96,165,250,0.10)]",
        status:
            "border-blue-400/20 bg-blue-400/[0.07] text-blue-400",
        dot: "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]",
    },
};

function ProjectIcon({
    icon,
}: {
    icon: ProjectCardProps["icon"];
}) {
    if (icon === "leaf") {
        return (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
            >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 4.8 19 2 19 2c1 5.5-.7 10.5-4.4 12.8" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6.94C9.39 12.93 12 12 16 12" />
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
                className="h-6 w-6"
            >
                <path d="M9.5 4.5A3 3 0 0 0 6 7.45 3 3 0 0 0 4.5 13a3 3 0 0 0 2 5.5A3 3 0 0 0 12 20V5.5a3 3 0 0 0-2.5-3Z" />
                <path d="M14.5 4.5A3 3 0 0 1 18 7.45 3 3 0 0 1 19.5 13a3 3 0 0 1-2 5.5A3 3 0 0 1 12 20V5.5a3 3 0 0 1 2.5-3Z" />
                <path d="M8 9.5h4" />
                <path d="M12 14.5h4" />
                <path d="M7.5 15.5A3 3 0 0 0 10 13" />
                <path d="M16.5 8.5A3 3 0 0 0 14 11" />
            </svg>
        );
    }

    if (icon === "chart") {
        return (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
            >
                <path d="M4 19V9" />
                <path d="M10 19V5" />
                <path d="M16 19v-7" />
                <path d="M22 19H2" />
                <path d="m4 7 6-4 6 6 5-4" />
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
            className="h-6 w-6"
        >
            <ellipse cx="12" cy="5" rx="8" ry="3" />
            <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
            <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </svg>
    );
}

export default function ProjectCard({
    title,
    description,
    status,
    technologies,
    accent,
    icon,
}: ProjectCardProps) {
    const styles = accentStyles[accent];

    return (
        <article
            className="
                group
                relative
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-[20px]
                border
                border-cyan-400/20
                bg-[#07111b]/55
                p-4
                shadow-[0_0_0_1px_rgba(34,211,238,0.03),0_0_30px_rgba(34,211,238,0.05)]
                backdrop-blur-xl
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-cyan-400/35
                hover:shadow-[0_0_0_1px_rgba(34,211,238,0.07),0_14px_50px_rgba(34,211,238,0.09)]

                min-[390px]:p-5

                sm:p-6
            "
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-500/[0.035] blur-[80px]" />

            {/* =====================================================
                HEADER
            ===================================================== */}
            <div className="relative z-10 flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-3">
                    <div
                        className={`
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border

                            min-[390px]:h-11
                            min-[390px]:w-11

                            sm:h-12
                            sm:w-12

                            ${styles.iconContainer}
                        `}
                    >
                        <ProjectIcon icon={icon} />
                    </div>

                    <h3
                        className="
                            min-w-0
                            text-[14px]
                            font-semibold
                            leading-[1.35]
                            text-white

                            min-[390px]:text-[15px]

                            sm:text-base

                            2xl:text-[17px]
                        "
                    >
                        {title}
                    </h3>
                </div>

                <div
                    className={`
                        flex
                        shrink-0
                        items-center
                        gap-2
                        rounded-md
                        border
                        px-2
                        py-1.5
                        text-[8px]
                        font-medium

                        2xl:px-2.5
                        2xl:text-[9px]

                        ${styles.status}
                    `}
                >
                    <span
                        className={`h-1.5 w-1.5 rounded-full ${styles.dot}`}
                    />

                    {status}
                </div>
            </div>

            {/* =====================================================
                DESCRIPTION
            ===================================================== */}
            <p
                className="
                    relative
                    z-10
                    mt-4
                    text-[10px]
                    leading-5
                    text-slate-400

                    min-[390px]:text-[11px]

                    sm:mt-5
                    sm:text-xs
                    sm:leading-6
                "
            >
                {description}
            </p>

            {/* =====================================================
                TECHNOLOGIES
            ===================================================== */}
            <div
                className="
                    relative
                    z-10
                    mt-4
                    flex
                    flex-wrap
                    gap-1.5

                    min-[390px]:gap-2

                    sm:mt-5
                "
            >
                {technologies.map((technology) => (
                    <span
                        key={technology}
                        className="
                            rounded-md
                            border
                            border-white/[0.08]
                            bg-white/[0.035]
                            px-2
                            py-1
                            text-[8px]
                            font-medium
                            text-slate-300
                            shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]

                            min-[390px]:px-2.5
                            min-[390px]:py-1.5
                            min-[390px]:text-[9px]

                            sm:text-[10px]
                        "
                    >
                        {technology}
                    </span>
                ))}
            </div>

            {/* =====================================================
                ACTIONS

                Mobile:
                Immediately after technologies.

                Tablet / Desktop:
                Move to bottom so cards remain aligned.
            ===================================================== */}
            <div
                className="
                    relative
                    z-10
                    mt-5
                    grid
                    grid-cols-2
                    gap-2

                    md:mt-auto
                    md:pt-6

                    2xl:gap-3
                "
            >
                <button
                    type="button"
                    className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        whitespace-nowrap
                        rounded-lg
                        border
                        border-cyan-400/40
                        bg-cyan-400/[0.035]
                        px-2
                        py-2.5
                        text-[9px]
                        font-medium
                        text-cyan-400
                        shadow-[0_0_16px_rgba(34,211,238,0.05)]
                        transition-all
                        duration-200

                        hover:border-cyan-400/70
                        hover:bg-cyan-400/[0.08]
                        hover:shadow-[0_0_22px_rgba(34,211,238,0.10)]

                        2xl:px-3
                        2xl:text-[10px]
                    "
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-4 w-4 shrink-0"
                    >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>

                    View Project
                </button>

                <button
                    type="button"
                    className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        whitespace-nowrap
                        rounded-lg
                        border
                        border-white/15
                        bg-white/[0.02]
                        px-2
                        py-2.5
                        text-[9px]
                        font-medium
                        text-slate-200
                        transition-all
                        duration-200

                        hover:border-white/25
                        hover:bg-white/[0.05]

                        2xl:px-3
                        2xl:text-[10px]
                    "
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4 shrink-0"
                        aria-hidden="true"
                    >
                        <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.91-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.94a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
                    </svg>

                    GitHub
                </button>
            </div>
        </article>
    );
}