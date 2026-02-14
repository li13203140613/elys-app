-- Elys 邀请码销售系统 - 数据库迁移 (Neon PostgreSQL)
-- 在 Neon SQL Editor 中执行此脚本

-- 表：invitation_codes
CREATE TABLE IF NOT EXISTS invitation_codes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code VARCHAR(6) NOT NULL UNIQUE,
  price DECIMAL(10,2) NOT NULL DEFAULT 9.90,
  status VARCHAR(20) NOT NULL DEFAULT 'available',
  stripe_session_id TEXT,
  buyer_email TEXT,
  reserved_at TIMESTAMPTZ,
  sold_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 表：orders
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code_id UUID REFERENCES invitation_codes(id),
  stripe_session_id TEXT NOT NULL UNIQUE,
  amount DECIMAL(10,2) NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'pending',
  buyer_email TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

-- 索引
CREATE INDEX IF NOT EXISTS idx_codes_status ON invitation_codes(status);
CREATE INDEX IF NOT EXISTS idx_codes_stripe_session ON invitation_codes(stripe_session_id);
CREATE INDEX IF NOT EXISTS idx_orders_stripe_session ON orders(stripe_session_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
