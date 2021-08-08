import { shallowMount } from '@vue/test-utils';
import Component from '@/components/TodoFilter.vue'

describe('Testing Display', () => {
  it('ラジオボタンを押したとき$emitが実行されるかのテスト', () => {
    const wrapper = shallowMount(Component)
    wrapper.get('#working').trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.emitted('sendRadioState')[0][0]).toBe('working')
    })
  })
})