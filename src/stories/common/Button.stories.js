import BaseButton from "../../components/common/BaseButton";

export default {
    title: 'Common/Button',
    component: BaseButton,
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'danger']
        },
        onClick: { action: 'clicked' },
    },
};

const Template = (args) => ({
    components: { BaseButton },
    setup() {
        return { args };
    },
    template: '<base-button v-bind="args"> Test Button </base-button>',
});

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    size: 'text-md',
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: 'secondary',
    size: 'text-md',
};