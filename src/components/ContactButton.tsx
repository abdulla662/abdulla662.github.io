import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ContactButtonProps {
  onClick?: () => void
  href?: string
  children?: ReactNode
  className?: string
}

export default function ContactButton({
  onClick,
  href = '#contact',
  children = 'Contact Me',
  className = '',
}: ContactButtonProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={`inline-flex items-center justify-center rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white whitespace-nowrap outline outline-2 outline-white outline-offset-[-3px] ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
      }}
    >
      {children}
    </motion.a>
  )
}
