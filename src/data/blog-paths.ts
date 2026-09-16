/** Forum thread path helpers — keep post bodies out of shared chunks. */

export function blogPath(slug: string) {
  return `/forums/${slug}`
}

export function forumsPath() {
  return '/forums'
}
