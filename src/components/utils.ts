// used to conditionally add rel='nofollow' if the navLink calls for it
export const getRelProps = (nofollow?: boolean) =>
  nofollow ? { rel: 'nofollow' } : {}
