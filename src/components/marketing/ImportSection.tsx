import { importSources } from '../../content/home'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

const steps = [
  { index: '01', title: '选择来源', detail: '先选账单平台，再选文件。' },
  { index: '02', title: '预览校验', detail: '排除交易，映射账户与分类。' },
  { index: '03', title: '确认落库', detail: '确认后才写入你的账本。' },
]

export function ImportSection() {
  return (
    <Section id="import">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
          <SectionHeading
            eyebrow="迁移"
            title="换过来，不用重新开始。"
            description="支持主流账单格式，先预览再导入。账户、分类和标签都可以映射到现有结构，不必把旧账一笔笔重录。"
          />

          <div className="rounded-panel border border-line bg-surface p-6 shadow-soft sm:p-8">
            <p className="text-xs font-semibold tracking-[0.12em] text-muted">支持的账单来源</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {importSources.map((source) => (
                <span
                  key={source}
                  className="rounded-full border border-line bg-ice/60 px-3 py-1.5 text-sm font-medium text-ink"
                >
                  {source}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 border-t border-line pt-6 sm:grid-cols-3">
              {steps.map((step) => (
                <div key={step.index}>
                  <p className="text-[0.68rem] font-semibold tracking-[0.12em] text-brand">
                    {step.index}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-ink">{step.title}</p>
                  <p className="mt-1 text-xs leading-5 text-muted">{step.detail}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs leading-6 text-muted">
              导入只生成预览，确认后才写入账本；外币缺率时可以在预览前补齐。
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
