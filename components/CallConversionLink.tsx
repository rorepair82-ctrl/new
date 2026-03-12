'use client'

import React from 'react'

type Props = {
  href: string
  className?: string
  ariaLabel?: string
  children: React.ReactNode
}

export default function CallConversionLink({ href, className, ariaLabel, children }: Props) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      ;(window as any).gtag_report_conversion(href)
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  )
}

