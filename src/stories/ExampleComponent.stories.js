// Import your Component
import ExampleComponent from "../components/ExampleComponent";

// Export a default function
// This is where you define your components and what props are needed
export default {
    title: 'ExampleComponent',
    component: ExampleComponent,
    argTypes: {
        color: { control: 'color' },
        size: { control: { type: 'select', options: ['text-sm', 'text-md', 'text-xl'] } },
    },
};

// Create a default Template
const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ExampleComponent },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<example-component v-bind="args" />',
});

// For each version of the Component create a new story
export const Primary = Template.bind({});
// You can change the args and props to modify the story here
Primary.args = {
    label: 'Test Text',
    size: 'text-md',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Test Text 2',
    size: 'text-md',
};