//the logic of the blackList button displayed in webtrc video card.
//todo: make this into an actual dom element

import {blackListManager} from "./BlackListManager";
import {HtmlUtils} from "./HtmlUtils";

//todo: use more descriptive icons
const blockIcon = 'resources/logos/close.svg';
const cancelBlockIcon = 'resources/logos/discussion.svg';

export const getBlockButtonHtml = (userId: string): string => {
    return '<img id="block-'+userId+'" title="block this user" class="block-button active" src="'+blockIcon+'">'
}

export const createOnBlockCallback = (userId: string, remoteVideo: HTMLVideoElement): void => {
    const blockBtn: HTMLImageElement = HtmlUtils.getElementByIdOrFail<HTMLDivElement>(`block-${userId}`) as HTMLImageElement;
    blockBtn.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();
        const toBeBlackListed = !blackListManager.isBlackListed(parseInt(userId));
        toBeBlackListed ? blackListManager.blackList('', parseInt(userId)) : blackListManager.cancelBlackList(parseInt(userId));
        if (remoteVideo === undefined) {
            throw `cannot block video for ${userId}`;
        }
        (remoteVideo.srcObject as unknown as MediaStream).getTracks().forEach((track) => {
            track.enabled = !toBeBlackListed;
        });
        blockBtn.src = toBeBlackListed ? cancelBlockIcon : blockIcon;
    });
}