---
theme: default
background: '#FAFAFA'
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## BuzzTrail Demo Deck
  Your AI-Powered Demo & Helpdesk Avatar
drawings:
  persist: false
transition: slide-left
title: BuzzTrail - Your AI Avatar
mdc: true
---

<style>
:root {
  --buzztrail-purple: #6366F1;
  --buzztrail-magenta: #A855F7;
  --buzztrail-pink: #EC4899;
}

.slidev-layout {
  background: #FAFAFA;
}

/* Ensure all headings have good contrast on light background */
.slidev-layout h1,
.slidev-layout h2,
.slidev-layout h3 {
  color: #1f2937; /* gray-800 */
}

/* Override cover slide text */
.slidev-layout.cover {
  color: #1f2937;
}

.feature-card {
  background: white;
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  transition: transform 0.2s;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  text-align: left;
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

.feature-icon {
  width: 2.5rem;
  height: 2.5rem;
  min-width: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--buzztrail-purple);
  color: white;
  font-size: 1.25rem;
}

.buzztrail-logo {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  opacity: 0.8;
}

.buzztrail-logo img {
  height: 2.5rem;
  width: auto;
}

.pricing-card {
  transition: transform 0.2s;
}

.pricing-card:hover {
  transform: scale(1.02);
}
</style>

<!-- Slide 1: Title -->
<!-- slideId: title -->

<div class="grid grid-cols-2 gap-8 items-center h-full px-12">
  <div class="flex justify-center">
    <img src="/images/tom-avatar.png" class="w-96 h-96 rounded-2xl shadow-2xl object-cover" alt="Tom - BuzzTrail AI Avatar" />
  </div>
  <div class="text-left">
    <div class="flex items-center gap-4 mb-8">
      <div class="buzztrail-hex"></div>
      <h1 class="text-6xl font-bold" style="background: linear-gradient(135deg, #6366F1, #A855F7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">BuzzTrail</h1>
    </div>
    <h2 class="text-5xl font-bold mb-6 text-gray-900">Your AI-Powered<br/>Demo & Helpdesk Avatar</h2>
    <p class="text-2xl text-gray-700">Transforming customer experience with human-first, scalable AI.</p>
  </div>
</div>

<div class="buzztrail-logo">
  <img src="/images/logo.avif" alt="BuzzTrail" />
</div>

<!--
Speaker Notes:
Title slide introducing BuzzTrail's AI avatar solution.
Features the avatar representative "Tom" demonstrating the human-like nature of the AI.
Key message: Human-first, scalable AI for demos and helpdesk.
-->

---

<!-- Slide 2: Solution Features -->
<!-- slideId: solution -->

# The BuzzTrail Solution

<div class="grid grid-cols-2 gap-3 mt-4 px-8">
  <div class="feature-card">
    <div class="feature-icon">
      <carbon-watson class="w-5 h-5" />
    </div>
    <div>
      <h3 class="text-base font-bold mb-0.5 text-gray-900">AI Video Avatars That Feel Human</h3>
      <p class="text-gray-700 text-xs">Conversational AI that mimics expert-level support agents, not robotic scripts. Just like being on a Zoom call with a Pro</p>
    </div>
  </div>

  <div class="feature-card">
    <div class="feature-icon">
      <carbon-video class="w-5 h-5" />
    </div>
    <div>
      <h3 class="text-base font-bold mb-0.5 text-gray-900">Sales Demos 24/7</h3>
      <p class="text-gray-700 text-xs">Users want to make buying decisions in their own time. Our avatars know the art of sales, while being helpful 24/7</p>
    </div>
  </div>

  <div class="feature-card">
    <div class="feature-icon">
      <carbon-code class="w-5 h-5" />
    </div>
    <div>
      <h3 class="text-base font-bold mb-0.5 text-gray-900">Native SaaS Integration</h3>
      <p class="text-gray-700 text-xs">Embedded directly into your product interface where users need help most or Sales demo's right on your home page</p>
    </div>
  </div>

  <div class="feature-card">
    <div class="feature-icon">
      <carbon-time class="w-5 h-5" />
    </div>
    <div>
      <h3 class="text-base font-bold mb-0.5 text-gray-900">Simple Setup</h3>
      <p class="text-gray-700 text-xs">Just upload a Loom video of your product demo and grant platform access - we handle the rest</p>
    </div>
  </div>
</div>

<div class="buzztrail-logo">
  <img src="/images/logo.avif" alt="BuzzTrail" />
</div>

<!--
Speaker Notes:
Four key differentiators of BuzzTrail:
1. AI Video Avatars - Human-like conversational AI, not chatbots
2. 24/7 Availability - Sales demos on customer's schedule
3. Native Integration - Embedded directly into SaaS products
4. Simple Setup - Just upload Loom video and grant access
-->

---

<!-- Slide 3: Pricing -->
<!-- slideId: pricing -->

# <span style="color: #EC4899;">Pricing</span>

<div class="text-gray-700 mb-6 px-12 text-left">
  <p class="text-lg">We're not about short term flings, we're building a long term partnership. All plans listed below are 12 month subscriptions in USD.</p>
  <p class="mt-2 text-lg">We're obsessed with success, so getting you started on the right foot is crucial. We charge a once off <strong>$10,000 implementation fee</strong>, for a 3 week implementation process, building, training and testing your agents.</p>
</div>

<div class="flex justify-center items-center px-8 mt-4">
  <img src="/images/pricing.png" class="max-w-full max-h-96 object-contain shadow-2xl rounded-lg" alt="BuzzTrail Pricing Plans" />
</div>

<div class="buzztrail-logo">
  <img src="/images/logo.avif" alt="BuzzTrail" />
</div>

<!--
Speaker Notes:
Pricing Structure:
- All plans require 12-month commitment
- $10,000 implementation fee (3-week onboarding)

Launch Plan ($2,500/mo):
- 3,000 agent minutes
- Up to 3 landline numbers
- 1 AI Agent
- Human in the loop
- Advanced analytics & reporting
- Priority chat + email support
- Overage: $0.83/min

Scale Plan ($5,000/mo) - MOST POPULAR:
- 10,000 agent minutes
- Up to 5 landline numbers
- 2 AI Agents
- Human in the loop
- Custom analytics & integrations
- Dedicated account manager
- Overage: $0.43/min

Enterprise Plan (Contact Sales):
- Unlimited minutes & numbers
- Dedicated technical architect
- Custom onboarding & integrations
- 24/7 white-glove support
- Custom overage pricing
-->

---

<!-- Slide 4: Analytics Dashboard -->
<!-- slideId: analytics -->

<div class="h-full flex items-center justify-center px-8">
  <img src="/images/analytics-dashboard.png" class="max-w-full max-h-full object-contain shadow-2xl rounded-lg" alt="BuzzTrail Analytics Dashboard" />
</div>

<div class="buzztrail-logo">
  <img src="/images/logo.avif" alt="BuzzTrail" />
</div>

<!--
Speaker Notes:
Analytics Dashboard showing comprehensive call metrics:

Key Metrics (Last 30 Days):
- Total Call Minutes: 77.07 (down 52.1%)
- Number of Calls: 65 (down 71.2%)
- Total Interactions: 244 (down 48.2%)
- Average Interactions: 4 (up 33.3%)

Features:
- Real-time call volume tracking
- Call completion rate: 69.2%
- Reason call ended breakdown
- Trend analysis over time
- Performance metrics

Dashboard Navigation:
- Analytics (current view)
- Conversations
- Knowledge Base
- Topics
- Leads
- Campaigns
- Agent Settings
- Phone Numbers
-->

---

<!-- Slide 5: Conversations Interface -->
<!-- slideId: conversations -->

<div class="h-full flex items-center justify-center px-8">
  <img src="/images/conversation-ui.png" class="max-w-full max-h-full object-contain shadow-2xl rounded-lg" alt="BuzzTrail Conversations Interface" />
</div>

<div class="buzztrail-logo">
  <img src="/images/logo.avif" alt="BuzzTrail" />
</div>

<!--
Speaker Notes:
Conversations Interface showing real customer interactions:

Sample Conversation Flow:
1. Agent: "Hi, Thanks for calling BuzzTrail. Can I ask who I'm speaking with?"
2. Customer: "My name's Ivan."
3. Agent: "Hi, Ivan. Nice to meet you. Which company are you with?"
4. Customer: "It's called snapping stone."
5. Agent: "Great, Ivan. How did you find us at BuzzTrail?"
6. Customer: "Actually, I met you through, I think, your founder, Mike."

Features Demonstrated:
- Natural conversational flow
- Human-like responses
- Context awareness
- Professional engagement
- Audio recording with playback (2:31 duration)

Interface Capabilities:
- Search and filter conversations
- Export functionality
- Real-time transcription
- Conversation metadata tracking
- Action panel with reason codes
- Topic assignment
- Customer details capture
-->
