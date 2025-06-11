import { renderVideo } from "@martin-hillford/markdown-ts";

export const Video = (props : { url: string }) => {
    const { url } = props;
    const html = renderVideo(url);
    return <div dangerouslySetInnerHTML={{ __html: html }} />
}
