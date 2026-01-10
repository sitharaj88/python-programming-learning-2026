import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Code2, Clock } from 'lucide-react';
import { phases } from '../data/courseData';
import { useTheme } from '../context/ThemeContext';

export default function Phase() {
    const { phaseId } = useParams();
    const { theme } = useTheme();
    const phase = phases.find((p) => p.id === parseInt(phaseId));

    if (!phase) {
        return (
            <div className="text-center py-16">
                <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    Phase not found
                </h1>
                <Link to="/" className="mt-4 inline-block text-emerald-500 hover:underline">
                    Go back home
                </Link>
            </div>
        );
    }

    const prevPhase = phases.find((p) => p.id === phase.id - 1);
    const nextPhase = phases.find((p) => p.id === phase.id + 1);

    return (
        <div className="space-y-6 sm:space-y-8">
            {/* Breadcrumb */}
            <nav className={`flex items-center gap-2 text-xs sm:text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                }`}>
                <Link to="/" className="hover:text-emerald-500">Home</Link>
                <span>/</span>
                <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>Phase {phase.id}</span>
            </nav>

            {/* Header */}
            <header className={`rounded-xl sm:rounded-2xl border p-5 sm:p-8 transition-colors ${theme === 'dark'
                    ? 'border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-800/50'
                    : 'border-slate-200 bg-white shadow-sm'
                }`}>
                <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-xl sm:text-2xl font-bold text-white shadow-lg shadow-emerald-500/25">
                        {phase.id}
                    </div>
                    <div>
                        <p className="text-xs sm:text-sm font-medium text-emerald-500">Phase {phase.id} of 12</p>
                        <h1 className={`text-xl sm:text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                            }`}>{phase.title}</h1>
                    </div>
                </div>
                <p className={`mt-3 sm:mt-4 text-sm sm:text-lg ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                    }`}>{phase.description}</p>
                <div className={`mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        <BookOpen size={14} className="text-emerald-500" />
                        <span>{phase.posts.length} posts</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        <Code2 size={14} className="text-emerald-500" />
                        <span>{phase.posts.length * 3}+ examples</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        <Clock size={14} className="text-emerald-500" />
                        <span>~{phase.posts.length * 15} min read</span>
                    </div>
                </div>
            </header>

            {/* Posts List */}
            <section>
                <h2 className={`mb-3 sm:mb-4 text-lg sm:text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>Posts in this Phase</h2>
                <div className="space-y-2 sm:space-y-3">
                    {phase.posts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/post/${post.id}`}
                            className={`group flex items-center gap-3 sm:gap-4 rounded-lg sm:rounded-xl border p-3 sm:p-4 transition ${theme === 'dark'
                                    ? 'border-slate-700/50 bg-slate-800/50 hover:border-emerald-500/50 hover:bg-slate-800'
                                    : 'border-slate-200 bg-white hover:border-emerald-500/50 hover:shadow-sm'
                                }`}
                        >
                            <div className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl text-sm sm:text-lg font-bold transition ${theme === 'dark'
                                    ? 'bg-slate-700/50 text-slate-300 group-hover:bg-emerald-500/20 group-hover:text-emerald-400'
                                    : 'bg-slate-100 text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-600'
                                }`}>
                                {String(post.id).padStart(2, '0')}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className={`font-medium text-sm sm:text-base truncate transition ${theme === 'dark'
                                        ? 'text-white group-hover:text-emerald-400'
                                        : 'text-slate-900 group-hover:text-emerald-600'
                                    }`}>
                                    {post.title}
                                </h3>
                                <p className={`text-xs sm:text-sm truncate ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                                    }`}>{post.description}</p>
                            </div>
                            <ArrowRight
                                size={16}
                                className={`flex-shrink-0 transition group-hover:translate-x-1 ${theme === 'dark'
                                        ? 'text-slate-500 group-hover:text-emerald-400'
                                        : 'text-slate-400 group-hover:text-emerald-600'
                                    }`}
                            />
                        </Link>
                    ))}
                </div>
            </section>

            {/* Navigation */}
            <nav className={`flex items-center justify-between border-t pt-4 sm:pt-6 ${theme === 'dark' ? 'border-slate-700/50' : 'border-slate-200'
                }`}>
                {prevPhase ? (
                    <Link
                        to={`/phase/${prevPhase.id}`}
                        className={`group flex items-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium transition ${theme === 'dark'
                                ? 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                            }`}
                    >
                        <ArrowLeft size={14} className="transition group-hover:-translate-x-1" />
                        <span className="hidden sm:inline">Phase {prevPhase.id}: </span>{prevPhase.title}
                    </Link>
                ) : (
                    <div />
                )}
                {nextPhase && (
                    <Link
                        to={`/phase/${nextPhase.id}`}
                        className={`group flex items-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium transition ${theme === 'dark'
                                ? 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                            }`}
                    >
                        <span className="hidden sm:inline">Phase {nextPhase.id}: </span>{nextPhase.title}
                        <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                    </Link>
                )}
            </nav>
        </div>
    );
}
