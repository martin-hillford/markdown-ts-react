import { useEffect } from 'react';
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextEditor } from './TextEditor'

type EditorProps = {
    highlighted : boolean,
    value : string,
}

const Editor = (props : EditorProps ) => {
    const { highlighted } = props;
    const [ value, setValue ] = useState(props.value);

    useEffect(() => {
        setValue(props.value)
    }, [props.value])

    return (
        <div style={{border: "1px solid #dddddd", boxSizing : "border-box" }}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@300&family=Roboto+Mono:wght@300&display=swap');
            </style>
            <TextEditor onChange={setValue} highlighted={highlighted} value={value} />
        </div>
    )
}

const meta: Meta<typeof Editor> = {
    title: 'TextEditor',
    component: Editor,
};

export const Content: StoryObj<typeof Editor> = {
    args: {
        highlighted: true,
        value: 'This is een **markdown** text editor',
    },
};

export default meta;
