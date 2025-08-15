"use client"

import { useEffect } from "react"

export function ThemeProvider() {
  useEffect(() => {
    // 检查本地存储的主题设置
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } else {
      // 默认为浅色主题
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [])

  return null
}