import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'metal enjoyer',
  },
});

export default app;
