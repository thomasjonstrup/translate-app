<script lang="ts">
	import IconSoundMaxFill from '$lib/assets/sound_max_fill.svg';
	import IconCopy from '$lib/assets/Copy.svg';
	import IconHorizontalLeftMargin from '$lib/assets/Horizontal_top_left_main.svg';

	type LanguageTranslate = 'en' | 'fr' | 'es';

	let translateText = $state('Hello, how are you?');
	let result = $state('');
	let languagesTranslate = $state<{ from: LanguageTranslate; to: LanguageTranslate }>({
		from: 'en',
		to: 'fr'
	});

	const translate = () => {
		fetch(
			`https://api.mymemory.translated.net/get?q=${translateText}?!&langpair=${languagesTranslate.from}|${languagesTranslate.to}`
		)
			.then((response) => response.json())
			.then((data) => {
				if (data.responseData && data.responseData.translatedText) {
					result = data.responseData.translatedText;
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	translate();

	const changeLanguage = (key: 'from' | 'to', language: LanguageTranslate) => {
		languagesTranslate[key] = language;
	};
</script>

<div class="flex flex-col gap-4 md:flex-row">
	<div
		class="bg-dark-grey opacity-95 rounded-3xl border border-border-grey p-5 font-bold w-full text-sm"
	>
		<div class="flex justify-between border-b-2 p-2 border-border-grey">
			<div class="flex gap-2">
				<button>Detect Language</button>
				<button
					onclick={() => changeLanguage('from', 'en')}
					class="rounded-md bg-border-grey hover:bg-border-grey py-1 px-4">English</button
				>
				<button
					onclick={() => changeLanguage('from', 'fr')}
					class="rounded-md bg-transparent hover:bg-border-grey py-1 px-4">French</button
				>
			</div>

			<button
				class="h-8 w-8 border-2 flex justify-center items-center rounded-lg border-border-grey hover:border-white"
				title="Copy"
			>
				<img src={IconHorizontalLeftMargin} alt="Left margin" />
			</button>
		</div>
		<textarea
			name="firstLanguate"
			id="firstLanguage"
			class="resize-none bg-transparent text-white border-none focus:outline-none h-32 w-full p-2 align-top"
			bind:value={translateText}
			maxlength="500"
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
		<div class="flex justify-between border-b-2 p-2 border-border-grey">
			<div class="flex gap-2">
				<button
					onclick={() => changeLanguage('to', 'en')}
					class="rounded-md bg-transparent hover:bg-border-grey py-1 px-4">English</button
				>
				<button
					onclick={() => changeLanguage('to', 'fr')}
					class="rounded-md bg-border-grey hover:bg-border-grey py-1 px-4">French</button
				>
				<button
					onclick={() => changeLanguage('to', 'es')}
					class="rounded-md bg-border-grey hover:bg-border-grey py-1 px-4">Spanish</button
				>
			</div>

			<button
				class="h-8 w-8 border-2 flex justify-center items-center rounded-lg border-border-grey hover:border-white"
				title="Copy"
			>
				<img src={IconHorizontalLeftMargin} alt="Left margin" />
			</button>
		</div>
		<textarea
			name="secondLanguate"
			id="secondLanguage"
			class="resize-none bg-transparent text-white border-none focus:outline-none h-32 w-full p-2 align-top"
			bind:value={result}
			maxlength="500"
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
