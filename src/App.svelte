<script>
  export let name;
  import BandNameGenerator from './BandNameGenerator.svelte';
  import Footer from './Footer.svelte';
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>Press the button down below to generate a metal band name</p>
  <!--Tässä kutsun itse generaattorin sisältävää svelte-sivua.-->
  <BandNameGenerator />
</main>
<!--Tässä taas kutsun footeria-->
<Footer />

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    background-color: black;
  }

  h1 {
    color: #ffffff;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
