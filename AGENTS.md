# AGENTS.md

本文件是 Veri Fin 官网的工程约束。开始改动前先读完；若与用户当前要求冲突，以用户当前要求为准。

## 项目概况

- 这是 Veri Fin 的官方静态官网，不是应用仓库。
- 线上域名：`https://verifin.talyra42.top`
- 应用仓库（产品事实、功能文档、法务文本的来源）：`D:\Projects\LumiDesk\verifin`
- 技术栈：Vite 8、React 19、TypeScript、Tailwind CSS 4、React Router 7、axios
- 质量工具：ESLint、Prettier、Vitest、Testing Library、Husky、lint-staged、commitlint
- 运行环境：Node.js 24+、pnpm 11+（`packageManager` 已固定 pnpm 11.17.0）

当前版本是一个可部署的静态官网：首页 + 隐私政策 + 用户协议 + 404，支持简体中文、英文和日文。没有后端、账号体系或数据库。

## 快速开始

```bash
pnpm install
pnpm dev
```

提交前必须通过：

```bash
pnpm check
```

该命令依次执行 ESLint、Prettier 格式检查、TypeScript、Vitest 和生产构建。单独命令：

```bash
pnpm lint
pnpm format
pnpm typecheck
pnpm test
pnpm build
```

## Git 与提交

- 用户偏好：**不新建分支**，直接在 `main` 工作。
- 在任务节点主动提交，不要把所有改动堆到最后。一个可验收的阶段一个提交。
- 不要擅自 push、部署或改写远程历史。用户自己负责 Vercel 发布。
- 提交信息使用 Conventional Commits，例如：

```text
feat(site): 添加首页 FAQ
fix(site): 修正移动端横向溢出
chore(site): 更新依赖
docs: 初始化 AGENTS.md
```

- pre-commit 会自动执行 lint-staged（ESLint + Prettier），commit-msg 会执行 commitlint。
- `temp/` 已被 `.gitignore` 忽略，用于方案、预览图和演示数据，不能提交。
- 不要提交 `dist/`、`node_modules/` 或任何密钥。

## 目录职责

```text
src/
├── app/router.tsx          路由表
├── components/
│   ├── layout/             Header、MobileNav、Footer、SiteLayout
│   ├── marketing/          Hero、功能、隐私、下载、FAQ 等首页区块
│   └── ui/                 Button、Container、Section、ThemeToggle 等基础组件
├── content/                三语文案、首页数据、FAQ、法务文本
│   ├── locales/            zh.ts、en.ts、ja.ts
│   ├── index.ts            按语言读取内容
│   └── types.ts            SiteContent 内容结构
├── features/
│   ├── locale/             语言上下文、路由语言同步与 useContent
│   ├── releases/           GitHub Releases 获取、缓存与 APK 选择
│   └── theme/              主题上下文与 ThemeProvider
├── i18n/                   语言类型、路径前缀与语言切换工具
├── lib/                    axios、格式化、className、标题工具
├── pages/                  页面组件
├── styles/index.css        Tailwind 入口、设计令牌、基础样式
└── main.tsx                应用入口
```

- 组件只负责展示和交互，文案优先放到 `src/content/`。
- 新增功能先找现有 `ui` 组件和设计令牌，避免复制样式或引入组件库。
- 三语文案必须同步维护，不要在组件里写死中文；新增文案先补 `src/content/types.ts` 和三个 locale。

## 路由与页面

| 路径                   | 页面          |
| ---------------------- | ------------- |
| `/`                    | 中文首页      |
| `/privacy`             | 中文隐私政策  |
| `/terms`               | 中文用户协议  |
| `/en`、`/ja`           | 英文/日文首页 |
| `/en/privacy`、`/ja/*` | 对应语言页面  |
| `*`                    | 404           |

- 首页的“功能 / 隐私 / 界面 / FAQ / 下载”使用锚点，对应区块 id 必须保留。
- 新增路由时同步更新：`src/app/router.tsx`、导航/页脚、`public/sitemap.xml`、`vercel.json`，并补齐三种语言。
- 当前是 SPA：`index.html` 提供首屏默认元信息，页面通过 `usePageMeta` 更新标题、描述、canonical、OG 与 hreflang。没有 SSR 或按路由预渲染。
- Vercel 使用 `vercel.json` 的 `/([^.]*)` rewrite 将无扩展名路径回退到 `index.html`；部署后必须实际测试 `/privacy`、`/terms`、404 和静态资源。

多语言约定：

- 中文是默认语言，`/` 不带前缀；英文 `/en`，日文 `/ja`。
- 语言由 `src/i18n/routing.ts` 中的工具统一计算，不要在组件里手写 `locale === 'en' ? ...` 的路径分支。
- 语言偏好存储在 `localStorage` 的 `verifin-site:locale`；用户以后访问 `/` 时，`index.html` 的首屏脚本会带到已选语言。
- 切换语言应保留当前页面（`/en/privacy` → `/ja/privacy`），不要一律回首页。
- 三语文案必须保持同一事实边界；法务翻译页要保留“以应用内中文原文为准”的说明。

## 设计系统与主题

所有视觉令牌在 `src/styles/index.css`：

- `:root` 定义浅色变量，`.dark` 定义深色变量。
- `@theme inline` 把 `--canvas`、`--surface`、`--ink`、`--brand` 等映射成 Tailwind utilities。
- 优先使用语义类：`bg-canvas`、`bg-surface`、`text-ink`、`text-muted`、`border-line`、`bg-ice`、`bg-night`。
- 新组件不要写死 `bg-white` 或深浅色值；需要层次时用 `bg-surface` / `bg-ice` / `bg-night-card`。
- `bg-night` 区块在两种主题下都保持深色，里面的小字要保证对比度（使用 `text-white/55` 或更高）。

主题行为：

- 默认跟随系统；右上角提供“跟随系统 / 浅色 / 深色”。
- 偏好存储在 `localStorage` 的 `verifin-site:theme`。
- `index.html` 里有首屏前执行的主题脚本，避免刷新闪白；修改存储键或主题逻辑时必须同步 `ThemeProvider` 和该脚本。
- `ThemeProvider` 给 `<html>` 切换 `.dark` class，并更新 `meta[name="theme-color"]`。
- 主题切换在支持的浏览器中使用 View Transition 交叉淡入；必须尊重 `prefers-reduced-motion`。
- 主题状态通过 `src/features/theme/theme-context.ts` 的 `useTheme()` 获取。
- 所有新增界面必须在浅色和深色下都检查。
- 横向截图轨道和菜单/弹层动效都在 `src/styles/index.css`，新增交互不要另造一套。

自绘滚动条：

- 页面竖向滚动条由 `src/components/ui/CustomScrollbar.tsx` 实现，原生滚动条已隐藏。
- 滚动位置计算在 `src/lib/scrollbar.ts`，支持拖拽、点击轨道、方向键/PageUp/PageDown/Home/End。
- 组件通过 `aria-controls="main"` 绑定主内容，修改页面骨架时保留 `main#main`。
- 触屏设备或宽度小于 768px 时不显示自绘条，避免与系统手势冲突；不要改回原生滚动条。

动画与布局：

- 使用 CSS 动画和过渡，暂不引入 Framer Motion 等动画库。
- 尊重 `prefers-reduced-motion`。
- 容器最大宽度 1200px，移动端左右留白 20px；主要断点为 `640 / 768 / 1024 / 1280`。
- 新页面至少检查 320、390、768、1024、1440 宽度，不能出现横向滚动。

字体：

- 拉丁字符使用自托管的 `@fontsource-variable/inter`。
- 中文使用系统字体（PingFang SC、Microsoft YaHei、Noto Sans SC），不要引入数 MB 的中文字体。

## 截图约定

- 首页手机框统一使用 `PhoneFrame`。
- `public/screenshots/` 中每个页面保留 `home/assets/reports` 的 `-light.jpg` 和 `-dark.jpg` 两套，并保留对应的 `-sm.jpg` 590px 响应式版本。
- 首屏和“界面”区块通过 `src/content/screenshots.ts` 的 `screenshotSrc(name, theme)` 选择明暗版本。
- `PhoneFrame` 会自动生成 `srcSet`，浏览器按显示尺寸选择 590px 或 1180px。
- 深色产品展示区 `DashboardSection` 固定使用 `reports-dark.jpg`，因为该区块本身就是深色。
- 不要用 AI 生成的假界面替代真实应用截图。
- 更换截图时保留原始比例；图片必须写 `width`/`height`，首屏主图使用 eager + high priority，其余懒加载。
- 图片加载态由 `PhoneFrame` 统一处理：首次加载显示手机内骨架微光，主题切换时先预加载新图再交叉淡出旧图，不要在区块里重复实现。

## 内容与事实边界

内容文件：

- 站点链接、域名、仓库地址：`src/content/site.ts`
- 三语完整文案：`src/content/locales/zh.ts`、`en.ts`、`ja.ts`
- 内容结构定义：`src/content/types.ts`
- 截图路径：`src/content/screenshots.ts`

写作原则：

- 只写可验证事实，不虚构用户评价、媒体背书、下载量或“千万用户”。
- 明确产品边界：仅 Android；GitHub 自分发 APK 为 arm64-v8a；AI、WebDAV 均为可选且由用户配置。
- 不把第三方品牌 Logo 用于暗示官方合作；当前导入来源使用文字徽章。
- 品牌正文统一写 `Veri Fin`；域名和仓库使用 `verifin`。

法务文本：

- 当前内容来自应用仓库 `lib/app/legal_content.dart`，生效日期 `2026-09-08`。
- 不要自行改写法律措辞。更新时同步 `legalUpdatedAt`，并让用户确认。
- 英文/日文法务文本是翻译稿，页面必须显示“以中文原文为准”的说明；修改中文法务时必须同步三语。
- 已知待核对项：隐私政策仍写“JSON 备份文件”，而当前应用说明使用 zip / `.verifin`；未经用户确认不要擅自修改。

## 下载来源与 GitHub Releases

相关文件：

- `src/lib/github.ts`：axios 实例与类型
- `src/features/releases/useLatestRelease.ts`：请求、缓存、APK 选择
- `src/components/marketing/DownloadSection.tsx`：下载 UI
- `src/content/site.ts`：GitHub 与蒲公英链接

下载来源：

- 当前提供 GitHub Releases 和蒲公英（`https://www.pgyer.com/verifin`）两个入口。
- 下载卡文案在 `content.download.sources`，链接映射在 `DownloadSection.tsx` 的 `sourceLinks`；新增来源时同步三语、`DownloadSourceId`、链接映射和卡片样式。
- 蒲公英作为国内分发页，不声称是官方镜像；版本与安装包信息以对应来源页面为准。

逻辑：

1. 请求 `https://api.github.com/repos/LumiDesk/verifin/releases/latest`
2. 优先选择名字含 `arm64` 的 `.apk`，否则选择任意 `.apk`
3. 结果写入 `sessionStorage`，TTL 10 分钟
4. API 失败或没有 APK 时只影响版本信息展示；GitHub 下载入口仍指向 Releases 页面，不空屏

注意：

- `releases/latest` 不包含 draft 和 pre-release；应用 CI 先创建预发布，官网只会在正式版提升后显示。
- 不要把 GitHub Token 放进前端，也不要使用 `VITE_` 变量保存密钥。
- 未认证 API 限流约 60 次/小时/IP；当前靠缓存控制，流量增长后再考虑边缘代理。
- 修改 APK 选择逻辑时同步补充 `useLatestRelease.test.ts`。

## SEO、OG 与部署

- `index.html` 包含标题、描述、canonical、hreflang、OG、Twitter Card、JSON-LD 和主题/语言首屏脚本。
- `public/og-image.png`、`og-image-en.png`、`og-image-ja.png` 均为 1200×630，标题或主视觉变化时需要重新生成对应语言版本。
- `public/robots.txt` 和 `public/sitemap.xml` 使用正式域名；新增路由或语言要同步 sitemap 的 hreflang。
- `site.url` 使用 `https://verifin.talyra42.top`。
- 当前各语言页面会动态更新标题、描述、canonical、OG 文本与分享图：中文 `og-image.png`、英文 `og-image-en.png`、日文 `og-image-ja.png`。
- Vercel 构建命令 `pnpm build`，输出目录 `dist`。
- 不要添加统计/广告脚本，除非用户明确要求；项目定位是无账号、无广告、无遥测。

## 测试与视觉验收

- 必跑 `pnpm check`。
- 重点检查：主题/语言下拉菜单键盘操作、移动端 dialog 导航、三语切换、FAQ 展开、GitHub API 成功与失败回退、截图加载过渡。
- 视觉检查至少覆盖 390×844、768×900、1024×900、1440×900。
- 三语都要检查；窄屏至少补 320px，确认按钮不换行、标题不横向溢出。
- 图片不能有破图；首屏不能因 GitHub API 失败而空屏。
- 本地视觉检查可用 `playwright-core` + 系统 Chrome，不下载 Playwright 浏览器：

```text
C:/Program Files/Google/Chrome/Application/chrome.exe
```

## 模拟器截图流程（如需要）

环境是只读的，**不要修改 `C:\Dev`**：

- Flutter：`C:\Dev\flutter-3.47.2`
- Android SDK：`C:\Dev\android-sdk`
- JDK 17：`C:\Program Files\Java\jdk-17.0.20.101-hotspot`
- 模拟器：`emulator-5554`

先核对环境：

```powershell
$env:JAVA_HOME = 'C:\Program Files\Java\jdk-17.0.20.101-hotspot'
$env:ANDROID_HOME = 'C:\Dev\android-sdk'
$env:PATH = 'C:\Dev\flutter-3.47.2\bin;C:\Program Files\Java\jdk-17.0.20.101-hotspot\bin;C:\Dev\android-sdk\platform-tools;' + $env:PATH
& 'C:\Dev\flutter-3.47.2\bin\dart.bat' run scripts/doctor.dart --devices
```

约束：

- 不要并行做高强度的模拟器 input 操作。
- 本地 Gradle 若报 “Unable to establish loopback connection”，按应用仓库 `docs/dev/android-development.md` 的临时方案把 `JAVA_TOOL_OPTIONS` 的 tmpdir 指到 `C:/Dev/java-tmp`，不要修改持久化配置。
- 应用仓库是独立项目；除非用户明确要求，不要改应用代码。
- 当前官网截图来自模拟器中已安装的 `v1.20.3+173`。如果要求严格匹配最新版，需要重新构建安装并补拍。
- 截图演示数据可通过应用内“数据管理 → 导入账单文件 → CSV 模板”导入；中间 CSV 和截图放在 `temp/`，不要提交。
- 截取后转换为 JPG，按 `home/assets/reports` + `light/dark` 命名放入 `public/screenshots/`，保留页面比例，并生成 590px 宽的 `-sm.jpg` 版本。

## 已知限制 / 后续可选项

- 当前提供简体中文、英文、日文；新增语言需要补 `locales`、路由、sitemap、hreflang 和测试。
- 当前 SPA 没有按路由预渲染；法务页分享预览使用对应语言的首页分享卡。
- 截图来自旧构建 `v1.20.3+173`，可在新版本应用上补拍。
- 法务文本的备份格式表述需要用户核对。
- 尚未在真实 Vercel 环境执行最终验收，也未跑正式 Lighthouse 报告。
- 没有博客、在线更新日志页、账号、在线试用或分析统计。

## 修改完成检查清单

- [ ] 内容来自真实产品事实，没有虚构数据
- [ ] 浅色和深色都检查过
- [ ] 中 / 英 / 日三种语言都检查过
- [ ] 320–1440px 无横向溢出
- [ ] 新路由 / 新锚点已同步导航、sitemap、Vercel 配置
- [ ] 新截图同时有 light/dark 和 590px `-sm` 版本
- [ ] `pnpm check` 通过
- [ ] 只提交相关文件，`temp/` 未进入提交
- [ ] 在任务节点完成一次 Conventional Commit
