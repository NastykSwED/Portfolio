import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from '@astrojs/react';

// https://astro.build/config
import compress from 'astro-compress';

// https://astro.build/config
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), compress(), robotsTxt(), sitemap(), critters()],
  site: 'https://nastykswed.dev/'
});