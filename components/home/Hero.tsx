import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="home"
            className="
                relative
                z-0
                overflow-x-clip
                overflow-y-visible
                bg-transparent
            "
        >
            {/* =========================================================
                AMBIENT GLOWS
            ========================================================= */}
            <div className="pointer-events-none absolute left-[-220px] top-[120px] h-[520px] w-[520px] rounded-full bg-blue-600/10 blur-[160px]" />

            <div className="pointer-events-none absolute right-[-180px] top-[40px] h-[620px] w-[620px] rounded-full bg-cyan-500/[0.06] blur-[180px]" />

            {/* =========================================================
                MOBILE PORTRAIT
            ========================================================= */}
            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-[52px]
                    right-[-175px]
                    z-[2]
                    w-[430px]
                    max-w-none

                    min-[360px]:right-[-158px]

                    min-[390px]:right-[-145px]

                    min-[430px]:right-[-110px]

                    min-[480px]:right-[-72px]

                    sm:right-[-35px]
                    sm:w-[460px]

                    md:hidden
                "
                style={{
                    aspectRatio: "620 / 650",
                }}
            >
                <Image
                    src="/images/octave_karl_hero.png"
                    alt="Portrait of Octave Karl"
                    fill
                    priority
                    sizes="(max-width: 767px) 430px, 100vw"
                    className="object-contain object-bottom"
                />
            </div>

            {/* =========================================================
                MOBILE READABILITY
            ========================================================= */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    left-0
                    z-[3]
                    w-[55%]
                    bg-gradient-to-r
                    from-[#05070a]
                    via-[#05070a]/78
                    to-transparent

                    min-[430px]:w-[58%]

                    sm:w-[61%]

                    md:hidden
                "
            />

            {/* =========================================================
                HERO CONTENT
            ========================================================= */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    grid
                    min-h-[500px]
                    w-full
                    max-w-7xl
                    grid-cols-1
                    items-center
                    gap-6
                    px-3
                    pt-14

                    min-[390px]:px-4

                    sm:min-h-[590px]
                    sm:px-5
                    sm:pt-16

                    md:min-h-[560px]
                    md:grid-cols-[0.8fr_1.2fr]
                    md:px-6
                    md:pt-20

                    lg:min-h-[660px]
                    lg:pt-24
                "
            >
                {/* =====================================================
                    LEFT CONTENT
                ===================================================== */}
                <div
                    className="
                        relative
                        z-20
                        flex
                        max-w-[200px]
                        flex-col
                        justify-center
                        pb-10

                        min-[360px]:max-w-[210px]

                        min-[390px]:max-w-[220px]

                        min-[430px]:max-w-[240px]

                        sm:max-w-[300px]

                        md:max-w-xl

                        lg:pb-20
                    "
                >
                    <p
                        className="
                            mb-3
                            text-xs
                            font-semibold
                            tracking-[0.28em]
                            text-blue-500

                            min-[390px]:mb-4
                            min-[390px]:text-sm
                        "
                    >
                        HELLO, I&apos;M
                    </p>

                    <h1
                        className="
                            text-[46px]
                            font-bold
                            leading-[0.9]
                            tracking-tight
                            text-white

                            min-[360px]:text-[48px]

                            min-[390px]:text-[50px]

                            min-[430px]:text-[54px]

                            sm:text-6xl

                            lg:text-7xl

                            xl:text-[82px]
                        "
                    >
                        OCTAVE

                        <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            KARL
                        </span>
                    </h1>

                    <p
                        className="
                            mt-5
                            whitespace-nowrap
                            text-[11px]
                            tracking-[0.16em]
                            text-slate-200

                            min-[360px]:text-[12px]

                            min-[390px]:text-[13px]

                            min-[430px]:text-[14px]

                            lg:mt-6
                            lg:text-xl
                            lg:tracking-[0.2em]
                        "
                    >
                        SOFTWARE ENGINEER
                    </p>

                    <p
                        className="
                            mt-3
                            whitespace-nowrap
                            text-[10px]
                            font-medium
                            text-cyan-400

                            min-[360px]:text-[11px]

                            min-[390px]:text-[12px]

                            min-[430px]:text-sm

                            lg:mt-4
                            lg:text-base
                        "
                    >
                        Data · Cloud · AI · Full Stack
                    </p>

                    {/* Mobile description */}
                    <p
                        className="
                            mt-5
                            max-w-[180px]
                            text-[9px]
                            leading-5
                            text-slate-400

                            min-[360px]:max-w-[190px]
                            min-[360px]:text-[10px]

                            min-[390px]:max-w-[200px]

                            min-[430px]:max-w-[220px]
                            min-[430px]:text-[11px]

                            md:hidden
                        "
                    >
                        I build scalable data and cloud solutions with real-world
                        impact.
                    </p>

                    {/* Tablet / desktop description */}
                    <p
                        className="
                            mt-6
                            hidden
                            max-w-lg
                            text-xs
                            leading-6
                            text-slate-400

                            md:block

                            lg:mt-7
                            lg:text-base
                            lg:leading-8
                        "
                    >
                        I build scalable data solutions and modern web applications
                        that transform ideas into real-world impact.
                    </p>

                    {/* =================================================
                        ACTIONS
                    ================================================= */}
                    <div
                        className="
                            mt-5
                            flex
                            flex-nowrap
                            items-center
                            gap-2

                            min-[390px]:gap-3

                            lg:mt-8
                            lg:gap-4
                        "
                    >
                        <a
                            href="#projects"
                            className="
                                inline-flex
                                min-w-[108px]
                                items-center
                                justify-center
                                gap-2
                                whitespace-nowrap
                                rounded-lg
                                bg-gradient-to-r
                                from-blue-600
                                to-cyan-500
                                px-3
                                py-3
                                text-[9px]
                                font-semibold
                                text-white
                                shadow-[0_0_25px_rgba(37,99,235,0.20)]
                                transition
                                duration-200

                                hover:scale-[1.03]

                                min-[360px]:text-[10px]

                                min-[390px]:min-w-[116px]
                                min-[390px]:text-[11px]

                                min-[430px]:text-xs

                                lg:min-w-0
                                lg:px-6
                                lg:text-sm
                            "
                        >
                            View My Work
                            <span>→</span>
                        </a>

                        <a
                            href="#contact"
                            className="
                                inline-flex
                                min-w-[82px]
                                items-center
                                justify-center
                                whitespace-nowrap
                                rounded-lg
                                border
                                border-white/15
                                bg-white/[0.025]
                                px-3
                                py-3
                                text-[9px]
                                font-medium
                                text-white
                                transition
                                duration-200

                                hover:border-cyan-400/40
                                hover:bg-cyan-400/[0.05]

                                min-[360px]:text-[10px]

                                min-[390px]:min-w-[94px]
                                min-[390px]:text-[11px]

                                min-[430px]:text-xs

                                lg:min-w-0
                                lg:px-6
                                lg:text-sm
                            "
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* =====================================================
                    TABLET / DESKTOP PORTRAIT
                ===================================================== */}
                <div
                    className="
                        relative
                        hidden
                        min-h-[500px]
                        min-w-0

                        md:block

                        lg:min-h-[620px]
                    "
                >
                    {/* Decorative circle */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            left-1/2
                            top-[46%]
                            z-10
                            aspect-square
                            w-[90%]
                            max-w-[570px]
                            -translate-x-1/2
                            -translate-y-1/2
                            rounded-full
                            border
                            border-cyan-400/10
                            bg-[radial-gradient(circle_at_center,rgba(0,119,255,0.07),transparent_70%)]

                            lg:w-[94%]
                            lg:max-w-[620px]

                            xl:w-[96%]
                            xl:max-w-[660px]
                        "
                    />

                    {/* =================================================
                        PORTRAIT

                        Tablet:
                        posición original.

                        PC:
                        más ancho + ligeramente más abajo.
                    ================================================= */}
                    <div
                        className="
                            absolute
                            bottom-[28px]
                            left-1/2
                            z-20
                            w-[104%]
                            max-w-[660px]
                            -translate-x-1/2

                            lg:bottom-[42px]
                            lg:w-[110%]
                            lg:max-w-[720px]
                            lg:translate-y-[18px]

                            xl:w-[116%]
                            xl:max-w-[780px]
                            xl:translate-y-[22px]

                            2xl:w-[120%]
                            2xl:max-w-[820px]
                            2xl:translate-y-[26px]
                        "
                        style={{
                            aspectRatio: "620 / 650",
                        }}
                    >
                        <Image
                            src="/images/octave_karl_hero.png"
                            alt="Portrait of Octave Karl"
                            fill
                            priority
                            sizes="(min-width: 1536px) 820px, (min-width: 1280px) 780px, (min-width: 1024px) 720px, (min-width: 768px) 60vw, 100vw"
                            className="object-contain object-bottom"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}