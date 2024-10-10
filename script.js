// Array of emoji characters and their decimal codes
const emojis = [
    { character: '&#128512;', code: '128512' }, // 😀 Grinning Face
    { character: '&#128525;', code: '128525' }, // 😍 Smiling Face with Heart-Eyes
    { character: '&#128526;', code: '128526' }, // 😎 Smiling Face with Sunglasses
    { character: '&#129313;', code: '129313' }, // 🐶 Dog Face
    { character: '&#129488;', code: '129488' }, // 👨‍🎤 Man Singer
    { character: '&#129295;', code: '129295' }, // 👻 Ghost
    { character: '&#127752;', code: '127752' }, // 🌊 Water Wave
    { character: '&#127881;', code: '127881' }, // 🎉 Party Popper
    { character: '&#128150;', code: '128150' }, // 💐 Bouquet
    { character: '&#129402;', code: '129402' }, // 🦄 Unicorn
    { character: '&#129497;', code: '129497' }, // 🧜 Mermaid
    { character: '&#127856;', code: '127856' }  // 🍉 Watermelon
];

// Get the emoji gallery section
const gallery = document.getElementById('emoji-gallery');

// Loop over the emojis array and create elements
emojis.forEach(emoji => {
    const emojiBlock = document.createElement('div');
    emojiBlock.className = 'emoji-block'; // Add the emoji-block class

    emojiBlock.innerHTML = `${emoji.character}<br><code>${emoji.code}</code>`;
    gallery.appendChild(emojiBlock);
});
