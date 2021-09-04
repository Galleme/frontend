import { action } from '@storybook/addon-actions';
import BaseButton from "../../components/common/BaseButton";

export default {
    title: 'Common/Button',
    component: BaseButton,
    argTypes: {
        type: { control: { type: 'select', options: ['primary', 'secondary', 'danger'] } },
    },
};

const Template = (args) => ({
    components: { BaseButton },
    setup() {
        return { args };
    },
    methods: {
      click() {
          action('Button Clicked')
      }
    },
    template: '<base-button @click="click" v-bind="args"> Test Button </base-button>',
});

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    size: 'text-md',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Test Text 2',
    size: 'text-md',
};