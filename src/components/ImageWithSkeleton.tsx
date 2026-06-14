import { useState } from 'react'

interface ImageWithSkeletonProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
}

export default function ImageWithSkeleton({ src, alt, className, style }: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative">
      {!loaded && (
        <div
          className={`${className} bg-white/[0.02] animate-pulse`}
          style={style}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={style}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
    </div>
  )
}
