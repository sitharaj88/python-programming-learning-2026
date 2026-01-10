import { Link } from 'react-router-dom';
import { BookOpen, Code2, Users, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';
import { phases, author } from '../data/courseData';
import { useTheme } from '../context/ThemeContext';

const stats = [
    { icon: BookOpen, label: 'Posts', value: '120' },
    { icon: Code2, label: 'Examples', value: '360+' },
    { icon: Users, label: 'Phases', value: '12' },
    { icon: Rocket, label: 'Projects', value: '12' },
];

const features = [
    "Comprehensive book-chapter-level tutorials",
    "Executable Python examples in every post",
    "Progressive difficulty from beginner to expert",
    "Real-world applications and projects",
    "PEP-8 compliant, professionally written code",
    "Career-focused content for 2026 and beyond",
];

export default function Home() {
    const { theme } = useTheme();

    return (
        <div className="space-y-8 sm:space-y-16">
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-600 via-cyan-600 to-blue-600 p-5 sm:p-8 md:p-12 text-white shadow-2xl">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-30" />
                <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-2 text-emerald-200">
                        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
                            2026 Edition
                        </span>
                        <span className="text-xs sm:text-sm">• 120 Complete Posts</span>
                    </div>
                    <h1 className="mt-4 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        Python Programming<br />
                        <span className="text-emerald-200">Learning Journey</span>
                    </h1>
                    <p className="mt-4 max-w-2xl text-sm sm:text-lg md:text-xl text-white/80">
                        A comprehensive, structured curriculum from absolute beginner to professional developer.
                        Not a blog. Not short posts. A <strong>permanent reference</strong>.
                    </p>
                    <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
                        <Link
                            to="/phase/1"
                            className="group flex items-center gap-2 rounded-xl bg-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-emerald-600 shadow-lg transition hover:bg-emerald-50 hover:shadow-xl"
                        >
                            Start Learning
                            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                        </Link>
                        <a
                            href="https://github.com/sitharaj88/python-programming-learning-2026"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
                {stats.map(({ icon: Icon, label, value }) => (
                    <div
                        key={label}
                        className={`rounded-xl sm:rounded-2xl border p-4 sm:p-6 text-center backdrop-blur transition-colors ${theme === 'dark'
                                ? 'border-slate-700/50 bg-slate-800/50'
                                : 'border-slate-200 bg-white shadow-sm'
                            }`}
                    >
                        <Icon className="mx-auto h-6 w-6 sm:h-8 sm:w-8 text-emerald-500" />
                        <p className={`mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                            }`}>{value}</p>
                        <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                            }`}>{label}</p>
                    </div>
                ))}
            </section>

            {/* Features */}
            <section className={`rounded-xl sm:rounded-2xl border p-5 sm:p-8 transition-colors ${theme === 'dark'
                    ? 'border-slate-700/50 bg-slate-800/30'
                    : 'border-slate-200 bg-white shadow-sm'
                }`}>
                <h2 className={`text-lg sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>What Makes This Different</h2>
                <div className="mt-4 sm:mt-6 grid gap-2 sm:gap-3 md:grid-cols-2">
                    {features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2 sm:gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-emerald-500" />
                            <span className={`text-sm sm:text-base ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                                }`}>{feature}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Phases Grid */}
            <section>
                <h2 className={`mb-4 sm:mb-6 text-lg sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>12-Phase Curriculum</h2>
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {phases.map((phase) => (
                        <Link
                            key={phase.id}
                            to={`/phase/${phase.id}`}
                            className={`group relative overflow-hidden rounded-xl sm:rounded-2xl border p-4 sm:p-6 transition ${theme === 'dark'
                                    ? 'border-slate-700/50 bg-slate-800/50 hover:border-emerald-500/50 hover:bg-slate-800'
                                    : 'border-slate-200 bg-white hover:border-emerald-500/50 hover:shadow-md'
                                }`}
                        >
                            <div className="absolute -right-4 -top-4 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 blur-2xl transition group-hover:from-emerald-500/20 group-hover:to-cyan-500/20" />
                            <div className="relative">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-sm sm:text-lg font-bold text-white shadow-lg shadow-emerald-500/25">
                                        {phase.id}
                                    </span>
                                    <div className="min-w-0">
                                        <h3 className={`font-semibold text-sm sm:text-base truncate ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                                            }`}>{phase.title}</h3>
                                        <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                                            }`}>Posts {(phase.id - 1) * 10 + 1}-{phase.id * 10}</p>
                                    </div>
                                </div>
                                <p className={`mt-2 sm:mt-3 text-xs sm:text-sm line-clamp-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                                    }`}>{phase.description}</p>
                                <div className="mt-3 sm:mt-4 flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-500 transition group-hover:gap-3">
                                    <span>View posts</span>
                                    <ArrowRight size={14} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className={`rounded-xl sm:rounded-2xl border p-5 sm:p-8 text-center ${theme === 'dark'
                    ? 'border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10'
                    : 'border-emerald-200 bg-gradient-to-r from-emerald-50 to-cyan-50'
                }`}>
                <h2 className={`text-lg sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>Ready to Master Python?</h2>
                <p className={`mt-2 text-sm sm:text-base ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                    Start with Phase 1 and work your way through all 120 comprehensive posts.
                </p>
                <Link
                    to="/phase/1"
                    className="mt-4 sm:mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:shadow-xl hover:shadow-emerald-500/30"
                >
                    Begin Your Journey
                    <ArrowRight size={16} />
                </Link>
            </section>

            {/* Author */}
            <section className={`text-center text-xs sm:text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'
                }`}>
                <p>
                    Created by <span className="text-emerald-500">{author.name}</span>
                </p>
                <p className="mt-1">{author.series}</p>
            </section>
        </div>
    );
}
