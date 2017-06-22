import latinizeGeorgian from 'latinize-georgian'

export default (str) => (
  encodeURI(latinizeGeorgian(str).toLowerCase().replace(/\s/g, '-'))
)
