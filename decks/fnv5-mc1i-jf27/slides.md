---
theme: default
background: linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%)
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
  --buzztrail-bg: linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%);
}

.slidev-layout {
  background: linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%);
}

.feature-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  transition: transform 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

.feature-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  background: var(--buzztrail-purple);
  color: white;
  font-size: 2rem;
}

.buzztrail-logo {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  opacity: 0.8;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--buzztrail-purple);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.buzztrail-hex {
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, var(--buzztrail-purple), var(--buzztrail-magenta));
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
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
    <div class="w-96 h-96 rounded-2xl shadow-2xl overflow-hidden bg-gray-200">
      <!-- Avatar image will be here -->
      <div class="w-full h-full flex items-center justify-center text-gray-400 text-6xl">
        <carbon-user-avatar class="w-48 h-48" />
      </div>
    </div>
  </div>
  <div class="text-left">
    <div class="flex items-center gap-4 mb-8">
      <div class="buzztrail-hex"></div>
      <h1 class="text-6xl font-bold" style="background: linear-gradient(135deg, #6366F1, #A855F7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">BuzzTrail</h1>
    </div>
    <h2 class="text-5xl font-bold mb-6">Your AI-Powered<br/>Demo & Helpdesk Avatar</h2>
    <p class="text-2xl text-gray-600">Transforming customer experience with human-first, scalable AI.</p>
  </div>
</div>

<div class="buzztrail-logo">
  <div class="buzztrail-hex"></div>
  <span>BuzzTrail</span>
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

<div class="grid grid-cols-2 gap-8 mt-12 px-8">
  <div class="feature-card">
    <div class="feature-icon">
      <carbon-watson class="w-8 h-8" />
    </div>
    <h3 class="text-2xl font-bold mb-3">AI Video Avatars That Feel Human</h3>
    <p class="text-gray-600 text-lg">Conversational AI that mimics expert-level support agents, not robotic scripts. Just like being on a Zoom call with a Pro</p>
  </div>

  <div class="feature-card">
    <div class="feature-icon">
      <carbon-video class="w-8 h-8" />
    </div>
    <h3 class="text-2xl font-bold mb-3">Sales Demos 24/7</h3>
    <p class="text-gray-600 text-lg">Users want to make buying decisions in their own time. Our avatars know the art of sales, while being helpful 24/7</p>
  </div>

  <div class="feature-card">
    <div class="feature-icon">
      <carbon-code class="w-8 h-8" />
    </div>
    <h3 class="text-2xl font-bold mb-3">Native SaaS Integration</h3>
    <p class="text-gray-600 text-lg">Embedded directly into your product interface where users need help most or Sales demo's right on your home page</p>
  </div>

  <div class="feature-card">
    <div class="feature-icon">
      <carbon-time class="w-8 h-8" />
    </div>
    <h3 class="text-2xl font-bold mb-3">Simple Setup</h3>
    <p class="text-gray-600 text-lg">Just upload a Loom video of your product demo and grant platform access - we handle the rest</p>
  </div>
</div>

<div class="buzztrail-logo">
  <div class="buzztrail-hex"></div>
  <span>BuzzTrail</span>
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

<div class="grid grid-cols-3 gap-6 px-8 mt-8">
  <!-- Launch Plan -->
  <div class="pricing-card bg-white rounded-2xl p-8 shadow-lg">
    <h3 class="text-xl font-semibold mb-2">Launch Plan</h3>
    <div class="text-4xl font-bold mb-6" style="color: #6366F1;">$2,500<span class="text-lg text-gray-500">/mo</span></div>
    <ul class="space-y-3 text-sm text-left">
      <li class="flex items-start"><span class="mr-2" style="color: #6366F1;">✓</span> 3,000 agent minutes</li>
      <li class="flex items-start"><span class="mr-2" style="color: #6366F1;">✓</span> Up to 3 landline numbers</li>
      <li class="flex items-start"><span class="mr-2" style="color: #6366F1;">✓</span> 1 AI Agent</li>
      <li class="flex items-start"><span class="mr-2" style="color: #6366F1;">✓</span> Human in the loop</li>
      <li class="flex items-start"><span class="mr-2" style="color: #6366F1;">✓</span> Advanced analytics & reporting</li>
      <li class="flex items-start"><span class="mr-2" style="color: #6366F1;">✓</span> Priority chat + email support</li>
    </ul>
    <div class="text-xs text-gray-500 mt-4">Overage: $0.83/min</div>
    <button class="w-full mt-6 py-3 rounded-lg font-semibold" style="background: #F3E8FF; color: #6366F1;">REQUEST DEMO</button>
  </div>

  <!-- Scale Plan (Most Popular) -->
  <div class="pricing-card rounded-2xl p-8 shadow-xl border-2 relative" style="background: linear-gradient(135deg, #F3E8FF 0%, #FCE7F3 100%); border-color: #A855F7;">
    <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white" style="background: #6366F1;">MOST POPULAR</div>
    <h3 class="text-xl font-semibold mb-2">Scale Plan</h3>
    <div class="text-4xl font-bold mb-6" style="color: #A855F7;">$5,000<span class="text-lg text-gray-500">/mo</span></div>
    <ul class="space-y-3 text-sm text-left">
      <li class="flex items-start"><span class="mr-2" style="color: #A855F7;">✓</span> 10,000 agent minutes</li>
      <li class="flex items-start"><span class="mr-2" style="color: #A855F7;">✓</span> Up to 5 landline numbers</li>
      <li class="flex items-start"><span class="mr-2" style="color: #A855F7;">✓</span> 2 AI Agents</li>
      <li class="flex items-start"><span class="mr-2" style="color: #A855F7;">✓</span> Human in the loop</li>
      <li class="flex items-start"><span class="mr-2" style="color: #A855F7;">✓</span> Custom analytics & integrations</li>
      <li class="flex items-start"><span class="mr-2" style="color: #A855F7;">✓</span> Dedicated account manager</li>
    </ul>
    <div class="text-xs text-gray-500 mt-4">Overage: $0.43/min</div>
    <button class="w-full mt-6 py-3 text-white rounded-lg font-semibold" style="background: #6366F1;">BOOK A CALL</button>
  </div>

  <!-- Enterprise Plan -->
  <div class="pricing-card bg-gray-900 text-white rounded-2xl p-8 shadow-lg">
    <h3 class="text-xl font-semibold mb-2">Enterprise Plan</h3>
    <div class="text-4xl font-bold mb-6" style="color: #A855F7;">Contact<br/>Sales</div>
    <ul class="space-y-3 text-sm text-left">
      <li class="flex items-start"><span class="mr-2" style="color: #A855F7;">✓</span> Unlimited minutes & numbers</li>
      <li class="flex items-start"><span class="mr-2" style="color: #A855F7;">✓</span> Dedicated technical architect</li>
      <li class="flex items-start"><span class="mr-2" style="color: #A855F7;">✓</span> Custom onboarding & integrations</li>
      <li class="flex items-start"><span class="mr-2" style="color: #A855F7;">✓</span> 24/7 white-glove support</li>
    </ul>
    <div class="text-xs text-gray-400 mt-4">Overage: Custom</div>
    <button class="w-full mt-6 py-3 text-white rounded-lg font-semibold" style="background: #6366F1;">CONTACT US</button>
  </div>
</div>

<div class="buzztrail-logo">
  <div class="buzztrail-hex"></div>
  <span>BuzzTrail</span>
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

<div class="h-full flex flex-col items-center justify-center px-8">
  <div class="w-full max-w-6xl bg-gray-100 rounded-2xl p-4 shadow-2xl">
    <div class="bg-white rounded-lg p-6">
      <h2 class="text-3xl font-bold mb-4">Analytics Dashboard</h2>
      <div class="grid grid-cols-4 gap-4 mb-6">
        <div class="bg-gray-50 p-4 rounded-lg">
          <div class="text-sm text-gray-500">Total Call Minutes</div>
          <div class="text-3xl font-bold">77.07</div>
          <div class="text-sm text-red-500">↓ 52.1%</div>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <div class="text-sm text-gray-500">Number of Calls</div>
          <div class="text-3xl font-bold">65</div>
          <div class="text-sm text-red-500">↓ 71.2%</div>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <div class="text-sm text-gray-500">Total Interactions</div>
          <div class="text-3xl font-bold">244</div>
          <div class="text-sm text-red-500">↓ 48.2%</div>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <div class="text-sm text-gray-500">Average Interactions</div>
          <div class="text-3xl font-bold">4</div>
          <div class="text-sm text-green-500">↑ 33.3%</div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-gray-50 p-4 rounded-lg">
          <div class="text-sm font-semibold mb-2">Total Call Minutes</div>
          <div class="h-32 bg-gradient-to-r from-green-100 to-green-50 rounded flex items-end justify-center">
            <div class="text-xs text-gray-500">Chart: Call volume over 30 days</div>
          </div>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <div class="text-sm font-semibold mb-2">Reason Call Ended</div>
          <div class="h-32 flex items-center justify-center">
            <div class="text-center">
              <div class="text-4xl font-bold" style="color: #6366F1;">69.2%</div>
              <div class="text-sm text-gray-500">Completed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="buzztrail-logo">
  <div class="buzztrail-hex"></div>
  <span>BuzzTrail</span>
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

<div class="h-full flex flex-col items-center justify-center px-8">
  <div class="w-full max-w-6xl bg-gray-100 rounded-2xl p-4 shadow-2xl">
    <div class="bg-white rounded-lg p-6">
      <h2 class="text-3xl font-bold mb-4">Conversations (17)</h2>
      <div class="grid grid-cols-2 gap-6">
        <div class="bg-gray-50 p-4 rounded-lg">
          <div class="text-sm font-semibold mb-3">Recent Conversations</div>
          <div class="space-y-2">
            <div class="bg-white p-3 rounded text-sm">
              <div class="font-semibold">New User</div>
              <div class="text-gray-500 text-xs">Sep 25, 9:56 AM</div>
            </div>
            <div class="bg-white p-3 rounded text-sm">
              <div class="font-semibold">New User</div>
              <div class="text-gray-500 text-xs">Sep 25, 9:10 AM</div>
            </div>
            <div class="bg-white p-3 rounded text-sm">
              <div class="font-semibold">New User</div>
              <div class="text-gray-500 text-xs">Sep 24, 5:00 PM</div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <div class="text-sm font-semibold mb-3">Sample Conversation</div>
          <div class="space-y-3 text-sm">
            <div class="bg-purple-100 p-2 rounded-lg">
              <p class="text-xs text-gray-600">Customer:</p>
              <p>"Hi, Thanks for calling BuzzTrail. Can I ask who I'm speaking with?"</p>
            </div>
            <div class="bg-gray-200 p-2 rounded-lg">
              <p class="text-xs text-gray-600">Ivan:</p>
              <p>"My name's Ivan."</p>
            </div>
            <div class="bg-purple-100 p-2 rounded-lg">
              <p class="text-xs text-gray-600">Agent:</p>
              <p>"Hi, Ivan. Nice to meet you. Which company are you with?"</p>
            </div>
            <div class="bg-gray-200 p-2 rounded-lg">
              <p class="text-xs text-gray-600">Ivan:</p>
              <p>"It's called snapping stone."</p>
            </div>
            <div class="bg-purple-100 p-2 rounded-lg text-xs">
              <p class="text-gray-600">Audio: 2:31</p>
              <div class="bg-gray-300 h-1 rounded mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="buzztrail-logo">
  <div class="buzztrail-hex"></div>
  <span>BuzzTrail</span>
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
