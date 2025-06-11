import { markdownToHtml, Options } from "@martin-hillford/markdown-ts";

export const MarkDown = (props: { markdown: string, options?: Options}) => {
    const { markdown, options } = props;
    const html = markdownToHtml(markdown, options);
    return <div dangerouslySetInnerHTML={{ __html: html }} />
}
