import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 50, suffix: '+', label: 'brands partnered with' },
  { value: 120, suffix: '+', label: 'projects brought to life' },
  { value: 8, suffix: 'M+', label: 'people reached' },
  { value: 96, suffix: '%', label: 'repeat client partnerships' },
]

function CountUp({ value, suffix }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      const start = performance.now()
      const duration = 1500
      const animate = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        setCount(Math.round((1 - (1 - progress) ** 3) * value))
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
      observer.disconnect()
    }, { threshold: 0.4 })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])
  return <strong ref={ref}>{count}{suffix}</strong>
}

function ImpactStats() {
  return <section className="adora-impact" aria-label="Our impact"><div className="adora-shell"><p className="adora-kicker"><i /> The work adds up</p><div className="adora-stats">{stats.map((stat) => <article key={stat.label}><CountUp value={stat.value} suffix={stat.suffix} /><span>{stat.label}</span></article>)}</div></div></section>
}
export default ImpactStats
