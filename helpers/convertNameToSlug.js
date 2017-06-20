import latinizeGeorgian from 'latinize-georgian'

export default (str) => (
  latinizeGeorgian(str).toLowerCase().replace(/\s/g, '-')
)
