import React, { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Search,
  Sparkles,
  Trash2,
  ChevronDown,
  ChevronUp,
  Bookmark,
  Feather,
  Info,
  ArrowUp,
  Calendar,
  Sun,
  Moon
} from "lucide-react";
import { BookSummary } from "./types";
import { preCuratedBooks } from "./preCuratedData";

export default function App() {
  const curatedIds = [
    "huckleberry-finn",
    "the-odyssey",
    "all-quiet-on-the-western-front",
    "the-catcher-in-the-rye",
    "fahrenheit-451",
    "to-kill-a-mockingbird",
    "zero-to-one",
    "thinking-fast-and-slow",
    "the-great-gatsby",
    "war-and-peace",
    "1984",
    "spqr",
    "the-republic",
    "frankenstein",
    "meditations",
    "wealth-of-nations",
    "general-theory",
    "art-of-war",
    "human-action",
    "next-100-years",
    "1776"
  ];

  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem("grand-archive-theme") === "dark";
    } catch {
      return false;
    }
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("grand-archive-theme", next ? "dark" : "light");
      } catch (e) {
        console.error("Failed to save theme:", e);
      }
      return next;
    });
  };

  // Read saved books from localStorage if present
  const [books, setBooks] = useState<BookSummary[]>(() => {
    try {
      const saved = localStorage.getItem("grand-archive-books");
      if (saved) {
        const parsed = JSON.parse(saved) as BookSummary[];
        // Filter out any duplicates of pre-curated books to prevent collisions
        const cleanSaved = parsed.filter((b) => !curatedIds.includes(b.id));
        return [...preCuratedBooks, ...cleanSaved];
      }
    } catch (e) {
      console.error("Failed to restore saved books:", e);
    }
    return preCuratedBooks;
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Local storage preservation
  useEffect(() => {
    try {
      const aiBooks = books.filter((b) => !curatedIds.includes(b.id));
      localStorage.setItem("grand-archive-books", JSON.stringify(aiBooks));
    } catch (e) {
      console.error("Failed to save books:", e);
    }
  }, [books]);

  // Handle showing scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // AI loading status text rotational steps
  useEffect(() => {
    if (!isLoading) return;
    const steps = [
      "Consulting the literary canon...",
      "Analyzing historical and stylistic context...",
      "Sifting out iconic epic moments...",
      "Unveiling primary themes & philosophy...",
      "Generating authoritative critical review..."
    ];
    let index = 0;
    setLoadingStep(steps[0]);
    const interval = setInterval(() => {
      index = (index + 1) % steps.length;
      setLoadingStep(steps[index]);
    }, 2500);
    return () => clearInterval(interval);
  }, [isLoading]);

  // Handle new book search
  const handleInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/library/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: searchQuery }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || errorData.details || "Inquiry failed.");
      }

      const newBook: BookSummary = await response.json();
      const bookId = newBook.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      
      const hydratedBook: BookSummary = {
        ...newBook,
        id: bookId,
        isPreCurated: false,
      };

      setBooks((prev) => {
        const filtered = prev.filter((b) => b.id !== bookId);
        return [...filtered, hydratedBook];
      });

      setSearchQuery("");

      // Smooth scroll to the newly compiled book section
      setTimeout(() => {
        const element = document.getElementById(bookId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);

    } catch (error: any) {
      console.error("AI Scholar Error:", error);
      setErrorMessage(
        error.message || "Failed to summon academic data. Please check your network or credentials specified in Settings > Secrets."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Delete searched book
  const deleteBook = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (curatedIds.includes(id)) return;
    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Group books dynamically by genre
  const groupedByGenre = books.reduce<Record<string, BookSummary[]>>((acc, book) => {
    const genreName = book.genre || "Classical Narrative / Literary Fiction";
    if (!acc[genreName]) {
      acc[genreName] = [];
    }
    acc[genreName].push(book);
    return acc;
  }, {});

  // Dynamic theme mapping based on isDarkMode state
  const theme = {
    bg: isDarkMode
      ? "bg-[#0B0F19] text-[#E2E8F0] selection:bg-[#3B82F6]/30 selection:text-[#F8FAFC]"
      : "bg-[#F8FAFC] text-[#1E293B] selection:bg-[#DBEAFE] selection:text-[#1E40AF]",
    accentBg: isDarkMode ? "bg-[#3B82F6]" : "bg-[#2563EB]",
    borderAccent: isDarkMode ? "border-[#3B82F6]" : "border-[#2563EB]",
    textAccent: isDarkMode ? "text-[#60A5FA]" : "text-[#2563EB]",
    textAccentHover: isDarkMode ? "hover:text-[#93C5FD]" : "hover:text-[#1D4ED8]",
    textAccentClassic: isDarkMode ? "text-[#60A5FA] md:text-base font-serif font-medium italic" : "text-sm md:text-base font-serif text-[#2563EB] font-medium italic",
    cardBg: isDarkMode
      ? "bg-[#111827] border-[#1F2937] shadow-lg shadow-[#020617]/50"
      : "bg-white border-[#E2E8F0] shadow-sm",
    articleBg: isDarkMode 
      ? "bg-[#111827] border-[#1F2937] shadow-lg shadow-[#020617]/50" 
      : "bg-white border-[#E2E8F0] shadow-sm",
    inputBg: isDarkMode
      ? "bg-[#0B0F19] border-[#374151] text-[#F8FAFC] focus:ring-[#3B82F6]"
      : "bg-white border-[#CBD5E1] text-[#0F172A] focus:ring-[#2563EB]",
    headingColor: isDarkMode ? "text-[#F8FAFC]" : "text-[#0F172A]",
    textColorPrimary: isDarkMode ? "text-[#F8FAFC]" : "text-[#0F172A]",
    textColorSecondary: isDarkMode ? "text-[#CBD5E1]" : "text-[#334155]",
    textSub: isDarkMode ? "text-[#94A3B8]" : "text-[#475569]",
    textMuted: isDarkMode ? "text-[#64748B]" : "text-[#94A3B8]",
    blockquoteBg: isDarkMode ? "bg-[#1E293B]/50 text-[#CBD5E1]" : "bg-[#F1F5F9] text-[#334155]",
    climaxCardBg: isDarkMode
      ? "bg-[#1E293B]/30 border-[#334155]"
      : "bg-[#F8FAFC] border-[#E2E8F0]",
    charCardBorder: isDarkMode ? "border-[#334155]" : "border-[#E2E8F0]",
    borderDotted: isDarkMode ? "border-[#334155]" : "border-[#CBD5E1]",
    badgeGenreBg: isDarkMode
      ? "bg-[#1E293B] text-[#60A5FA] border border-[#334155]"
      : "bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]",
    borderLight: isDarkMode ? "border-[#1F2937]" : "border-[#F1F5F9]",
    borderMedium: isDarkMode ? "border-[#374151]" : "border-[#E2E8F0]",
    returnBtn: isDarkMode
      ? "bg-[#3B82F6] text-white hover:bg-[#2563EB]"
      : "bg-[#2563EB] text-white hover:bg-[#1D4ED8]"
  };

  return (
    <div className={`min-h-screen ${theme.bg} font-sans transition-colors duration-300`}>
      
      {/* Editorial Top Border Accent */}
      <div className={`h-1.5 w-full ${theme.accentBg}`} />

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        
        {/* Minimal Editorial Header */}
        <header className={`text-center pb-8 border-b ${theme.borderMedium} mb-12`}>
          <div className="flex justify-between items-center text-xs font-mono tracking-widest opacity-60 uppercase mb-4">
            <span>THE BOOKSHELF</span>
            <div className="flex items-center gap-4">
              <span>EDITION I · JUN 2026</span>
              <button
                onClick={toggleDarkMode}
                className={`p-1.5 rounded-full transition-colors flex items-center justify-center cursor-pointer ${
                  isDarkMode ? "hover:bg-slate-800 text-blue-400" : "hover:bg-slate-100 text-blue-600"
                }`}
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <h1 className={`font-serif italic font-bold text-4xl md:text-5xl tracking-wide ${theme.headingColor} uppercase mb-1`}>
            The Grand Archive
          </h1>
          <p className="font-serif text-sm italic opacity-75 max-w-xl mx-auto leading-relaxed">
            A minimalist record summarizing the most iconic literature of all time, accompanied by analytical reviews of their central themes and epic moments.
          </p>
        </header>

        {/* LIST OF BOOKS DIRECTORY (INDEX NAVIGATION GROUPED BY GENRE) */}
        <nav className={`${theme.cardBg} rounded p-6 md:p-8 mb-12 space-y-6`}>
          <div className={`border-b ${theme.borderLight} pb-2 mb-2`}>
            <h2 className={`font-serif italic font-semibold text-lg ${theme.headingColor}`}>
              Table of Canonical Monographs
            </h2>
            <p className={`text-[10px] font-mono tracking-widest ${theme.textAccent} uppercase`}>
              Classified Hierarchically by Literary Genre
            </p>
          </div>
          
          <div className="space-y-6">
            {(Object.entries(groupedByGenre) as Array<[string, BookSummary[]]>).map(([genre, genreBooks]) => (
              <div key={genre} className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className={`h-1.5 w-1.5 rounded-full ${theme.accentBg}`} />
                  <h3 className={`text-[11px] font-mono font-bold tracking-widest uppercase rounded px-2 py-0.5 ${theme.badgeGenreBg}`}>
                    {genre}
                  </h3>
                </div>
                
                <ul className="space-y-2 text-sm leading-relaxed pl-1">
                  {genreBooks.map((book) => (
                    <li key={book.id} className="flex justify-between items-baseline group">
                      <button
                        onClick={() => scrollToSection(book.id)}
                        className={`text-left font-serif text-base font-medium flex items-center gap-2 cursor-pointer ${theme.textColorPrimary} ${theme.textAccentHover} transition-colors`}
                      >
                        <BookOpen className="w-3.5 h-3.5 opacity-60" />
                        <span>{book.title}</span>
                        <span className={`text-xs font-sans font-normal ${theme.textMuted}`}>by {book.author}</span>
                        {book.tag && (
                          <span className="text-[9px] font-mono tracking-wider font-bold bg-amber-500/15 dark:bg-amber-400/20 text-amber-800 dark:text-amber-300 border border-amber-500/25 px-1.5 py-0.5 rounded uppercase">
                            {book.tag}
                          </span>
                        )}
                      </button>
                      <div className={`flex-grow border-b border-dotted ${theme.borderDotted} mx-3`} />
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-xs opacity-60 px-2 py-0.5 rounded ${theme.blockquoteBg}`}>
                          {book.era}
                        </span>
                        {!curatedIds.includes(book.id) && (
                          <button
                            onClick={(e) => deleteBook(book.id, e)}
                            className="text-xs text-red-700 hover:text-red-900 font-mono opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5 hover:underline"
                            title="Delete summary"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
         {/* MINIMAL SEARCH COMPILER */}
        <section className={`${theme.cardBg} rounded p-6 md:p-8 mb-16 space-y-4`}>
          <div className="flex items-center gap-2">
            <Sparkles className={`w-4.5 h-4.5 ${theme.textAccent}`} />
            <h3 className={`font-serif italic font-semibold text-lg ${theme.headingColor}`}>
              Analyze Another Masterpiece
            </h3>
          </div>
          
          <p className={`text-xs leading-relaxed ${theme.textSub}`}>
            Submit any canonical book or classical epic. Our artificial scholar will immediately analyze, summarize, and append the critical record to this page.
          </p>

          <form onSubmit={handleInquiry} className="flex flex-col sm:flex-row gap-3 pt-1">
            <div className="relative flex-grow">
              <Search className={`absolute left-3 top-3 w-4 h-4 opacity-40 ${theme.textColorPrimary}`} />
              <input
                type="text"
                value={searchQuery}
                disabled={isLoading}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g., Moby Dick, Hamlet, Pride and Prejudice..."
                className={`w-full text-sm pl-9 pr-4 py-2.5 rounded border focus:outline-none focus:ring-1 font-serif placeholder:font-sans focus:ring-opacity-50 transition-colors ${theme.inputBg}`}
              />
            </div>
            
            <button
               type="submit"
               disabled={isLoading || !searchQuery.trim()}
               className={`px-5 py-2.5 rounded text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                 isLoading || !searchQuery.trim()
                   ? (isDarkMode ? "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/50" : "bg-slate-100 text-slate-400 cursor-not-allowed border border-neutral-200")
                   : (isDarkMode ? "bg-blue-600 text-white hover:bg-blue-500" : "bg-blue-600 text-white hover:bg-blue-700")
               }`}
            >
              {isLoading ? (
                <>
                  <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                  <span>Loading Folio...</span>
                </>
              ) : (
                <>
                  <Feather className="w-4 h-4" />
                  <span>Summon Scholar</span>
                </>
              )}
            </button>
          </form>

          {/* Loading States */}
          {isLoading && (
            <div className={`p-3 rounded text-center border animate-pulse ${theme.blockquoteBg} ${theme.borderMedium}`}>
              <p className={`text-xs font-mono font-semibold ${theme.textAccent}`}>
                {loadingStep}
              </p>
              <p className="text-[10px] opacity-60 mt-0.5">Sifting standard academic consensus through the digital ether</p>
            </div>
          )}

          {/* Error Message banner with helpful info */}
          {errorMessage && (
            <div className="p-4 bg-red-100/50 border border-red-200 rounded text-xs text-red-800 space-y-1.5 leading-relaxed">
              <div className="flex items-center gap-1.5 font-bold">
                <Info className="w-4 h-4 shrink-0 text-red-700" />
                <span>Scholar Interrupted</span>
              </div>
              <p>{errorMessage}</p>
              <p className="text-[10px] opacity-80 underline">
                Configure your valid GEMINI_API_KEY in the Settings &gt; Secrets panel to run dynamic AI queries.
              </p>
            </div>
          )}
        </section>

        {/* THE SINGLE PAGE BLOG - SERIALIZED BOOK RECORDS */}
        <main className="space-y-20">
          {books.map((book, index) => (
            <article
              key={book.id}
              id={book.id}
              className={`scroll-mt-12 ${theme.articleBg} rounded p-8 md:p-12 space-y-8 relative group transition-colors duration-300`}
            >
              {/* Back to Top contextual links & anchor tracker */}
              <div className="absolute top-6 right-6 flex items-center gap-2 text-xs font-mono opacity-50 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className={`flex items-center gap-0.5 ${theme.textAccentHover} hover:underline cursor-pointer transition-colors`}
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Index</span>
                </button>
              </div>

              {/* Book Header */}
              <header className={`space-y-3 pb-6 border-b ${theme.borderLight}`}>
                <div className={`flex items-center gap-1.5 border-b ${theme.borderLight} pb-2`}>
                  <span className="font-mono text-xs opacity-60 uppercase">Monograph Vol. 0{index + 1}</span>
                  <span className={`${theme.textMuted}`}>|</span>
                  <span className="font-mono text-xs opacity-60 uppercase">{book.era} Classic</span>
                  {book.tag && (
                    <>
                      <span className={`${theme.textMuted}`}>|</span>
                      <span className="text-[10px] font-mono tracking-wider font-bold bg-amber-500/15 dark:bg-amber-400/20 text-amber-800 dark:text-amber-300 border border-amber-500/25 px-1.5 py-0.5 rounded uppercase">
                        {book.tag}
                      </span>
                    </>
                  )}
                </div>
                
                <h3 className={`font-serif italic font-bold text-3xl md:text-4xl ${theme.headingColor} tracking-tight`}>
                  {book.title}
                </h3>
                
                <p className={`text-sm md:text-base font-serif ${theme.textAccent} font-medium italic`}>
                  by {book.author}
                </p>
              </header>

              {/* SECTION I: SUMMARY OF THE ENTIRE BOOK */}
              <section className="space-y-4">
                <h4 className={`font-serif font-bold text-lg ${theme.headingColor} tracking-tight border-l-3 ${theme.borderAccent} pl-3`}>
                  Summary of the Entire Book
                </h4>
                
                <blockquote className={`${theme.blockquoteBg} p-4 rounded text-sm font-serif italic leading-relaxed relative`}>
                  &ldquo;{book.oneSentenceSummary}&rdquo;
                </blockquote>

                <p className={`text-sm md:text-base leading-relaxed ${theme.textColorSecondary} font-serif`}>
                  {book.introduction}
                </p>
              </section>

              {/* SECTION II: THE AI REVIEW / ACADEMIC CRITIQUE */}
              <section className={`space-y-6 pt-4 border-t ${theme.borderLight}`}>
                <div className={`flex items-center gap-2 ${theme.textAccent} border-b ${theme.borderLight} pb-2`}>
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <h4 className={`font-serif italic font-bold text-lg ${theme.headingColor} tracking-tight`}>
                    AI Review & Academic Critique
                  </h4>
                </div>

                {/* 1. Core Philosophical Themes */}
                <div className="space-y-4">
                  <h5 className={`font-mono text-xs uppercase tracking-wider ${theme.textMuted} font-semibold`}>
                    1. Philosophical Core & Themes
                  </h5>
                  
                  <div className={`space-y-4 divide-y ${theme.borderLight}`}>
                    {book.themes?.map((themeItem) => (
                      <div key={themeItem.name} className="pt-3 first:pt-0 space-y-1.5">
                        <h6 className={`font-serif ${theme.textAccent} font-bold text-sm`}>
                          {themeItem.name}
                        </h6>
                        <p className={`text-xs md:text-sm ${theme.textSub} leading-relaxed`}>
                          {themeItem.description}
                        </p>
                        {themeItem.quote && (
                          <p className={`text-[11px] font-serif italic ${theme.textMuted} pl-3 border-l ${theme.borderMedium}`}>
                            &ldquo;{themeItem.quote}&rdquo;
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Most Epic Climax Moments */}
                <div className={`space-y-4 pt-4 border-t ${theme.borderLight}`}>
                  <h5 className={`font-mono text-xs uppercase tracking-wider ${theme.textMuted} font-semibold`}>
                    2. Monumental Climax Climbs
                  </h5>

                  <div className="space-y-4">
                    {book.epicMoments?.map((moment, ind) => (
                      <div key={moment.title} className={`${theme.climaxCardBg} border p-4 rounded space-y-1.5 transition-colors`}>
                        <div className={`flex items-center justify-between text-xs font-mono ${theme.textAccent}`}>
                          <span className="font-bold">MOMENT 0{ind + 1}</span>
                          <span>{moment.act}</span>
                        </div>
                        <h6 className={`font-serif text-sm font-bold ${theme.headingColor}`}>
                          {moment.title}
                        </h6>
                        <p className={`text-xs md:text-sm ${theme.textSub} leading-relaxed`}>
                          {moment.description}
                        </p>
                        <p className={`text-xs ${theme.textMuted} italic pt-1 border-t ${theme.borderLight}`}>
                          <strong>Thematic Impact:</strong> {moment.impact}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Key Archetypal Characters */}
                {book.characterProfiles && book.characterProfiles.length > 0 && (
                  <div className={`space-y-4 pt-4 border-t ${theme.borderLight}`}>
                    <h5 className={`font-mono text-xs uppercase tracking-wider ${theme.textMuted} font-semibold`}>
                      3. Key Character Archetypes
                    </h5>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {book.characterProfiles.map((char) => (
                        <div key={char.name} className={`p-4 border ${theme.charCardBorder} rounded space-y-1 transition-colors bg-opacity-20`}>
                          <h6 className={`font-serif font-bold text-sm ${theme.headingColor}`}>{char.name}</h6>
                          <div className={`text-[10px] font-mono ${theme.textAccent} uppercase tracking-wider`}>
                            {char.role} · {char.archetype}
                          </div>
                          <p className={`text-[11px] leading-relaxed ${theme.textSub} pt-1`}>
                            {char.analysis}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Verifiable Textual Citations */}
                {book.quotes && book.quotes.length > 0 && (
                  <div className={`space-y-4 pt-4 border-t ${theme.borderLight}`}>
                    <h5 className={`font-mono text-xs uppercase tracking-wider ${theme.textMuted} font-semibold`}>
                      4. Vital Textual Proving Ground
                    </h5>

                    <div className="space-y-3">
                      {book.quotes.map((quote) => (
                        <div key={quote.text} className={`border-l-2 ${theme.borderAccent} pl-4 space-y-1`}>
                          <p className={`font-serif text-xs md:text-sm italic ${theme.textColorSecondary} leading-relaxed`}>
                            &ldquo;{quote.text}&rdquo;
                          </p>
                          <cite className={`block text-[10px] font-mono ${theme.textMuted} not-italic`}>
                            &mdash; {quote.speaker}
                          </cite>
                          <p className={`text-[10px] ${theme.textSub} leading-relaxed`}>
                            <strong>Note:</strong> {quote.significance}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </section>

            </article>
          ))}
        </main>

        {/* Footer */}
        <footer className={`mt-20 pt-8 border-t ${theme.borderMedium} text-center space-y-2`}>
          <p className={`font-serif italic text-sm ${theme.textMuted}`}>
            &ldquo;There is no friend as loyal as a book.&rdquo; &mdash; Ernest Hemingway
          </p>
          <p className="font-mono text-[10px] opacity-50 uppercase tracking-widest">
            THE GRAND ARCHIVE · COMPILED VIA GEMINI CO-INTELLIGENCE · JUNE 2026
          </p>
        </footer>

      </div>

      {/* FLOATING ACTION: SCREEN SCROLL BACK TO INDEX */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-6 right-6 p-2.5 rounded-full ${theme.returnBtn} transition-all shadow-md z-50 cursor-pointer flex items-center justify-center border border-white/10`}
          title="Return to Directory"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
}
