export default function Contact() {
    return (
        <section
            id="contact"
            className="
                relative
                overflow-hidden
                bg-transparent
                pb-3
                pt-0

                sm:pb-4

                md:pb-4

                lg:pb-5
            "
        >
            {/* =========================================================
                AMBIENT GLOWS
            ========================================================= */}
            <div className="pointer-events-none absolute left-[-180px] top-[15%] h-[420px] w-[420px] rounded-full bg-blue-500/[0.035] blur-[150px]" />

            <div className="pointer-events-none absolute bottom-[-140px] right-[-160px] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.03] blur-[170px]" />

            {/* =========================================================
                CONTENT
            ========================================================= */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-3 min-[390px]:px-4 sm:px-5 md:px-6">
                {/* =====================================================
                    HEADER
                ===================================================== */}
                <div
                    className="
                        mx-auto
                        mb-7
                        mt-4
                        max-w-2xl
                        text-center

                        sm:mt-5

                        md:mb-8
                        md:mt-6
                    "
                >
                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                        Contact
                    </h2>

                    <p className="mx-auto mt-2 max-w-xl text-[11px] leading-5 text-slate-500 sm:text-xs sm:leading-6 lg:mt-3 lg:text-sm">
                        Have a project, opportunity or idea in mind? Let&apos;s
                        connect and build something meaningful.
                    </p>
                </div>

                {/* =====================================================
                    CONTACT CARD
                ===================================================== */}
                <div className="grid grid-cols-1 overflow-hidden rounded-[24px] border border-cyan-400/20 bg-[#07111b]/55 shadow-[0_0_0_1px_rgba(34,211,238,0.03),0_0_40px_rgba(34,211,238,0.05)] backdrop-blur-xl lg:grid-cols-[0.8fr_1.2fr]">
                    {/* =================================================
                        LEFT SIDE
                    ================================================= */}
                    <div className="relative overflow-hidden border-b border-cyan-400/10 p-5 sm:p-6 lg:border-b-0 lg:border-r lg:p-8">
                        {/* Decorative glow */}
                        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-500/[0.05] blur-[100px]" />

                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/[0.05] text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-6 w-6"
                                >
                                    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
                                    <path d="M8 9h8" />
                                    <path d="M8 13h5" />
                                </svg>
                            </div>

                            <h3 className="mt-5 text-xl font-semibold text-white sm:text-2xl">
                                Let&apos;s Connect
                            </h3>

                            <p className="mt-3 max-w-md text-[10px] leading-5 text-slate-400 sm:text-xs sm:leading-6">
                                I&apos;m open to internship, junior and
                                collaborative opportunities in software, data,
                                cloud and analytics.
                            </p>

                            {/* =========================================
                                CONTACT DETAILS
                            ========================================= */}
                            <div className="mt-7 space-y-3">
                                {/* Email */}
                                <a
                                    href="mailto:karloctave0@gmail.com"
                                    className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition-all duration-200 hover:border-cyan-400/20 hover:bg-cyan-400/[0.03]"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-400/15 bg-cyan-400/[0.04] text-cyan-400">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            className="h-5 w-5"
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
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-[9px] uppercase tracking-[0.16em] text-slate-500">
                                            Email
                                        </p>

                                        <p className="mt-1 truncate text-[11px] font-medium text-slate-200 transition-colors group-hover:text-cyan-300 sm:text-xs">
                                            karloctave0@gmail.com
                                        </p>
                                    </div>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://linkedin.com/in/karloctave"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition-all duration-200 hover:border-blue-400/20 hover:bg-blue-400/[0.03]"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-400/15 bg-blue-400/[0.04] text-blue-400">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path d="M6.5 8.25H3V21h3.5V8.25ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.7c0-3.84-2.05-5.63-4.79-5.63-2.2 0-3.19 1.21-3.74 2.07V8.25H9V21h3.47v-6.31c0-1.66.32-3.27 2.38-3.27 2.03 0 2.05 1.9 2.05 3.38V21H21v-7.3Z" />
                                        </svg>
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-[9px] uppercase tracking-[0.16em] text-slate-500">
                                            LinkedIn
                                        </p>

                                        <p className="mt-1 text-[11px] font-medium text-slate-200 transition-colors group-hover:text-blue-300 sm:text-xs">
                                            linkedin.com/in/karloctave
                                        </p>
                                    </div>
                                </a>

                                {/* Location */}
                                <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-emerald-400/15 bg-emerald-400/[0.04] text-emerald-400">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5"
                                        >
                                            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />

                                            <circle
                                                cx="12"
                                                cy="10"
                                                r="2.5"
                                            />
                                        </svg>
                                    </div>

                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.16em] text-slate-500">
                                            Location
                                        </p>

                                        <p className="mt-1 text-[11px] font-medium text-slate-200 sm:text-xs">
                                            Santiago, Chile
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="mt-6 flex items-center gap-3 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.025] p-4">
                                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                                <p className="text-[10px] text-emerald-300/90 sm:text-xs">
                                    Open to opportunities
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* =================================================
                        RIGHT SIDE - FORM
                    ================================================= */}
                    <div className="relative p-5 sm:p-6 lg:p-8">
                        <div className="pointer-events-none absolute -right-24 bottom-[-80px] h-72 w-72 rounded-full bg-cyan-400/[0.035] blur-[110px]" />

                        <div className="relative z-10">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                                Send a message
                            </p>

                            <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
                                Tell me about your idea
                            </h3>

                            <p className="mt-2 text-[10px] leading-5 text-slate-500 sm:text-xs sm:leading-6">
                                The contact form interface is ready. Message
                                delivery will be connected during the backend
                                phase.
                            </p>

                            {/* =========================================
                                FORM
                            ========================================= */}
                            <form className="mt-6 space-y-4">
                                {/* Name / Email */}
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-[9px] font-medium uppercase tracking-[0.14em] text-slate-500"
                                        >
                                            Name
                                        </label>

                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Your name"
                                            className="w-full rounded-lg border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-[11px] text-white outline-none transition-all duration-200 placeholder:text-slate-600 focus:border-cyan-400/35 focus:bg-cyan-400/[0.025] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.04)] sm:text-xs"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-[9px] font-medium uppercase tracking-[0.14em] text-slate-500"
                                        >
                                            Email
                                        </label>

                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="your@email.com"
                                            className="w-full rounded-lg border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-[11px] text-white outline-none transition-all duration-200 placeholder:text-slate-600 focus:border-cyan-400/35 focus:bg-cyan-400/[0.025] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.04)] sm:text-xs"
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="mb-2 block text-[9px] font-medium uppercase tracking-[0.14em] text-slate-500"
                                    >
                                        Subject
                                    </label>

                                    <input
                                        id="subject"
                                        type="text"
                                        placeholder="Project, opportunity, collaboration..."
                                        className="w-full rounded-lg border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-[11px] text-white outline-none transition-all duration-200 placeholder:text-slate-600 focus:border-cyan-400/35 focus:bg-cyan-400/[0.025] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.04)] sm:text-xs"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-[9px] font-medium uppercase tracking-[0.14em] text-slate-500"
                                    >
                                        Message
                                    </label>

                                    <textarea
                                        id="message"
                                        rows={6}
                                        placeholder="Tell me a little about what you have in mind..."
                                        className="w-full resize-none rounded-lg border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-[11px] leading-5 text-white outline-none transition-all duration-200 placeholder:text-slate-600 focus:border-cyan-400/35 focus:bg-cyan-400/[0.025] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.04)] sm:text-xs sm:leading-6"
                                    />
                                </div>

                                {/* Submit */}
                                <div className="flex justify-start sm:justify-end">
                                    <button
                                        type="button"
                                        className="group inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-[10px] font-semibold text-white shadow-[0_0_25px_rgba(37,99,235,0.16)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.18)] sm:px-6 sm:text-xs"
                                    >
                                        Send Message

                                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}