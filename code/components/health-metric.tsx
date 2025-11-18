import { Card } from "@/components/ui/card"

interface HealthMetricProps {
  label: string
  value: string | number
  unit: string
  status: "normal" | "warning" | "critical"
  icon: string
}

export function HealthMetric({ label, value, unit, status, icon }: HealthMetricProps) {
  const statusColors = {
    normal: "bg-white border-green-200",
    warning: "bg-white border-orange-200",
    critical: "bg-white border-red-200",
  }

  const statusBadgeColors = {
    normal: "bg-[#28a745] text-white",
    warning: "bg-[#FF8C00] text-white",
    critical: "bg-[#DC3545] text-white",
  }

  const statusLabels = {
    normal: "Normal",
    warning: "Tinggi",
    critical: "Darurat",
  }

  return (
    <Card className={`border-2 ${statusColors[status]} p-3 rounded-lg transition-all sm:p-3`}>
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-1">
          <span className="text-2xl sm:text-xl">{icon}</span>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusBadgeColors[status]}`}>
            {statusLabels[status]}
          </span>
        </div>
        <div>
          <p className="text-gray-600 text-xs font-medium">{label}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900">{value}</span>
            <span className="text-gray-500 text-xs">{unit}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
