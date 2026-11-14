import { useEffect, useState } from 'react'

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (targets.length === 0) return

    const visible = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.add(entry.target.id)
          } else {
            visible.delete(entry.target.id)
          }
        })

        const first = ids.find((id) => visible.has(id))
        setActive(first ?? '')
      },
      { rootMargin: '-38% 0px -55% 0px', threshold: 0 },
    )

    targets.forEach((target) => observer.observe(target))

    return () => observer.disconnect()
  }, [ids])

  return active
}
