import React from 'react'

export default function Loading() {
  return (
    <div className="min-h-screen w-full bg-[#0a0f1f] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
    </div>
  )
}
