export function formatBytes(bytes: number) {
  if (!Number.isFinite(bytes) || bytes <= 0) return '未知大小'

  const megabytes = bytes / (1024 * 1024)
  return `${megabytes.toFixed(1)} MB`
}

export function formatDate(isoDate: string) {
  const date = new Date(isoDate)
  if (Number.isNaN(date.getTime())) return isoDate

  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}
