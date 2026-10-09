import { motion } from 'framer-motion'

interface LiveProjectButtonProps {
  href?: string
  className?: string
}

export default function LiveProjectButton({
  href = '#',
  className = '',
}: LiveProjectButtonProps) {
  const isPlaceholder = href === '#'

  return (
    <motion.a
      href={href}
      target={isPlaceholder ? undefined : '_blank'}
      rel={isPlaceholder ? undefined : 'noopener noreferrer'}
      onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 whitespace-nowrap ${className}`}
    >
      Live Project
    </motion.a>
  )
}
