import { getVimeoVideoId, renderVimeo } from "@martin-hillford/markdown-ts";

export const Vimeo = (props : { url: string | null | undefined }) => {
    const { url } = props;
    if(!url || url === '') return null;

    const videoId = getVimeoVideoId(url);
    if(!videoId) return null;

    const html = renderVimeo(videoId);
    return <div dangerouslySetInnerHTML={{ __html: html }} />
}
