import { useEffect, useRef } from 'react'

const GlitchBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@&%*<>[]{}'
    const fontSize = 14
    const columns = Math.floor(width / fontSize)
    const drops: number[] = new Array(columns).fill(0)

    const draw = () => {
      // Semi-transparent black to create trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, width, height)

      // Grid Lines
      ctx.strokeStyle = 'rgba(139, 0, 0, 0.05)'
      ctx.lineWidth = 1
      for (let i = 0; i < width; i += 40) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, height)
        ctx.stroke()
      }
      for (let i = 0; i < height; i += 40) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(width, i)
        ctx.stroke()
      }

      // Digital Rain
      ctx.fillStyle = '#440000' // Dark red for background code
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length))
        
        // Randomly highlight some characters in neon red
        if (Math.random() > 0.98) {
          ctx.fillStyle = '#FF0000'
          ctx.shadowBlur = 10
          ctx.shadowColor = '#FF0000'
        } else {
          ctx.fillStyle = 'rgba(139, 0, 0, 0.3)'
          ctx.shadowBlur = 0
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-40"
      style={{ filter: 'contrast(1.2) brightness(0.8)' }}
    />
  )
}

export default GlitchBackground
