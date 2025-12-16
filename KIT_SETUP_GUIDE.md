# Kit.com Setup Guide for Radical Therapy Starter Kit

## ✅ What You Have
- Kit.com account at buildly.kit.com
- starter-kit.html page ready for Kit integration
- Updated design with blue-purple color scheme

## 🎯 Next Steps to Complete Integration

### Step 1: Create Your Form in Kit
1. Go to https://buildly.kit.com
2. Navigate to **Forms** → **Create Form**
3. Name it: **"Radical Therapy Starter Kit"**
4. Choose form type: **Inline** or **Modal** (I recommend Inline)

### Step 2: Customize Form Fields
Add these fields:
- ✅ Email Address (required) - Kit includes this by default
- ✅ First Name (required) - Add as custom field
- ✅ Role (optional) - Add as dropdown custom field with options:
  - Founder / CEO
  - CTO / VP Engineering
  - Product Manager / Product Leader
  - Software Engineer
  - Other

### Step 3: Design Your Form
Kit will show you design options. You can:
- Use Kit's default styling (recommended for now)
- Or customize colors to match blue-purple theme

### Step 4: Get Your Embed Code
1. In your form settings, go to **Share** → **Embed**
2. Copy the entire `<script>` tag (looks like this):
   ```html
   <script async data-uid="YOUR_FORM_ID" src="https://buildly.kit.com/YOUR_FORM_ID/index.js"></script>
   ```

### Step 5: Add Embed Code to Your Site
1. Open `starter-kit.html`
2. Find the section that says:
   ```html
   <!-- PASTE YOUR KIT.COM FORM EMBED CODE HERE -->
   ```
3. Replace the placeholder form with your Kit embed script
4. Delete the temporary fallback form

### Step 6: Set Up Your Email Sequence
Create these 6 automated emails in Kit:

#### **Email 1: Welcome (Immediate)**
**Subject:** Your Radical Therapy Starter Kit is here 🚀

**Body:**
```
Hey {{first_name}},

Thanks for downloading the Radical Therapy Starter Kit!

Here's everything you requested:

📖 Radical Therapy Primer (PDF)
https://radicaltherapy.io/primer.html

📋 RAD Process Planning Guide (PDF)
https://radicaltherapy.io/rad-process-guide.html

🤖 Radical Therapy GPT Coach
https://radicaltherapy.io/gpt-access.html

⚡ Buildly Labs + RAD Process Intro
https://radicaltherapy.io/buildly-intro.html

📊 AI Readiness Self-Assessment
https://radicaltherapy.io/assessment.html

Over the next week, I'll send you deeper insights on each resource. But feel free to dive in now.

- Greg

P.S. Already know you want to explore RAD Process? Check out: https://www.buildly.io/rad-process
```

#### **Email 2: Day 1 - The Primer**
**Subject:** Why AI made Agile obsolete

**Body:**
```
{{first_name}},

Yesterday you got the full Starter Kit. Today, let's focus on the first piece: the Radical Therapy Primer.

Here's the core insight:

Agile was designed for a world where humans wrote every line of code, manually coordinated every handoff, and planned in 2-week sprints.

But AI changed everything:
• Copilot writes code faster than sprint planning
• Automation eliminates manual coordination
• Your process is now the bottleneck

The Primer breaks this down in detail: https://radicaltherapy.io/primer.html

Tomorrow, I'll share how to transition from Agile to RAD Process.

- Greg
```

#### **Email 3: Day 3 - RAD Process**
**Subject:** Your step-by-step guide to RAD Process planning

**Body:**
```
{{first_name}},

You've seen WHY Agile is obsolete. Now let's talk about WHAT comes next: RAD Process.

RAD Process (Rapid Adaptive Development) is the AI-native methodology that replaces sprints with continuous, adaptive delivery.

Download the RAD Process Planning Guide: https://radicaltherapy.io/rad-process-guide.html

Inside, you'll find:
✓ Step-by-step transition plan
✓ AI-adaptive planning workflows
✓ How Buildly Labs implements RAD Process

Try one RAD Process planning session this week and see the difference.

- Greg

P.S. Want to see RAD Process in action? Explore Buildly Labs: https://labs.buildly.io
```

#### **Email 4: Day 5 - GPT Coach**
**Subject:** Meet your AI-to-Agile transition coach

**Body:**
```
{{first_name}},

By now you've read about why AI made Agile obsolete and how RAD Process works.

But every team is different. That's where the Radical Therapy GPT comes in.

It's your interactive coach, trained on:
• The full Radical Therapy book
• RAD Process methodology
• Real case studies from AI-powered teams

Access the GPT: https://radicaltherapy.io/gpt-access.html

Here are 5 starter prompts:
1. "My team uses Copilot but still does sprint planning. Is this a problem?"
2. "How do I transition from Agile to RAD Process without disrupting my team?"
3. "What's the difference between RAD Process and Agile?"
4. "How does Buildly Labs automate coordination?"
5. "How do I implement Radical Transparency in an AI-native workflow?"

Ask it anything. It's there to help.

- Greg
```

#### **Email 5: Day 7 - Buildly Labs**
**Subject:** See RAD Process in action

**Body:**
```
{{first_name}},

You've learned the principles. You've seen the methodology. Now let's talk implementation.

Buildly Labs is the AI-native product management platform built specifically for RAD Process.

It's not Jira with AI bolted on. It's a complete rethinking of how AI-powered teams ship software.

Explore Buildly Labs: https://labs.buildly.io

What makes it different:
✓ AI-automated coordination (no more standups)
✓ Adaptive planning based on real velocity
✓ Radical transparency by default
✓ Human-in-the-loop decision making

Try a free workspace. No credit card required.

- Greg

P.S. Want to talk about implementing RAD Process in your org? Reply to this email.
```

#### **Email 6: Day 10 - Assessment**
**Subject:** How ready is your team for RAD Process?

**Body:**
```
{{first_name}},

You've gone through the Primer, the RAD Process Guide, the GPT, and explored Buildly Labs.

Now it's time to assess: How ready is YOUR team?

Take the 5-minute AI Readiness Self-Assessment: https://radicaltherapy.io/assessment.html

You'll get:
• Your AI-Agile gap score
• Personalized recommendations
• Next steps tailored to your situation

Based on your score, I'll send you specific resources to help you move forward.

- Greg

P.S. Scoring 26-30? Your team is ready for RAD Process. Let's talk: [Calendar link or email]
```

### Step 7: Create Email Automation in Kit
1. Go to **Automations** → **Create Automation**
2. Name it: "Radical Therapy Starter Kit Sequence"
3. Set trigger: **Subscribes to form: Radical Therapy Starter Kit**
4. Add the 6 emails above with these delays:
   - Email 1: Immediate
   - Email 2: Wait 1 day
   - Email 3: Wait 2 days (3 days total)
   - Email 4: Wait 2 days (5 days total)
   - Email 5: Wait 2 days (7 days total)
   - Email 6: Wait 3 days (10 days total)

### Step 8: Tag Subscribers
Create these tags in Kit to segment your audience:
- `starter-kit-downloaded`
- `role-founder`
- `role-cto`
- `role-pm`
- `role-engineer`

Use these tags to personalize future campaigns.

---

## 📊 Success Metrics to Track in Kit

Monitor these in your Kit dashboard:

**Week 1:**
- Form conversion rate (aim for 8-12%)
- Email 1 open rate (aim for 60-70% - welcome emails perform best)
- Click-through rate to PDFs (aim for 40-50%)

**Week 2:**
- Email sequence engagement (aim for 40-50% open rate)
- GPT link clicks (aim for 20-30%)
- Buildly Labs visits (track via UTM params)

**Week 4:**
- Complete sequence read-through rate (aim for 30-40%)
- Reply rate to Email 6 (qualified leads)
- Demo requests or high-intent replies

---

## 🚀 Quick Wins

**Before you go live:**
- [ ] Create form in Kit
- [ ] Add custom fields (First Name, Role)
- [ ] Get embed code
- [ ] Paste into starter-kit.html
- [ ] Test form submission
- [ ] Create all 6 emails
- [ ] Set up automation sequence
- [ ] Test automation (subscribe with test email)

**After you go live:**
- [ ] Share starter-kit.html link on LinkedIn
- [ ] Update email signature with Starter Kit link
- [ ] Tweet about it
- [ ] Send to existing email list

---

## 🔗 Key Links

- Kit Dashboard: https://buildly.kit.com
- Form Embed Docs: https://help.kit.com/en/articles/2502494-how-to-embed-your-form
- Automation Docs: https://help.kit.com/en/collections/9576-automations

---

## 💡 Pro Tips

1. **UTM Parameters**: Add `?utm_source=starter-kit&utm_medium=email&utm_campaign=rad-process` to your Buildly Labs links to track conversions

2. **A/B Test Subject Lines**: Kit allows you to test subject lines. Try variants like:
   - "Why AI made Agile obsolete" vs. "Your Agile process is the bottleneck"

3. **Segment by Role**: Send different follow-ups to founders vs. engineers using Kit tags

4. **Monitor Reply Rate**: The best leads will reply to your emails. Prioritize these conversations.

5. **Update PDFs Later**: Don't wait for perfect PDFs to launch. Start with drafts and update the links in Email 1 when ready.

---

Need help? The form is ready to go - just paste your Kit embed code and you're live! 🚀
