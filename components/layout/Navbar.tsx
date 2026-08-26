"use client";

import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="absolute left-0 top-0 z-50 w-full">
                <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
                    {/* Mobile hamburger */}
                    <button
                        type="button"
                        aria-label="Open navigation menu"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(true)}
                        className="flex flex-col gap-1.5 md:hidden"
                    >
                        <span className="h-0.5 w-6 bg-white" />
                        <span className="h-0.5 w-6 bg-white" />
                        <span className="h-0.5 w-6 bg-white" />
                    </button>

                    {/* Logo */}
                    <a
                        href="#home"
                        className="absolute left-1/2 -translate-x-1/2 text-xl font-bold tracking-widest text-white md:static md:translate-x-0"
                    >
                        OK<span className="text-blue-500">.</span>
                    </a>

                    {/* Desktop navigation */}
                    <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
                        <a
                            href="#about"
                            className="transition-colors duration-200 hover:text-white"
                        >
                            About
                        </a>

                        <a
                            href="#projects"
                            className="transition-colors duration-200 hover:text-white"
                        >
                            Projects
                        </a>

                        <a
                            href="#skills"
                            className="transition-colors duration-200 hover:text-white"
                        >
                            Skills
                        </a>

                        <a
                            href="#experience"
                            className="transition-colors duration-200 hover:text-white"
                        >
                            Experience
                        </a>

                        <a
                            href="#contact"
                            className="transition-colors duration-200 hover:text-white"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Desktop CV button */}
                    <a
                        href="/cv/cv.pdf"
                        className="hidden rounded-md border border-blue-500/60 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-500 md:block"
                    >
                        Download CV
                    </a>

                    {/* Spacer mobile */}
                    <div className="w-6 md:hidden" />
                </nav>
            </header>

            {/* Mobile overlay */}
            <div
                className={`fixed inset-0 z-50 transition duration-300 md:hidden ${isOpen
                    ? "pointer-events-auto bg-black/60"
                    : "pointer-events-none bg-transparent"
                    }`}
                onClick={() => setIsOpen(false)}
            >
                {/* Mobile side menu */}
                <aside
                    className={`absolute left-0 top-0 flex h-full w-[55%] max-w-xs flex-col bg-[#05070a] px-6 py-6 shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                    onClick={(event) => event.stopPropagation()}
                >
                    {/* Mobile menu header */}
                    <div className="relative mb-12 flex items-center justify-between">
                        {/* Close button */}
                        <button
                            type="button"
                            aria-label="Close navigation menu"
                            onClick={() => setIsOpen(false)}
                            className="flex h-7 w-7 items-center justify-center text-3xl leading-none text-slate-300 transition-colors duration-200 hover:text-white"
                        >
                            ×
                        </button>

                        {/* Mobile logo */}
                        <a
                            href="#home"
                            onClick={() => setIsOpen(false)}
                            className="absolute left-1/2 -translate-x-1/2 text-xl font-bold tracking-widest text-white"
                        >
                            OK<span className="text-blue-500">.</span>
                        </a>

                        <div className="w-7" />
                    </div>

                    {/* Mobile navigation */}
                    <nav className="flex flex-col gap-6 text-sm text-slate-300">
                        <a
                            href="#about"
                            onClick={() => setIsOpen(false)}
                            className="transition-colors duration-200 hover:text-white"
                        >
                            About
                        </a>

                        <a
                            href="#projects"
                            onClick={() => setIsOpen(false)}
                            className="transition-colors duration-200 hover:text-white"
                        >
                            Projects
                        </a>

                        <a
                            href="#skills"
                            onClick={() => setIsOpen(false)}
                            className="transition-colors duration-200 hover:text-white"
                        >
                            Skills
                        </a>

                        <a
                            href="#experience"
                            onClick={() => setIsOpen(false)}
                            className="transition-colors duration-200 hover:text-white"
                        >
                            Experience
                        </a>

                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="transition-colors duration-200 hover:text-white"
                        >
                            Contact
                        </a>
                    </nav>

                    {/* Mobile CV button */}
                    <a
                        href="/cv/cv.pdf"
                        className="mt-10 rounded-md border border-blue-500/60 px-4 py-3 text-center text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-500"
                    >
                        Download CV
                    </a>
                </aside>
            </div>
        </>
    );
}