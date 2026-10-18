# Veri Fin 官网

Veri Fin 的官方网站：介绍产品、说明隐私与数据策略，并提供最新 Android 版本下载。

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
├── content/             # 站点文案、FAQ、法务文本、截图元数据
├── features/releases/   # GitHub Releases 获取、缓存与 APK 选择
├── lib/                 # axios 客户端、格式化、className 工具
├── pages/               # 首页、隐私政策、用户协议、404
└── styles/              # Tailwind 入口与设计令牌
```

## 内容维护

- 站点链接和基础信息：`src/content/site.ts`
- 首页功能与截图文案：`src/content/home.ts`
- FAQ：`src/content/faqs.ts`
- 隐私政策与用户协议：`src/content/legal.ts`
- 视觉令牌：`src/styles/index.css`

法务文本来自 Veri Fin 应用内 `lib/app/legal_content.dart`，当前生效日期为 `2026-09-08`。如应用内文本更新，需要同步该文件并更新 `legalUpdatedAt`。

## GitHub Releases

下载区通过 axios 请求：

```text
GET https://api.github.com/repos/LumiDesk/verifin/releases/latest
```

逻辑位于 `src/features/releases/useLatestRelease.ts`：

- 优先选择名字包含 `arm64` 的 `.apk`，否则选择任意 `.apk`；
- 结果缓存到 `sessionStorage` 10 分钟；
- 请求失败或没有 APK 时回退到 GitHub Releases 页面；
- 不在前端放置 GitHub Token。

## 部署

项目是纯静态 Vite 站点，可直接部署到 Vercel：

```text
Build command: pnpm build
Output directory: dist
```

`vercel.json` 已配置无扩展名路径回退到 `index.html`，用于直接访问 `/privacy`、`/terms` 和 404 路由。其他静态资源不受影响。

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
- [问题反馈](https://github.com/LumiDesk/verifin/issues)
