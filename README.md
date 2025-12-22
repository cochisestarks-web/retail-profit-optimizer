# FrostOptima v1.0

Retail profit optimization tool that compares margin-focused vs. volume-focused product strategies.

## The Problem

Retail managers often prioritize high-margin products for premium placement, but high-volume products with lower margins frequently generate more total profit. This tool quantifies the tradeoff with data for any retail category.

## Features

- Universal Product Analysis: Works for any product category (frozen, produce, electronics, etc.)
- Strategy Comparison: Compare HIGH MARGIN vs. HIGH VOLUME approaches side-by-side
- Data-Driven Recommendations: Shows which strategy generates more total profit
- Flexible Input: Analyze any products with cost, sell price, and demand data

### Case Study: The Frozen Foods Paradox

While browsing the freezer aisle, I noticed premium ice creams—typically $6–8 retail with ~45% margins—occupying prime eye-level space, while store-brand frozen pizzas—at $4–5 with ~25% margins—were relegated to the bottom shelves.

The prevailing assumption: higher margin per unit justifies premium placement. But total profit is margin × volume, and volume is heavily influenced by shelf position.

FrostOptima models this with simple, realistic inputs:
- Fixed shelf capacity
- Observed velocity differences (e.g., premium ice cream: ~15 units/week; store pizza: ~80 units/week)
- Known costs and prices

The result is often stark: the lower-margin pizzas can generate 2.5–4× the total profit per shelf foot, simply because they move far faster.

The tool makes this counter-intuitive reversal obvious in moments—turning suspicion into quantifiable insight.

## Demo

![FrostOptima Strategy Comparison](retailmarginprofitcalculator.jpg)

*Live calculator showing profit analysis and strategy comparison for frozen food products.*

## Background & Motivation

With over 20 years in grocery retail operations, I repeatedly observed product placement decisions driven by intuition and unit margin percentages rather than total profit potential.

High-margin items feel instinctively correct for premium space, yet without quantifying weekly throughput (margin × velocity), stores frequently leave profit on the table.

FrostOptima distills this hard-won insight into an accessible tool—allowing anyone to test assumptions against data and arrive at clearer, more profitable decisions.

## Technical Implementation

Built in Google AI Studio with:
- Pure HTML, CSS, and JavaScript for maximum compatibility
- Real-time calculation engine for instant feedback
- Fully responsive design (mobile to desktop)
- Informed by 20+ years of frontline retail experience

## Future Enhancements (v2.0)

- Visual shelf configurations (freezer doors, gondola shelves, endcaps)
- Demand forecasting integration
- Precise space-constraint modeling
- Category-specific business rules
- Multi-week profit simulation

---

Built by Derek Loa  
Portfolio project demonstrating retail operations expertise + technical problem-solving
