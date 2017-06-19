// @flow
// Source: https://stackoverflow.com/a/2138471/3115911

export function createCookie (name: string, value: string, days?: number) {
  let expires
  if (days) {
    var date = new Date()
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
    expires = '; expires=' + date.toUTCString()
  } else expires = ''
  document.cookie = name + '=' + value + expires + '; path=/'
}

export function readCookie (name: string) {
  var nameEQ = name + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

export function eraseCookie (name: string) {
  createCookie(name, '', -1)
}
