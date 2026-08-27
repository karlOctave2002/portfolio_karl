import ProjectCard from "@/components/projects/ProjectCard";

const featuredProjects = [
    {
        title: "SmartGreen — Real-Time GCP Data Pipeline",
        description:
            "Real-time IoT data pipeline built on GCP using Pub/Sub, Dataflow and Apache Beam, storing processed data in BigQuery for analytics and visualization.",
        status: "Academic",
        technologies: [
            "Python",
            "GCP",
            "Pub/Sub",
            "Dataflow",
            "BigQuery",
            "Looker Studio",
        ],
        accent: "green" as const,
        icon: "leaf" as const,
    },

    {
        title: "StarCraft II — Machine Learning & Clustering",
        description:
            "Machine learning and clustering analysis using classification models, dimensionality reduction and unsupervised learning techniques.",
        status: "Academic",
        technologies: [
            "Python",
            "Pandas",
            "Scikit-learn",
            "K-Means",
            "DBSCAN",
            "PCA",
        ],
        accent: "violet" as const,
        icon: "brain" as const,
    },

    {
        title: "ETL Data Pipeline — Python / Pandas / SQL",
        description:
            "End-to-end ETL workflow for extracting, transforming and loading data from CSV and SQL sources with profiling, validation and automated data quality checks.",
        status: "Academic",
        technologies: [
            "Python",
            "Pandas",
            "SQL",
            "ETL",
            "Data Quality",
            "Profiling",
        ],
        accent: "cyan" as const,
        icon: "database" as const,
    },

    {
        title: "Power BI — Commercial Analytics Dashboard",
        description:
            "Interactive business intelligence dashboard focused on commercial KPIs, sales analysis and clear data visualization for decision-making.",
        status: "Academic",
        technologies: [
            "Power BI",
            "Excel",
            "KPIs",
            "Analytics",
            "Data Visualization",
        ],
        accent: "blue" as const,
        icon: "chart" as const,
    },
];

export default function FeaturedProjects() {
    return (
        <section
            id="projects"
            className="
                relative
                -mt-12
                overflow-hidden
                bg-transparent
                pb-24

                sm:-mt-14

                md:-mt-16

                lg:-mt-16
                lg:pb-28
            "
        >
            {/* =========================================================
                AMBIENT SECTION GLOWS
            ========================================================= */}
            <div className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/[0.025] blur-[150px]" />

            <div className="pointer-events-none absolute bottom-[-200px] right-[-180px] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.025] blur-[160px]" />

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    w-full
                    max-w-[1500px]
                    px-3

                    min-[390px]:px-4

                    sm:px-5

                    md:px-6

                    xl:px-8
                "
            >
                {/* =====================================================
                    HEADER
                ===================================================== */}
                <div
                    className="
                        mx-auto
                        mb-6
                        max-w-2xl
                        text-center

                        md:mb-8
                    "
                >
                    <h2
                        className="
                            text-2xl
                            font-bold
                            tracking-tight
                            text-white

                            sm:text-3xl

                            lg:text-4xl
                        "
                    >
                        Featured Projects
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-2
                            max-w-xl
                            text-[11px]
                            leading-5
                            text-slate-500

                            sm:text-xs
                            sm:leading-6

                            lg:mt-3
                            lg:text-sm
                        "
                    >
                        A selection of projects showcasing data engineering,
                        machine learning, business intelligence and data-driven
                        development.
                    </p>
                </div>

                {/* =====================================================
                    PROJECT GRID
                ===================================================== */}
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-5

                        md:grid-cols-2
                        md:gap-6

                        xl:grid-cols-4
                        xl:gap-5

                        2xl:gap-6
                    "
                >
                    {featuredProjects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            status={project.status}
                            technologies={project.technologies}
                            accent={project.accent}
                            icon={project.icon}
                        />
                    ))}
                </div>

                {/* =====================================================
                    VIEW ALL
                ===================================================== */}
                <div className="mt-8 flex justify-center md:mt-10">
                    <button
                        type="button"
                        className="
                            group
                            inline-flex
                            items-center
                            gap-3
                            rounded-lg
                            border
                            border-cyan-400/20
                            bg-[#07111b]/55
                            px-5
                            py-3
                            text-xs
                            font-medium
                            text-slate-200
                            shadow-[0_0_20px_rgba(34,211,238,0.04)]
                            backdrop-blur-xl
                            transition-all
                            duration-200

                            hover:border-cyan-400/45
                            hover:bg-cyan-400/[0.05]
                            hover:text-white

                            sm:px-6
                            sm:text-sm
                        "
                    >
                        View All Projects

                        <span className="text-cyan-400 transition-transform duration-200 group-hover:translate-x-1">
                            →
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}