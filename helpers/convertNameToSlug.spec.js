/* eslint-env jest */

import convertNameToSlug from './convertNameToSlug'

describe('convertNameToSlug', () => {
  test('converts georgian name to url-friendly name', () => {
    expect(convertNameToSlug('შენ ხარ ვენახი')).toEqual('shen-khar-venakhi')
  })
})
