import type { SiteContent } from '../types'

export const en = {
  meta: {
    home: {
      title: 'Veri Fin — Free, local-first Android bookkeeping',
      description:
        'Veri Fin is a completely free Android bookkeeping app with no account and no ads. Your ledger stays on your phone, with multiple ledgers, currencies, budgets, assets, AI entry and encrypted backups.',
    },
    notFound: {
      title: 'Page not found · Veri Fin',
      description:
        'The page you are looking for does not exist. Return home to learn about Veri Fin or visit the project on GitHub.',
    },
  },
  nav: {
    features: 'Features',
    privacy: 'Privacy',
    screens: 'Screens',
    faq: 'FAQ',
    download: 'Download',
  },
  header: {
    home: 'Veri Fin home',
    mainNav: 'Primary navigation',
    mobileNav: 'Mobile navigation',
    skip: 'Skip to main content',
    github: 'View Veri Fin on GitHub',
    download: 'Download free',
    menuOpen: 'Open navigation menu',
    menuClose: 'Close navigation menu',
  },
  theme: {
    label: 'Theme',
    settings: 'Theme settings',
    system: 'Use system setting',
    light: 'Light',
    dark: 'Dark',
    current: 'Current',
  },
  language: {
    label: 'Language',
    settings: 'Language settings',
  },
  hero: {
    badge: 'Android · Completely free · Local-first',
    titleLead: 'Keep your books clear,',
    titleAccent: 'keep your data yours.',
    description:
      'Veri Fin is a completely free Android bookkeeping app with no account and no ads. Your ledger lives on your phone—backups, imports and AI are always your choice.',
    downloadCta: 'Download for Android',
    featuresCta: 'See what it can do',
    note: 'No sign-up · Offline bookkeeping · No ads',
    phoneBadges: {
      local: 'On-device',
      multiCurrency: 'Multi-currency',
      noAds: 'No ads',
    },
  },
  trust: [
    { label: 'Completely free', detail: 'No trial period' },
    { label: 'No account', detail: 'Open and go' },
    { label: 'Local-first', detail: 'Ledger stays on your phone' },
    { label: 'GPL-3.0', detail: 'Open and auditable' },
  ],
  quick: {
    eyebrow: 'Quick entry',
    title: 'Think it. Log it in seconds.',
    description: 'Lower the cost of entry, and keeping a ledger becomes easier.',
    exampleLabel: 'Example',
    note: 'AI entry and receipt OCR are optional and require your own provider. Every result becomes a draft you confirm first.',
    items: [
      {
        key: 'math',
        title: 'Do the math inline',
        description:
          'The keypad handles basic arithmetic, so you do not need to calculate the amount first.',
        example: '500 + 800 = 1,300.00',
      },
      {
        key: 'ai',
        title: 'Log it in one sentence',
        description:
          'Describe what you spent, and AI drafts the category, account and note. Nothing is saved until you confirm.',
        example: 'Taxi yesterday 32 → Transport / 32.00',
      },
      {
        key: 'ocr',
        title: 'Turn screenshots into entries',
        description:
          'Receipt text is recognized offline on your device; the image never leaves it. AI parses the text only if you enable it.',
        example: 'Screenshot → On-device OCR → Draft to confirm',
      },
    ],
  },
  dashboard: {
    eyebrow: 'Budgets & assets',
    title: 'See exactly where the money went.',
    description:
      "From today's spending to yearly trends, from budget progress to credit accounts—all in one clear view.",
    points: [
      'Daily, monthly and yearly dashboards',
      'Budget progress, category rankings and daily trends',
      'Assets, credit accounts and repayment reminders',
      'Multi-currency conversion using rates stored on your device',
    ],
    balanceLabel: "This month's balance",
    budgetLabel: 'Budget used',
    netWorthLabel: 'Net worth',
  },
  privacy: {
    eyebrow: 'Privacy & data',
    title: "Your ledger should not become someone else's data.",
    description:
      'No account, no ads, no telemetry. Transactions stay on your device. Data leaves only when you enable backup or AI, and only to the destination you choose.',
    badges: {
      appLock: 'App lock',
      sqlite: 'Local SQLite',
      backup: 'AES-GCM backup',
    },
    flow: {
      phone: 'Your phone',
      storage: 'Local SQLite · Attachments',
      onlyWhen: 'Only when you turn it on',
      webdav: 'WebDAV backup',
      webdavDetail: 'Your chosen folder and credentials',
      ai: 'AI service',
      aiDetail: 'The compatible endpoint you configure',
      note: 'Text recognition happens offline on your device; images are never uploaded. AI receives only the recognized text or ledger summaries it needs.',
    },
    stats: [{ label: 'Accounts' }, { label: 'Ads' }, { label: 'Telemetry' }],
  },
  import: {
    eyebrow: 'Migration',
    title: 'Switch over without starting again.',
    description:
      'Import common bill formats with a preview first. Map accounts, categories and tags to your existing structure instead of retyping every old entry.',
    sourcesLabel: 'Supported import sources',
    sources: ['Alipay', 'WeChat', 'Yimu', 'Qianji', 'Mint Bookkeeping', 'Tally', 'Veri Fin CSV'],
    steps: [
      { title: 'Choose a source', detail: 'Pick the platform, then the file.' },
      {
        title: 'Preview and check',
        detail: 'Exclude transactions and map accounts and categories.',
      },
      {
        title: 'Confirm to save',
        detail: 'Nothing enters your ledger until you confirm.',
      },
    ],
    note: 'Imports create a preview and are written only after confirmation. Missing exchange rates can be filled in before import.',
  },
  screens: {
    eyebrow: 'Screens',
    title: 'Real screens, not mockups.',
    description:
      "Home, Assets and Reports are the actual workspaces in the app, and they follow the site's light or dark theme.",
    items: [
      {
        name: 'home',
        alt: 'Veri Fin Home: monthly spending, recent transactions and quick entry',
        label: 'Home',
        description: 'Monthly spending, recent transactions and quick entry',
      },
      {
        name: 'assets',
        alt: 'Veri Fin Assets: net worth, account groups and credit accounts',
        label: 'Assets',
        description: 'Net worth, account groups and credit accounts',
      },
      {
        name: 'reports',
        alt: 'Veri Fin Reports: income and expenses, budgets and category rankings',
        label: 'Reports',
        description: 'Income and expenses, budget progress and category rankings',
      },
    ],
  },
  openSource: {
    eyebrow: 'Open source & support',
    title: 'Free, not a trial.',
    description:
      'No membership paywall, and no turning user data into a business. The code is public and your data is portable. If it helps you, you can support development voluntarily.',
    codeTitle: 'Code in the open',
    codeBody:
      'Veri Fin is released under GPL-3.0-or-later. You can audit how it handles data and improve it under the terms of the license.',
    codeCta: 'View on GitHub',
    supportTitle: 'Help it keep improving',
    supportBody:
      'Supporting the project unlocks nothing and changes nothing about your data. It just helps keep this clean tool maintained.',
    supportCta: 'Support on Afdian',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'A few things to know before downloading.',
    description: 'Direct answers about platforms, data, migration and AI.',
    more: 'Still have a question? Find us on',
    linkLabel: 'GitHub Issues',
    items: [
      {
        question: 'Which platforms does Veri Fin support?',
        answer:
          'Only the Android app is officially delivered today. The GitHub Releases package on this site is an arm64-v8a APK. If the app is later distributed through Google Play, packages will be delivered according to device architecture (subject to actual store availability).',
      },
      {
        question: 'Is it really completely free?',
        answer:
          'Yes. There are no in-app purchases, subscriptions, ads or membership-only features. The project is open source under GPL-3.0-or-later, and the full source is available on GitHub.',
      },
      {
        question: 'Is my data uploaded?',
        answer:
          'Not by default. Entries are stored only in the local SQLite database and attachment directory on your device. Necessary data is sent only when you actively enable WebDAV backup or configure AI features, and only to the destination you choose.',
      },
      {
        question: 'How do I migrate when I change phones?',
        answer:
          'Use the export/restore feature in the app or WebDAV backup. Do not treat app data moved by system backup, phone-transfer tools or third-party backup apps as a Veri Fin backup. Those files are not in this app’s backup format and may be damaged or impossible to import.',
      },
      {
        question: 'Is AI required? Does it cost extra?',
        answer:
          'No, AI is not required, and you can leave it unconfigured. To use AI entry or the AI finance assistant, you provide an API key from a compatible provider; that provider charges for usage, and Veri Fin does not collect the fee. AI only creates drafts for confirmation or read-only answers.',
      },
      {
        question: 'Are original screenshots uploaded for receipt OCR?',
        answer:
          'No. Text in screenshots is recognized offline on your device, and the original image is never uploaded. Only the recognized text is sent to the endpoint you configure when you enable AI parsing.',
      },
      {
        question: 'Are multiple currencies and offline exchange rates supported?',
        answer:
          'Yes. Each ledger has a base currency and each account has its own currency. Exchange rates are stored locally by date; the app does not download rates or refresh them in the background. When a rate is missing, the app tells you clearly instead of assuming 1:1.',
      },
      {
        question: 'Can I use it on a computer or in a browser?',
        answer:
          'There is currently no web or desktop app. This site only introduces and distributes the Android version. The site itself works on both desktop and mobile browsers.',
      },
    ],
  },
  download: {
    eyebrow: 'Download',
    titleLead: 'Your next ledger',
    titleAccent: 'starts here.',
    description:
      'Completely free and ready to use. No sign-up and no ads; from day one, your ledger stays on your phone.',
    primary: 'Download latest APK',
    primaryFallback: 'Go to GitHub Releases',
    all: 'See all versions',
    loadingShort: 'Loading…',
    versionLoading: 'Fetching the latest stable release…',
    versionError:
      'Version information is unavailable right now. You can still download from GitHub.',
    product: 'Veri Fin for Android',
    productTagline: 'Local-first · Completely free',
    labels: {
      latest: 'Latest stable',
      published: 'Published',
      size: 'Package',
      arch: 'Architecture',
    },
    archValue: 'arm64-v8a',
    note: 'GitHub self-distributed builds provide only arm64-v8a APKs. Very old 32-bit devices cannot install them.',
  },
  footer: {
    description:
      'A completely free, local-first Android bookkeeping app with no account. Your ledger stays on your phone.',
    github: 'View source on GitHub',
    productTitle: 'Product',
    resourceTitle: 'Resources',
    aboutTitle: 'About',
    links: {
      features: 'Features',
      screens: 'Screens',
      faq: 'FAQ',
      download: 'Download',
      github: 'GitHub',
      releases: 'Releases',
      issues: 'Report an issue',
      support: 'Support the project',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      license: 'Open-source license',
    },
    principles: 'No account · No ads · No telemetry',
  },
  notFound: {
    title: 'This page does not add up.',
    description:
      'The page you are looking for does not exist. Head back home to learn about Veri Fin, or visit the project on GitHub.',
    home: 'Back to home',
    github: 'View GitHub',
  },
  legal: {
    legalLabel: 'Legal',
    updatedLabel: 'Last updated',
    translationNote:
      'This translation is provided for convenience. If there is any discrepancy, the Chinese version published in the app prevails.',
    privacy: {
      title: 'Privacy Policy',
      intro:
        'This page matches the version published inside Veri Fin so you can review how your data is handled before downloading.',
      sections: [
        {
          heading: '1. We do not collect your personal information',
          body: 'Veri Fin (the “App”) is a completely free, data-autonomous, local-first bookkeeping tool. We take your privacy seriously. This policy explains how the App handles your information.',
        },
        {
          heading: '2. Data storage and security',
          body: 'The App has no account system and requires no registration or sign-in. All of your bookkeeping data (transactions, accounts, ledgers, budgets, categories, profile information, etc.) is stored only in local storage on your device. It is not uploaded to any server, and we cannot access it.',
        },
        {
          heading: '3. Permissions',
          body: 'Your bookkeeping data is stored as a SQLite database in the App’s private directory, and preferences are stored locally as key-value pairs. This data does not leave your device unless you actively export a backup file. Please keep any backup files you export safe.\n\nThe App may request the following permissions. Each is used only for a feature you trigger, and the data stays on your device:\n· Storage/file access: to export or import JSON backup files;\n· Photos/camera: to set a profile picture or ledger cover (if you use that feature);\n· Network: to access GitHub Releases when you choose “Check for updates” (reading version information only, without uploading any data), and to access the service endpoint you configure when you actively enable AI features (see the next section for what is sent).',
        },
        {
          heading: '4. AI features and third-party services',
          body: 'AI entry, screenshot recognition and AI ledger Q&A are optional features and are enabled only after you configure an OpenAI-compatible endpoint. Once enabled, screenshots and images always stay on your device, text recognition is performed offline on the device, and only the recognized text or the read-only ledger summary needed to answer a question is sent to the endpoint you configure. How that endpoint handles data is determined by its operator; please read its privacy policy before use. AI entry only creates drafts for confirmation and records nothing until you confirm. AI query tools are all read-only and cannot modify your data. AI keys are stored only on your device and are not included in backups.',
        },
        {
          heading: '5. Third-party sharing',
          body: 'The App contains no third-party advertising, analytics or tracking SDKs. Apart from the AI endpoint you configure and the WebDAV backup destination you actively enable, your information is not shared with any third party.',
        },
        {
          heading: '6. Children’s privacy',
          body: 'The App does not collect any information from children. Because the App collects no personal information, children’s privacy risks generally do not arise.',
        },
        {
          heading: '7. Your control',
          body: 'You have complete control over local data: you can export, import or initialize (erase) all data in the App at any time. Uninstalling the App deletes the App’s data from your device.',
        },
        {
          heading: '8. Policy updates',
          body: 'If this policy changes, we will update its version and effective date in the App. Continued use means you accept the updated policy.',
        },
        {
          heading: '9. Contact us',
          body: 'If you have any privacy questions, contact us through an Issue in the project repository on GitHub.',
        },
      ],
    },
    terms: {
      title: 'Terms of Use',
      intro:
        'This page matches the version published inside Veri Fin so you can review the terms before downloading.',
      sections: [
        {
          heading: '1. Service description',
          body: 'Welcome to Veri Fin (the “App”). Please read and fully understand these terms before use. By starting to use the App, you are deemed to have agreed to all of these terms.\n\nThe App is a completely free, open-source, local-first bookkeeping tool that helps you record and manage personal accounts on your device. The App does not provide any online account, cloud sync or paid service.',
        },
        {
          heading: '2. Free and open source',
          body: 'The App is completely free and contains no in-app purchases, subscriptions or ads. You may use it freely subject to the open-source license.',
        },
        {
          heading: '3. User responsibilities',
          body: '· You are responsible for the accuracy and legality of the data you enter into the App.\n· You are responsible for keeping your device and exported backup files safe. Because data exists only locally, it cannot be recovered if the device is lost or damaged or the data is accidentally deleted without a backup.\n· Do not use the App for any unlawful purpose.',
        },
        {
          heading: '4. Data and backups',
          body: 'The App’s bookkeeping data is stored only on your device. We strongly recommend backing up regularly using the export feature. The App is not responsible for data loss caused by failure to back up in time, accidental initialization or uninstallation.',
        },
        {
          heading: '5. Disclaimer',
          body: 'The App is provided “as is” and makes no express or implied warranty that it is fit for a particular purpose. To the maximum extent permitted by law, the App and its developer are not liable for any direct or indirect loss arising from the use of or inability to use the App. Statistics and reports in the App are for reference only and do not constitute financial or investment advice.',
        },
        {
          heading: '6. Intellectual property',
          body: 'Rights related to the App’s name, icon and interface design belong to the developer. Open-source code is used under the terms of its license.',
        },
        {
          heading: '7. Agreement updates',
          body: 'If these terms change, we will update their version and effective date in the App. If you do not agree with the changes, please stop using the App.',
        },
        {
          heading: '8. Miscellaneous',
          body: 'The interpretation and application of these terms, and any dispute arising from them, are governed by applicable laws and regulations.',
        },
      ],
    },
  },
} satisfies SiteContent
