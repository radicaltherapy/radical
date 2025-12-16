# Week 1 Implementation Checklist
**Goal:** Launch updated homepage + Starter Kit landing page

## Completed ✅

- [x] Updated FUNNEL_STRATEGY.md with AI-focused messaging
- [x] Created new homepage (index_new_funnel.html) with RAD Process positioning
- [x] Created Starter Kit landing page (starter-kit.html)

## TODO - Deploy & Test

### 1. Review & Deploy Homepage
- [ ] Review index_new_funnel.html in browser
- [ ] Test all internal links (#problem, #buildly, #gpt, #starter-kit)
- [ ] Test external links (buildly.io/rad-process, labs.buildly.io)
- [ ] Replace current index.html with index_new_funnel.html when ready
- [ ] Update navigation links to point to correct sections

### 2. Configure Email Capture
Choose one of these options:

**Option A: ConvertKit (Recommended)**
- [ ] Sign up at convertkit.com
- [ ] Create new form for "Radical Therapy Starter Kit"
- [ ] Get form endpoint URL
- [ ] Update starter-kit.html form action
- [ ] Set up automated email sequence

**Option B: Mailchimp**
- [ ] Create Mailchimp account
- [ ] Create audience/list
- [ ] Create embedded form
- [ ] Update starter-kit.html with Mailchimp code

**Option C: Custom Backend**
- [ ] Create API endpoint to handle form submissions
- [ ] Store emails in database
- [ ] Set up email sending service (SendGrid, AWS SES)
- [ ] Update starter-kit.html JavaScript

### 3. Create Email Drip Sequence

**Welcome Email (Immediate)**
Subject: Your Radical Therapy Starter Kit is here 🚀

Content:
- Thank them for downloading
- Link to all 5 resources
- Set expectations for follow-up emails

**Day 1 Email: The Primer**
Subject: Why AI made Agile obsolete (PDF inside)

Content:
- Link to Radical Therapy Primer PDF
- Key insight: AI eliminates coordination Agile was built to solve
- CTA: Read the primer

**Day 3 Email: RAD Process Workflow**
Subject: Your step-by-step guide to RAD Process planning

Content:
- Link to RAD Process Planning Guide PDF
- Highlight: How to transition from sprints to AI-adaptive delivery
- CTA: Try one RAD Process planning session

**Day 5 Email: GPT Coach**
Subject: Meet your AI-to-Agile transition coach

Content:
- Link to Radical Therapy GPT
- Include 5 starter prompts
- Example conversation
- CTA: Ask the GPT one question

**Day 7 Email: Buildly Labs**
Subject: See RAD Process in action with Buildly Labs

Content:
- Link to Buildly Labs
- Explain how it implements RAD Process
- Case study or demo video
- CTA: Try free workspace or book demo

**Day 10 Email: Assessment Results**
Subject: How ready is your team for RAD Process?

Content:
- Link to AI Readiness Self-Assessment
- Explain what it measures
- Personalized recommendations based on score
- CTA: Complete assessment

### 4. Create Starter Kit Assets (Week 2 prep)

**Radical Therapy Primer (PDF)**
- [ ] Design 10-12 page PDF
- [ ] Section 1: Why AI made Agile obsolete
- [ ] Section 2: Three Radical Therapy principles
- [ ] Section 3: Introducing RAD Process
- [ ] Section 4: Next steps
- [ ] Host on site or Google Drive/Dropbox

**RAD Process Planning Guide (PDF)**
- [ ] Design 4-5 page PDF
- [ ] Step-by-step workflow
- [ ] Examples from AI-powered teams
- [ ] Buildly Labs implementation notes
- [ ] Link to buildly.io/rad-process

**GPT Access Page (HTML)**
- [ ] Create simple page with GPT embed
- [ ] Include 5 starter prompts
- [ ] Usage guidelines
- [ ] Example conversations

**Buildly Labs Intro (HTML or PDF)**
- [ ] 2-page overview
- [ ] Screenshots or demo video
- [ ] Clear CTAs to labs.buildly.io
- [ ] Case study snippet

**AI Readiness Assessment (Web Form)**
- [ ] Build 10-question form
- [ ] Scoring logic
- [ ] Personalized results page
- [ ] Follow-up recommendations

### 5. Test End-to-End Flow

- [ ] Visit homepage
- [ ] Click "Get Starter Kit"
- [ ] Fill out form
- [ ] Receive welcome email
- [ ] Access all 5 resources
- [ ] Verify links work
- [ ] Check mobile responsiveness

### 6. Analytics Setup

- [ ] Add Google Analytics to all pages
- [ ] Set up goal tracking for:
  - Starter Kit signups
  - RAD Process page visits
  - Buildly Labs clicks
  - GPT usage (if possible)
- [ ] Set up conversion tracking

### 7. Launch Checklist

- [ ] Backup current site
- [ ] Deploy new homepage
- [ ] Deploy starter-kit.html
- [ ] Test all links one more time
- [ ] Send test email through the sequence
- [ ] Monitor for first 24 hours

## Success Metrics (Week 1 Target)

- Homepage visitors: Track baseline
- Starter Kit signups: 8-12% conversion rate goal
- Email open rates: 40-50% goal
- Click-through to RAD Process: Track baseline

## Next: Week 2

Once Week 1 is live and stable:
- Create all Starter Kit assets (PDFs, GPT page, assessment)
- Refine email sequence based on Week 1 data
- A/B test headlines and CTAs

---

## Notes

**Before deploying:**
1. Replace index.html with index_new_funnel.html (or rename appropriately)
2. Set up email service integration (don't launch without it!)
3. Make sure all links point to correct URLs
4. Test on mobile, tablet, desktop
5. Check page load speed

**Quick wins:**
- Update social media profiles to link to new homepage
- Update email signatures to link to Starter Kit
- Share on LinkedIn/Twitter when ready

**Remember:**
Ship Week 1 before perfecting Week 2. Get the homepage + email capture live, then iterate.
