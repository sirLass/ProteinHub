**PRODUCT REQUIREMENTS DOCUMENT**

**Protein Hub** - Distributor Training & Membership Platform

*Version 1.0 • May 2026*

  ---------------------- ------------------------------------------------
  **Status**             Draft --- Awaiting Stakeholder Review

  ---------------------- ------------------------------------------------

  ---------------------- ------------------------------------------------
  **Product Owner**      Protein Hub Owner

  ---------------------- ------------------------------------------------

  ---------------------- ------------------------------------------------
  **Target Launch**      Q3 2026 --- MVP (Phase 1)

  ---------------------- ------------------------------------------------

  ---------------------- ------------------------------------------------
  **Prepared By**        Product & Development Team

  ---------------------- ------------------------------------------------

**1. Executive Summary**

This document outlines the product requirements for **Protein Hub**, a web-based
Distributor Training & Membership Platform --- a system designed to
streamline how Protein Hub onboards, trains,
and retains its distributor network.

The platform addresses a recurring operational problem: the business
owner spends excessive time on repetitive inquiries, manual training,
and coordination across different distributor demographics (Gen X,
Millennials, Gen Z). The proposed solution centralizes all educational
resources, automates routine communication, and enforces a structured
onboarding progression --- freeing the owner to focus on business growth
and mentorship.

  -----------------------------------------------------------------------
  **Core Value Proposition**

  • Reduce owner\'s time spent on repetitive inquiries and basic training

  • Provide a self-service learning path for distributors across all age
  groups

  • Filter and qualify serious business prospects automatically

  • Create a sustainable, scalable system for long-term business
  expansion

  • Operate as a low-cost alternative to traditional franchising (PHP
  2,500 vs PHP 25,000--50,000)
  -----------------------------------------------------------------------

**2. Problem Statement**

**2.1 Current Pain Points**

Based on the discovery conversation, the following problems exist in the
current business operation:

  ---------------------- ------------------------------------------------
  **Problem**            **Impact**

  Owner manually answers Significant time drain; prevents focus on growth
  30--100 inquiries per  activities
  day                    

  No structured          Distributors are inconsistently trained; some
  onboarding path for    quit after investing PHP 200,000
  new distributors       

  Generational gap       Gen Z/Millennials avoid direct conversation; Gen
  causes communication   X expects direct access
  friction               

  Training materials are Distributors forget content; no way to track
  scattered (WhatsApp,   completion or understanding
  Facebook, drive)       

  No way to filter       Owner wastes time on unqualified prospects who
  serious vs. casual     never convert
  inquiries              

  Business presentation  No automated registration for Tue/Thu/Sat
  scheduling is manual   sessions

  Recipes and costing    Distributors forget information and cannot
  guides are not         self-serve
  centralized            
  ---------------------- ------------------------------------------------

**2.2 Root Cause Analysis**

The fundamental issue is the absence of a system that serves as the
single source of truth for the business. Currently, the owner is the system --- which creates a bottleneck that cannot scale as the
Protein Hub network grows (target: 10+ years of expansion from 2024
onwards).

**3. Goals & Success Metrics**

**3.1 Business Goals**

-   Reduce owner\'s daily inquiry response time by at least 70%

-   Achieve 80%+ module completion rate among active distributors

-   Convert at least 30% of business presentation registrants into
    paying distributors

-   Support onboarding of new distributors without direct owner
    involvement for basic content

-   Enable the platform to be self-sustaining through annual
    subscription fees

**3.2 Key Performance Indicators**

  ---------------------- ------------------------------------------------
  **Metric**             **Target (6 months post-launch)**

  Daily inquiries        ≥ 60% of total inquiries
  handled by chatbot     
  (without owner)        

  Business presentation  ≥ 30%
  registration           
  conversion rate        

  Active distributor     ≥ 80% (Module 1)
  module completion rate 

  Distributor churn rate \< 20% annually

  Owner time saved on    ≥ 10 hours/week
  training per week      

  Platform subscription  ≥ 75% year-over-year
  renewal rate           
  ---------------------- ------------------------------------------------

**4. User Personas**

**4.1 Persona A --- The Prospect (Guest)**

  -----------------------------------------------------------------------
  **Guest Prospect Profile**

  • Age range: 18--60 years old

  • Discovered business via social media (Facebook, Instagram) or
  referral

  • May be hesitant to message the owner directly (especially
  Millennials, Gen Z)

  • Needs: Quick information, visual appeal, low-friction inquiry process

  • Goal: Understand the opportunity, register for a business
  presentation
  -----------------------------------------------------------------------

**4.2 Persona B --- The New Distributor**

  -----------------------------------------------------------------------
  **New Distributor Profile**

  • Has paid the PHP 2,500 onboarding/training fee

  • Needs structured, step-by-step guidance (Module 1 → Module 2 → \...)

  • May be Gen X (prefers direct access), Millennial (prefers
  self-service), or Gen Z (prefers video content)

  • Goal: Learn the business system, run their own store under their own
  brand
  -----------------------------------------------------------------------

**4.3 Persona C --- The Active Distributor**

  -----------------------------------------------------------------------
  **Active Distributor Profile**

  • Has been running the business for 1+ months

  • Needs: Access to updated recipes, costing adjustments, new product
  modules

  • Pays annual subscription fee to maintain platform access

  • Goal: Grow their business, reference materials, access new content as
  it releases
  -----------------------------------------------------------------------

**4.4 Persona D --- The Business Owner (Admin)**

  -----------------------------------------------------------------------
  **Admin / Owner Profile**

  • 53 years old; experienced in distribution for 16+ years

  • Tech-comfortable but prefers simple, easy-to-use tools

  • Uses ChatGPT for quick answers; prefers efficiency over complexity

  • Goal: Mentor at scale, reduce repetitive tasks, grow the network
  sustainably
  -----------------------------------------------------------------------

**5. System Architecture Overview**

The platform operates on three access tiers, each with progressively
restricted access and richer functionality:

  ------------------ ------------------ ---------------------------------
  **Tier**           **User Type**      **Access Level**

  Tier 1 --- Public  Guests / Prospects Business overview, FAQ, teaser
                                        video, business presentation
                                        registration

  Tier 2 ---         Business           Schedule selection, confirmation,
  Registered         Presentation       pre-presentation info page
                     Attendees          

  Tier 3 --- Member  Paid Distributors  Full module access, recipe
                     (active            library, costing tools, community
                     subscription)      board, chatbot escalation
  ------------------ ------------------ ---------------------------------

**6. Functional Requirements**

**6.1 Public Layer (Guest Access)**

**6.1.1 Landing Page**

-   Visually compelling homepage appealing to ages 18--60

-   Short teaser video (maximum 3 minutes) introducing the business
    concept (Protein Hub)

-   Clear call-to-action: \'Learn More\' / \'Register for Business
    Presentation\'

-   Protein Hub overview section (product, system, income potential)

-   Referral tracking: if visitor came via distributor invite link, log
    the referrer

**6.1.2 FAQ Section**

-   Static FAQ answering top 20 most common inquiries

-   Reduces direct messaging load on the owner

-   Covers: What is the product? How much to start? Is this a franchise?
    How do I earn?

**6.1.3 AI Chatbot (Generic Inquiry Handler)**

-   Deployed on the public layer for guest-level questions

-   Trained on: product information, business model, pricing,
    registration steps

-   Escalation trigger: complex or sensitive questions automatically
    flagged for owner review

-   Owner receives notification only for escalated items (not all
    conversations)

-   Response time: instant for FAQ-type questions

**6.1.4 Business Presentation Registration**

-   Prospects choose from available schedule slots: Tuesday, Thursday,
    Saturday

-   Registration form captures: Name, contact number, age range, source
    (how they heard about it)

-   Interest level qualifier question during registration (filters
    serious vs. casual)

-   Confirmation message with preparation instructions sent
    automatically

-   Owner receives daily summary of new registrations (not individual
    alerts)

**6.2 Registered Layer (Pre-Member Access)**

**6.2.1 Business Presentation Page**

-   Sneak-peek content about the Protein Hub opportunity

-   3-minute video or slide presentation auto-plays or is prominently
    displayed

-   Leads into a clear next step: \'Ready to join? Register as a
    Distributor\'

-   AIDA progression enforced: Attraction → Interest → Desire → Action

**6.3 Member Portal (Paid Distributor Access)**

**6.3.1 Module-Based Training System**

-   Sequential modules: Module 1 must be 100% completed before unlocking
    Module 2

-   Video progress tracking --- no skipping; system detects
    fast-forwarding

-   Each module includes: video lessons, downloadable guides, recipe
    files, costing sheets

-   Progress dashboard showing: % completion per module, last active
    date

-   Completion certificate or badge per module (motivational milestone)

**6.3.2 Recipe & Resource Library**

-   Searchable library of all recipes organized by category

-   Each recipe includes: ingredients, costing breakdown, preparation
    instructions

-   New recipes added by admin are immediately visible to all active
    members

-   Costing adjustment tool: allows distributors to input local prices
    and auto-calculate margins

**6.3.3 Subscription & Access Control**

-   Access is gated behind active subscription (annual renewal)

-   Non-renewing members lose module access after grace period (30 days)

-   Admin can manually deactivate inactive or non-compliant distributors

-   Reactivation process: pay renewal fee → access restored immediately

**6.3.4 Referral & Invite System**

-   Each distributor gets a unique referral link

-   When a prospect registers via the link, the distributor is credited
    as referrer

-   Admin can view referral leaderboard and track who is actively
    recruiting

**6.4 Admin Dashboard (Owner Only)**

-   View all registered prospects, presentation attendees, and active
    distributors

-   Monitor module completion rates by distributor

-   Manage subscriptions: view active, inactive, expiring-soon members

-   Upload new modules, videos, and resources

-   Review chatbot escalation queue and respond to complex inquiries

-   View referral tracking and distributor performance overview

-   Generate basic reports: new sign-ups per week, conversion rates,
    churn

**7. Non-Functional Requirements**

  ---------------------- ------------------------------------------------
  **Requirement**        **Specification**

  Ease of Use            Must be operable by users with basic
                         smartphone/computer literacy; no technical
                         training required

  Performance            Page load time \< 3 seconds on standard mobile
                         connection

  Mobile Responsiveness  Fully functional on iOS and Android mobile
                         browsers

  Video Hosting          Videos hosted on platform or embedded from a
                         private source; not publicly accessible on
                         YouTube

  Security               Paid content protected behind authenticated
                         sessions; no public URL bypass possible

  Scalability            Must support up to 500 concurrent members
                         without performance degradation in Year 1

  Availability           99% uptime target; maintenance windows
                         communicated in advance

  Language               Filipino and English content supported
                         (bilingual interface optional)
  ---------------------- ------------------------------------------------

**8. User Flow --- Guest to Distributor**

The following outlines the full journey a prospect takes from first
discovery to active distributor status:

1.  Prospect discovers Protein Hub via social media post, referral
    link, or direct search

2.  Lands on the public homepage → watches 3-minute teaser video

3.  Reads FAQ or interacts with chatbot for initial questions

4.  Clicks \'Register for Business Presentation\' → fills out form →
    selects schedule (Tue/Thu/Sat)

5.  Receives confirmation with pre-presentation preparation instructions

6.  Attends business presentation (online or in-person)

7.  Decides to proceed → pays PHP 2,500 onboarding/training fee

8.  Receives login credentials → gains access to Member Portal

9.  Completes Module 1 (locked until 100% finished) → unlocks Module 2

10. Runs their own business under their own brand using the system and
    recipes

11. Pays annual subscription renewal to maintain portal access and
    receive new content

**9. Business Rules**

  ---------------------- ------------------------------------------------
  **Rule**               **Detail**

  Onboarding Fee         PHP 2,500 one-time training fee to access Member
                         Portal

  Annual Subscription    Annual renewal fee required to maintain active
                         access (amount TBD by owner)

  Module Gating          Module N+1 unlocks only upon 100% completion of
                         Module N; no skip allowed

  Inactivity Policy      Distributors who do not renew are downgraded to
                         guest access after 30-day grace period

  Referral Credit        Referrals tracked via unique invite links; no
                         automatic commission (owner discretion)

  Content Ownership      All modules, videos, and recipes remain the
                         intellectual property of Protein Hub

  Chatbot Scope          Chatbot handles Tier 1 inquiries only; all
                         financial/legal/sensitive matters routed to
                         owner

  Presentation Slots     Business presentations scheduled Tuesday,
                         Thursday, Saturday (specific times set by owner)
  ---------------------- ------------------------------------------------

**10. Phased Rollout Plan**

**Phase 1 --- MVP (Months 1--3)**

  -----------------------------------------------------------------------
  **Phase 1 Deliverables**

  • Public landing page with teaser video embed and FAQ

  • Business presentation registration form with schedule selection

  • Basic admin dashboard: view registrants, send confirmations

  • Member portal with Module 1 content and video progress tracking

  • Subscription access control (paid = active, unpaid = locked)

  • Basic AI chatbot for FAQ-level guest inquiries
  -----------------------------------------------------------------------

**Phase 2 --- Growth Features (Months 4--6)**

  -----------------------------------------------------------------------
  **Phase 2 Deliverables**

  • Full multi-module training system (Module 2, 3, and beyond)

  • Recipe and resource library with search functionality

  • Costing adjustment calculator

  • Referral link system with tracking

  • Admin reporting dashboard (conversion rates, churn, completion stats)

  • Chatbot escalation queue with owner notification
  -----------------------------------------------------------------------

**Phase 3 --- Scale & Optimize (Months 7--12)**

  -----------------------------------------------------------------------
  **Phase 3 Deliverables**

  • Advanced chatbot: trained on full module content for deeper Q&A

  • Distributor performance leaderboard (optional, owner-configurable)

  • Mobile app wrapper (PWA or native) for better mobile experience

  • Automated renewal reminders and re-engagement campaigns

  • Regional content variations (Visayas, Luzon, Mindanao product
  adjustments)

  • Video analytics: heatmap of where distributors drop off in videos
  -----------------------------------------------------------------------

**11. Out of Scope (Version 1.0)**

-   E-commerce / direct product ordering through the platform

-   Automated commission payouts or MLM-style compensation tracking

-   Native mobile application (iOS/Android)

-   Real-time video conferencing or live training sessions integrated
    into the platform

-   Public-facing content on YouTube or other external platforms

-   Integration with accounting or inventory management software

**12. Assumptions & Constraints**

  ---------------------- ------------------------------------------------
  **Item**               **Detail**

  Content Readiness      Owner (or son\'s multimedia team) will supply
                         all video content, recipes, and module materials
                         prior to development

  Budget                 Development budget is modest; platform should
                         use proven, cost-effective technology stack

  Owner Involvement      Owner will dedicate time to review and approve
                         content structure before Phase 1 launch

  Internet Access        Target distributors have reliable mobile
                         internet access in their regions

  Facebook Dependency    Current audience and leads come primarily from
                         Facebook; platform should integrate with
                         Facebook for registration links

  Subscription Pricing   Annual fee amount is determined by the owner and
                         may be adjusted over time
  ---------------------- ------------------------------------------------

**13. Open Questions**

  ---------------------- ------------------------------------------------
  **Question**           **Owner to Decide**

  What is the exact      To be confirmed by owner
  annual subscription    
  renewal fee?           

  Will the chatbot be    Technology decision --- budget-dependent
  built custom or use an 
  existing platform      
  (e.g., ManyChat,       
  Tidio)?                

  Will business          Owner preference
  presentations remain   
  in-person, online      
  (Zoom/Meet), or both?  

  Should distributors be Owner preference
  able to see each other 
  (community feature) or 
  is it fully private?   

  What is the grace      Suggested: 30 days
  period before a        
  non-renewing           
  distributor loses      
  access?                

  Will the platform      Confirm by Phase 2
  support regional       
  product variations in  
  modules?               
  ---------------------- ------------------------------------------------

**14. Approval & Sign-Off**

This PRD is considered a living document and will be updated as
decisions are finalized. Stakeholder sign-off is required before
development begins on each phase.

  ---------------------- ------------------------------------------------
  **Stakeholder**        **Role**

  Business Owner         Final decision authority on all business rules
                         and content

  Development Team       Technical feasibility review and implementation

  Product Manager        PRD maintenance and milestone tracking

  QA Lead                Acceptance criteria and testing oversight
  ---------------------- ------------------------------------------------

*--- End of Document ---*
