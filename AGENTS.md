# AGENTS.md

本文件是 Veri Fin 官网的工程约束。开始改动前先读完；若与用户当前要求冲突，以用户当前要求为准。

## 项目概况

- 这是 Veri Fin 的官方静态官网，不是应用仓库。
- 线上域名：`https://verifin.talyra42.top`
- 应用仓库（产品事实、功能文档、法务文本的来源）：`D:\Projects\LumiDesk\verifin`
- 技术栈：Vite 8、React 19、TypeScript、Tailwind CSS 4、React Router 7、axios
- 质量工具：ESLint、Prettier、Vitest、Testing Library、Husky、lint-staged、commitlint
- 运行环境：Node.js 24+、pnpm 11+（`packageManager` 已固定 pnpm 11.17.0）

当前版本是一个可部署的单页官网：首页 + 隐私政策 + 用户协议 + 404。没有后端、账号体系或数据库。

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
├── content/                站点文案、首页数据、FAQ、法务文本
├── features/
│   ├── releases/           GitHub Releases 获取、缓存与 APK 选择
│   └── theme/              主题上下文与 ThemeProvider
├── lib/                    axios、格式化、className、标题工具
├── pages/                  页面组件
├── styles/index.css        Tailwind 入口、设计令牌、基础样式
└── main.tsx                应用入口
```

- 组件只负责展示和交互，文案优先放到 `src/content/`。
- 新增功能先找现有 `ui` 组件和设计令牌，避免复制样式或引入组件库。
- 首版不做 i18n 切换，但文案已集中，后续英文版应增量补充内容，不重写组件。

## 路由与页面

| 路径       | 页面     |
| ---------- | -------- |
| `/`        | 首页     |
| `/privacy` | 隐私政策 |
| `/terms`   | 用户协议 |
| `*`        | 404      |

- 首页的“功能 / 隐私 / 界面 / FAQ / 下载”使用锚点，对应区块 id 必须保留。
- 新增路由时同步更新：`src/app/router.tsx`、导航/页脚、`public/sitemap.xml`、`vercel.json`。
- 当前是 SPA：首页 SEO 元信息写在 `index.html`，法务页通过 `useDocumentTitle` 更新标题。没有 SSR 或按路由预渲染。
- Vercel 使用 `vercel.json` 的 `/([^.]*)` rewrite 将无扩展名路径回退到 `index.html`；部署后必须实际测试 `/privacy`、`/terms`、404 和静态资源。

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
- 主题状态通过 `src/features/theme/theme-context.ts` 的 `useTheme()` 获取。
- 所有新增界面必须在浅色和深色下都检查。

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
- `public/screenshots/` 中每个页面保留 `home/assets/reports` 的 `-light.jpg` 和 `-dark.jpg` 两套。
- 首屏和“界面”区块通过 `src/content/home.ts` 的 `screenshotSrc(name, theme)` 选择明暗版本。
- 深色产品展示区 `DashboardSection` 固定使用 `reports-dark.jpg`，因为该区块本身就是深色。
- 不要用 AI 生成的假界面替代真实应用截图。
- 更换截图时保留原始比例；图片必须写 `width`/`height`，首屏主图使用 eager + high priority，其余懒加载。

## 内容与事实边界

内容文件：

- 站点链接、域名、仓库地址：`src/content/site.ts`
- 首页功能、截图元数据：`src/content/home.ts`
- FAQ：`src/content/faqs.ts`
- 隐私政策、用户协议：`src/content/legal.ts`

写作原则：

- 只写可验证事实，不虚构用户评价、媒体背书、下载量或“千万用户”。
- 明确产品边界：仅 Android；GitHub 自分发 APK 为 arm64-v8a；AI、WebDAV 均为可选且由用户配置。
- 不把第三方品牌 Logo 用于暗示官方合作；当前导入来源使用文字徽章。
- 品牌正文统一写 `Veri Fin`；域名和仓库使用 `verifin`。

法务文本：

- 当前内容来自应用仓库 `lib/app/legal_content.dart`，生效日期 `2026-09-08`。
- 不要自行改写法律措辞。更新时同步 `legalUpdatedAt`，并让用户确认。
- 已知待核对项：隐私政策仍写“JSON 备份文件”，而当前应用说明使用 zip / `.verifin`；未经用户确认不要擅自修改。

## GitHub Releases 下载

相关文件：

- `src/lib/github.ts`：axios 实例与类型
- `src/features/releases/useLatestRelease.ts`：请求、缓存、APK 选择
- `src/components/marketing/DownloadSection.tsx`：下载 UI

逻辑：

1. 请求 `https://api.github.com/repos/LumiDesk/verifin/releases/latest`
2. 优先选择名字含 `arm64` 的 `.apk`，否则选择任意 `.apk`
3. 结果写入 `sessionStorage`，TTL 10 分钟
4. 失败或没有 APK 时回退到 `https://github.com/LumiDesk/verifin/releases/latest`

注意：

- `releases/latest` 不包含 draft 和 pre-release；应用 CI 先创建预发布，官网只会在正式版提升后显示。
- 不要把 GitHub Token 放进前端，也不要使用 `VITE_` 变量保存密钥。
- 未认证 API 限流约 60 次/小时/IP；当前靠缓存控制，流量增长后再考虑边缘代理。
- 修改 APK 选择逻辑时同步补充 `useLatestRelease.test.ts`。

## SEO、OG 与部署

- `index.html` 包含标题、描述、canonical、OG、Twitter Card、JSON-LD 和主题脚本。
- `public/og-image.png` 为 1200×630，标题或主视觉变化时需要重新生成。
- `public/robots.txt` 和 `public/sitemap.xml` 使用正式域名；新增路由要同步。
- `site.url` 使用 `https://verifin.talyra42.top`。
- 当前法务页共享首页 OG 信息；如需每条路由独立分享卡片，再增加构建期预渲染。
- Vercel 构建命令 `pnpm build`，输出目录 `dist`。
- 不要添加统计/广告脚本，除非用户明确要求；项目定位是无账号、无广告、无遥测。

## 测试与视觉验收

- 必跑 `pnpm check`。
- 重点检查：主题下拉菜单、移动端 dialog 导航、FAQ 展开、GitHub API 成功与失败回退。
- 视觉检查至少覆盖 390×844、768×900、1024×900、1440×900。
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
- 截取后转换为 JPG，按 `home/assets/reports` + `light/dark` 命名放入 `public/screenshots/`，保留页面比例。

## 已知限制 / 后续可选项

- 首版只有简体中文，没有语言切换；内容结构已支持后续加英文。
- 当前 SPA 没有按路由预渲染；法务页分享预览共用首页信息。
- 截图来自旧构建 `v1.20.3+173`，可在新版本应用上补拍。
- 法务文本的备份格式表述需要用户核对。
- 尚未在真实 Vercel 环境执行最终验收，也未跑正式 Lighthouse 报告。
- 没有博客、在线更新日志页、账号、在线试用或分析统计。

## 修改完成检查清单

- [ ] 内容来自真实产品事实，没有虚构数据
- [ ] 浅色和深色都检查过
- [ ] 320–1440px 无横向溢出
- [ ] 新路由 / 新锚点已同步导航、sitemap、Vercel 配置
- [ ] 新截图同时有 light/dark 版本
- [ ] `pnpm check` 通过
- [ ] 只提交相关文件，`temp/` 未进入提交
- [ ] 在任务节点完成一次 Conventional Commit
