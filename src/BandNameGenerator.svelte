<script>
  let savedNames = []; //Tässä array, johon tallennetut bändin nimet menevät.

  function updateNames() {
    //Funktio, joka pushaa sen hetkisen esillä olevan
    savedNames.push(generatedName); //bändin nimen savedNames -muuttujaan.
    savedNames = savedNames; //Tässä varmistetaan funktiolle, että savedNames
  } //-muuttuja saa todellakin oikean arvon.

  export let words = 1; //words -muuttuja määrittää sanojen määrän bändin
  //nimessä ja on tällä hetkellä vakiona 1.

  let generatedName = ''; //Tähän muuttujaan tuleekin generoitu nimi

  const oneName = [
    //Tämä muuttuja sisältää arrayn, jossa on omia
    'Bermuda', //ns. yhden sanan stock-nimiä, jotka sovellus
    'Valiant', //näyttää vain silloin, kun valintana on 1-sanainen
    'Heretics', //bändin nimi
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
    //first -muuttuja sisältää arrayn sanoja, jotka
    'Dormant', //funktio ottaa huomioon siinä kohtaa, kun valintana
    'Of', //on useampi kuin 1 sanan mittainen nimi.
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
    //Tämä muuttuja sisältää artikkeleita ja
    'Of', //konjunktioita. Ne otetaan huomioon vasta, kun
    'For', //bändin nimi on 3 sanaa pitkä.
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
    //Tämä muuttuja sisältää ns. lopetus-sanoja,
    'Prevails', //jotka ovat käytössä, kun bändin nimen halutaan olevan
    'Prevail', //pidempi kuin 1 sana.
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
    const randomIndexOneName = Math.floor(Math.random() * oneName.length); //Nyt pääsemme funktioon, joka ensimmäisenä hakee jokaisesta
    const randomIndexFirst = Math.floor(Math.random() * first.length); //sanoja sisältävästä arraysta math.floorin avulla sattumanvaraisen
    const randomIndexSecond = Math.floor(Math.random() * second.length); //sanan ja tekee siitä randomIndex -muuttujan arvon.
    const randomIndexThird = Math.floor(Math.random() * third.length);

    if (words === 1) {
      generatedName = oneName[randomIndexOneName]; //Kun words-muuttujan arvo on vain 1, käytämme if-lauseketta, joka
    } //hakee generatedName arvoksi oneName-muuttujan indeksin randomIndex-muuttujan arvolla.
    if (words === 2) {
      //Tässä kohtaa, kun words-muuttujan arvo on 2, hakee antaa funktio generatedName
      generatedName = first[randomIndexFirst] + ` ` + third[randomIndexThird]; //arvoksi kaksi satunnaista indeksiä first ja third -muuttujista.
    }
    if (words === 3) {
      //Kun words arvo on 3, hakee generatedName arvon first, second ja third-muuttujien satunnaisen indeksin arvon.
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
    <!--Tässä käytin range-input tyyppiä, jotta saan liukuvan palkin, jolla käyttäjä voi valita
    sanojen määrän. Sanojen määrä on bindattu words-muuttujaan ja arvo näkyy liukurin yläpuolella.-->
    <p>{words} word(s)</p>
    <input type="range" bind:value={words} min="1" max="3" />
  </label>
  <p>Your band name is:</p>
  <!--Tähän kohtaan tulee tämänhetkinen generoitu nimi-->
  <h2>{generatedName}</h2>
  <!--Generate-button aktivoi funktion, joka generoi bändin nimen-->
  <button on:click={generateRandomName}>Generate</button>
  <!--Save name -button aktivoi funktion, joka tallentaa generoidun bändin nimen alapuolelle listaan-->
  <button on:click={updateNames}>Save Name</button>
  <p>Saved names:</p>
  <ul>
    <!--Seuraavaksi käytin #each lohkoa, jossa jokainen savedNames arrayn string on oma iteminsä ja ne näkyvät listana.-->
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
