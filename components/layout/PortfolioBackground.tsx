import Image from "next/image";

export default function PortfolioBackground() {
    return (
        <div
            aria-hidden="true"
            className="
                pointer-events-none
                fixed
                inset-0
                z-0
                overflow-hidden
            "
        >
            {/* =========================================================
                BASE COLOR
            ========================================================= */}
            <div className="absolute inset-0 bg-[#05070a]" />

            {/* =========================================================
                GLOBAL TECH IMAGE
            ========================================================= */}
            <div
                className="absolute inset-0"
                style={{
                    WebkitMaskImage:
                        "radial-gradient(ellipse 115% 100% at 65% 44%, black 18%, rgba(0,0,0,0.88) 43%, rgba(0,0,0,0.58) 68%, rgba(0,0,0,0.22) 86%, transparent 100%)",
                    maskImage:
                        "radial-gradient(ellipse 115% 100% at 65% 44%, black 18%, rgba(0,0,0,0.88) 43%, rgba(0,0,0,0.58) 68%, rgba(0,0,0,0.22) 86%, transparent 100%)",
                }}
            >
                <Image
                    src="/images/hero-tech-bg.jpg"
                    alt=""
                    fill
                    sizes="100vw"
                    quality={72}
                    className="
                        object-cover
                        object-[62%_center]
                        opacity-[0.15]

                        md:object-center
                        md:opacity-[0.11]
                    "
                />
            </div>

            {/* =========================================================
                DARK INTEGRATION
            ========================================================= */}
            <div
                className="
                    absolute
                    inset-0
                    bg-[#05070a]/64

                    md:bg-[#05070a]/68
                "
            />

            {/* =========================================================
                LEFT FADE
            ========================================================= */}
            <div
                className="
                    absolute
                    inset-y-0
                    left-0
                    w-[42%]
                    bg-gradient-to-r
                    from-[#05070a]
                    via-[#05070a]/82
                    to-transparent

                    md:w-[28%]
                    md:via-[#05070a]/76
                "
            />

            {/* =========================================================
                RIGHT FADE
            ========================================================= */}
            <div
                className="
                    absolute
                    inset-y-0
                    right-0
                    w-[14%]
                    bg-gradient-to-l
                    from-[#05070a]
                    via-[#05070a]/60
                    to-transparent

                    md:w-[10%]
                "
            />

            {/* =========================================================
                TOP FADE
            ========================================================= */}
            <div
                className="
                    absolute
                    inset-x-0
                    top-0
                    h-28
                    bg-gradient-to-b
                    from-[#05070a]
                    via-[#05070a]/70
                    to-transparent
                "
            />

            {/* =========================================================
                BOTTOM FADE
            ========================================================= */}
            <div
                className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-40
                    bg-gradient-to-t
                    from-[#05070a]
                    via-[#05070a]/75
                    to-transparent
                "
            />

            {/* =========================================================
                AMBIENT BLUE GLOW
            ========================================================= */}
            <div
                className="
                    absolute
                    left-[8%]
                    top-[12%]
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-blue-600/[0.045]
                    blur-[150px]
                "
            />

            {/* =========================================================
                AMBIENT CYAN GLOW
            ========================================================= */}
            <div
                className="
                    absolute
                    right-[-120px]
                    top-[38%]
                    h-[520px]
                    w-[520px]
                    rounded-full
                    bg-cyan-400/[0.035]
                    blur-[170px]
                "
            />

            {/* =========================================================
                LOWER BLUE GLOW
            ========================================================= */}
            <div
                className="
                    absolute
                    bottom-[-180px]
                    left-[25%]
                    h-[500px]
                    w-[700px]
                    rounded-full
                    bg-blue-500/[0.025]
                    blur-[190px]
                "
            />
        </div>
    );
}