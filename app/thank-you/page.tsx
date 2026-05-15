"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { CheckCircle2, Phone, MessageSquare, Play } from "lucide-react"
import { FooterLinks } from "@/components/polar/footer-links"
import { getConfig } from "@/lib/config"

const config = getConfig()

// Call-in number sellers should expect (different from main marketing line)
const CALL_IN_DISPLAY = "(505) 453-3002"
const CALL_IN_HREF = "5054533002"

// Lead event is fired from the survey form with eventID-based dedup.
// Firing it again here would create a duplicate Meta event (no shared eventID
// = Meta cannot dedupe). Inflated lead counts in Meta were traced to this in
// May 2026. Do not re-add a Lead track here without coordinating eventIDs.

const TOP_VIDEO_URL =
  "https://ncdurunpi8vgg8xu.public.blob.vercel-storage.com/Thank%20you%20page/3-video-video-3-matt-2.mp4"

const FOLLOWUP_VIDEOS = [
  {
    title: "Who Is WeBuyHouses Albuquerque?",
    subtitle: "Meet the local team behind your offer.",
    url: "https://ncdurunpi8vgg8xu.public.blob.vercel-storage.com/Thank%20you%20page/2-video-video-2-matt-1.mp4",
  },
  {
    title: "Are There Any Fees or Commissions?",
    subtitle: "The straight answer most homeowners never get.",
    url: "https://ncdurunpi8vgg8xu.public.blob.vercel-storage.com/Thank%20you%20page/1-video-video-1-combined-qa.mp4",
  },
]

function ClickToPlayVideo({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const handlePlay = () => {
    setPlaying(true)
    requestAnimationFrame(() => ref.current?.play().catch(() => setPlaying(false)))
  }
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#E2E8F0] bg-black">
      <video
        ref={ref}
        src={src}
        controls={playing}
        playsInline
        preload="metadata"
        className="w-full block"
        style={{ aspectRatio: "16/9", objectFit: "cover" }}
        aria-label={title}
      />
      {!playing && (
        <button
          onClick={handlePlay}
          aria-label={`Play ${title}`}
          className="absolute inset-0 flex items-center justify-center bg-black/35 hover:bg-black/25 transition-colors group"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl transition-transform group-hover:scale-105">
            <Play className="h-9 w-9 text-[#0F1D2F] ml-1" fill="#0F1D2F" />
          </span>
        </button>
      )}
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen bg-[#FAFAF9]">
      <header className="bg-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-5xl px-4 py-5 flex items-center justify-between">
          <Link href="/" className="shrink-0">
            <img
              src={config.logoUrl}
              alt={config.companyName}
              className="h-16 md:h-24 w-auto"
            />
          </Link>
          <a
            href={`tel:${CALL_IN_HREF}`}
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-[#0F1D2F] hover:text-black transition-colors"
          >
            <Phone className="h-4 w-4" />
            {CALL_IN_DISPLAY}
          </a>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 pt-12 pb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0F1D2F]">
            <CheckCircle2 className="h-7 w-7 text-[#FACC15]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0F1D2F] text-balance">
            Thanks. Your Info Is In.
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base md:text-lg text-[#5A6B7D]">
            Watch the short video below from {config.ownerName} so you know exactly what to expect next.
          </p>
        </div>
      </section>

      <section className="bg-white pb-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E2E8F0] bg-black">
            <video
              src={TOP_VIDEO_URL}
              autoPlay
              muted
              playsInline
              controls
              className="w-full block"
              style={{ aspectRatio: "16/9", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#0F1D2F] text-white">
        <div className="mx-auto max-w-3xl px-4 py-12 md:py-16 text-center">
          <p className="uppercase tracking-widest text-xs font-semibold text-[#FACC15] mb-3">Important</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
            Expect a call or text from <span className="text-[#FACC15]">{CALL_IN_DISPLAY}</span>
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            That number is our local Albuquerque team. Save it to your phone so you don't miss us.
            Prefer to reach out first? Call or text us directly and let us know how you'd like to be contacted.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${CALL_IN_HREF}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#FACC15] px-8 py-3 text-base font-semibold text-[#0F1D2F] hover:bg-[#FBD437] transition-colors w-full sm:w-auto justify-center"
            >
              <Phone className="h-5 w-5" />
              Call {CALL_IN_DISPLAY}
            </a>
            <a
              href={`sms:${CALL_IN_HREF}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 ring-1 ring-white/30 px-8 py-3 text-base font-semibold text-white transition-colors w-full sm:w-auto justify-center"
            >
              <MessageSquare className="h-5 w-5" />
              Text Us Instead
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF9] py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-10">
            <p className="uppercase tracking-widest text-xs font-semibold text-[#5A6B7D] mb-2">While You Wait</p>
            <h2 className="text-2xl md:text-4xl font-bold text-[#0F1D2F] text-balance">
              Two quick answers to what most sellers ask next.
            </h2>
          </div>

          <div className="space-y-12">
            {FOLLOWUP_VIDEOS.map((v) => (
              <div key={v.url}>
                <div className="mb-4 text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-[#0F1D2F]">{v.title}</h3>
                  <p className="text-sm md:text-base text-[#5A6B7D] mt-1">{v.subtitle}</p>
                </div>
                <ClickToPlayVideo src={v.url} title={v.title} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-[#E2E8F0]">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-20">
          <p className="uppercase tracking-widest text-xs font-semibold text-[#5A6B7D] mb-3 text-center">
            A Note From The Founder
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F1D2F] text-center mb-6 text-balance">
            From {config.ownerName}, Founder of {config.companyName}
          </h2>
          <div className="space-y-4 text-[#374151] text-base md:text-lg leading-relaxed">
            <p>
              Thanks for trusting us with your information. I know reaching out to a "we buy houses" company can feel
              like a leap, especially when you've probably been pitched by every national chain that ever bought a list.
            </p>
            <p>
              We're different in one specific way that matters: we only buy houses in Albuquerque. Not Phoenix.
              Not Vegas. Not anywhere else. Because we know this market block by block, we don't have to play the
              "lowball and renegotiate later" game most cash buyers run. We can give you a real number, and we can
              keep it.
            </p>
            <p>
              When our team calls you from <strong>{CALL_IN_DISPLAY}</strong>, it will not be a scripted closer trying
              to corner you. It will be someone local asking honest questions about the property so we can put a fair
              cash number in front of you. If it works, great. If it doesn't, we'll tell you what we think you should
              do instead.
            </p>
            <p>
              Talk soon,
              <br />
              <span className="font-semibold text-[#0F1D2F]">{config.ownerName}</span>
              <br />
              <span className="text-sm text-[#5A6B7D]">Founder, {config.companyName}</span>
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${CALL_IN_HREF}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#0F1D2F] px-8 py-3 text-base font-semibold text-white hover:bg-black transition-colors w-full sm:w-auto justify-center"
            >
              <Phone className="h-5 w-5" />
              Call {CALL_IN_DISPLAY}
            </a>
            <a
              href={`sms:${CALL_IN_HREF}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-base font-semibold text-[#0F1D2F] ring-1 ring-[#0F1D2F]/20 hover:bg-[#FAFAF9] transition-colors w-full sm:w-auto justify-center"
            >
              <MessageSquare className="h-5 w-5" />
              Text Us Instead
            </a>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <FooterLinks />
      </div>
    </main>
  )
}
