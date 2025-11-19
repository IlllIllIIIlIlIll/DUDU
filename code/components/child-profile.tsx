import { Card } from "@/components/ui/card"

export function ChildProfile() {
  return (
    <Card className="overflow-hidden border-0 shadow-lg rounded-none">
      <div className="relative bg-gradient-to-br from-[#007BFF] via-[#0056cc] to-[#003d99] text-white">
        {/* Vignette overlay for depth */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/20 pointer-events-none"></div>

        <svg viewBox="0 0 400 150" className="w-full h-auto relative z-10" preserveAspectRatio="none">
          <defs>
            <clipPath id="waveClip">
              <path d="M 0,0 L 0,80 Q 100,120 200,90 T 400,100 L 400,0 Z" />
            </clipPath>
          </defs>
          <rect width="400" height="150" fill="url(#waveGradient)" clipPath="url(#waveClip)" />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#007BFF", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#0056cc", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>

        {/* Profile content positioned absolutely over the wave */}
        <div className="absolute inset-0 px-4 py-5 text-white sm:px-6 sm:py-6 flex items-center z-20">
          <div className="flex items-center gap-4 sm:gap-5 w-full">
            <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center text-3xl flex-shrink-0 border-3 border-white sm:w-18 sm:h-18 sm:text-4xl">
              👧
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-bold truncate sm:text-xl">Abil Apriliyanti</h2>
              <p className="text-sm text-blue-100 truncate sm:text-sm">Usia: 3 Tahun 2 Bulan</p>
              <div className="mt-2">
                <span className="text-xs opacity-75">Status Terakhir:</span>
                <p className="font-semibold text-white bg-[#28a745] px-2 py-1 rounded inline-block text-xs mt-1">
                  Sehat
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer to account for SVG height */}
        <div className="h-20"></div>
      </div>
    </Card>
  )
}
