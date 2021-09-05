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
    template: '<button-with-icon v-bind="args" />',
});

// For each version of the Component create a new story
export const Primary = Template.bind({});
// You can change the args and props to modify the story here
Primary.args = {
    size: 'text-md',
};
