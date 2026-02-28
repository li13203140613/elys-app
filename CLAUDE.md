# CLAUDE.md - Elys 邀请码销售网站

## 项目概述

Elys 邀请码销售网站 - 售卖 AI 社交 App "Elys" 的邀请码。

- **框架**: Next.js 15 (App Router)
- **UI**: Tailwind CSS + shadcn/ui
- **支付**: Stripe (支付宝/微信支付/信用卡)
- **数据库**: Supabase (PostgreSQL)
- **部署**: Vercel

## 核心功能

1. 首页展示邀请码，前 5 位有老虎机滚动动画，最后 1 位用 `*` 遮蔽
2. 固定价格 ¥9.9/个，Stripe 支付
3. 匿名购买，无需登录
4. 支付成功后揭示完整邀请码
5. 管理后台 (`/admin`) 管理邀请码

## 项目结构

```
app/
  layout.tsx          - 根布局
  page.tsx            - 首页
  globals.css         - 全局样式 + 动画
  success/page.tsx    - 支付成功页
  admin/page.tsx      - 管理后台
  api/
    codes/route.ts                    - 获取可用邀请码
    payment/create-session/route.ts   - 创建 Stripe 支付会话
    payment/webhook/route.ts          - Stripe webhook
    order/[sessionId]/route.ts        - 查询订单状态
    admin/codes/route.ts              - 管理员 CRUD

components/
  CodeDigit.tsx       - 老虎机数字滚动
  CodeCard.tsx        - 邀请码卡片
  CodeGrid.tsx        - 邀请码网格
  PaymentButton.tsx   - 购买按钮
  Header.tsx / Footer.tsx

lib/
  payment/stripe.ts   - Stripe 客户端
  payment/service.ts  - 支付业务逻辑
  supabase/           - Supabase 客户端 (admin/server/client)
  utils.ts            - 工具函数
```

## 数据库

迁移脚本: `supabase/migration.sql`

- `invitation_codes` - 邀请码表 (id, code, price, status, stripe_session_id, buyer_email, etc.)
- `orders` - 订单表 (id, code_id, stripe_session_id, amount, status, buyer_email, etc.)

## 环境变量

见 `.env.example`

## 开发命令

```bash
pnpm dev      # 开发模式
pnpm build    # 构建
pnpm start    # 生产模式
```

## Code Update Log

| Date | Module | Changes | Scope | Note |
|------|----------|----------|----------|------|
| 2026-02-28 | Docs | Modified: CLAUDE.md | CLAUDE.md | AI Auto |
| 2026-02-28 | SEO Pages | Created: 7 SEO pages + 6 shared components | app/elys-ai, app/elys-app, app/download, app/elys-invitation-code, app/register, app/elys-social, app/elys-invite-code, components/seo/ | AI Auto |
| 2026-02-28 | Components | Modified: Header.tsx, Footer.tsx | components/Header.tsx, components/Footer.tsx | AI Auto - Added nav links and footer internal links |
| 2026-02-28 | Other | Modified: sitemap.ts | app/sitemap.ts | AI Auto - Added 7 new SEO URLs |
| 2026-02-28 | Components | Modified: SeoCta.tsx | components/seo/SeoCta.tsx | AI Auto |
| 2026-02-28 | Components | Modified: SeoFaq.tsx | components/seo/SeoFaq.tsx | AI Auto |
| 2026-02-28 | Components | Modified: SeoSection.tsx | components/seo/SeoSection.tsx | AI Auto |
| 2026-02-28 | Components | Modified: SeoHero.tsx | components/seo/SeoHero.tsx | AI Auto |
| 2026-02-28 | Components | Modified: SeoPageLayout.tsx | components/seo/SeoPageLayout.tsx | AI Auto |
| 2026-02-28 | Library | Modified: i18n.ts | lib/i18n.ts | AI Auto |
| 2026-02-17 | Components | Modified: CodeCard.tsx | components/CodeCard.tsx | AI Auto |
| 2026-02-17 | Other | Modified: tmp-update-codes.mjs | tmp-update-codes.mjs | AI Auto |
| 2026-02-15 | Other | Modified: robots.ts | app/robots.ts | AI Auto |
| 2026-02-15 | Other | Modified: sitemap.ts | app/sitemap.ts | AI Auto |
| 2026-02-15 | Library | Modified: stripe.ts | lib/payment/stripe.ts | AI Auto |
| 2026-02-14 | Other | Modified: .env.example | .env.example | AI Auto |
| 2026-02-14 | Library | Modified: db.ts | lib/db.ts | AI Auto |
| 2026-02-14 | Other | Modified: tmp-shot.mjs | tmp-shot.mjs | AI Auto |
| 2026-02-14 | Components | Modified: CodeGrid.tsx | components/CodeGrid.tsx | AI Auto |
| 2026-02-14 | Other | Modified: page.tsx | app/success/page.tsx | AI Auto |
| 2026-02-14 | Components | Modified: Footer.tsx | components/Footer.tsx | AI Auto |
| 2026-02-14 | Components | Modified: Header.tsx | components/Header.tsx | AI Auto |
| 2026-02-14 | Other | Modified: layout.tsx | app/layout.tsx | AI Auto |
| 2026-02-14 | Tests | Modified: test-screenshot.mjs | test-screenshot.mjs | AI Auto |
| 2026-02-14 | Other | Modified: .env | .env | AI Auto |
| 2026-02-14 | All | 初始化项目 | 全部文件 | 从 sorawatermarkremovers 改造 |
