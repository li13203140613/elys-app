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
  faqTitle: string
  faqItems: Array<{ q: string; a: string }>
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
    faqTitle: '关于 Elys 邀请码的常见问题',
    faqItems: [
      {
        q: '什么是 Elys 邀请码？',
        a: 'Elys 邀请码是注册 Elys App 所需的专属激活凭证。Elys 采用邀请制注册机制，您需要持有有效的 Elys 邀请码才能完成 Elys 账号注册，开始体验 Elys 的全部功能。每个 Elys 邀请码仅限使用一次。',
      },
      {
        q: 'Elys 是什么？Elys 能干什么？',
        a: 'Elys 是一款新一代 AI 社交应用，利用先进的人工智能技术为用户提供智能社交匹配、AI 辅助对话等创新功能。通过 Elys，您可以更高效地发现志同道合的朋友，享受由 AI 驱动的全新社交体验。目前 Elys 仅对持有 Elys 邀请码的用户开放注册。',
      },
      {
        q: '如何使用 Elys 邀请码完成注册？',
        a: '购买 Elys 邀请码后，下载并打开 Elys App，在注册页面输入您获得的 Elys 邀请码即可完成激活。Elys 邀请码激活后将与您的 Elys 账号绑定，请在使用前妥善保管您的 Elys 邀请码。',
      },
      {
        q: '购买 Elys 邀请码后多久能收到？',
        a: '在本站购买 Elys 邀请码，支付成功后页面会立即显示完整的 Elys 邀请码，全程自动处理无需等待。建议您收到 Elys 邀请码后立即复制保存，避免页面关闭后丢失。',
      },
      {
        q: 'Elys 邀请码支持退款吗？',
        a: '由于 Elys 邀请码属于虚拟数字商品，支付完成后系统会立即揭示完整的 Elys 邀请码，因此已购买的 Elys 邀请码不支持退款。请您在购买 Elys 邀请码前确认需求。',
      },
      {
        q: '为什么注册 Elys 需要邀请码？',
        a: 'Elys 采用邀请码注册机制是为了保障 Elys 社区的用户质量和体验。通过 Elys 邀请码制度，Elys 团队能够有效控制用户增长节奏，确保每一位 Elys 用户都能获得高品质的 AI 社交体验。随着 Elys 平台发展，未来可能会逐步开放注册。',
      },
    ],
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
    faqTitle: '關於 Elys 邀請碼的常見問題',
    faqItems: [
      {
        q: '什麼是 Elys 邀請碼？',
        a: 'Elys 邀請碼是註冊 Elys App 所需的專屬啟用憑證。Elys 採用邀請制註冊機制，您需要持有有效的 Elys 邀請碼才能完成 Elys 帳號註冊，開始體驗 Elys 的全部功能。每個 Elys 邀請碼僅限使用一次。',
      },
      {
        q: 'Elys 是什麼？Elys 能做什麼？',
        a: 'Elys 是一款新一代 AI 社交應用，利用先進的人工智能技術為用戶提供智能社交配對、AI 輔助對話等創新功能。透過 Elys，您可以更高效地發現志同道合的朋友，享受由 AI 驅動的全新社交體驗。目前 Elys 僅對持有 Elys 邀請碼的用戶開放註冊。',
      },
      {
        q: '如何使用 Elys 邀請碼完成註冊？',
        a: '購買 Elys 邀請碼後，下載並開啟 Elys App，在註冊頁面輸入您取得的 Elys 邀請碼即可完成啟用。Elys 邀請碼啟用後將與您的 Elys 帳號綁定，請在使用前妥善保管您的 Elys 邀請碼。',
      },
      {
        q: '購買 Elys 邀請碼後多久能收到？',
        a: '在本站購買 Elys 邀請碼，付款成功後頁面會立即顯示完整的 Elys 邀請碼，全程自動處理無需等待。建議您收到 Elys 邀請碼後立即複製保存，避免頁面關閉後遺失。',
      },
      {
        q: 'Elys 邀請碼支持退款嗎？',
        a: '由於 Elys 邀請碼屬於虛擬數位商品，付款完成後系統會立即揭示完整的 Elys 邀請碼，因此已購買的 Elys 邀請碼不支持退款。請您在購買 Elys 邀請碼前確認需求。',
      },
      {
        q: '為什麼註冊 Elys 需要邀請碼？',
        a: 'Elys 採用邀請碼註冊機制是為了保障 Elys 社區的用戶質量和體驗。透過 Elys 邀請碼制度，Elys 團隊能夠有效控制用戶增長節奏，確保每一位 Elys 用戶都能獲得高品質的 AI 社交體驗。隨著 Elys 平台發展，未來可能會逐步開放註冊。',
      },
    ],
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
    faqTitle: 'Elys 招待コードに関するよくある質問',
    faqItems: [
      {
        q: 'Elys 招待コードとは？',
        a: 'Elys 招待コードは、Elys App に登録するために必要な専用アクティベーションコードです。Elys は招待制を採用しており、有効な Elys 招待コードがなければ Elys アカウントを作成できません。各 Elys 招待コードは1回のみ使用可能です。',
      },
      {
        q: 'Elys とは？Elys で何ができる？',
        a: 'Elys は次世代の AI ソーシャルアプリです。高度な AI 技術を活用し、スマートなマッチングや AI アシスタント付きチャットなどの革新的な機能を提供します。Elys を通じて、趣味の合う仲間を見つけ、AI が支援する新しいソーシャル体験を楽しめます。現在 Elys は招待コードをお持ちの方のみ登録可能です。',
      },
      {
        q: 'Elys 招待コードの使い方は？',
        a: 'Elys 招待コードを購入後、Elys App をダウンロードして開き、登録画面で取得した Elys 招待コードを入力するとアクティベーションが完了します。Elys 招待コードはアカウントに紐づけられますので、使用前に大切に保管してください。',
      },
      {
        q: 'Elys 招待コードはいつ届く？',
        a: '本サイトで Elys 招待コードをご購入いただくと、お支払い完了後すぐに完全な Elys 招待コードが画面に表示されます。届いた Elys 招待コードはすぐにコピーして保存することをおすすめします。',
      },
      {
        q: 'Elys 招待コードは返金できる？',
        a: 'Elys 招待コードはデジタル商品のため、お支払い完了後すぐに完全な Elys 招待コードが表示されます。そのため、購入済みの Elys 招待コードの返金には対応しておりません。ご購入前にご確認ください。',
      },
      {
        q: 'なぜ Elys は招待コードが必要？',
        a: 'Elys が招待コード制を採用しているのは、Elys コミュニティのユーザー品質と体験を守るためです。Elys 招待コード制度により、Elys チームはユーザーの成長ペースを管理し、すべての Elys ユーザーに高品質な AI ソーシャル体験を提供できます。',
      },
    ],
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
    faqTitle: 'Frequently Asked Questions About Elys Invitation Codes',
    faqItems: [
      {
        q: 'What is an Elys invitation code?',
        a: 'An Elys invitation code is a unique activation credential required to register on the Elys App. Elys uses an invite-only registration system, so you need a valid Elys invitation code to create your Elys account and access all of Elys\'s features. Each Elys invitation code can only be used once.',
      },
      {
        q: 'What is Elys? What can Elys do?',
        a: 'Elys is a next-generation AI social app that leverages advanced artificial intelligence to offer smart social matching, AI-assisted conversations, and other innovative features. With Elys, you can efficiently discover like-minded friends and enjoy a brand-new AI-powered social experience. Currently, Elys is only open to users who hold a valid Elys invitation code.',
      },
      {
        q: 'How do I use an Elys invitation code to sign up?',
        a: 'After purchasing an Elys invitation code, download and open the Elys App, then enter your Elys invitation code on the registration page to complete activation. Once used, the Elys invitation code will be bound to your Elys account. Please keep your Elys invitation code safe before use.',
      },
      {
        q: 'How soon will I receive my Elys invitation code after purchase?',
        a: 'When you purchase an Elys invitation code on this site, the full Elys invitation code is displayed on screen instantly after payment — no waiting required. We recommend copying and saving your Elys invitation code immediately to avoid losing it if the page is closed.',
      },
      {
        q: 'Can I get a refund for an Elys invitation code?',
        a: 'Since Elys invitation codes are digital products, the full Elys invitation code is revealed immediately upon payment. Therefore, purchased Elys invitation codes are non-refundable. Please confirm your needs before purchasing an Elys invitation code.',
      },
      {
        q: 'Why does Elys require an invitation code to register?',
        a: 'Elys uses an invitation code system to maintain the quality of the Elys community and user experience. Through the Elys invitation code mechanism, the Elys team can effectively manage user growth and ensure every Elys user enjoys a premium AI social experience. As the Elys platform grows, open registration may become available in the future.',
      },
    ],
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
