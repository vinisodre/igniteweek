import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem Ipsum...",
    size: "md",
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
};

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
};

export const CustomText: StoryObj<TextProps> = {
  args: {
      asChild: true,
      children: (
       <h1>Vinicius está aprendendo React! Aos poucos vai se desenvolvendo mais e mais!</h1>
      ),
  }
};