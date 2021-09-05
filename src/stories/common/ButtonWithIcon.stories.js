import ButtonWithIcon from "../../components/common/ButtonWithIcon";

export default {
    title: 'Common/ButtonWithIcon',
    component: ButtonWithIcon,
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'danger']
        },
        onClick: { action: 'clicked' },
    },
};

const Template = (args) => ({
    components: { ButtonWithIcon },
    setup() {
        return { args };
    },
    template: '<button-with-icon v-bind="args">Test Button</button-with-icon>',
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
