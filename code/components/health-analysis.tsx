import { Card } from "@/components/ui/card"

interface HealthAnalysisProps {
  metrics: {
    temperature: number
    heartRate: number
    oxygenSaturation: number
  }
}

export function HealthAnalysis({ metrics }: HealthAnalysisProps) {
  const screeningResults = [
    {
      title: "Vital Signs Assessment",
      status: "normal",
      description: "Semua tanda vital normal",
      icon: "✓",
    },
    {
      title: "Growth Monitoring",
      status: "good",
      description: "Pertumbuhan sesuai kurva",
      icon: "⭐",
    },
    {
      title: "Physical Activity",
      status: "good",
      description: "Aktivitas fisik optimal",
      icon: "⭐",
    },
  ]

  return (
    <div>
      <h2 className="text-lg font-bold text-[#343a40] mb-3 sm:text-lg">Health Analysis</h2>
      <Card className="border-1 border-gray-200 bg-white shadow-sm p-4 sm:p-4">
        <div className="space-y-3">
          {screeningResults.map((result, idx) => (
            <div key={idx} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-b-0">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{result.title}</h3>
                <p className="text-xs text-gray-600 mt-0.5 sm:text-sm">{result.description}</p>
              </div>
              <div className="text-lg flex-shrink-0 mt-0.5">
                {result.status === "normal" ? (
                  <span className="text-[#28a745]">✓</span>
                ) : (
                  <span className="text-[#FF8C00]">⭐</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
