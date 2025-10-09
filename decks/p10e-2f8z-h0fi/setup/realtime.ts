import { createClient } from '@supabase/supabase-js'
import { defineSetup } from '@slidev/types'

export default defineSetup(() => {
  // Get Supabase credentials from environment variables
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

  // Only initialize if credentials are provided
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('[Slidev Realtime] Supabase credentials not found. Realtime control disabled.')
    return
  }

  // Initialize Supabase client
  const supabase = createClient(supabaseUrl, supabaseAnonKey)

  // Extract deck ID from URL pathname
  // Expected format: /deck/{deckId} or /{deckId}
  const pathParts = window.location.pathname.split('/').filter(Boolean)
  const deckId = pathParts[pathParts.length - 1] || 'default'

  console.log('[Slidev Realtime] Initializing for deck:', deckId)

  // Subscribe to slide control commands
  const channel = supabase
    .channel(`deck:${deckId}`)
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'slide_control_commands',
        filter: `deck_id=eq.${deckId}`,
      },
      (payload: any) => {
        console.log('[Slidev Realtime] Received command:', payload)

        const { command, slide_id, slide_number } = payload.new

        // Access Slidev's navigation API
        // @ts-ignore - $slidev is globally available in Slidev
        const nav = window.$slidev?.nav

        if (!nav) {
          console.error('[Slidev Realtime] Slidev navigation API not available')
          return
        }

        // Execute the command
        switch (command) {
          case 'goto':
            if (slide_number !== null && slide_number !== undefined) {
              console.log('[Slidev Realtime] Going to slide number:', slide_number)
              nav.go(slide_number)
            } else if (slide_id) {
              console.log('[Slidev Realtime] Going to slide ID:', slide_id)
              // For named slides, we need to find the slide number
              // Slidev doesn't have built-in support for slide IDs in navigation
              // This would require custom logic to map IDs to numbers
              console.warn('[Slidev Realtime] Slide ID navigation not yet implemented')
            }
            break

          case 'next':
            console.log('[Slidev Realtime] Going to next slide')
            nav.next()
            break

          case 'prev':
            console.log('[Slidev Realtime] Going to previous slide')
            nav.prev()
            break

          case 'play':
            console.log('[Slidev Realtime] Starting presentation')
            // @ts-ignore
            if (window.$slidev?.nav?.currentRoute?.meta?.slide?.start) {
              // @ts-ignore
              window.$slidev.nav.currentRoute.meta.slide.start = Date.now()
            }
            break

          case 'pause':
            console.log('[Slidev Realtime] Pausing presentation')
            // Slidev doesn't have a built-in pause, but we can track state
            break

          default:
            console.warn('[Slidev Realtime] Unknown command:', command)
        }
      }
    )
    .subscribe((status) => {
      console.log('[Slidev Realtime] Subscription status:', status)

      if (status === 'SUBSCRIBED') {
        console.log('[Slidev Realtime] Successfully subscribed to deck:', deckId)
      } else if (status === 'CHANNEL_ERROR') {
        console.error('[Slidev Realtime] Failed to subscribe to channel')
      }
    })

  // Cleanup on unmount
  return () => {
    console.log('[Slidev Realtime] Cleaning up subscription')
    channel.unsubscribe()
  }
})
