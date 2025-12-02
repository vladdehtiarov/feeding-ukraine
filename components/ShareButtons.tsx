'use client'

import { Facebook, Twitter, Send, Link2, Check } from 'lucide-react'
import { useState } from 'react'

export default function ShareButtons() {
  const [copied, setCopied] = useState(false)
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = 'ГО "Спільний будинок" - допомагаємо постраждалим від війни в Україні 🇺🇦'

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-gray-600 font-medium text-sm">Поділитися:</span>
      
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-white hover:bg-blue-50 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group border border-gray-200"
        title="Поділитися у Facebook"
      >
        <Facebook className="text-[#1877F2] group-hover:scale-110 transition-transform" size={20} />
      </a>

      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-white hover:bg-sky-50 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group border border-gray-200"
        title="Поділитися у Twitter"
      >
        <Twitter className="text-[#1DA1F2] group-hover:scale-110 transition-transform" size={20} />
      </a>

      <a
        href={shareLinks.telegram}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-white hover:bg-blue-50 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group border border-gray-200"
        title="Поділитися у Telegram"
      >
        <Send className="text-[#0088cc] group-hover:scale-110 transition-transform" size={20} />
      </a>

      <button
        onClick={copyLink}
        className="p-3 bg-white hover:bg-warm-50 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group border border-gray-200"
        title="Копіювати посилання"
      >
        {copied ? (
          <Check className="text-green-600" size={20} />
        ) : (
          <Link2 className="text-gray-600 group-hover:scale-110 transition-transform" size={20} />
        )}
      </button>
    </div>
  )
}

