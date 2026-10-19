import type { SiteContent } from '../types'

export const zh = {
  meta: {
    home: {
      title: 'Veri Fin — 完全免费、本地优先的 Android 记账应用',
      description:
        'Veri Fin 是一款完全免费、无账号、无广告的 Android 记账应用。账本保存在本地，支持多账本、多币种、预算、资产、AI 记账与加密备份。',
    },
    notFound: {
      title: '页面不存在 · Veri Fin',
      description: '你访问的页面不存在。回到首页继续了解 Veri Fin，或前往 GitHub 查看项目。',
    },
  },
  nav: {
    features: '功能',
    privacy: '隐私',
    screens: '界面',
    faq: 'FAQ',
    download: '下载',
  },
  header: {
    home: 'Veri Fin 首页',
    mainNav: '主导航',
    mobileNav: '移动端导航',
    skip: '跳到主要内容',
    github: '在 GitHub 查看 Veri Fin',
    download: '免费下载',
    menuOpen: '打开导航菜单',
    menuClose: '关闭导航菜单',
  },
  theme: {
    label: '主题',
    settings: '主题设置',
    system: '跟随系统',
    light: '浅色',
    dark: '深色',
    current: '当前',
  },
  language: {
    label: '语言',
    settings: '语言设置',
  },
  hero: {
    badge: 'Android · 完全免费 · 本地优先',
    titleLead: '把账记清楚，',
    titleAccent: '把数据留给自己。',
    description:
      'Veri Fin 是一款完全免费、无账号、无广告的 Android 记账应用。账本保存在你的手机里，备份、导入和 AI 都由你决定。',
    downloadCta: '免费下载 Android 版',
    featuresCta: '看看它能做什么',
    note: '无需注册 · 离线记账 · 无广告',
    phoneBadges: {
      local: '本地存储',
      multiCurrency: '多币种',
      noAds: '无广告',
    },
  },
  trust: [
    { label: '完全免费', detail: '没有试用期' },
    { label: '无账号', detail: '打开就能用' },
    { label: '本地优先', detail: '账本存在手机里' },
    { label: 'GPL-3.0', detail: '开源可审计' },
  ],
  quick: {
    eyebrow: '快速记账',
    title: '想到就记，三秒落账。',
    description: '把输入成本降到最低，才更愿意坚持记下去。',
    exampleLabel: '示例',
    note: 'AI 记账与截图识账均为可选能力，需要你自己配置服务商；所有结果都会先进入待确认草稿。',
    items: [
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
    ],
  },
  dashboard: {
    eyebrow: '预算与资产',
    title: '钱去了哪里，一眼看清。',
    description: '从今天的开销到一整年的趋势，从预算执行到信用账户，都在同一套清楚的视图里。',
    points: [
      '日常、月统计、年统计三套看板',
      '预算执行、分类排行与日趋势',
      '资产、信用账户与还款提醒',
      '多币种按本地维护的汇率折算',
    ],
    balanceLabel: '本月结余',
    budgetLabel: '预算已用',
    netWorthLabel: '净资产',
  },
  privacy: {
    eyebrow: '隐私与数据',
    title: '你的账本，不该成为别人的数据。',
    description:
      '没有账号、没有广告、没有遥测。账目只存本机；只有你主动开启备份或 AI 时，数据才会发往你选择的目的地。',
    badges: {
      appLock: '应用锁',
      sqlite: '本地 SQLite',
      backup: 'AES-GCM 备份',
    },
    flow: {
      phone: '你的手机',
      storage: '本地 SQLite · 附件文件',
      onlyWhen: '仅在你主动开启时',
      webdav: 'WebDAV 备份',
      webdavDetail: '你选择的目录与口令',
      ai: 'AI 服务',
      aiDetail: '你自己配置的兼容端点',
      note: '截图文字在本机离线识别，原图不上传；AI 只收到必要的识别文本或账目摘要。',
    },
    stats: [{ label: '账号' }, { label: '广告' }, { label: '遥测' }],
  },
  import: {
    eyebrow: '迁移',
    title: '换过来，不用重新开始。',
    description:
      '支持主流账单格式，先预览再导入。账户、分类和标签都可以映射到现有结构，不必把旧账一笔笔重录。',
    sourcesLabel: '支持的账单来源',
    sources: ['支付宝', '微信', '一木记账', '钱迹', '薄荷记账', 'Tally', 'Veri Fin CSV'],
    steps: [
      { title: '选择来源', detail: '先选账单平台，再选文件。' },
      { title: '预览校验', detail: '排除交易，映射账户与分类。' },
      { title: '确认落库', detail: '确认后才写入你的账本。' },
    ],
    note: '导入只生成预览，确认后才写入账本；外币缺率时可以在预览前补齐。',
  },
  screens: {
    eyebrow: '界面',
    title: '真实界面，不靠想象。',
    description: '首页、资产与看板都是应用里实际使用的工作区，并会随站点主题切换明暗样式。',
    items: [
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
    ],
  },
  openSource: {
    eyebrow: '开源与支持',
    title: '免费，不是试用。',
    description:
      '没有会员解锁，也没有把用户数据变成生意。代码公开，数据可迁移；如果它帮到了你，可以自愿支持开发。',
    codeTitle: '代码在阳光下',
    codeBody:
      'Veri Fin 以 GPL-3.0-or-later 发布。你可以审计它如何处理数据，也可以在遵守许可证的前提下继续改进。',
    codeCta: '查看 GitHub',
    supportTitle: '支持它继续更新',
    supportBody: '赞助不会解锁功能，也不会改变你的数据。它只是让这款干净的工具能继续维护下去。',
    supportCta: '在爱发电支持',
  },
  faq: {
    eyebrow: '常见问题',
    title: '下载前，你可能想知道。',
    description: '关于平台、数据、迁移和 AI 的几个直接回答。',
    more: '还有别的问题？到',
    linkLabel: 'GitHub Issues',
    items: [
      {
        question: 'Veri Fin 支持哪些平台？',
        answer:
          '目前只正式交付 Android 应用。官网提供的 GitHub Releases 安装包为 arm64-v8a APK；如果后续通过 Google Play 分发，安装包会按设备架构分发（以实际上架状态为准）。',
      },
      {
        question: '真的完全免费吗？',
        answer:
          '是。没有内购、订阅、广告，也没有会员解锁内容。项目以 GPL-3.0-or-later 开源发布，你可以在 GitHub 查看完整源码。',
      },
      {
        question: '数据会被上传吗？',
        answer:
          '默认不会。账目只保存在设备本地的 SQLite 数据库和附件目录中。只有你主动启用 WebDAV 备份，或配置 AI 功能时，必要的数据才会发送到你选择的目标。',
      },
      {
        question: '换手机时怎么迁移数据？',
        answer:
          '请使用应用内的导出/恢复或 WebDAV 备份。不要把系统备份、换机搬家或第三方备份 App 直接搬运的应用数据当作 Veri Fin 备份，这些产物不是本应用的备份格式，可能损坏或无法导入。',
      },
      {
        question: 'AI 是必需的吗？需要额外付费吗？',
        answer:
          '不是必需，你完全可以不配置 AI。启用 AI 记账或 AI 财务助手时，需要自行提供兼容服务商的 API Key；调用费用由对应服务商收取，Veri Fin 不代收。AI 只会生成待确认草稿或只读回答。',
      },
      {
        question: '截图识账会上传原图吗？',
        answer:
          '不会。截图中的文字识别在设备本地离线完成，原图不会上传。只有识别出的文字会在你启用 AI 解析时，发送到你配置的服务端点。',
      },
      {
        question: '支持多币种和离线汇率吗？',
        answer:
          '支持。每个账本设置本位币，每个账户设置账户币种；汇率按日期保存在本地，应用不会联网下载或后台刷新。缺少汇率时会明确提示，而不是按 1:1 猜测。',
      },
      {
        question: '可以在电脑或网页上使用吗？',
        answer:
          '目前没有 Web 版或桌面端应用，官网只用于介绍和下载 Android 版本。官网本身可以在电脑和手机上正常浏览。',
      },
    ],
  },
  download: {
    eyebrow: '下载',
    titleLead: '你的下一本账，',
    titleAccent: '从这里开始。',
    description: '完全免费，下载即用。无需注册，也没有广告；账本从第一天起就保存在你自己的手机里。',
    primary: '下载最新 APK',
    primaryFallback: '前往 GitHub Releases',
    all: '查看全部版本',
    loadingShort: '读取中…',
    versionLoading: '正在获取最新稳定版…',
    versionError: '暂时无法读取版本信息，仍可前往 GitHub 下载。',
    product: 'Veri Fin for Android',
    productTagline: '本地优先 · 完全免费',
    labels: {
      latest: '最新稳定版',
      published: '发布时间',
      size: '安装包',
      arch: '架构',
    },
    archValue: 'arm64-v8a',
    note: 'GitHub 自分发版只提供 arm64-v8a APK；极老的 32 位设备无法安装。',
  },
  footer: {
    description: '完全免费、无账号、本地优先的 Android 记账应用。你的账本，保存在你自己的手机里。',
    github: '在 GitHub 查看源码',
    productTitle: '产品',
    resourceTitle: '资源',
    aboutTitle: '关于',
    links: {
      features: '功能',
      screens: '界面',
      faq: '常见问题',
      download: '下载',
      github: 'GitHub',
      releases: '版本发布',
      issues: '问题反馈',
      support: '支持项目',
      privacy: '隐私政策',
      terms: '用户协议',
      license: '开源许可',
    },
    principles: '无账号 · 无广告 · 无遥测',
  },
  notFound: {
    title: '这一页不记账。',
    description: '你访问的页面不存在。可以回到首页继续了解 Veri Fin，或直接前往 GitHub 查看项目。',
    home: '返回首页',
    github: '查看 GitHub',
  },
  legal: {
    legalLabel: '法律信息',
    updatedLabel: '最后更新',
    privacy: {
      title: '隐私政策',
      intro: '本页内容与 Veri Fin 应用内发布的版本一致，便于在下载前核对数据如何处理。',
      sections: [
        {
          heading: '一、我们不收集你的个人信息',
          body: 'Veri Fin（以下简称"本应用"）是一款完全免费、数据自主、本地优先的记账工具。我们高度重视你的隐私，本政策说明本应用如何处理你的信息。',
        },
        {
          heading: '二、数据存储与安全',
          body: '本应用不设任何账号体系，无需注册或登录。你的全部记账数据（交易、账户、账本、预算、分类、个人资料等）仅保存在你设备的本地存储中，不会上传到任何服务器，我们也无法访问。',
        },
        {
          heading: '三、权限使用说明',
          body: '你的账目数据以 SQLite 数据库形式存储在应用的私有目录，偏好设置以键值形式本地保存。这些数据不会离开你的设备，除非你主动导出备份文件。请妥善保管你自行导出的备份文件。\n\n本应用可能申请以下权限，均用于你主动触发的功能，且数据不出本机：\n· 存储/文件访问：用于导出或导入 JSON 备份文件；\n· 相册/相机：用于设置头像或账本封面（如你使用该功能）；\n· 网络：用于「检查更新」时访问 GitHub Release（只读取版本信息，不上传任何数据），以及你主动启用 AI 功能时访问你自行配置的服务端点（发送内容见下一节）。',
        },
        {
          heading: '四、AI 功能与第三方服务',
          body: 'AI 记账、截图识账与 AI 账目问答均为可选功能，只有你自行配置 OpenAI 兼容端点后才会启用。启用后：截图与图片始终留在设备上，文字识别在端上离线完成，只有识别出的文字或回答问题所需的只读账目摘要会发送到你所配置的端点；该端点如何处理数据由其运营方决定，请在使用前阅读其隐私政策。AI 记账只生成待确认草稿，必须经你确认后才落账；AI 查询工具全部只读，不能修改你的数据。AI 密钥仅保存在本机，不进入备份。',
        },
        {
          heading: '五、第三方共享',
          body: '本应用不包含任何第三方广告、统计或追踪 SDK。除上述你自行配置的 AI 端点，以及你主动启用的 WebDAV 备份目标外，不会与任何第三方共享你的信息。',
        },
        {
          heading: '六、儿童隐私',
          body: '本应用不面向儿童收集任何信息；由于本应用不收集任何个人信息，一般不涉及儿童隐私风险。',
        },
        {
          heading: '七、你的控制权',
          body: '你对本地数据拥有完全控制权：可随时在应用内导出、导入或初始化（清空）全部数据。卸载应用即会删除设备上的应用数据。',
        },
        {
          heading: '八、政策更新',
          body: '本政策如有更新，我们会在应用内更新版本与生效日期。继续使用即表示你接受更新后的政策。',
        },
        {
          heading: '九、联系我们',
          body: '如对隐私有任何疑问，可通过项目仓库（GitHub）的 Issue 与我们联系。',
        },
      ],
    },
    terms: {
      title: '用户协议',
      intro: '本页内容与 Veri Fin 应用内发布的版本一致，便于在下载前了解使用条款。',
      sections: [
        {
          heading: '一、服务说明',
          body: '欢迎使用 Veri Fin（以下简称"本应用"）。在使用前，请你仔细阅读并充分理解本协议。你开始使用本应用即视为已同意本协议全部条款。\n\n本应用是一款完全免费、开源、本地优先的记账工具，帮助你在本机记录和管理个人账目。本应用不提供任何联网的账户、云同步或付费服务。',
        },
        {
          heading: '二、免费与开源',
          body: '本应用完全免费，不含任何内购、订阅或广告。你可在遵守开源许可证的前提下自由使用。',
        },
        {
          heading: '三、用户责任',
          body: '· 你应对在本应用中录入的数据的真实性与合法性负责；\n· 你应自行妥善保管设备与导出的备份文件；由于数据仅存于本地，若设备丢失、损坏或数据被误删而未备份，数据将无法找回；\n· 请勿将本应用用于任何违法用途。',
        },
        {
          heading: '四、数据与备份',
          body: '本应用的账目数据仅保存在你的设备本地。强烈建议你定期使用导出功能备份数据。因你未及时备份、误操作初始化或卸载导致的数据丢失，本应用不承担责任。',
        },
        {
          heading: '五、免责声明',
          body: '本应用按"现状"提供，不对其适用于特定用途作出任何明示或默示担保。在法律允许的最大范围内，对于使用或无法使用本应用所造成的任何直接或间接损失，本应用及开发者不承担责任。本应用中的统计、报表等仅供参考，不构成任何财务或投资建议。',
        },
        {
          heading: '六、知识产权',
          body: '本应用的名称、图标及界面设计等相关权益归开发者所有；开源代码部分依其许可证约定使用。',
        },
        {
          heading: '七、协议更新',
          body: '本协议如有更新，我们会在应用内更新版本与生效日期。若你不同意更新内容，请停止使用本应用。',
        },
        {
          heading: '八、其他',
          body: '本协议的解释与适用，以及因本协议产生的争议，均适用相关法律法规。',
        },
      ],
    },
  },
} satisfies SiteContent
