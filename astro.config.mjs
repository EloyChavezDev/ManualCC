import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Organización de Centros de Cómputo',
			social: {
				github: 'https://github.com/EloyChavezDev/ManualCC',
			},
			sidebar: [
				{
					label: 'Clases',
					items:[
						{label: 'Introduccion', link: '/Clases/Resumen/' },
						{
							label: 'Primer Parcial',
							collapsed: true,
							autogenerate: { directory: 'Clases/Primer_Parcial' },
						}
					]
				},
				{
					label: 'Manual',
					items:[
						{label: 'Introduccion', link: '/Manual/Resumen/' },
					]
				},
			],
		}),
	],
});
