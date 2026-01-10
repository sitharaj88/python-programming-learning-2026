import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, BookOpen, Github, ChevronRight, Sun, Moon } from 'lucide-react';
import { phases, author } from '../data/courseData';
import { useTheme } from '../context/ThemeContext';

export default function Layout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark'
                ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
                : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'
            }`}>
            {/* Header */}
            <header className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${theme === 'dark'
                    ? 'border-slate-700/50 bg-slate-900/80'
                    : 'border-slate-200 bg-white/80'
                }`}>
                <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 sm:gap-4">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className={`rounded-lg p-2 transition lg:hidden ${theme === 'dark'
                                    ? 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                }`}
                        >
                            {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                        <Link to="/" className="flex items-center gap-2 sm:gap-3">
                            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25">
                                <BookOpen size={18} className="sm:hidden" />
                                <BookOpen size={20} className="hidden sm:block" />
                            </div>
                            <div className="hidden xs:block">
                                <h1 className={`text-base sm:text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                                    }`}>Python Learning</h1>
                                <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                                    2026 Edition
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`rounded-lg p-2 transition ${theme === 'dark'
                                    ? 'text-slate-400 hover:bg-slate-800 hover:text-yellow-400'
                                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                }`}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <a
                            href="https://github.com/sitharaj88/python-programming-learning-2026"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${theme === 'dark'
                                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                                }`}
                        >
                            <Github size={18} />
                            <span className="hidden sm:inline">GitHub</span>
                        </a>
                    </div>
                </div>
            </header>

            <div className="mx-auto flex max-w-7xl">
                {/* Sidebar */}
                <aside
                    className={`fixed inset-y-0 left-0 z-40 w-64 sm:w-72 transform border-r backdrop-blur-xl transition-all duration-300 ease-in-out lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        } ${theme === 'dark'
                            ? 'border-slate-700/50 bg-slate-900/95'
                            : 'border-slate-200 bg-white/95'
                        }`}
                    style={{ top: '56px', height: 'calc(100vh - 56px)' }}
                >
                    <nav className="h-full overflow-y-auto p-3 sm:p-4">
                        <div className="space-y-3 sm:space-y-4">
                            {phases.map((phase) => (
                                <div key={phase.id} className={`rounded-xl p-2.5 sm:p-3 ${theme === 'dark' ? 'bg-slate-800/50' : 'bg-slate-100'
                                    }`}>
                                    <Link
                                        to={`/phase/${phase.id}`}
                                        onClick={() => setSidebarOpen(false)}
                                        className={`group flex items-center justify-between text-xs sm:text-sm font-semibold transition ${theme === 'dark'
                                                ? 'text-slate-200 hover:text-emerald-400'
                                                : 'text-slate-700 hover:text-emerald-600'
                                            }`}
                                    >
                                        <span className="flex items-center gap-2">
                                            <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-xs font-bold text-emerald-400">
                                                {phase.id}
                                            </span>
                                            <span className="truncate">{phase.title}</span>
                                        </span>
                                        <ChevronRight size={14} className={`flex-shrink-0 transition group-hover:translate-x-1 ${theme === 'dark' ? 'text-slate-500 group-hover:text-emerald-400' : 'text-slate-400 group-hover:text-emerald-600'
                                            }`} />
                                    </Link>
                                    <p className={`mt-1 text-xs truncate ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'
                                        }`}>{phase.posts.length} posts</p>
                                </div>
                            ))}
                        </div>
                    </nav>
                </aside>

                {/* Overlay */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
                        style={{ top: '56px' }}
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Main Content */}
                <main className="flex-1 min-w-0 px-3 py-4 sm:px-6 sm:py-8 lg:px-8">
                    <Outlet />
                </main>
            </div>

            {/* Footer */}
            <footer className={`border-t transition-colors duration-300 ${theme === 'dark'
                    ? 'border-slate-700/50 bg-slate-900/50'
                    : 'border-slate-200 bg-slate-50'
                }`}>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8 text-center sm:px-6 lg:px-8">
                    <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        {author.series} • By <span className="text-emerald-500">{author.name}</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}
