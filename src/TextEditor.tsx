// noinspection CssInvalidPseudoSelector

import { ChangeEvent, useRef } from "react";
import styled, { css } from "styled-components";
import { Highlighter } from "./HighLighter.tsx";

type Props = {
    value : string
    onChange : (value : string) => void
    onCursorMove? : (position : { start : number, end : number }) => void;
    highlighted? : boolean;
}

export const TextEditor = (props : Props) => {
    const { onCursorMove, highlighted, value } = props;
    const ref = useRef<HTMLTextAreaElement>(null);

    const onHandleSelection = () => {
        if(!onCursorMove || !ref.current) return;
        const position = { start: ref.current.selectionStart, end: ref.current.selectionEnd };
        onCursorMove(position);
    }

    const onValueChange = (event : ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange(event.target.value);
        onHandleSelection();
    }

    return (
        <Panel>
            <Highlighter enabled={highlighted} text={value + "\n"} styled={style} />
            <TextArea
                spellCheck={false}
                value={value}
                onChange={onValueChange}
                onKeyUp={onHandleSelection}
                onClick={onHandleSelection}
                ref={ref}
            />
        </Panel>
    )
}

const Panel  = styled.div`
    padding:0;
    width:100%;
    position: relative;
`

const style = css`
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    border:0;
    margin:0;
    white-space: pre-wrap;
    min-height:25px;
`

const TextArea = styled.textarea`
    ${style}
    &:focus { outline: none; }
    &:-internal-autofill-selected { outline: none; }
    font-family: 'ecs-editor-font', ui-monospace, 'Courier New', Courier, monospace;
    content: attr(data-replicated-value) " ";
    display: block;
    resize: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    background-color: transparent;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: transparent;
    caret-color: black;
`
