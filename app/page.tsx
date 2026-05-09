"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import Image from "next/image";

type Lang = "it" | "sl" | "en";

const content = {
  it: {
    tagline: "Noleggio auto premium",
    description:
      "Soluzioni di noleggio veicoli su misura per privati e aziende. Flessibilità, affidabilità e un servizio di eccellenza — sempre al vostro fianco.",
    comingSoon: "Sito in aggiornamento",
    comingSoonSub:
      "Stiamo preparando qualcosa di straordinario. La nuova versione del sito sarà presto disponibile.",
    phone: "Telefono",
    email: "Email",
    copyright:
      "© 2026 VA Rent by Manutecnica d.o.o. — Tutti i diritti riservati",
  },
  sl: {
    tagline: "Premium najem vozil",
    description:
      "Prilagojene rešitve najema vozil za posameznike in podjetja. Fleksibilnost, zanesljivost in odlična storitev — vedno ob vaši strani.",
    comingSoon: "Spletna stran v pripravi",
    comingSoonSub:
      "Pripravljamo nekaj izjemnega. Nova različica spletne strani bo kmalu na voljo.",
    phone: "Telefon",
    email: "E-pošta",
    copyright: "© 2026 VA Rent by Manutecnica d.o.o. — Vse pravice pridržane",
  },
  en: {
    tagline: "Premium vehicle rental",
    description:
      "Tailored vehicle rental solutions for individuals and businesses. Flexibility, reliability and outstanding service — always by your side.",
    comingSoon: "Website under construction",
    comingSoonSub:
      "We are preparing something extraordinary. The new version of the site will be available soon.",
    phone: "Phone",
    email: "Email",
    copyright:
      "© 2026 VA Rent by Manutecnica d.o.o. — All rights reserved",
  },
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: EASE, delay } as Transition,
});

export default function Home() {
  const [lang, setLang] = useState<Lang>("it");
  const [textVisible, setTextVisible] = useState(true);
  const [displayLang, setDisplayLang] = useState<Lang>("it");

  function switchLang(next: Lang) {
    if (next === lang) return;
    setTextVisible(false);
    setTimeout(() => {
      setLang(next);
      setDisplayLang(next);
      setTextVisible(true);
    }, 150);
  }

  const t = content[displayLang];

  return (
    <main
      className="relative w-screen h-screen bg-white overflow-hidden flex flex-col"
      style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
    >
      {/* ── Top accent strip ── */}
      <div
        className="absolute top-0 left-0 right-0 z-20"
        style={{
          height: "3px",
          background:
            "linear-gradient(90deg, #0D1F3C 0%, #1A4A8A 35%, #4A9FD4 65%, #F5C030 100%)",
        }}
      />

      {/* ── Decorative background lines ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.06 }}
        aria-hidden
      >
        <line x1="0" y1="28%" x2="100%" y2="23%" stroke="#4A9FD4" strokeWidth="1" />
        <line x1="0" y1="76%" x2="100%" y2="72%" stroke="#4A9FD4" strokeWidth="1" />
        <line x1="12%" y1="0" x2="8%" y2="100%" stroke="#4A9FD4" strokeWidth="1" />
        <line x1="90%" y1="0" x2="93%" y2="100%" stroke="#4A9FD4" strokeWidth="1" />
      </svg>

      {/* ── Corner bracket — top-left ── */}
      <motion.div
        className="absolute top-6 left-6 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        aria-hidden
      >
        <div style={{ width: 32, height: 32, borderTop: "2px solid #0D1F3C", borderLeft: "2px solid #0D1F3C" }} />
      </motion.div>

      {/* ── Corner bracket — top-right ── */}
      <motion.div
        className="absolute top-6 right-6 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        aria-hidden
      >
        <div style={{ width: 32, height: 32, borderTop: "2px solid #0D1F3C", borderRight: "2px solid #0D1F3C" }} />
      </motion.div>

      {/* ── Corner bracket — bottom-left ── */}
      <motion.div
        className="absolute bottom-6 left-6 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        aria-hidden
      >
        <div style={{ width: 32, height: 32, borderBottom: "2px solid #0D1F3C", borderLeft: "2px solid #0D1F3C" }} />
      </motion.div>

      {/* ── Corner bracket — bottom-right ── */}
      <motion.div
        className="absolute bottom-6 right-6 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        aria-hidden
      >
        <div style={{ width: 32, height: 32, borderBottom: "2px solid #0D1F3C", borderRight: "2px solid #0D1F3C" }} />
      </motion.div>

      {/* ── Language switcher ── */}
      <motion.div
        className="absolute top-14 right-8 z-30 flex items-center gap-0.5"
        {...fade(0.2)}
      >
        {(["it", "sl", "en"] as Lang[]).map((l, i) => (
          <button
            key={l}
            onClick={() => switchLang(l)}
            className="relative px-2.5 py-1 text-xs font-medium tracking-widest uppercase transition-all duration-200"
            style={{
              fontFamily: "var(--font-dm-sans)",
              color: lang === l ? "#0D1F3C" : "#6B7A99",
              background: lang === l ? "#F5C030" : "transparent",
              borderRadius: 3,
              letterSpacing: "0.1em",
            }}
          >
            {l.toUpperCase()}
            {i < 2 && (
              <span
                className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-3 bg-gray-300"
                aria-hidden
              />
            )}
          </button>
        ))}
      </motion.div>

      {/* ── Main content — centred vertically & horizontally ── */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-10 pb-4 w-full">

        {/* Logos */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-7 w-full"
          {...fade(0.1)}
        >
          {/* Logo 1 — main */}
          <div className="flex-shrink-0">
            <LogoPlaceholder
              src="/LOGO NB29N.jpg"
              alt="VA Rent logo"
              width={340}
              height={92}
              label="Logo (2883×783)"
            />
          </div>

          {/* Vertical divider on desktop */}
          <div
            className="hidden md:block self-stretch w-px"
            style={{
              background: "linear-gradient(to bottom, transparent, #4A9FD4 30%, #4A9FD4 70%, transparent)",
              opacity: 0.3,
            }}
            aria-hidden
          />

          {/* Logo 2 — secondary */}
          <div className="flex-shrink-0">
            <LogoPlaceholder
              src="/VARENTlogo.jpg"
              alt="Manutecnica logo"
              width={240}
              height={89}
              label="Logo (2037×758)"
            />
          </div>
        </motion.div>

        {/* Divider line — expands from centre */}
        <motion.div
          className="w-full max-w-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <motion.div
            style={{ height: 1, background: "#0D1F3C", opacity: 0.12, transformOrigin: "center" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.35, duration: 0.7, ease: EASE } as Transition}
          />
        </motion.div>

        {/* Company name */}
        <motion.h1
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(1.45rem, 3vw, 2.5rem)",
            color: "#0D1F3C",
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
            fontWeight: 600,
            marginBottom: "0.35rem",
          }}
          {...fade(0.4)}
        >
          VA Rent by Manutecnica d.o.o.
        </motion.h1>

        {/* Yellow accent line — centred */}
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.42, duration: 0.3 }}
        >
          <motion.div
            style={{
              height: 4,
              width: 112,
              background: "#F5C030",
              borderRadius: 2,
              transformOrigin: "center",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.55, ease: EASE } as Transition}
          />
        </motion.div>

        {/* Tagline + description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`tagline-${lang}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: textVisible ? 1 : 0 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col items-center"
          >
            <motion.p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(0.72rem, 1.2vw, 0.88rem)",
                color: "#4A9FD4",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 500,
                marginBottom: "0.5rem",
              }}
              {...fade(0.45)}
            >
              {t.tagline}
            </motion.p>
            <motion.p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(0.8rem, 1.2vw, 0.92rem)",
                color: "#6B7A99",
                lineHeight: 1.75,
                maxWidth: 520,
              }}
              {...fade(0.5)}
            >
              {t.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Coming soon badge — centred */}
        <motion.div
          className="mt-5 flex justify-center"
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.6 } as Transition}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${lang}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: textVisible ? 1 : 0 }}
              transition={{ duration: 0.15 }}
              className="inline-flex flex-col gap-1 px-5 py-3.5"
              style={{
                border: "1px solid #4A9FD4",
                borderRadius: 8,
                background: "#F0F7FF",
                boxShadow:
                  "0 0 0 4px rgba(74,159,212,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
                maxWidth: 460,
                textAlign: "left",
              }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="flex-shrink-0"
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#F5C030",
                    boxShadow: "0 0 0 3px rgba(245,192,48,0.2)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.82rem",
                    color: "#1A4A8A",
                    letterSpacing: "0.04em",
                    fontWeight: 500,
                  }}
                >
                  {t.comingSoon}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.78rem",
                  color: "#6B7A99",
                  lineHeight: 1.55,
                  paddingLeft: "1.4rem",
                  margin: 0,
                }}
              >
                {t.comingSoonSub}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Contact row — centred */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 mt-6"
          {...fade(0.7)}
        >
          {/* Phone */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`phone-label-${lang}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: textVisible ? 1 : 0 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col items-center gap-0.5"
            >
              <span
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.65rem",
                  color: "#6B7A99",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {t.phone}
              </span>
              <div className="flex flex-col gap-1">
                {[
                  { name: "Nicola", tel: "+393473181259", display: "+39 347 3181259" },
                  { name: "Bojan",  tel: "+38640130309",  display: "+386 40 130309" },
                ].map(({ name, tel, display }) => (
                  <a
                    key={name}
                    href={`tel:${tel}`}
                    className="group flex items-center gap-2"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(0.88rem, 1.3vw, 1rem)",
                      color: "#0D1F3C",
                      fontWeight: 500,
                      textDecoration: "none",
                    }}
                  >
                    <svg
                      width="13" height="13" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:rotate-12 flex-shrink-0"
                      style={{ color: "#4A9FD4" }}
                      aria-hidden
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
                    </svg>
                    <span className="relative">
                      <span style={{ color: "#6B7A99", fontWeight: 400 }}>{name}:</span>
                      {" "}{display}
                      <span
                        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                        style={{ background: "#1A4A8A" }}
                      />
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Vertical divider */}
          <div
            className="hidden md:block self-stretch w-px mx-10"
            style={{ background: "#0D1F3C", opacity: 0.1, minHeight: 36 }}
            aria-hidden
          />

          {/* Email */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`email-label-${lang}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: textVisible ? 1 : 0 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col items-center gap-0.5"
            >
              <span
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "0.65rem",
                  color: "#6B7A99",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {t.email}
              </span>
              <a
                href="mailto:info@varent.eu"
                className="group flex items-center gap-2"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(0.88rem, 1.3vw, 1rem)",
                  color: "#0D1F3C",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                <svg
                  width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:rotate-6"
                  style={{ color: "#4A9FD4" }}
                  aria-hidden
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="relative">
                  info@varent.eu
                  <span
                    className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                    style={{ background: "#1A4A8A" }}
                  />
                </span>
              </a>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Footer — centred ── */}
      <motion.footer
        className="flex flex-col items-center pb-5 px-6 w-full"
        {...fade(0.8)}
      >
        <div
          style={{
            height: 1,
            background: "#0D1F3C",
            opacity: 0.08,
            marginBottom: "0.65rem",
            width: "100%",
            maxWidth: 480,
          }}
        />
        <AnimatePresence mode="wait">
          <motion.p
            key={`copy-${lang}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: textVisible ? 1 : 0 }}
            transition={{ duration: 0.15 }}
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.65rem",
              color: "#6B7A99",
              letterSpacing: "0.05em",
              textAlign: "center",
            }}
          >
            {t.copyright}
          </motion.p>
        </AnimatePresence>
      </motion.footer>
    </main>
  );
}

function LogoPlaceholder({
  src,
  alt,
  width,
  height,
  label,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  label: string;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: width,
        aspectRatio: `${width} / ${height}`,
        filter: "drop-shadow(0 2px 12px rgba(13,31,60,0.10))",
        position: "relative",
      }}
    >
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
          onError={() => setHasError(true)}
          priority
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            border: "1.5px dashed #4A9FD4",
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(74,159,212,0.04)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.72rem",
              color: "#4A9FD4",
              letterSpacing: "0.06em",
            }}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
