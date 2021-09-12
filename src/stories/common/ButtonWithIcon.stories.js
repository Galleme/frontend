import ButtonWithIcon from "../../components/common/ButtonWithIcon";
import {faFlag, faPlus, faStar} from "@fortawesome/free-solid-svg-icons";
import Fa from 'vue-fa'

export default {
    title: 'Common/ButtonWithIcon',
    component: ButtonWithIcon, Fa,
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'danger']
        },
        onClick: { action: 'clicked' },
    },
};

const Template = (args) => ({
    components: {
        ButtonWithIcon,
        Fa,
    },
    setup() {
        return { faStar, faFlag, faPlus, args };
    },
    template:
        '<button-with-icon v-bind="args" :icon="faStar">Text</button-with-icon>'
        //     '<template #text>Test Button</template>' +
        // '</button-with-icon>',
});

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    size: 'text-md',
};
export const Secondary = Template.bind({});
Primary.args = {
    type: 'secondary',
    size: 'text-md',
};

export const Success = Template.bind({});
Primary.args = {
    type: 'success',
    size: 'text-md',
};

export const Danger = Template.bind({});
Primary.args = {
    type: 'danger',
    size: 'text-md',
};

export const Disabled = Template.bind({});
Primary.args = {
    disabled: true,
    size: 'text-md',
};
