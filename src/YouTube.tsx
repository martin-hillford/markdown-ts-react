import { getYouTubeId, renderYoutube } from "@martin-hillford/markdown-ts";

export const YouTube = (props : { url: string | undefined | null }) => {
    const { url } = props;
    if(!url || url === '') return null;

    const videoId = getYouTubeId(url);
    if(!videoId) return null;

    const html = renderYoutube(videoId);
    return <div dangerouslySetInnerHTML={{ __html: html }} />
}
