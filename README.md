# Galleme (frontend)
This is the frontend repository for Galleme. A media management tool made for travelers.
Our goal is to help travelers sort and view their media from their trips. With the help of 
AI we will help travelers by mapping their trips and automatically creating albums. 
In addition to this we hope to provide an alternative to big cloud hosts. We have a special focus
on security and provide a self-hosted solution.

## Setup

```bash
# install dependencies
$ npm ci

# serve with hot reload
$ npm run serve

# build for production and launch server
$ npm run build

# for component development
$ npm run storybook

# to run tests
$ npm run test:unit
$ npm run test:e2e

# to fix linting
$ npm run lint -- --fix
```

## Storybook

### What is Storybook?
Storybook is a service we use to develop and design our components. 
It allows us to design the components without a backend. In order to start Storybook execute:

`$ npm run storybook`

### Creating a story:
When creating a new component please create a corresponding story in the `/stories` directory.

Example:
```
/src/components/common/Button.vue
/src/stories/common/Button.stories.js
```

We want to mirror our components folder in the stories folder. This is to ensure it is easy to follow and navigate both.

You begin each story by importing the component at the top. Afterwards you define a default
export function defining the component and the arg types for the props. This is to use Storybook controls.
Afterwards you create a default template that define how the component is used. This default template can then 
be edited for different story version. (See example code below)

```js
// ExampleComponent.stories.js

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
```

More helpful links: [Storybook Getting started guide](https://storybook.js.org/docs/vue/writing-stories/introduction)