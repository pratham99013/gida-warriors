// Replace this with your Google Analytics 4 Measurement ID
export const GA_TRACKING_ID = 'G-R4MBGK9BRV'

// Type for event parameters
interface GTagEvent {
  action: string
  category?: string
  label?: string
  value?: number
}

// Track pageviews
export const pageview = (url: string): void => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track specific events (optional)
export const event = ({ action, category, label, value }: GTagEvent): void => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}
