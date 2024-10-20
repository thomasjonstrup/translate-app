<script lang="ts">
	import IconSoundMaxFill from '$lib/assets/sound_max_fill.svg';
	import IconCopy from '$lib/assets/Copy.svg';

	let translateText = $state('');
	let result = $state('');

	const translate = () => {
		fetch(`https://api.mymemory.translated.net/get?q=${translateText}?!&langpair=en|fr`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				console.log('data.responseData.translatedText', data.responseData.translatedText);
				if (data.responseData && data.responseData.translatedText) {
					result = data.responseData.translatedText;
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};
</script>

<div class="flex flex-col gap-4">
	<div
		class="bg-dark-grey opacity-95 rounded-3xl border border-border-grey p-5 font-bold w-full text-sm"
	>
		<div class="flex gap-2">
			<button>Detect Language</button>
			<button>English</button>
			<button>Spanish</button>
		</div>
		<textarea
			name="firstLanguate"
			id="firstLanguage"
			class="resize-none bg-transparent text-white border-none focus:outline-none h-32 w-full p-2 align-top"
			bind:value={translateText}
		></textarea>
		<div class="flex flex-row justify-between mt-3">
			<div class="flex gap-1">
				<button
					class="h-8 w-8 border-2 flex justify-center items-center rounded-lg border-border-grey hover:border-white"
					title="Sound Max"
					><img src={IconSoundMaxFill} alt="Sound max" />
				</button>
				<button
					class="h-8 w-8 border-2 flex justify-center items-center rounded-lg border-border-grey hover:border-white"
					title="Copy"
					><img src={IconCopy} alt="Copy" />
				</button>
			</div>

			<button class="rounded-md bg-blue hover:bg-light-blue py-2 px-6" onclick={translate}>
				Translate
			</button>
		</div>
	</div>
	<div
		class="bg-dark-grey opacity-95 rounded-3xl border border-border-grey grey p-5 font-bold w-full text-sm"
	>
		<div class="flex gap-2">
			<button>Detect Language</button>
			<button>English</button>
			<button>Spanish</button>
		</div>
		<textarea
			name="secondLanguate"
			id="secondLanguage"
			class="resize-none bg-transparent text-white border-none focus:outline-none h-32 w-full p-2 align-top"
			bind:value={result}
		></textarea>
		<div class="flex flex-row justify-between mt-3">
			<div class="flex gap-1">
				<button
					class="h-8 w-8 border-2 flex justify-center items-center rounded-lg border-border-grey hover:border-white"
					title="Sound Max"><img src={IconSoundMaxFill} alt="Sound max" /></button
				>
				<button
					class="h-8 w-8 border-2 flex justify-center items-center rounded-lg border-border-grey hover:border-white"
					title="Copy"
				>
					<img src={IconCopy} alt="Copy" />
				</button>
			</div>
		</div>
	</div>
</div>
