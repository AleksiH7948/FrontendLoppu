<script>
  let savedNames = [];

  function updateNames() {
    savedNames.push(generatedName);
    savedNames = savedNames;
  }

  export let words = 1;

  let generatedName = '';

  const oneName = [
    'Bermuda',
    'Valiant',
    'Heretics',
    'Saviour',
    'Kemmler',
    'Eruption',
    'Lorehound',
    'Benevolent',
    'Archetype',
    'Athos',
    'Tormentor',
    'Masquerade',
    'Seren',
    'Morgoth',
    'Mammon',
    'Monarchs',
    'Serotonin',
    'Chemtechs',
    'Morathi',
    'Delrith',
    'Aris',
    'Jotunn',
    'Silhouette',
    'Annexor',
    'Traceless',
    'Luxios',
    'Metropolis',
    'Sanguinius',
    'Horux',
    'Centerfeldt',
    'Kiiras',
    'Kruger',
    'Elevar',
    'Diarothus',
    'Dramator',
  ];
  const first = [
    'Dormant',
    'Of',
    'Primeval',
    'Altered',
    'Alter',
    'Animal',
    'Opus',
    'Deus',
    'Con',
    'Don',
    'Peripheral',
    'Endless',
    'Mirage',
    'Silent',
    'Epic',
    'Stoic',
    'Ramen',
    'Feral',
    'Ethereal',
    'Antithesis',
    'Marked',
    'Prey',
    'Sentinel',
    'Volume',
    'Monark',
    'Helios',
    'Borderline',
    'Slaughter',
    'Burn',
    'Burned',
    'Legator',
    'Empire',
    'Emporio',
    'Symphony',
    'Dream',
    'Cascade',
  ];

  const second = [
    'Of',
    'For',
    'By',
    'From',
    'Or',
    'The',
    'Done',
    'Made',
    'To',
    'Con',
    'Le',
    'Avid',
    'Mel',
    'La',
    'Quo',
  ];

  const third = [
    'Prevails',
    'Prevail',
    'Bachelor',
    'Romulus',
    'Vindicta',
    'Surplus',
    'Prevails',
    'Kemper',
    'Nautica',
    'Sphinx',
    'Actia',
    'Sentient',
    'Lust',
    'Heretica',
    'Levie',
    'Octagon',
    'Sanctum',
    'Repeller',
    'Gorilla',
    'Rotator',
    'Destroyer',
    'Tutankhamon',
    'Ebony',
    'Sin',
    'Lux',
    'Bronco',
    'Cartel',
    'Magna',
    'Malekith',
    'Impera',
    'Invictus',
    'Sentient',
    'Epica',
    'Musica',
    'Abyss',
    'Serenity',
    'Helvetica',
    'Imperii',
    'Remedy',
    'Fall',
    'Yeet',
    'Orchadia',
    'Symphony',
    'Melody',
  ];

  function generateRandomName() {
    const randomIndexOneName = Math.floor(Math.random() * oneName.length);
    const randomIndexFirst = Math.floor(Math.random() * first.length);
    const randomIndexSecond = Math.floor(Math.random() * second.length);
    const randomIndexThird = Math.floor(Math.random() * third.length);

    if (words === 1) {
      generatedName = oneName[randomIndexOneName];
    }
    if (words === 2) {
      generatedName = first[randomIndexFirst] + ` ` + third[randomIndexThird];
    }
    if (words === 3) {
      generatedName =
        first[randomIndexFirst] +
        ` ` +
        second[randomIndexSecond] +
        ` ` +
        third[randomIndexThird];
    }
  }
</script>

<div>
  <h2>Random Band Name Generator</h2>
  <p>Select length of your name:</p>
  <label>
    <p>{words} word(s)</p>
    <input type="range" bind:value={words} min="1" max="3" />
  </label>
  <p>Your band name is:</p>
  <h2>{generatedName}</h2>
  <button on:click={generateRandomName}>Generate</button>
  <button on:click={updateNames}>Save Name</button>
  <p>Saved names:</p>
  <ul>
    {#each savedNames as item}
      <li>{item}</li>
    {/each}
  </ul>
</div>

<style>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: scroll;
  }
  li {
    overflow: scroll;
  }
</style>
