export const SUPPORTED_LANGUAGES = ['zh-CN', 'zh-HK', 'ja', 'en'] as const
export type AppLanguage = (typeof SUPPORTED_LANGUAGES)[number]

export const SUPPORTED_CURRENCIES = ['cny', 'jpy', 'hkd', 'usd'] as const
export type AppCurrency = (typeof SUPPORTED_CURRENCIES)[number]

export const LANGUAGE_OPTIONS: Array<{ value: AppLanguage; label: string }> = [
  { value: 'zh-CN', label: '简体中文' },
  { value: 'zh-HK', label: '繁體中文' },
  { value: 'ja', label: '日本語' },
  { value: 'en', label: 'English' },
]

export const CURRENCY_OPTIONS: Array<{ value: AppCurrency; label: string }> = [
  { value: 'cny', label: 'CNY 人民币' },
  { value: 'jpy', label: 'JPY 日元' },
  { value: 'hkd', label: 'HKD 港币' },
  { value: 'usd', label: 'USD 美元' },
]

const DEFAULT_CURRENCY_BY_LANGUAGE: Record<AppLanguage, AppCurrency> = {
  'zh-CN': 'cny',
  'zh-HK': 'hkd',
  ja: 'jpy',
  en: 'usd',
}

const EXCHANGE_RATE_FROM_USD: Record<AppCurrency, number> = {
  usd: 1,
  cny: 7.2,
  jpy: 150,
  hkd: 7.8,
}

const DECIMAL_DIGITS_BY_CURRENCY: Record<AppCurrency, number> = {
  usd: 2,
  cny: 2,
  hkd: 2,
  jpy: 0,
}

export interface TranslationPack {
  navTitle: string
  languageLabel: string
  currencyLabel: string
  heroBadge: string
  heroTitle: string
  heroSubtitle: string
  heroSupport: string
  cardAvailable: string
  buyNow: string
  processing: string
  perCode: string
  loading: string
  fetchFailed: string
  noCodesTitle: string
  noCodesHint: string
  footerLeft: string
  footerRight: string
  successCheckingTitle: string
  successCheckingDesc: string
  successTitle: string
  successDesc: string
  copyCode: string
  copySuccess: string
  keepSafe: string
  useHint: string
  backHome: string
  supportPrefix: string
  supportSuffix: string
  expiredTitle: string
  expiredDesc: string
  failedTitle: string
  invalidLink: string
  timeoutDesc: string
  purchaseError: string
  createSessionError: string
}

export const TRANSLATIONS: Record<AppLanguage, TranslationPack> = {
  'zh-CN': {
    navTitle: 'Elys 邀请码',
    languageLabel: '语言',
    currencyLabel: '币种',
    heroBadge: 'Elys 邀请码限量发售中',
    heroTitle: '购买 Elys 邀请码',
    heroSubtitle: 'Elys 新一代 AI 社交应用，购买邀请码后即可激活注册。',
    heroSupport: '支持信用卡、支付宝、微信支付，付款后立即显示完整邀请码。',
    cardAvailable: '当前可购买',
    buyNow: '立即购买',
    processing: '处理中...',
    perCode: '/个',
    loading: '加载中...',
    fetchFailed: '获取邀请码失败',
    noCodesTitle: '暂无可用 Elys 邀请码',
    noCodesHint: '邀请码会不定期补货，请稍后再来。',
    footerLeft: 'Elys 新一代 AI 社交应用 | 官方邀请码购买渠道',
    footerRight: '安全支付由 Stripe 提供',
    successCheckingTitle: '正在确认支付...',
    successCheckingDesc: '请稍候，我们正在验证您的支付状态。',
    successTitle: 'Elys 邀请码购买成功',
    successDesc: '这是您的邀请码，请妥善保存。',
    copyCode: '复制邀请码',
    copySuccess: '邀请码已复制到剪贴板',
    keepSafe: '请妥善保管您的邀请码。',
    useHint: '在 Elys App 注册页面输入邀请码即可激活。',
    backHome: '返回首页',
    supportPrefix: '如需帮助，请联系',
    supportSuffix: '获取支持。',
    expiredTitle: '支付会话已过期',
    expiredDesc: '超过 5 分钟未支付，邀请码已自动释放，请重新下单。',
    failedTitle: '支付未完成',
    invalidLink: '无效的访问链接。',
    timeoutDesc: '支付验证超时，请联系支持。',
    purchaseError: '支付失败，请稍后重试',
    createSessionError: '创建支付会话失败',
  },
  'zh-HK': {
    navTitle: 'Elys 邀請碼',
    languageLabel: '語言',
    currencyLabel: '幣種',
    heroBadge: 'Elys 邀請碼限量發售中',
    heroTitle: '購買 Elys 邀請碼',
    heroSubtitle: 'Elys 新一代 AI 社交應用，購買邀請碼後即可啟用註冊。',
    heroSupport: '支援信用卡、支付寶、微信支付，付款後立即顯示完整邀請碼。',
    cardAvailable: '目前可購買',
    buyNow: '立即購買',
    processing: '處理中...',
    perCode: '/個',
    loading: '載入中...',
    fetchFailed: '取得邀請碼失敗',
    noCodesTitle: '暫無可用 Elys 邀請碼',
    noCodesHint: '邀請碼會不定期補貨，請稍後再試。',
    footerLeft: 'Elys 新一代 AI 社交應用 | 官方邀請碼購買渠道',
    footerRight: '安全支付由 Stripe 提供',
    successCheckingTitle: '正在確認付款...',
    successCheckingDesc: '請稍候，我們正在驗證你的付款狀態。',
    successTitle: 'Elys 邀請碼購買成功',
    successDesc: '這是你的邀請碼，請妥善保存。',
    copyCode: '複製邀請碼',
    copySuccess: '邀請碼已複製到剪貼簿',
    keepSafe: '請妥善保管你的邀請碼。',
    useHint: '在 Elys App 註冊頁輸入邀請碼即可啟用。',
    backHome: '返回首頁',
    supportPrefix: '如需協助，請聯絡',
    supportSuffix: '取得支援。',
    expiredTitle: '付款會話已過期',
    expiredDesc: '超過 5 分鐘未付款，邀請碼已自動釋放，請重新下單。',
    failedTitle: '付款未完成',
    invalidLink: '無效的訪問連結。',
    timeoutDesc: '付款驗證逾時，請聯絡支援。',
    purchaseError: '付款失敗，請稍後重試',
    createSessionError: '建立付款會話失敗',
  },
  ja: {
    navTitle: 'Elys 招待コード',
    languageLabel: '言語',
    currencyLabel: '通貨',
    heroBadge: 'Elys 招待コードは数量限定',
    heroTitle: 'Elys 招待コードを購入',
    heroSubtitle: 'Elys は次世代 AI ソーシャルアプリ。購入後すぐ登録に利用できます。',
    heroSupport: 'クレジットカード、Alipay、WeChat Pay に対応。支払い後すぐにコードを表示します。',
    cardAvailable: '購入可能',
    buyNow: '今すぐ購入',
    processing: '処理中...',
    perCode: '/件',
    loading: '読み込み中...',
    fetchFailed: '招待コードの取得に失敗しました',
    noCodesTitle: '現在利用可能な Elys 招待コードはありません',
    noCodesHint: '在庫は不定期に補充されます。しばらくしてから再度お試しください。',
    footerLeft: 'Elys 次世代 AI ソーシャルアプリ | 公式招待コード購入窓口',
    footerRight: '安全な決済は Stripe が提供',
    successCheckingTitle: '支払いを確認中...',
    successCheckingDesc: 'しばらくお待ちください。支払い状況を確認しています。',
    successTitle: 'Elys 招待コードの購入が完了しました',
    successDesc: 'こちらがあなたの招待コードです。安全に保管してください。',
    copyCode: '招待コードをコピー',
    copySuccess: '招待コードをコピーしました',
    keepSafe: '招待コードは大切に保管してください。',
    useHint: 'Elys App の登録画面で入力すると有効化できます。',
    backHome: 'ホームへ戻る',
    supportPrefix: 'サポートが必要な場合は',
    supportSuffix: 'までご連絡ください。',
    expiredTitle: '決済セッションの有効期限が切れました',
    expiredDesc: '5分以内に支払いが完了しなかったため、コードは自動で解放されました。',
    failedTitle: '支払いは完了していません',
    invalidLink: '無効なアクセスリンクです。',
    timeoutDesc: '支払い確認がタイムアウトしました。サポートに連絡してください。',
    purchaseError: '支払いに失敗しました。再度お試しください',
    createSessionError: '決済セッションの作成に失敗しました',
  },
  en: {
    navTitle: 'Elys Invitation Code',
    languageLabel: 'Language',
    currencyLabel: 'Currency',
    heroBadge: 'Elys invitation codes are limited',
    heroTitle: 'Buy an Elys Invitation Code',
    heroSubtitle: 'Elys is a next-gen AI social app. Activate your signup right after purchase.',
    heroSupport: 'Supports card, Alipay, and WeChat Pay. Your full code is shown right after payment.',
    cardAvailable: 'Available now',
    buyNow: 'Buy Now',
    processing: 'Processing...',
    perCode: '/code',
    loading: 'Loading...',
    fetchFailed: 'Failed to load invitation codes',
    noCodesTitle: 'No Elys invitation codes available right now',
    noCodesHint: 'Stock is replenished from time to time. Please check back later.',
    footerLeft: 'Elys next-gen AI social app | Official invitation code checkout',
    footerRight: 'Secure payment powered by Stripe',
    successCheckingTitle: 'Confirming payment...',
    successCheckingDesc: 'Please wait while we verify your payment status.',
    successTitle: 'Purchase successful',
    successDesc: 'Here is your Elys invitation code. Please keep it safe.',
    copyCode: 'Copy Code',
    copySuccess: 'Invitation code copied',
    keepSafe: 'Please store your invitation code safely.',
    useHint: 'Enter this code on the Elys app signup page to activate.',
    backHome: 'Back to Home',
    supportPrefix: 'Need help? Contact',
    supportSuffix: 'for support.',
    expiredTitle: 'Payment session expired',
    expiredDesc: 'Payment was not completed within 5 minutes. The code has been released automatically.',
    failedTitle: 'Payment not completed',
    invalidLink: 'Invalid access link.',
    timeoutDesc: 'Payment verification timed out. Please contact support.',
    purchaseError: 'Payment failed. Please try again',
    createSessionError: 'Failed to create payment session',
  },
}

export function normalizeLanguage(input?: string | null): AppLanguage {
  const raw = (input || '').trim().toLowerCase()

  if (raw.startsWith('zh-hk') || raw.startsWith('zh-tw') || raw.startsWith('zh-mo')) {
    return 'zh-HK'
  }
  if (raw.startsWith('zh')) {
    return 'zh-CN'
  }
  if (raw.startsWith('ja')) {
    return 'ja'
  }

  return 'en'
}

export function normalizeCurrency(input?: string | null): AppCurrency {
  const raw = (input || '').trim().toLowerCase()

  if (raw === 'cny' || raw === 'jpy' || raw === 'hkd' || raw === 'usd') {
    return raw
  }
  return 'usd'
}

export function getDefaultCurrencyByLanguage(language: AppLanguage): AppCurrency {
  return DEFAULT_CURRENCY_BY_LANGUAGE[language]
}

export function convertUsdToCurrency(usdAmount: number, currency: AppCurrency): number {
  const converted = Number(usdAmount) * EXCHANGE_RATE_FROM_USD[currency]
  const digits = DECIMAL_DIGITS_BY_CURRENCY[currency]
  const factor = 10 ** digits
  return Math.round(converted * factor) / factor
}

export function toMinorUnits(amount: number, currency: AppCurrency): number {
  if (DECIMAL_DIGITS_BY_CURRENCY[currency] === 0) {
    return Math.round(amount)
  }
  return Math.round(amount * 100)
}

export function formatCurrency(
  amount: number,
  currency: AppCurrency,
  language: AppLanguage
): string {
  const localeByLanguage: Record<AppLanguage, string> = {
    'zh-CN': 'zh-CN',
    'zh-HK': 'zh-HK',
    ja: 'ja-JP',
    en: 'en-US',
  }

  const digits = DECIMAL_DIGITS_BY_CURRENCY[currency]
  return new Intl.NumberFormat(localeByLanguage[language], {
    style: 'currency',
    currency: currency.toUpperCase(),
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(amount)
}

export function getStripeLocale(language: AppLanguage): 'zh' | 'ja' | 'en' {
  if (language === 'ja') {
    return 'ja'
  }
  if (language === 'en') {
    return 'en'
  }
  return 'zh'
}
