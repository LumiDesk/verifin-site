# Veri Fin 官网

Veri Fin 的官方网站：介绍产品、说明隐私与数据策略，并提供最新 Android 版本下载。支持简体中文、英文和日文。

线上地址：<https://verifin.talyra42.top>

## 技术栈

- Vite 8 + React 19 + TypeScript
- Tailwind CSS 4（CSS-first 设计令牌）
- React Router 7
- axios（GitHub Releases 数据）
- ESLint + Prettier + Husky + lint-staged + commitlint

要求 Node.js 24+、pnpm 11+。

## 本地开发

```bash
pnpm install
pnpm dev
```

## 常用命令

```bash
pnpm lint          # ESLint
pnpm lint:fix      # ESLint 自动修复
pnpm format        # Prettier 格式化
pnpm format:check  # 检查格式
pnpm typecheck     # TypeScript 检查
pnpm build         # 生产构建
pnpm preview       # 预览构建产物
```

## 目录结构

```text
src/
├── app/                 # 路由
├── components/
│   ├── layout/          # Header、Footer、MobileNav、页面骨架
│   ├── marketing/       # 首页各区块
│   └── ui/              # Button、Container、Section 等基础组件
├── content/             # 三语文案、FAQ、法务文本、内容类型
│   └── locales/         # zh.ts、en.ts、ja.ts
├── features/locale/     # 语言上下文与 useContent
├── features/releases/   # GitHub Releases 获取、缓存与 APK 选择
├── i18n/                # 语言类型与路径工具
├── lib/                 # axios 客户端、格式化、className 工具
├── pages/               # 首页、隐私政策、用户协议、404
└── styles/              # Tailwind 入口与设计令牌
```

## 内容维护

- 站点链接和基础信息：`src/content/site.ts`
- 三语完整文案：`src/content/locales/zh.ts`、`en.ts`、`ja.ts`
- 内容结构与校验类型：`src/content/types.ts`
- 截图路径与明暗版本：`src/content/screenshots.ts`
- 视觉令牌：`src/styles/index.css`

右上角支持“语言”和“跟随系统 / 浅色 / 深色”三档主题。语言使用路径前缀：中文 `/`、英文 `/en`、日文 `/ja`；切换语言会保留当前页面，并记住偏好。

首屏和界面区块会随主题切换对应的应用截图。`PhoneFrame` 会在新图预加载完成后交叉淡出旧图，并使用 590px / 1180px 两档响应式图片。

页面竖向滚动条使用 `CustomScrollbar` 自绘，支持拖拽、轨道点击、键盘方向键/PageUp/PageDown/Home/End；触屏和小于 768px 的布局不显示自绘条。

法务文本来自 Veri Fin 应用内 `lib/app/legal_content.dart`，当前生效日期为 `2026-09-08`。如应用内文本更新，需要同步该文件并更新 `legalUpdatedAt`。

英文和日文法务文本为翻译稿，页面会提示以应用内中文原文为准。修改中文法务条款时必须同步三种语言。

## 下载来源与 GitHub Releases

下载区提供两个入口：

- 国内下载：[蒲公英](https://www.pgyer.com/verifin)
- 全球下载：[GitHub Releases](https://github.com/LumiDesk/verifin/releases)

新增来源时，在 `src/content/locales/*.ts` 的 `download.sources` 增加文案，并在 `DownloadSection.tsx` 中补充 ID、链接和图标映射。

GitHub 版本信息通过 axios 请求：

```text
GET https://api.github.com/repos/LumiDesk/verifin/releases/latest
```

逻辑位于 `src/features/releases/useLatestRelease.ts`：

- 优先选择名字包含 `arm64` 的 `.apk`，否则选择任意 `.apk`；
- 结果缓存到 `sessionStorage` 10 分钟；
- 请求失败或没有 APK 时显示提示，GitHub 下载入口仍可用，不因 API 失败空屏；
- 不在前端放置 GitHub Token。

## 部署

项目是纯静态 Vite 站点，可直接部署到 Vercel：

```text
Build command: pnpm build
Output directory: dist
```

`vercel.json` 已配置无扩展名路径回退到 `index.html`，用于直接访问 `/privacy`、`/terms` 和 404 路由。其他静态资源不受影响。

各语言页面会动态更新 `html lang`、标题、描述、canonical、OG 和 hreflang；`public/sitemap.xml` 需要同步新增语言或页面。

分享卡按语言使用 `og-image.png`、`og-image-en.png`、`og-image-ja.png`。

## 提交规范

提交前会自动执行 lint-staged（ESLint + Prettier），并通过 commitlint 校验 Conventional Commits：

```text
feat(site): 新增首页 Hero
fix: 修正移动端导航溢出
chore: 更新依赖
```

`temp/` 用于记录中间开发产物，已加入 `.gitignore`。

## 相关链接

- [Veri Fin 应用仓库](https://github.com/LumiDesk/verifin)
- [GitHub Releases](https://github.com/LumiDesk/verifin/releases)
- [蒲公英国内下载](https://www.pgyer.com/verifin)
- [问题反馈](https://github.com/LumiDesk/verifin/issues)
