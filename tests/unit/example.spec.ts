import { mount } from '@vue/test-utils'
import Index from '../../src/views/index.vue'

describe('Render Homepage', () => {
  it('renders home page', () => {
    const wrapper = mount(Index)
    expect(wrapper.text()).toMatch('Index Page')
  })
})
