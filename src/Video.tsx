import { renderVideo } from "@martin-hillford/markdown-ts";

export const Video = (props : { url: string | null | undefined }) => {
    const { url } = props;
    if(!url || url === '') return null;

    const html = renderVideo(url);
    return <div dangerouslySetInnerHTML={{ __html: html }} />
}
