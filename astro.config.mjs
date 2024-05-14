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
						{label: 'Indice', link: '/Manual/Resumen' },
						{
						label: 'introducción', 
						collapsed: true,
						autogenerate: { directory: 'Manual/introduccion-a_la_orgranizacion_de_centros_de_computo'},
						},
						{
						label: 'Equipamiento de Hardware', 
						collapsed: true,
						autogenerate: { directory: 'Manual/Equipamiento_de_Hardware'},
						},
					]
				},
			],
		}),
	],
});
