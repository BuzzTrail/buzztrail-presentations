---
theme: default
background: https://cover.sli.dev
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## {{COMPANY_NAME}} Presentation

  AI-generated presentation powered by BuzzTrail
drawings:
  persist: false
transition: slide-left
title: Welcome to {{COMPANY_NAME}}
mdc: true
---

<!-- slideId: intro -->

# Welcome to {{COMPANY_NAME}}

Revolutionizing {{INDUSTRY}} with Innovation

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---

<!-- slideId: problem -->

# The Challenge

Understanding the {{INDUSTRY}} landscape

<v-clicks>

- Traditional approaches are {{PAIN_POINT_1}}
- Companies struggle with {{PAIN_POINT_2}}
- Market demands {{SOLUTION_DIRECTION}}

</v-clicks>

---

<!-- slideId: solution -->

# Our Solution

{{COMPANY_NAME}} brings {{VALUE_PROPOSITION}}

<div class="grid grid-cols-2 gap-4 mt-8">

<div>

## Key Features

- {{FEATURE_1}}
- {{FEATURE_2}}
- {{FEATURE_3}}

</div>

<div>

## Benefits

- {{BENEFIT_1}}
- {{BENEFIT_2}}
- {{BENEFIT_3}}

</div>

</div>

---

<!-- slideId: how-it-works -->

# How It Works

<div class="grid grid-cols-3 gap-4">

<div class="text-center">

### Step 1

{{STEP_1_TITLE}}

<div class="text-sm text-gray-500 mt-2">
{{STEP_1_DESCRIPTION}}
</div>

</div>

<div class="text-center">

### Step 2

{{STEP_2_TITLE}}

<div class="text-sm text-gray-500 mt-2">
{{STEP_2_DESCRIPTION}}
</div>

</div>

<div class="text-center">

### Step 3

{{STEP_3_TITLE}}

<div class="text-sm text-gray-500 mt-2">
{{STEP_3_DESCRIPTION}}
</div>

</div>

</div>

---

<!-- slideId: features -->

# Feature Deep Dive

Exploring {{FEATURE_X}} in detail

```ts {all|2|5-8|all}
// Example implementation
const feature = new {{FEATURE_X}}()

// Configure with your data
feature.configure({
  apiKey: process.env.API_KEY,
  endpoint: '{{API_ENDPOINT}}'
})

// Start using immediately
await feature.initialize()
```

<arrow v-click="[3, 4]" x1="400" y1="420" x2="230" y2="330" color="#564" width="3" arrowSize="1" />

---

<!-- slideId: results -->

# Proven Results

Real impact across {{INDUSTRY}}

<div class="mt-8">

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| {{METRIC_1_NAME}} | {{METRIC_1_BEFORE}} | {{METRIC_1_AFTER}} | {{METRIC_1_CHANGE}} |
| {{METRIC_2_NAME}} | {{METRIC_2_BEFORE}} | {{METRIC_2_AFTER}} | {{METRIC_2_CHANGE}} |
| {{METRIC_3_NAME}} | {{METRIC_3_BEFORE}} | {{METRIC_3_AFTER}} | {{METRIC_3_CHANGE}} |

</div>

---

<!-- slideId: testimonials -->

# What Customers Say

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="border-l-4 border-blue-500 pl-4">
  <p class="italic text-lg">
    "{{TESTIMONIAL_1_QUOTE}}"
  </p>
  <p class="text-sm text-gray-500 mt-2">
    - {{TESTIMONIAL_1_AUTHOR}}, {{TESTIMONIAL_1_COMPANY}}
  </p>
</div>

<div class="border-l-4 border-green-500 pl-4">
  <p class="italic text-lg">
    "{{TESTIMONIAL_2_QUOTE}}"
  </p>
  <p class="text-sm text-gray-500 mt-2">
    - {{TESTIMONIAL_2_AUTHOR}}, {{TESTIMONIAL_2_COMPANY}}
  </p>
</div>

</div>

---

<!-- slideId: pricing -->

# Pricing Plans

Choose the right plan for {{TARGET_AUDIENCE}}

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="text-center border rounded p-4">

### Starter

<div class="text-3xl font-bold my-4">
${{PRICE_STARTER}}
</div>

- {{STARTER_FEATURE_1}}
- {{STARTER_FEATURE_2}}
- {{STARTER_FEATURE_3}}

</div>

<div class="text-center border-2 border-blue-500 rounded p-4">

### Professional

<div class="text-3xl font-bold my-4">
${{PRICE_PROFESSIONAL}}
</div>

- {{PRO_FEATURE_1}}
- {{PRO_FEATURE_2}}
- {{PRO_FEATURE_3}}

</div>

<div class="text-center border rounded p-4">

### Enterprise

<div class="text-3xl font-bold my-4">
${{PRICE_ENTERPRISE}}
</div>

- {{ENTERPRISE_FEATURE_1}}
- {{ENTERPRISE_FEATURE_2}}
- {{ENTERPRISE_FEATURE_3}}

</div>

</div>

---

<!-- slideId: demo -->

# Live Demo

See {{COMPANY_NAME}} in action

<div class="mt-12 text-center">
  <div class="text-6xl mb-8">
    {{DEMO_ICON}}
  </div>
  <p class="text-xl">
    {{DEMO_DESCRIPTION}}
  </p>
</div>

---

<!-- slideId: roadmap -->

# Product Roadmap

What's coming next for {{COMPANY_NAME}}

<div class="mt-8">

## Q{{CURRENT_QUARTER}} {{CURRENT_YEAR}}
- {{ROADMAP_Q1_ITEM_1}}
- {{ROADMAP_Q1_ITEM_2}}

## Q{{NEXT_QUARTER_1}} {{CURRENT_YEAR}}
- {{ROADMAP_Q2_ITEM_1}}
- {{ROADMAP_Q2_ITEM_2}}

## Q{{NEXT_QUARTER_2}} {{CURRENT_YEAR}}
- {{ROADMAP_Q3_ITEM_1}}
- {{ROADMAP_Q3_ITEM_2}}

</div>

---

<!-- slideId: team -->

# Meet the Team

The people behind {{COMPANY_NAME}}

<div class="grid grid-cols-4 gap-4 mt-8">

<div class="text-center">
  <div class="w-20 h-20 rounded-full bg-blue-500 mx-auto mb-2"></div>
  <div class="font-bold">{{TEAM_MEMBER_1_NAME}}</div>
  <div class="text-sm text-gray-500">{{TEAM_MEMBER_1_ROLE}}</div>
</div>

<div class="text-center">
  <div class="w-20 h-20 rounded-full bg-green-500 mx-auto mb-2"></div>
  <div class="font-bold">{{TEAM_MEMBER_2_NAME}}</div>
  <div class="text-sm text-gray-500">{{TEAM_MEMBER_2_ROLE}}</div>
</div>

<div class="text-center">
  <div class="w-20 h-20 rounded-full bg-purple-500 mx-auto mb-2"></div>
  <div class="font-bold">{{TEAM_MEMBER_3_NAME}}</div>
  <div class="text-sm text-gray-500">{{TEAM_MEMBER_3_ROLE}}</div>
</div>

<div class="text-center">
  <div class="w-20 h-20 rounded-full bg-orange-500 mx-auto mb-2"></div>
  <div class="font-bold">{{TEAM_MEMBER_4_NAME}}</div>
  <div class="text-sm text-gray-500">{{TEAM_MEMBER_4_ROLE}}</div>
</div>

</div>

---

<!-- slideId: cta -->

# Get Started Today

Join {{NUMBER_OF_CUSTOMERS}}+ companies using {{COMPANY_NAME}}

<div class="mt-12 text-center">
  <div class="text-2xl mb-8">
    {{CTA_MESSAGE}}
  </div>

  <div class="flex gap-4 justify-center">
    <button class="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg">
      {{CTA_PRIMARY_BUTTON}}
    </button>
    <button class="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg text-lg">
      {{CTA_SECONDARY_BUTTON}}
    </button>
  </div>

  <div class="mt-8 text-sm text-gray-500">
    {{CONTACT_INFO}}
  </div>
</div>

---

<!-- slideId: thank-you -->

# Thank You!

Questions?

<div class="mt-12 text-center">
  <div class="text-xl mb-4">
    {{COMPANY_NAME}}
  </div>
  <div class="text-gray-500">
    {{COMPANY_WEBSITE}} | {{COMPANY_EMAIL}}
  </div>
</div>
