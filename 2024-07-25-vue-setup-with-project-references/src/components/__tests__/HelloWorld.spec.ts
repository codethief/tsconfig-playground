import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import { FOO } from '../foo'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: `Hello Vitest ${FOO}` } })
    expect(wrapper.text()).toContain(`Hello Vitest ${FOO}`)
  })
})
