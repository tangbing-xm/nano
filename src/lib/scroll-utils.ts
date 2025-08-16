/**
 * Smoothly scrolls to a target element by ID
 * @param targetId - The ID of the target element (without #)
 * @param offset - Optional offset from the top (default: 80px for navbar)
 */
export function scrollToElement(targetId: string, offset: number = 80) {
  try {
    const element = document.getElementById(targetId)
    
    if (!element) {
      console.warn(`Element with ID "${targetId}" not found`)
      // Fallback to hash navigation
      window.location.hash = `#${targetId}`
      return
    }

    // Check if smooth scrolling is supported
    if ('scrollBehavior' in document.documentElement.style) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    } else {
      // Fallback for browsers that don't support smooth scrolling
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset
      window.scrollTo(0, offsetPosition)
    }
  } catch (error) {
    console.error('Error scrolling to element:', error)
    // Final fallback
    window.location.hash = `#${targetId}`
  }
}

/**
 * Scrolls to the pricing section
 */
export function scrollToPricing() {
  scrollToElement('pricing')
}

/**
 * Creates a scroll handler function for navigation links
 * @param targetId - The ID of the target element
 * @param callback - Optional callback to run after scrolling (e.g., close mobile menu)
 */
export function createScrollHandler(targetId: string, callback?: () => void) {
  return (event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault()
    }
    
    scrollToElement(targetId)
    
    if (callback) {
      // Small delay to ensure scrolling starts before callback
      setTimeout(callback, 100)
    }
  }
}