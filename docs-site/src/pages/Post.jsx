import { useParams, Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Editor from '@monaco-editor/react';
import { ArrowLeft, ArrowRight, BookOpen, Code2, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { phases } from '../data/courseData';
import { postsContent } from '../data/postsContent';
import { useTheme } from '../context/ThemeContext';

// Simple syntax highlighting for Python
function highlightPython(code, theme) {
    const keywords = ['def', 'class', 'if', 'elif', 'else', 'for', 'while', 'try', 'except', 'finally', 'with', 'as', 'import', 'from', 'return', 'yield', 'raise', 'pass', 'break', 'continue', 'and', 'or', 'not', 'in', 'is', 'None', 'True', 'False', 'lambda', 'global', 'nonlocal', 'assert', 'del'];
    const builtins = ['print', 'input', 'len', 'range', 'str', 'int', 'float', 'bool', 'list', 'dict', 'set', 'tuple', 'type', 'isinstance', 'open', 'file', 'abs', 'max', 'min', 'sum', 'round', 'sorted', 'enumerate', 'zip', 'map', 'filter'];

    const colors = theme === 'dark' ? {
        keyword: 'text-purple-400',
        builtin: 'text-yellow-400',
        string: 'text-green-400',
        comment: 'text-slate-500',
        number: 'text-orange-400',
        default: 'text-slate-300'
    } : {
        keyword: 'text-purple-600',
        builtin: 'text-yellow-600',
        string: 'text-green-600',
        comment: 'text-slate-500',
        number: 'text-orange-600',
        default: 'text-slate-700'
    };

    return code.split('\n').map((line, i) => {
        let highlighted = line;
        // Comments
        if (line.trim().startsWith('#')) {
            return <span key={i} className={colors.comment}>{line}</span>;
        }
        // Simple highlighting - just return as-is for now (complex highlighting would require a proper tokenizer)
        return <span key={i} className={colors.default}>{line}</span>;
    });
}

// Simple code block for markdown content (no Monaco - allows page scroll)
function SimpleCodeBlock({ code, language }) {
    const [copied, setCopied] = useState(false);
    const { theme } = useTheme();

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={`rounded-lg sm:rounded-xl border overflow-hidden my-3 sm:my-4 ${theme === 'dark' ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-200'
            }`}>
            <div className={`flex items-center justify-between px-3 sm:px-4 py-2 border-b ${theme === 'dark' ? 'border-slate-700 bg-slate-800' : 'border-slate-200 bg-slate-100'
                }`}>
                <span className="text-xs font-medium text-emerald-500">{language}</span>
                <button
                    onClick={handleCopy}
                    className={`flex items-center gap-1 text-xs px-2 py-1 rounded transition ${theme === 'dark'
                            ? 'text-slate-400 hover:text-white hover:bg-slate-700'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                        }`}
                >
                    {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
            <pre className={`overflow-x-auto p-3 sm:p-4 text-xs sm:text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}>
                <code>{code}</code>
            </pre>
        </div>
    );
}

// Monaco Editor for Python example files (with scroll fix)
function CodeEditor({ code, language = 'python', height = '300px' }) {
    const [copied, setCopied] = useState(false);
    const { theme } = useTheme();
    const containerRef = useRef(null);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Prevent Monaco from capturing page scroll
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const preventScroll = (e) => {
            const editor = container.querySelector('.monaco-editor');
            if (editor) {
                const scrollable = editor.querySelector('.monaco-scrollable-element');
                if (scrollable) {
                    const { scrollTop, scrollHeight, clientHeight } = scrollable;
                    const atTop = scrollTop === 0;
                    const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

                    if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
                        // Allow page scroll when at editor boundaries
                        return;
                    }
                }
            }
        };

        container.addEventListener('wheel', preventScroll, { passive: true });
        return () => container.removeEventListener('wheel', preventScroll);
    }, []);

    return (
        <div ref={containerRef} className={`rounded-lg sm:rounded-xl border overflow-hidden ${theme === 'dark' ? 'border-slate-700' : 'border-slate-300'
            }`}>
            <div className={`flex items-center justify-between px-3 sm:px-4 py-2 border-b ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-300'
                }`}>
                <span className="text-xs font-medium text-emerald-500">{language}</span>
                <button
                    onClick={handleCopy}
                    className={`flex items-center gap-1 text-xs px-2 py-1 rounded transition ${theme === 'dark'
                            ? 'text-slate-400 hover:text-white hover:bg-slate-700'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                        }`}
                >
                    {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
            <Editor
                height={height}
                language={language}
                value={code}
                theme={theme === 'dark' ? 'vs-dark' : 'light'}
                options={{
                    readOnly: true,
                    minimap: { enabled: false },
                    fontSize: 13,
                    lineNumbers: 'on',
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    padding: { top: 12, bottom: 12 },
                    folding: false,
                    wordWrap: 'on',
                    scrollbar: {
                        vertical: 'visible',
                        horizontal: 'visible',
                        alwaysConsumeMouseWheel: false
                    },
                    overviewRulerLanes: 0,
                    hideCursorInOverviewRuler: true,
                    overviewRulerBorder: false,
                    domReadOnly: true,
                }}
            />
        </div>
    );
}

function ExampleFile({ name, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();
    const lines = content.split('\n').length;
    const height = Math.min(Math.max(lines * 22 + 24, 200), 500);

    return (
        <div className={`rounded-lg sm:rounded-xl border overflow-hidden ${theme === 'dark' ? 'border-slate-700 bg-slate-800/50' : 'border-slate-200 bg-slate-50'
            }`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 text-left transition ${theme === 'dark' ? 'hover:bg-slate-700/50' : 'hover:bg-slate-100'
                    }`}
            >
                <div className="flex items-center gap-2 sm:gap-3">
                    <Code2 size={16} className="text-emerald-500" />
                    <span className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{name}</span>
                    <span className={`text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>{lines} lines</span>
                </div>
                {isOpen ? (
                    <ChevronUp size={16} className={theme === 'dark' ? 'text-slate-400' : 'text-slate-500'} />
                ) : (
                    <ChevronDown size={16} className={theme === 'dark' ? 'text-slate-400' : 'text-slate-500'} />
                )}
            </button>
            {isOpen && (
                <div className={`border-t ${theme === 'dark' ? 'border-slate-700' : 'border-slate-200'}`}>
                    <CodeEditor code={content} language="python" height={`${height}px`} />
                </div>
            )}
        </div>
    );
}

export default function Post() {
    const { postId } = useParams();
    const { theme } = useTheme();
    const postIdNum = parseInt(postId);

    let currentPost = null;
    let currentPhase = null;

    for (const phase of phases) {
        const post = phase.posts.find((p) => p.id === postIdNum);
        if (post) {
            currentPost = post;
            currentPhase = phase;
            break;
        }
    }

    if (!currentPost) {
        return (
            <div className="text-center py-16">
                <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Post not found</h1>
                <Link to="/" className="mt-4 inline-block text-emerald-500 hover:underline">Go back home</Link>
            </div>
        );
    }

    const content = postsContent[postIdNum];
    const hasContent = content && content.readme;

    const allPosts = phases.flatMap((p) => p.posts);
    const currentIndex = allPosts.findIndex((p) => p.id === postIdNum);
    const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
    const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

    return (
        <div className="space-y-5 sm:space-y-8">
            {/* Breadcrumb */}
            <nav className={`flex items-center gap-2 text-xs sm:text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                }`}>
                <Link to="/" className="hover:text-emerald-500">Home</Link>
                <span>/</span>
                <Link to={`/phase/${currentPhase.id}`} className="hover:text-emerald-500">Phase {currentPhase.id}</Link>
                <span>/</span>
                <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>Post {currentPost.id}</span>
            </nav>

            {/* Header */}
            <header className={`rounded-xl sm:rounded-2xl border p-4 sm:p-6 md:p-8 transition-colors ${theme === 'dark'
                    ? 'border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-800/50'
                    : 'border-slate-200 bg-white shadow-sm'
                }`}>
                <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-lg sm:text-xl font-bold text-white shadow-lg shadow-emerald-500/25">
                        {String(currentPost.id).padStart(2, '0')}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                            <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 sm:px-3 sm:py-1 text-xs font-medium text-emerald-500">
                                Phase {currentPhase.id}
                            </span>
                            <span className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                                Post {currentPost.id} of 120
                            </span>
                        </div>
                        <h1 className={`mt-2 text-xl sm:text-2xl md:text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                            }`}>{currentPost.title}</h1>
                    </div>
                </div>
            </header>

            {/* Tutorial Content */}
            {hasContent ? (
                <article className="prose prose-slate max-w-none">
                    <div className={`rounded-xl sm:rounded-2xl border p-4 sm:p-6 md:p-8 transition-colors ${theme === 'dark'
                            ? 'border-slate-700/50 bg-slate-800/30'
                            : 'border-slate-200 bg-white shadow-sm'
                        }`}>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                code({ node, inline, className, children, ...props }) {
                                    const code = String(children).replace(/\n$/, '');
                                    const language = className?.replace('language-', '') || 'text';
                                    
                                    // Determine if this is inline code:
                                    // - If inline prop is true
                                    // - If code has no newlines and no language class (single backticks)
                                    // - If parent is not a pre element
                                    const isInline = inline || (!className && !code.includes('\n'));
                                    
                                    if (isInline) {
                                        return (
                                            <code 
                                                className={`inline-code rounded px-1.5 py-0.5 text-xs sm:text-sm font-mono whitespace-nowrap ${
                                                    theme === 'dark' 
                                                        ? 'bg-slate-700 text-emerald-400' 
                                                        : 'bg-slate-200 text-emerald-600'
                                                }`} 
                                                {...props}
                                            >
                                                {children}
                                            </code>
                                        );
                                    }
                                    // Use simple code block for fenced code blocks
                                    return <SimpleCodeBlock code={code} language={language} />;
                                },
                                h1: ({ children }) => (
                                    <h1 className={`text-2xl sm:text-3xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 first:mt-0 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                                        }`}>{children}</h1>
                                ),
                                h2: ({ children }) => (
                                    <h2 className={`text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4 pb-2 border-b ${theme === 'dark' ? 'text-white border-slate-700' : 'text-slate-900 border-slate-200'
                                        }`}>{children}</h2>
                                ),
                                h3: ({ children }) => (
                                    <h3 className={`text-lg sm:text-xl font-semibold mt-5 sm:mt-6 mb-2 sm:mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                                        }`}>{children}</h3>
                                ),
                                p: ({ children }) => (
                                    <p className={`leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                                        }`}>{children}</p>
                                ),
                                ul: ({ children }) => (
                                    <ul className={`list-disc list-inside space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                                        }`}>{children}</ul>
                                ),
                                ol: ({ children }) => (
                                    <ol className={`list-decimal list-inside space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                                        }`}>{children}</ol>
                                ),
                                li: ({ children }) => (
                                    <li className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>{children}</li>
                                ),
                                blockquote: ({ children }) => (
                                    <blockquote className={`border-l-4 border-emerald-500 pl-3 sm:pl-4 italic my-3 sm:my-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                                        }`}>{children}</blockquote>
                                ),
                                table: ({ children }) => (
                                    <div className="overflow-x-auto my-3 sm:my-4">
                                        <table className={`min-w-full border rounded-lg overflow-hidden text-sm ${theme === 'dark' ? 'border-slate-700' : 'border-slate-200'
                                            }`}>{children}</table>
                                    </div>
                                ),
                                thead: ({ children }) => (
                                    <thead className={theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'}>{children}</thead>
                                ),
                                th: ({ children }) => (
                                    <th className={`px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-semibold border-b ${theme === 'dark' ? 'text-white border-slate-700' : 'text-slate-900 border-slate-200'
                                        }`}>{children}</th>
                                ),
                                td: ({ children }) => (
                                    <td className={`px-3 sm:px-4 py-2 text-xs sm:text-sm border-b ${theme === 'dark' ? 'text-slate-300 border-slate-700/50' : 'text-slate-700 border-slate-200'
                                        }`}>{children}</td>
                                ),
                                a: ({ href, children }) => (
                                    <a href={href} className="text-emerald-500 hover:text-emerald-400 underline">{children}</a>
                                ),
                                hr: () => <hr className={`my-6 sm:my-8 ${theme === 'dark' ? 'border-slate-700' : 'border-slate-200'}`} />,
                                strong: ({ children }) => (
                                    <strong className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{children}</strong>
                                ),
                                // Handle pre element to ensure proper rendering
                                pre: ({ children }) => <>{children}</>,
                            }}
                        >
                            {content.readme}
                        </ReactMarkdown>
                    </div>
                </article>
            ) : (
                <div className={`rounded-xl sm:rounded-2xl border p-8 text-center ${theme === 'dark' ? 'border-slate-700/50 bg-slate-800/30' : 'border-slate-200 bg-white'
                    }`}>
                    <BookOpen size={48} className={theme === 'dark' ? 'mx-auto text-slate-600' : 'mx-auto text-slate-400'} />
                    <h2 className={`mt-4 text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Content Coming Soon</h2>
                    <p className={`mt-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>This post is part of future phases and will be added soon.</p>
                </div>
            )}

            {/* Python Examples */}
            {content?.examples?.length > 0 && (
                <section className={`rounded-xl sm:rounded-2xl border p-4 sm:p-6 md:p-8 ${theme === 'dark' ? 'border-slate-700/50 bg-slate-800/30' : 'border-slate-200 bg-white shadow-sm'
                    }`}>
                    <h2 className={`flex items-center gap-2 text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                        }`}>
                        <Code2 size={18} className="text-emerald-500" />
                        Python Examples
                    </h2>
                    <p className={`mb-3 sm:mb-4 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        Click on each file to view the executable Python code:
                    </p>
                    <div className="space-y-2 sm:space-y-3">
                        {content.examples.map((ex) => (
                            <ExampleFile key={ex.name} name={ex.name} content={ex.content} />
                        ))}
                    </div>
                </section>
            )}

            {/* Navigation */}
            <nav className={`flex items-center justify-between border-t pt-4 sm:pt-6 ${theme === 'dark' ? 'border-slate-700/50' : 'border-slate-200'
                }`}>
                {prevPost ? (
                    <Link
                        to={`/post/${prevPost.id}`}
                        className={`group flex items-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium transition ${theme === 'dark'
                                ? 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                            }`}
                    >
                        <ArrowLeft size={14} className="transition group-hover:-translate-x-1" />
                        <span className="max-w-[120px] sm:max-w-[200px] truncate">
                            {String(prevPost.id).padStart(2, '0')}. {prevPost.title}
                        </span>
                    </Link>
                ) : (
                    <div />
                )}
                {nextPost && (
                    <Link
                        to={`/post/${nextPost.id}`}
                        className={`group flex items-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium transition ${theme === 'dark'
                                ? 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                            }`}
                    >
                        <span className="max-w-[120px] sm:max-w-[200px] truncate">
                            {String(nextPost.id).padStart(2, '0')}. {nextPost.title}
                        </span>
                        <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                    </Link>
                )}
            </nav>
        </div>
    );
}
