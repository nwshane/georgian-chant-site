// @flow

// Seems like the easiest method of universally checking
// whether the page is an admin page is to look for '/admin'
// at the beginning of the pathname
export default (pathname: string): boolean => (
  /^\/admin/.test(pathname)
)
