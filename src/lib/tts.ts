let synth: SpeechSynthesis;
let voiceSelect: HTMLSelectElement;

if (!import.meta.env.SSR) {
	synth = window.speechSynthesis;
	voiceSelect = document.querySelector('select') as HTMLSelectElement;
}

let voices: SpeechSynthesisVoice[] = [];

export function populateVoiceList() {
	if (synth) {
		voices = synth.getVoices().sort(function (a, b) {
			const aname = a.name.toUpperCase();
			const bname = b.name.toUpperCase();

			if (aname < bname) {
				return -1;
			} else if (aname == bname) {
				return 0;
			} else {
				return +1;
			}
		});

		const selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
		voiceSelect.innerHTML = '';

		for (let i = 0; i < voices.length; i++) {
			const option = document.createElement('option');
			option.textContent = `${voices[i].name} (${voices[i].lang})`;

			if (voices[i].default) {
				option.textContent += ' -- DEFAULT';
			}

			option.setAttribute('data-lang', voices[i].lang);
			option.setAttribute('data-name', voices[i].name);
			voiceSelect.appendChild(option);
		}
		voiceSelect.selectedIndex = selectedIndex;
	}
}

populateVoiceList();

if (!import.meta.env.SSR && speechSynthesis.onvoiceschanged !== undefined) {
	speechSynthesis.onvoiceschanged = populateVoiceList;
}

export function speak() {
	if (synth && synth.speaking) {
		console.error('speechSynthesis.speaking');
		return;
	}

	const utterThis = new SpeechSynthesisUtterance('Hello world');

	utterThis.onend = function (event) {
		console.log('SpeechSynthesisUtterance.onend');
	};

	utterThis.onerror = function (event) {
		console.error('SpeechSynthesisUtterance.onerror');
	};

	const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

	for (let i = 0; i < voices.length; i++) {
		if (voices[i].name === selectedOption) {
			utterThis.voice = voices[i];
			break;
		}
	}
	synth.speak(utterThis);
}
