import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Recommendations() {
  return (
    <Card className="overflow-hidden border-0 shadow-md bg-[#f0f7ff]">
      <div className="p-4 space-y-3 sm:p-5 sm:space-y-4">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-[#343a40] sm:text-lg">Rekomendasi Kesehatan</h2>
          <p className="text-xs text-gray-600 sm:text-sm">Berdasarkan pengukuran dan analisis terbaru</p>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <div className="flex gap-3">
            <span className="text-lg flex-shrink-0">💧</span>
            <div className="min-w-0">
              <p className="font-semibold text-gray-900 text-sm sm:text-base">Tetap Terhidrasi</p>
              <p className="text-xs text-gray-600 sm:text-sm">Minum 5-6 gelas air setiap hari</p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="text-lg flex-shrink-0">🏃</span>
            <div className="min-w-0">
              <p className="font-semibold text-gray-900 text-sm sm:text-base">Aktivitas Fisik Harian</p>
              <p className="text-xs text-gray-600 sm:text-sm">Minimal 60 menit aktivitas atau bermain</p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="text-lg flex-shrink-0">😴</span>
            <div className="min-w-0">
              <p className="font-semibold text-gray-900 text-sm sm:text-base">Tidur Teratur</p>
              <p className="text-xs text-gray-600 sm:text-sm">10-13 jam tidur per malam (termasuk tidur siang)</p>
            </div>
          </div>
        </div>

        <Button className="w-full bg-[#007BFF] hover:bg-[#0056cc] text-white mt-4 sm:mt-4 text-sm sm:text-base py-2">
          Jadwalkan Pemeriksaan Lanjutan
        </Button>
      </div>
    </Card>
  )
}
