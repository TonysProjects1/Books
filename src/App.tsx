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
  Calendar
} from "lucide-react";
import { BookSummary } from "./types";
import { preCuratedBooks } from "./preCuratedData";

export default function App() {
  // Read saved books from localStorage if present
  const [books, setBooks] = useState<BookSummary[]>(() => {
    try {
      const saved = localStorage.getItem("grand-archive-books");
      if (saved) {
        const parsed = JSON.parse(saved) as BookSummary[];
        // Filter out any duplicates of pre-curated books to prevent collisions
        const cleanSaved = parsed.filter(
          (b) => b.id !== "huckleberry-finn" && b.id !== "the-odyssey"
        );
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
      const aiBooks = books.filter((b) => b.id !== "huckleberry-finn" && b.id !== "the-odyssey");
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
    if (id === "huckleberry-finn" || id === "the-odyssey") return;
    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2C241E] font-sans selection:bg-[#EAE1D4] selection:text-[#5C1D24] transition-colors duration-300">
      
      {/* Editorial Top Border Accent */}
      <div className="h-1.5 w-full bg-[#8E2835]" />

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        
        {/* Minimal Editorial Header */}
        <header className="text-center pb-8 border-b border-[#ECE1D4] mb-12">
          <div className="flex justify-between items-center text-xs font-mono tracking-widest opacity-60 uppercase mb-4">
            <span>THE BOOKSHELF</span>
            <span>EDITION I · JUN 2026</span>
          </div>

          <h1 className="font-serif italic font-bold text-4xl md:text-5xl tracking-wide text-[#1A130E] uppercase mb-1">
            The Grand Archive
          </h1>
          <p className="font-serif text-sm italic opacity-75 max-w-xl mx-auto leading-relaxed">
            A minimalist record summarizing the most iconic literature of all time, accompanied by analytical reviews of their central themes and epic moments.
          </p>
        </header>

        {/* LIST OF BOOKS DIRECTORY (INDEX NAVIGATION) */}
        <nav className="bg-[#FFFDFB] border border-[#ECE1D4] rounded p-6 md:p-8 mb-12 space-y-4 shadow-sm">
          <h2 className="font-serif italic font-semibold text-lg text-[#1A130E] border-b border-[#FAF6F0] pb-2 mb-3">
            Table of Canonical Monographs
          </h2>
          
          <ul className="space-y-2 text-sm leading-relaxed">
            {books.map((book, index) => (
              <li key={book.id} className="flex justify-between items-baseline group">
                <button
                  onClick={() => scrollToSection(book.id)}
                  className="text-left font-serif text-base text-[#8E2835] hover:underline hover:text-[#5C1D24] font-medium flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="font-mono text-xs opacity-50">0{index + 1}.</span>
                  <span>{book.title}</span>
                  <span className="text-xs font-sans text-neutral-500 font-normal">by {book.author}</span>
                </button>
                <div className="flex-grow border-b border-dotted border-[#E5DAC9] mx-3" />
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs opacity-60 bg-[#FAF6F0] px-2 py-0.5 rounded">
                    {book.era}
                  </span>
                  {book.id !== "huckleberry-finn" && book.id !== "the-odyssey" && (
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
        </nav>

        {/* MINIMAL SEARCH COMPILER */}
        <section className="bg-[#FFFDFB] border border-[#ECE1D4] rounded p-6 md:p-8 mb-16 space-y-4 shadow-sm">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4.5 h-4.5 text-[#8E2835]" />
            <h3 className="font-serif italic font-semibold text-lg text-[#1A130E]">
              Analyze Another Masterpiece
            </h3>
          </div>
          
          <p className="text-xs leading-relaxed text-neutral-600">
            Submit any canonical book or classical epic. Our artificial scholar will immediately analyze, summarize, and append the critical record to this page.
          </p>

          <form onSubmit={handleInquiry} className="flex flex-col sm:flex-row gap-3 pt-1">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 w-4 h-4 opacity-40 text-[#2C241E]" />
              <input
                type="text"
                value={searchQuery}
                disabled={isLoading}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g., Moby Dick, Hamlet, Pride and Prejudice..."
                className="w-full text-sm pl-9 pr-4 py-2.5 rounded border border-[#ECE1D4] focus:outline-none focus:ring-1 focus:ring-[#8E2835] bg-[#FAF6F0] font-serif placeholder:font-sans text-[#2C241E]"
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading || !searchQuery.trim()}
              className={`px-5 py-2.5 rounded text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                isLoading || !searchQuery.trim()
                  ? "bg-neutral-200 text-neutral-500 cursor-not-allowed"
                  : "bg-[#8E2835] text-white hover:bg-[#72202A]"
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
            <div className="p-3 bg-[#FAF6F0] rounded text-center border border-[#ECE1D4] animate-pulse">
              <p className="text-xs font-mono font-semibold text-[#8E2835]">
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
              className="scroll-mt-12 bg-white border border-[#ECE1D4] rounded p-8 md:p-12 space-y-8 shadow-sm relative group"
            >
              {/* Back to Top contextual links & anchor tracker */}
              <div className="absolute top-6 right-6 flex items-center gap-2 text-xs font-mono opacity-50 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="flex items-center gap-0.5 hover:text-[#8E2835] hover:underline cursor-pointer"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Index</span>
                </button>
              </div>

              {/* Book Header */}
              <header className="space-y-3 pb-6 border-b border-[#FAF6F0]">
                <div className="flex items-center gap-1 border-b border-[#FAF6F0] pb-2">
                  <span className="font-mono text-xs opacity-60 uppercase">Monograph Vol. 0{index + 1}</span>
                  <span className="text-[#ECE1D4]">|</span>
                  <span className="font-mono text-xs opacity-60 uppercase">{book.era} Classic</span>
                </div>
                
                <h3 className="font-serif italic font-bold text-3xl md:text-4xl text-[#1A130E] tracking-tight">
                  {book.title}
                </h3>
                
                <p className="text-sm md:text-base font-serif text-[#8E2835] font-medium italic">
                  by {book.author}
                </p>
              </header>

              {/* SECTION I: SUMMARY OF THE ENTIRE BOOK */}
              <section className="space-y-4">
                <h4 className="font-serif font-bold text-lg text-[#1A130E] tracking-tight border-l-3 border-[#8E2835] pl-3">
                  Summary of the Entire Book
                </h4>
                
                <blockquote className="bg-[#FAF6F0] p-4 rounded text-sm font-serif italic text-neutral-700 leading-relaxed relative">
                  &ldquo;{book.oneSentenceSummary}&rdquo;
                </blockquote>

                <p className="text-sm md:text-base leading-relaxed text-neutral-800 font-serif">
                  {book.introduction}
                </p>
              </section>

              {/* SECTION II: THE AI REVIEW / ACADEMIC CRITIQUE */}
              <section className="space-y-6 pt-4 border-t border-[#FAF6F0]">
                <div className="flex items-center gap-2 text-[#8E2835] border-b border-[#FAF6F0] pb-2">
                  <Sparkles className="w-4 h-4 shrink-0 text-[#8E2835]" />
                  <h4 className="font-serif italic font-bold text-lg text-[#1A130E] tracking-tight">
                    AI Review & Academic Critique
                  </h4>
                </div>

                {/* 1. Core Philosophical Themes */}
                <div className="space-y-4">
                  <h5 className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                    1. Philosophical Core & Themes
                  </h5>
                  
                  <div className="space-y-4 divide-y divide-[#FAF6F0]">
                    {book.themes?.map((theme) => (
                      <div key={theme.name} className="pt-3 first:pt-0 space-y-1.5">
                        <h6 className="font-serif text-[#8E2835] font-bold text-sm">
                          {theme.name}
                        </h6>
                        <p className="text-xs md:text-sm text-neutral-700 leading-relaxed">
                          {theme.description}
                        </p>
                        {theme.quote && (
                          <p className="text-[11px] font-serif italic text-neutral-500 pl-3 border-l border-neutral-300">
                            &ldquo;{theme.quote}&rdquo;
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Most Epic Climax Moments */}
                <div className="space-y-4 pt-4 border-t border-[#FAF6F0]">
                  <h5 className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                    2. Monumental Climax Climbs
                  </h5>

                  <div className="space-y-4">
                    {book.epicMoments?.map((moment, ind) => (
                      <div key={moment.title} className="bg-[#FAF6F0]/60 p-4 border border-[#ECE1D4]/40 rounded space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-mono text-[#8E2835]">
                          <span className="font-bold">MOMENT 0{ind + 1}</span>
                          <span>{moment.act}</span>
                        </div>
                        <h6 className="font-serif text-sm font-bold text-[#1A130E]">
                          {moment.title}
                        </h6>
                        <p className="text-xs md:text-sm text-neutral-700 leading-relaxed">
                          {moment.description}
                        </p>
                        <p className="text-xs text-neutral-500 italic pt-1 border-t border-[#ECE1D4]/30">
                          <strong>Thematic Impact:</strong> {moment.impact}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Key Archetypal Characters */}
                {book.characterProfiles && book.characterProfiles.length > 0 && (
                  <div className="space-y-4 pt-4 border-t border-[#FAF6F0]">
                    <h5 className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                      3. Key Character Archetypes
                    </h5>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {book.characterProfiles.map((char) => (
                        <div key={char.name} className="p-4 border border-[#FAF6F0] rounded space-y-1">
                          <h6 className="font-serif font-bold text-sm text-[#1A130E]">{char.name}</h6>
                          <div className="text-[10px] font-mono text-[#8E2835] uppercase tracking-wider">
                            {char.role} · {char.archetype}
                          </div>
                          <p className="text-[11px] leading-relaxed text-neutral-600 pt-1">
                            {char.analysis}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Verifiable Textual Citations */}
                {book.quotes && book.quotes.length > 0 && (
                  <div className="space-y-4 pt-4 border-t border-[#FAF6F0]">
                    <h5 className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                      4. Vital Textual Proving Ground
                    </h5>

                    <div className="space-y-3">
                      {book.quotes.map((quote) => (
                        <div key={quote.text} className="border-l-2 border-[#8E2835] pl-4 space-y-1">
                          <p className="font-serif text-xs md:text-sm italic text-neutral-800 leading-relaxed">
                            &ldquo;{quote.text}&rdquo;
                          </p>
                          <cite className="block text-[10px] font-mono text-neutral-500 not-italic">
                            &mdash; {quote.speaker}
                          </cite>
                          <p className="text-[10px] text-neutral-600 leading-relaxed">
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
        <footer className="mt-20 pt-8 border-t border-[#ECE1D4] text-center space-y-2">
          <p className="font-serif italic text-sm text-neutral-500">
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
          className="fixed bottom-6 right-6 p-2.5 rounded-full bg-[#8E2835] text-white hover:bg-[#72202A] transition-all shadow-md z-50 cursor-pointer flex items-center justify-center border border-[#FAF6F0]/20"
          title="Return to Directory"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
}
