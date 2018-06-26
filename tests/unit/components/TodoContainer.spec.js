import { shallowMount } from "@vue/test-utils";
import TodoContainer from '@/components/TodoContainer.vue'
import NewTodo from '@/components/NewTodo.vue'


describe('TodoContainer.vue', () => {
  it('formをレンダー', () => {
    const wrapper = shallowMount(TodoContainer);
    expect(wrapper.find(NewTodo).exists()).toBe(true);
  });
});
