import Button from "@/components/Button.vue";
import { within, userEvent } from "@storybook/testing-library";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => ({
  components: { Button },
  template: "<Button foo='asd'></Button>",
});

export const Primary = {
  args: {
    foo: "Primary",
  },
};

export const Secondary = {
  args: Primary.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
