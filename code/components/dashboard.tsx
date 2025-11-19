"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { HealthMetric } from "./health-metric"
import { ChildProfile } from "./child-profile"
import { HealthAnalysis } from "./health-analysis"
import { Recommendations } from "./recommendations"

interface DashboardProps {
  onLogout: () => void
}

export function Dashboard({ onLogout }: DashboardProps) {
  const [metrics, setMetrics] = useState({
    temperature: 36.8,
    heartRate: 105,
    oxygenSaturation: 98,
    weight: 16.2,
  })

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        temperature: 36.8 + (Math.random() - 0.5) * 0.3,
        heartRate: 105 + Math.floor((Math.random() - 0.5) * 8),
        oxygenSaturation: 98 + Math.floor((Math.random() - 0.5) * 2),
        weight: prev.weight,
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="w-full max-w-md mx-auto px-4 py-3 flex items-center justify-between sm:max-w-full sm:px-6 sm:py-4">
          <h1 className="text-xl font-bold text-[#343a40] sm:text-2xl">Child Health Monitor</h1>
          <Button
            onClick={onLogout}
            variant="outline"
            className="text-gray-600 hover:text-gray-900 bg-transparent text-sm sm:text-base"
          >
            Logout
          </Button>
        </div>
      </header>

      <main className="w-full max-w-md mx-auto px-4 py-4 space-y-4 sm:max-w-full sm:px-6 sm:py-6 sm:space-y-6">
        {/* Child Profile */}
        <ChildProfile />

        {/* Real-time Measurements - Changed to 2x2 grid layout for compact design */}
        <div>
          <h2 className="text-lg font-bold text-[#343a40] mb-3 sm:text-lg">Pengukuran Terkini</h2>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <HealthMetric
              label="Suhu Tubuh"
              value={metrics.temperature.toFixed(1)}
              unit="°C"
              status={metrics.temperature > 37.5 ? "warning" : "normal"}
              icon="🌡️"
            />
            <HealthMetric
              label="Detak Jantung"
              value={metrics.heartRate}
              unit="bpm"
              status={metrics.heartRate > 120 ? "warning" : "normal"}
              icon="❤️"
            />
            <HealthMetric
              label="Saturasi O₂"
              value={metrics.oxygenSaturation}
              unit="%"
              status={metrics.oxygenSaturation < 95 ? "warning" : "normal"}
              icon="💨"
            />
            <HealthMetric label="Berat Badan" value={metrics.weight.toFixed(1)} unit="kg" status="normal" icon="⚖️" />
          </div>
        </div>

        {/* Health Analysis */}
        <HealthAnalysis metrics={metrics} />

        {/* Recommendations */}
        <Recommendations />
      </main>
    </div>
  )
}
