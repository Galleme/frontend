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
        `<button-with-icon v-bind="args">
            <template #text>Test Button</template>
            <template #icon>
                <fa :icon="faFlag"/>
            </template>
        </button-with-icon>`,
});

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    size: 'text-sm',
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: 'secondary',
    size: 'text-md',
};

export const Success= Template.bind({});
Success.args = {
    type: 'success',
    size: 'text-lg',
};

export const Danger = Template.bind({});
Danger.args = {
    type: 'danger',
    size: 'text-xl',
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    size: 'text-md',
};
