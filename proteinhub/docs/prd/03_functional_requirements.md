# Protein Hub - PRD: Functional Requirements

## 6. Functional Requirements

### 6.1 Public Layer (Guest Access)

#### 6.1.1 Landing Page
- Visually compelling homepage appealing to ages 18–60
- Short teaser video (maximum 3 minutes) introducing the Protein Hub concept
- Clear call-to-action: 'Learn More' / 'Register for Business Presentation'
- Protein Hub overview section (product, system, income potential)
- Referral tracking: if visitor came via distributor invite link, log the referrer

#### 6.1.2 FAQ Section
- Static FAQ answering top 20 most common inquiries
- Reduces direct messaging load on the owner
- Covers: What is the product? How much to start? Is this a franchise? How do I earn?

#### 6.1.3 AI Chatbot (Generic Inquiry Handler)
- Deployed on the public layer for guest-level questions
- Trained on: product information, business model, pricing, registration steps
- Escalation trigger: complex or sensitive questions automatically flagged for owner review
- Owner receives notification only for escalated items (not all conversations)
- Response time: instant for FAQ-type questions

#### 6.1.4 Business Presentation Registration
- Prospects choose from available schedule slots: Tuesday, Thursday, Saturday
- Registration form captures: Name, contact number, age range, source (how they heard about it)
- Interest level qualifier question during registration (filters serious vs. casual)
- Confirmation message with preparation instructions sent automatically
- Owner receives daily summary of new registrations (not individual alerts)

### 6.2 Registered Layer (Pre-Member Access)

#### 6.2.1 Business Presentation Page
- Sneak-peek content about the Protein Hub opportunity
- 3-minute video or slide presentation auto-plays or is prominently displayed
- Leads into a clear next step: 'Ready to join? Register as a Distributor'
- AIDA progression enforced: Attraction → Interest → Desire → Action

### 6.3 Member Portal (Paid Distributor Access)

#### 6.3.1 Module-Based Training System
- Sequential modules: Module 1 must be 100% completed before unlocking Module 2
- Video progress tracking --- no skipping; system detects fast-forwarding
- Each module includes: video lessons, downloadable guides, product files, costing sheets
- Progress dashboard showing: % completion per module, last active date
- Completion certificate or badge per module (motivational milestone)

#### 6.3.2 Product & Resource Library
- Searchable library of all products organized by category
- Each product includes: specification, costing breakdown, marketing instructions
- New products added by admin are immediately visible to all active members
- Costing adjustment tool: allows distributors to input local prices and auto-calculate margins

#### 6.3.3 Subscription & Access Control
- Access is gated behind active subscription (annual renewal)
- Non-renewing members lose module access after grace period (30 days)
- Admin can manually deactivate inactive or non-compliant distributors
- Reactivation process: pay renewal fee → access restored immediately

#### 6.3.4 Referral & Invite System
- Each distributor gets a unique referral link
- When a prospect registers via the link, the distributor is credited as referrer
- Admin can view referral leaderboard and track who is actively recruiting

### 6.4 Admin Dashboard (Owner Only)
- View all registered prospects, presentation attendees, and active distributors
- Monitor module completion rates by distributor
- Manage subscriptions: view active, inactive, expiring-soon members
- Upload new modules, videos, and resources
- Review chatbot escalation queue and respond to complex inquiries
- View referral tracking and distributor performance overview
- Generate basic reports: new sign-ups per week, conversion rates, churn
