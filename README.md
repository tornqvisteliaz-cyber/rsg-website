# RSG Website - Rotaidem Simulation Group

A complete, premium Next.js 16 website for RSG with a powerful Admin Dashboard.

## Features Implemented

- **Public Website**: Home, About, Aircraft, Features, Gallery, News, Roadmap - all fully editable from admin.
- **Premium Dark Design**: Modern aviation-inspired UI with smooth animations (Framer Motion), lots of whitespace, rounded elements.
- **Fully Functional Admin Dashboard** (/admin):
  - Dashboard with live stats
  - Design & Branding: Change logo, colors, hero image & text live
  - Content Editor: Edit all text on About, Aircraft and Features pages
  - Posts & Announcements: Create, publish/hide, delete news
  - Products / Shop: Add/edit products, visitors can "buy" from Aircraft page
  - Navigation Editor: Show/hide and reorder menu items
  - Users & Accounts: Shows current logged in user
  - Orders: See and manage customer orders
  - Media Manager: Add image URLs to be used site-wide

## Login (as specified)

**Owner (full access)**:
- Email: Tornqvisteliaz@gmail.com
- Password: Halsband1983

Any other email + password works as a normal user (no admin access).

## How to Run

1. Open terminal in this folder:
   ```bash
   npm install
   npm run dev
   ```

2. Open http://localhost:3000

3. Go to http://localhost:3000/login to sign in as owner and access /admin

## Persistence

All data (texts, images, posts, products, orders, settings) is saved in browser **localStorage**. 
It survives page refreshes and even browser restarts.

For production (Vercel):
- Deploy easily to Vercel
- Replace localStorage with Vercel KV, Supabase, or PlanetScale for real persistence across devices
- Add real image uploads with Vercel Blob
- Upgrade auth with NextAuth.js or Clerk if needed

## Tech Stack

- Next.js 16 + TypeScript + Tailwind CSS
- Framer Motion (animations)
- Sonner (beautiful toasts)
- Lucide Icons
- 100% client-side state with Context + localStorage (easy to upgrade)

## Next Steps / Production Recommendations

- Connect a real database (Supabase recommended - free tier is great)
- Add real file uploads (Vercel Blob)
- Add email notifications for new orders
- Add more aircraft in the future (easy to extend the data model)
- Consider adding a proper CMS later if content grows a lot

Built according to your exact specification on June 19, 2026.

Enjoy building the future of flight simulation! ✈️