import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld, { type HelloWorldType } from '../HelloWorld.vue' // VSCode erroneously complains that "HelloWorld.vue is not listed within the file list of project", vue-tsc doesn't
import { FOO } from '../foo' // Works in both VSCode and vue-tsc

export const foo: HelloWorldType = 'Not valid'; // vue-tsc recognizes the type error, VSCode does as well since the upgrade Vue extension 2.0.28 -> 2.1.2

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: `Hello Vitest ${FOO}` } })
    expect(wrapper.text()).toContain(`Hello Vitest ${FOO}`)
  })
})
