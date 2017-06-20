// @flow

const keyLocaleRegex = /_(en|ka)$/

const getKeyBase = (key) => (
  key.replace(keyLocaleRegex, '')
)

const getKeyLocale = (key) => (
  key.match(keyLocaleRegex)[1]
)

const getLocaleValueObject = (nonLocalizedObject, key) => {
  const obj = {}
  obj[getKeyLocale(key)] = nonLocalizedObject[key]
  return obj
}

export default (nonLocalizedObject: {}) => (
  Object.keys(nonLocalizedObject).reduce((localizedObject, key) => {
    if (keyLocaleRegex.test(key)) {
      localizedObject[getKeyBase(key)] = Object.assign(
        {},
        localizedObject[getKeyBase(key)],
        getLocaleValueObject(nonLocalizedObject, key)
      )
    } else {
      localizedObject[key] = nonLocalizedObject[key]
    }

    return localizedObject
  }, {})
)
