import { shallowMount } from '@vue/test-utils';
import Component from '@/components/TodoInput.vue'

describe('ボタンを押したときデータを送信できるか確かめるテスト', () => {
    it('todo.task', () => {
      const wrapper = shallowMount(Component)
      wrapper.setData({newTodo: '米を研ぐ'})
      wrapper.get('#input-form').trigger('submit')
      expect(wrapper.emitted('sendItem')[0][0].task).toBe('米を研ぐ')
    })
})