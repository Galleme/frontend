import BaseButton from "../../components/common/BaseButton";

export default {
    title: 'Common/Base Button',
    component: BaseButton,
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'danger']
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

export const Success= Template.bind({});
Success.args = {
    type: 'success',
    size: 'text-md',
};

export const Danger = Template.bind({});
Danger.args = {
    type: 'danger',
    size: 'text-md',
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    size: 'text-md',
};