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

export const CustomComponent: StoryObj<TextProps> = {
  args: {
      asChild: true,
      children: (
       <p>Vinicius está aprendendo React! Aos poucos vai se desenvolvendo mais e mais!</p>
      ),
  },
  // Aqui impedimos que pessoas alterem dados pelos Storybook. Impedimos que o argTypes e o asChild sejam vistos no SB
  argTypes: {
    children: {
      table: {
        disable:true,
      }
    },
    asChild: {
      table: {
        disable:true,
      }
    }
  }
};