'use client'

interface SwirlieProps {
  size?: number
  color?: string
  className?: string
  opacity?: number
  style?: React.CSSProperties
}

export default function Swirlie({ size = 48, color = 'currentColor', className = '', opacity = 1, style }: SwirlieProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
      aria-hidden="true"
    >
      {/* Spiral / swirlie mark — hand-drawn approximation using arc paths */}
      <path
        d="M50 50
           m0 -38
           a38 38 0 1 1 -0.01 0
           M50 50
           m0 -26
           a26 26 0 1 1 -0.01 0
           M50 50
           m0 -14
           a14 14 0 1 1 -0.01 0
           M50 50
           m0 -4
           a4 4 0 1 1 -0.01 0"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function SwirlieSpiral({ size = 48, color = 'currentColor', className = '', opacity = 1, style }: SwirlieProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
      aria-hidden="true"
    >
      <path
        d="M50,50
           C50,35 65,20 80,20
           C95,20 100,32 100,45
           C100,70 80,90 55,90
           C25,90 5,68 5,42
           C5,16 28,0 52,0
           C76,0 95,18 95,42
           C95,58 83,72 68,78
           C53,84 38,76 32,64
           C26,52 32,38 42,34
           C52,30 62,36 64,44
           C66,52 60,60 52,60
           C44,60 40,54 42,48"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
