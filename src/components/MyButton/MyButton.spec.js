import { mount } from '@vue/test-utils';
// import MyButton from '@/components/MyButton.vue';
import MyButton from './MyButton.vue';

describe('MyButton.vue', () => {
  it('renders the correct text when passed', () => {
    const wrapper = mount(MyButton, {
      props: { text: 'Click me' }
    });
    expect(wrapper.text()).toBe('Click me');
  });

  it('emits click event when clicked', async () => {
    const wrapper = mount(MyButton, {
      props: { text: 'Click me' }
    });

    await wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });
});