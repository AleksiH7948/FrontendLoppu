<script>
  import BandNameGenerator from './BandNameGenerator.svelte';

  export let savedNames = [];

  export function saveName() {
    savedNames.push(generatedName);
  }
</script>
