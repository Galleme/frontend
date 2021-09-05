import ButtonWithIcon from "../../components/common/ButtonWithIcon";
import {faFlag, faPlus, faStar} from "@fortawesome/free-solid-svg-icons";

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
        return { faStar, faFlag, faPlus, args };
    },
    template:
        '<button-with-icon v-bind="args">' +
            '<template #text>Test Button</template>\n' +
            '<template #icon>' +
                '<fa class="text-blue-400 mr-3" size="2x" :icon="faStar"/>' +
            '</template>' +
        '</button-with-icon>',
});

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    size: 'text-md',
};
