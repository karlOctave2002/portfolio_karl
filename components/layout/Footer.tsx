export default function Footer() {
    return (
        <footer
            className="
                relative
                overflow-hidden
                border-t
                border-cyan-400/10
                bg-[#05070a]/35
                backdrop-blur-md
            "
        >
            {/* =========================================================
                SUBTLE BACKGROUND GLOW
            ========================================================= */}
            <div className="pointer-events-none absolute bottom-[-140px] left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/[0.025] blur-[140px]" />

            {/* =========================================================
                MAIN FOOTER
            ========================================================= */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    w-full
                    max-w-7xl
                    flex-col
                    gap-6
                    px-4
                    py-7

                    sm:px-5

                    md:flex-row
                    md:items-center
                    md:justify-between
                    md:px-6
                    md:py-8
                "
            >
                {/* =====================================================
                    BRAND
                ===================================================== */}
                <div>
                    <a
                        href="#home"
                        className="
                            inline-flex
                            items-center
                            text-xl
                            font-bold
                            tracking-tight
                            text-white
                            transition-opacity
                            duration-200

                            hover:opacity-80
                        "
                    >
                        OK
                        <span className="text-cyan-400">.</span>
                    </a>

                    <p
                        className="
                            mt-2
                            text-[9px]
                            tracking-[0.12em]
                            text-slate-500

                            sm:text-[10px]
                        "
                    >
                        SOFTWARE · DATA · CLOUD · AI
                    </p>
                </div>

                {/* =====================================================
                    CENTER
                ===================================================== */}
                <div
                    className="
                        text-left

                        md:text-center
                    "
                >
                    <p className="text-[10px] text-slate-400 sm:text-xs">
                        © 2026 Octave Karl
                    </p>

                    <p className="mt-1 text-[9px] text-slate-600 sm:text-[10px]">
                        Built with Next.js, TypeScript & Tailwind CSS
                    </p>
                </div>

                {/* =====================================================
                    SOCIAL LINKS
                ===================================================== */}
                <div
                    className="
                        flex
                        flex-wrap
                        items-center
                        gap-2

                        md:justify-end
                    "
                >
                    {/* GitHub */}
                    <a
                        href="https://github.com/karlOctave2002"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-white/[0.08]
                            bg-white/[0.025]
                            text-slate-400
                            transition-all
                            duration-200

                            hover:border-cyan-400/30
                            hover:bg-cyan-400/[0.05]
                            hover:text-cyan-400
                        "
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-4 w-4"
                            aria-hidden="true"
                        >
                            <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.91-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.94a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/karloctave"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-white/[0.08]
                            bg-white/[0.025]
                            text-slate-400
                            transition-all
                            duration-200

                            hover:border-blue-400/30
                            hover:bg-blue-400/[0.05]
                            hover:text-blue-400
                        "
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-4 w-4"
                            aria-hidden="true"
                        >
                            <path d="M6.5 8.25H3V21h3.5V8.25ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.7c0-3.84-2.05-5.63-4.79-5.63-2.2 0-3.19 1.21-3.74 2.07V8.25H9V21h3.47v-6.31c0-1.66.32-3.27 2.38-3.27 2.03 0 2.05 1.9 2.05 3.38V21H21v-7.3Z" />
                        </svg>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:karloctave0@gmail.com"
                        aria-label="Email"
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-white/[0.08]
                            bg-white/[0.025]
                            text-slate-400
                            transition-all
                            duration-200

                            hover:border-cyan-400/30
                            hover:bg-cyan-400/[0.05]
                            hover:text-cyan-400
                        "
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            className="h-4 w-4"
                            aria-hidden="true"
                        >
                            <rect
                                x="3"
                                y="5"
                                width="18"
                                height="14"
                                rx="2"
                            />
                            <path d="m3 7 9 6 9-6" />
                        </svg>
                    </a>

                    {/* Back to top */}
                    <a
                        href="#home"
                        aria-label="Back to top"
                        className="
                            ml-1
                            inline-flex
                            h-10
                            items-center
                            justify-center
                            gap-2
                            rounded-lg
                            border
                            border-cyan-400/15
                            bg-cyan-400/[0.025]
                            px-3
                            text-[9px]
                            font-medium
                            text-slate-400
                            transition-all
                            duration-200

                            hover:border-cyan-400/35
                            hover:bg-cyan-400/[0.05]
                            hover:text-cyan-400

                            sm:text-[10px]
                        "
                    >
                        Top

                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3.5 w-3.5"
                        >
                            <path d="m18 15-6-6-6 6" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}