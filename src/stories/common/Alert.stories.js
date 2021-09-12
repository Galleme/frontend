import Alert from '../../components/common/Alert'
import faker from "faker";

export default {
    title: 'Common/Alert',
    component: Alert,
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['info', 'success', 'warning', 'error']
        },
        title: String,
        link: String,
    },
};

const Template = (args) => ({
    components: { Alert },
    setup() {
        return { args };
    },
    template: `<alert v-bind="args"> ${faker.lorem.words(15)} </alert>`,
});

export const Info = Template.bind({});
Info.args = {
    type: 'info',
    title: faker.lorem.words(3),
};

export const Success = Template.bind({});
Success.args = {
    type: 'success',
    title: faker.lorem.words(3),
};

export const Warning = Template.bind({});
Warning.args = {
    type: 'warning',
    title: faker.lorem.words(3),
};

export const Error = Template.bind({});
Error.args = {
    type: 'error',
    title: faker.lorem.words(3),
};
