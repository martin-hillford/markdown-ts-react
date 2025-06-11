import type { Meta, StoryObj } from '@storybook/react';
import { BaseStyle } from './BaseStyle';
import { MarkDown } from './MarkDown';

const StyledMarkDown = (props : { markdown : string }) => {
    const { markdown } = props;
    return (
        <BaseStyle>
            <MarkDown markdown={markdown}/>
        </BaseStyle>
    );
}

const meta: Meta<typeof StyledMarkDown> = {
    title: 'MarkDown',
    component: StyledMarkDown,
};

type Story = StoryObj<typeof MarkDown>;

export const Content: Story = {
    args: {
        markdown: 'text'
    }
};

export default meta;
