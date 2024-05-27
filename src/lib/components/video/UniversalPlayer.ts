import type VimeoPlayer from '@vimeo/player';
import type PlayerFactory from 'youtube-player';

export class UniversalPlayer {
	private vimeoPlayer?: VimeoPlayer;
	private ytPlayer?: ReturnType<typeof PlayerFactory>;
	private listener?: void;

	constructor(
		public video: string | number,
		public el: HTMLElement,
		public type: 'youtube' | 'vimeo'
	) {}

	private async setupPlayer() {
		if (this.type === 'youtube') {
			const YouTubePlayer = (await import('youtube-player')).default;
			this.ytPlayer = YouTubePlayer(this.el);
			this.ytPlayer.cueVideoById(this.video as string);
		} else {
			const VimeoPlayer = (await import('@vimeo/player')).default;
			this.vimeoPlayer = new VimeoPlayer(this.el, { url: this.video as string });
		}
	}

	// Static constructor to await dynamic imports
	static async create(video: string | number, el: HTMLElement, type: 'youtube' | 'vimeo') {
		const obj = new UniversalPlayer(video, el, type);
		await obj.setupPlayer();
		return obj;
	}

	play() {
		if (this.type === 'youtube') {
			this.ytPlayer?.playVideo();
		} else {
			this.vimeoPlayer?.play();
		}
	}

	destroy() {
		if (this.type === 'youtube') {
			//@ts-expect-error - docs are saying this function exist, but TS generates an error
			this.ytPlayer?.off(this.listener);
			this.ytPlayer?.destroy();
		} else {
			this.vimeoPlayer?.off('ended');
			this.vimeoPlayer?.destroy();
		}
	}

	onEnded(cb: () => void) {
		if (this.type === 'youtube') {
			this.listener = this.ytPlayer?.on('stateChange', (event) => {
				if (event.data === 0) {
					cb();
				}
			});
		} else {
			this.listener = this.vimeoPlayer?.on('ended', cb);
		}
	}
}
