# Protein Hub - PRD: Technical Overview & Business Rules

## 5. System Architecture Overview

The platform operates on three access tiers:

| Tier | User Type | Access Level |
| :--- | :--- | :--- |
| Tier 1 --- Public | Guests / Prospects | Business overview, FAQ, teaser video, business presentation registration |
| Tier 2 --- Registered | Presentation Attendees | Schedule selection, confirmation, pre-presentation info page |
| Tier 3 --- Member | Paid Distributors | Full module access, product library, costing tools, community board, chatbot escalation |

## 7. Non-Functional Requirements

| Requirement | Specification |
| :--- | :--- |
| Ease of Use | Must be operable by users with basic smartphone/computer literacy |
| Performance | Page load time < 3 seconds on standard mobile connection |
| Mobile Responsiveness | Fully functional on iOS and Android mobile browsers |
| Video Hosting | Private video source; not publicly accessible on YouTube |
| Security | Paid content protected behind authenticated sessions |
| Scalability | Support up to 500 concurrent members in Year 1 |
| Availability | 99% uptime target |
| Language | Filipino and English content supported |

## 9. Business Rules

| Rule | Detail |
| :--- | :--- |
| Onboarding Fee | PHP 2,500 one-time training fee |
| Annual Subscription | Annual renewal fee required (amount TBD) |
| Module Gating | Sequential unlocking; no skip allowed |
| Inactivity Policy | 30-day grace period before downgrade to guest access |
| Referral Credit | Tracked via unique links; commission at owner discretion |
| Content Ownership | All materials remain the intellectual property of Protein Hub |
| Chatbot Scope | Handles Tier 1 inquiries only; sensitive matters routed to owner |
| Presentation Slots | Tuesday, Thursday, Saturday (specific times set by owner) |

## 12. Assumptions & Constraints

- **Content Readiness**: Owner will supply all video content, product guides, and module materials.
- **Budget**: Modest; platform should use proven, cost-effective technology stack.
- **Owner Involvement**: Owner will review and approve content structure before Phase 1 launch.
- **Internet Access**: Target distributors have reliable mobile internet access.
- **Facebook Dependency**: Primary source of leads; platform should integrate with Facebook for registration links.
- **Subscription Pricing**: Annual fee amount is determined by the owner and may be adjusted.
