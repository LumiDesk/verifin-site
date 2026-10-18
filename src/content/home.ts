export const quickFeatures = [
  {
    key: 'math',
    title: '算式直接记',
    description: '数字键盘支持四则运算，金额不用先算好，实时就能看到结果。',
    example: '500 + 800 = 1,300.00',
  },
  {
    key: 'ai',
    title: '一句话记账',
    description: '说清楚花了什么，AI 帮你整理分类、账户和备注草稿，确认后才落账。',
    example: '昨天打车 32 → 交通 / 32.00',
  },
  {
    key: 'ocr',
    title: '截图识账',
    description: '账单截图交给本机离线 OCR，原图不上传；需要时再由你配置的 AI 解析。',
    example: '截图 → 本机识别 → 待确认草稿',
  },
] as const

export const dashboardPoints = [
  '日常、月统计、年统计三套看板',
  '预算执行、分类排行与日趋势',
  '资产、信用账户与还款提醒',
  '多币种按本地维护的汇率折算',
] as const

export const importSources = [
  '支付宝',
  '微信',
  '一木记账',
  '钱迹',
  '薄荷记账',
  'Tally',
  'Veri Fin CSV',
] as const

export const screenshots = [
  {
    name: 'home',
    alt: 'Veri Fin 首页：本月支出、最近交易与快捷记账',
    label: '首页',
    description: '本月支出、最近交易和快捷记账',
  },
  {
    name: 'assets',
    alt: 'Veri Fin 资产页：净资产、账户与信用账户',
    label: '资产',
    description: '净资产、账户分组与信用账户',
  },
  {
    name: 'reports',
    alt: 'Veri Fin 看板页：本月收支、预算与分类排行',
    label: '看板',
    description: '收支、预算执行与分类排行',
  },
] as const

export function screenshotSrc(name: (typeof screenshots)[number]['name'], theme: 'light' | 'dark') {
  return `/screenshots/${name}-${theme}.jpg`
}
