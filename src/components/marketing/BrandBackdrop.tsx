export function BrandBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-atmosphere absolute inset-0" />
      <div className="absolute -top-10 right-[8%] h-56 w-56 rotate-12 rounded-[4rem] border border-sky/15 bg-sky/[0.04]" />
      <div className="absolute top-[32%] left-[3%] h-40 w-40 -rotate-12 rounded-[2.5rem] border border-iris/10 bg-iris/[0.035]" />
      <div className="absolute right-[18%] bottom-[6%] h-28 w-28 rotate-6 rounded-[2rem] border border-mint/15 bg-mint/[0.04]" />
    </div>
  )
}
