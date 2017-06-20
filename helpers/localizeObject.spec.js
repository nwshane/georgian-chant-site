/* eslint-env jest */

import localizeObject from './localizeObject'

describe('localizeObject', () => {
  test('nests localized keys of an object', () => {
    expect(localizeObject({
      name_ka: 'აბა',
      name_en: 'Aba',
      text_ka: 'აბა ჰე!',
      text_en: 'Aba he!',
      new_text_ka: 'ბლა ბლა'
    })).toEqual({
      name: {
        ka: 'აბა',
        en: 'Aba'
      },
      text: {
        ka: 'აბა ჰე!',
        en: 'Aba he!'
      },
      new_text: {
        ka: 'ბლა ბლა'
      }
    })
  })
})
