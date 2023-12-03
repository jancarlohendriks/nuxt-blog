import Button from "./Button.vue";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
// import { withBackgrounds } from "@storybook/addon-backgrounds";
// import { withDesign } from "storybook-addon-designs";

export default {
  title: "Components/Button",
  tags: ["autodocs"],
  component: Button,
  decorators: [withKnobs],
  // decorators: [withKnobs, withBackgrounds, withDesign],
  parameters: {
    // backgrounds: [
    //   { name: "Default", value: "#ffffff", default: true },
    //   { name: "Dark", value: "#333333" },
    // ],
    // design: {
    //   type: "figma",
    //   url: "your-figma-url",
    // },
    actions: {
      handles: ["click .button"],
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Button },
  props: {
    label: {
      default: text("Label", "Click me"),
    },
    disabled: {
      default: boolean("Disabled", false),
    },
    type: {
      default: select("Type", ["primary", "secondary"], "primary"),
    },
  },
  template:
    '<Button :label="label" :disabled="disabled" :type="type" @click="onClick" />',
  methods: {
    onClick: action("button-clicked"),
  },
});

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
};

// Docs
Primary.parameters = {
  docs: {
    description: {
      story: "The primary button component.",
    },
  },
};

Secondary.parameters = {
  docs: {
    description: {
      story: "The secondary button component.",
    },
  },
};
