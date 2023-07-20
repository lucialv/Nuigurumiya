let contador = 8132471024;
const generateProducts = () => {
	const products = [
		{
			image: 'https://i.pinimg.com/originals/40/08/50/400850ea28341815f9b2bbfe4c25591c.jpg',
			alt: '/sage',
			name: `Sage`,
			price: '25',
			stock: 50,
			dimensions: '15cm',
			description: 'Peluche de Sage del juego Valorant',
			descriptionEn: 'Plushie of Sage from the game Valorant',
			weight: '0.54kg',
			material: 'Lana',
			materialEn: 'Wool',
			origin: 'Japón',
			originEn: 'Japan',
			reviews: [
				{
					id: 1,
					author: 'Marta Lopez',
					user: 'mart',
					rating: 5,
					joined: 'Unido en Noviembre 2020',
					joinedEn: 'Joined on November 2020',
					frase: 'Lo mejor que he comprado en mi vida!',
					fraseEn: 'The best thing I have ever bought in my life!',
					textoprincipal:
						'¡Déjate cautivar por la magia de este peluche! Este encantador peluche del juego Valorant te transportará al emocionante mundo de tus personajes favoritos. Confeccionado con lana de alta calidad, es suave al tacto y resistente, asegurando la mejor compañía en tus momentos de relajación',
					textoprincipalEn:
						'Let yourself be captivated by the magic of this stuffed animal! This charming plush from the Valorant game will transport you to the exciting world of your favorite characters. Made with high quality wool, it is soft to the touch and resistant, ensuring the best company in your moments of relaxation.',
					textosecundario:
						'Con sus 15 cm de tamaño y un peso de 0.54 kg, es ideal para llevártelo a todas partes y compartir aventuras inolvidables. Originario de Japón, este peluche encarna la esencia de la cultura japonesa. ¡No pierdas la oportunidad de tener a este peluche en tus manos y sumergirte en la emoción de Valorant!',
					textosecundarioEn:
						'With its 15 cm in size and a weight of 0.54 kg, it is ideal to take it everywhere and share unforgettable adventures. Originally from Japan, this plush embodies the essence of Japanese culture. Do not miss the opportunity to have this plush in your hands and immerse yourself in the excitement of Valorant!',
					readMore: false,
					peopleFoundHelpful: 48
				},
				{
					id: 2,
					author: 'Juan Perez',
					user: 'juani',
					rating: 3,
					joined: 'Unido en Junio 2023',
					joinedEn: 'Joined on June 2023',
					frase: 'Hay cosas mejores',
					fraseEn: 'There are better things',
					textoprincipal: 'Ni fu ni fa',
					textoprincipalEn: 'Neither good nor bad',
					textosecundario: 'No es para tirar cohetes',
					textosecundarioEn: 'It is not to throw rockets',
					readMore: false,
					peopleFoundHelpful: 8
				}
				// Agrega más reseñas según sea necesario
			]
		},
		{
			image: 'https://i.etsystatic.com/25121049/r/il/b4efc4/5059405825/il_fullxfull.5059405825_9j82.jpg',
			alt: '/jett',
			name: 'Jett',
			price: '15',
			stock: 45,
			dimensions: '10cm',
			description: 'Peluche de Jett del juego Valorant',
			descriptionEn: 'Plushie of Jett from the game Valorant',
			weight: '0.5kg',
			material: 'Lana',
			materialEn: 'Wool',
			origin: 'Japón',
			originEn: 'Japan',
			reviews: [
				{
					id: 1,
					author: 'Jett Fan',
					user: 'jet',
					rating: 5,
					joined: 'Unido en Noviembre 2020',
					joinedEn: 'Joined on November 2020',
					frase: 'Lo mejor que he comprado en mi vida!',
					fraseEn: 'The best thing I have ever bought in my life!',
					textoprincipal:
						'¡Déjate cautivar por la magia de este peluche! Este encantador peluche del juego Valorant te transportará al emocionante mundo de tus personajes favoritos. Confeccionado con lana de alta calidad, es suave al tacto y resistente, asegurando la mejor compañía en tus momentos de relajación',
					textoprincipalEn:
						'Let yourself be captivated by the magic of this stuffed animal! This charming plush from the Valorant game will transport you to the exciting world of your favorite characters. Made with high quality wool, it is soft to the touch and resistant, ensuring the best company in your moments of relaxation.',
					textosecundario:
						'Con sus 10 cm de tamaño y un peso de 0.5 kg, es ideal para llevártelo a todas partes y compartir aventuras inolvidables. Originario de Japón, este peluche encarna la esencia de la cultura japonesa. ¡No pierdas la oportunidad de tener a este peluche en tus manos y sumergirte en la emoción de Valorant!',
					textosecundarioEn:
						'With its 10 cm in size and a weight of 0.5 kg, it is ideal to take it everywhere and share unforgettable adventures. Originally from Japan, this plush embodies the essence of Japanese culture. Do not miss the opportunity to have this plush in your hands and immerse yourself in the excitement of Valorant!',
					readMore: false,
					peopleFoundHelpful: 48
				},
				{
					id: 2,
					author: 'Juan Perez',
					user: 'juani',
					rating: 3,
					joined: 'Unido en Junio 2023',
					joinedEn: 'Joined on June 2023',
					frase: 'Hay cosas mejores',
					fraseEn: 'There are better things',
					textoprincipal: 'Ni fu ni fa',
					textoprincipalEn: 'Neither good nor bad',
					textosecundario: 'No es para tirar cohetes',
					textosecundarioEn: 'It is not to throw rockets',
					readMore: false,
					peopleFoundHelpful: 8
				}
				// Agrega más reseñas según sea necesario
			]
		},
		{
			image: 'https://i.etsystatic.com/25121049/r/il/adcd61/4742236553/il_fullxfull.4742236553_pyft.jpg',
			alt: '/neon',
			name: 'Neon',
			price: '15',
			stock: 40,
			dimensions: '10cm',
			description: 'Peluche de Jett del juego Valorant',
			descriptionEn: 'Plushie of Jett from the game Valorant',
			weight: '0.5kg',
			material: 'Lana',
			materialEn: 'Wool',
			origin: 'Japón',
			originEn: 'Japan',
			reviews: [
				{
					id: 1,
					author: 'Jesus',
					user: 'midudev',
					rating: 5,
					joined: 'Unido en Noviembre 2020',
					joinedEn: 'Joined on November 2020',
					frase: 'Lo mejor que he comprado en mi vida!',
					fraseEn: 'The best thing I have ever bought in my life!',
					textoprincipal:
						'¡Déjate cautivar por la magia de este peluche! Este encantador peluche del juego Valorant te transportará al emocionante mundo de tus personajes favoritos. Confeccionado con lana de alta calidad, es suave al tacto y resistente, asegurando la mejor compañía en tus momentos de relajación',
					textoprincipalEn:
						'Let yourself be captivated by the magic of this stuffed animal! This charming plush from the Valorant game will transport you to the exciting world of your favorite characters. Made with high quality wool, it is soft to the touch and resistant, ensuring the best company in your moments of relaxation.',
					textosecundario:
						'Con sus 10 cm de tamaño y un peso de 0.5 kg, es ideal para llevártelo a todas partes y compartir aventuras inolvidables. Originario de Japón, este peluche encarna la esencia de la cultura japonesa. ¡No pierdas la oportunidad de tener a este peluche en tus manos y sumergirte en la emoción de Valorant!',
					textosecundarioEn:
						'With its 10 cm in size and a weight of 0.5 kg, it is ideal to take it everywhere and share unforgettable adventures. Originally from Japan, this plush embodies the essence of Japanese culture. Do not miss the opportunity to have this plush in your hands and immerse yourself in the excitement of Valorant!',
					readMore: false,
					peopleFoundHelpful: 48
				},
				{
					id: 2,
					author: 'Juan Perez',
					user: 'juani',
					rating: 3,
					joined: 'Unido en Junio 2023',
					joinedEn: 'Joined on June 2023',
					frase: 'Hay cosas mejores',
					fraseEn: 'There are better things',
					textoprincipal: 'Ni fu ni fa',
					textoprincipalEn: 'Neither good nor bad',
					textosecundario: 'No es para tirar cohetes',
					textosecundarioEn: 'It is not to throw rockets',
					readMore: false,
					peopleFoundHelpful: 8
				}
				// Agrega más reseñas según sea necesario
			]
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851880757/webp/1a_medium2.webp#jpg',
			alt: '/viper',
			name: 'Viper',
			price: '15',
			stock: 35,
			dimensions: '10cm',
			description: 'Peluche de Viper del juego Valorant',
			descriptionEn: 'Plushie of Viper from the game Valorant',
			weight: '0.5kg',
			material: 'Lana',
			materialEn: 'Wool',
			origin: 'Japón',
			originEn: 'Japan',
			reviews: [
				{
					id: 1,
					author: 'Marta Lopez',
					user: 'mart',
					rating: 5,
					joined: 'Unido en Noviembre 2020',
					joinedEn: 'Joined on November 2020',
					frase: 'Lo mejor que he comprado en mi vida!',
					fraseEn: 'The best thing I have ever bought in my life!',
					textoprincipal:
						'¡Déjate cautivar por la magia de este peluche! Este encantador peluche del juego Valorant te transportará al emocionante mundo de tus personajes favoritos. Confeccionado con lana de alta calidad, es suave al tacto y resistente, asegurando la mejor compañía en tus momentos de relajación',
					textoprincipalEn:
						'Let yourself be captivated by the magic of this stuffed animal! This charming plush from the Valorant game will transport you to the exciting world of your favorite characters. Made with high quality wool, it is soft to the touch and resistant, ensuring the best company in your moments of relaxation.',
					textosecundario:
						'Con sus 10 cm de tamaño y un peso de 0.5 kg, es ideal para llevártelo a todas partes y compartir aventuras inolvidables. Originario de Japón, este peluche encarna la esencia de la cultura japonesa. ¡No pierdas la oportunidad de tener a este peluche en tus manos y sumergirte en la emoción de Valorant!',
					textosecundarioEn:
						'With its 10 cm in size and a weight of 0.5 kg, it is ideal to take it everywhere and share unforgettable adventures. Originally from Japan, this plush embodies the essence of Japanese culture. Do not miss the opportunity to have this plush in your hands and immerse yourself in the excitement of Valorant!',
					readMore: false,
					peopleFoundHelpful: 48
				},
				{
					id: 2,
					author: 'Jonny',
					user: 'rael',
					rating: 3,
					joined: 'Unido en Junio 2023',
					joinedEn: 'Joined on June 2023',
					frase: 'Hay cosas mejores',
					fraseEn: 'There are better things',
					textoprincipal: 'Ni fu ni fa',
					textoprincipalEn: 'Neither good nor bad',
					textosecundario: 'No es para tirar cohetes',
					textosecundarioEn: 'It is not to throw rockets',
					readMore: false,
					peopleFoundHelpful: 8
				}
				// Agrega más reseñas según sea necesario
			]
		},
		{
			image: 'https://i.pinimg.com/736x/d2/c7/8d/d2c78ddfca72a8f51392e020405619de.jpg',
			alt: '/omen',
			name: 'Omen',
			price: '15',
			stock: 30,
			dimensions: '10cm',
			description: 'Peluche de Omen del juego Valorant',
			descriptionEn: 'Plushie of Omen from the game Valorant',
			weight: '0.5kg',
			material: 'Lana',
			materialEn: 'Wool',
			origin: 'Japón',
			originEn: 'Japan',
			reviews: [
				{
					id: 1,
					author: 'Marta Lopez',
					user: 'mart',
					rating: 5,
					joined: 'Unido en Noviembre 2020',
					joinedEn: 'Joined on November 2020',
					frase: 'Lo mejor que he comprado en mi vida!',
					fraseEn: 'The best thing I have ever bought in my life!',
					textoprincipal:
						'¡Déjate cautivar por la magia de este peluche! Este encantador peluche del juego Valorant te transportará al emocionante mundo de tus personajes favoritos. Confeccionado con lana de alta calidad, es suave al tacto y resistente, asegurando la mejor compañía en tus momentos de relajación',
					textoprincipalEn:
						'Let yourself be captivated by the magic of this stuffed animal! This charming plush from the Valorant game will transport you to the exciting world of your favorite characters. Made with high quality wool, it is soft to the touch and resistant, ensuring the best company in your moments of relaxation.',
					textosecundario:
						'Con sus 10 cm de tamaño y un peso de 0.5 kg, es ideal para llevártelo a todas partes y compartir aventuras inolvidables. Originario de Japón, este peluche encarna la esencia de la cultura japonesa. ¡No pierdas la oportunidad de tener a este peluche en tus manos y sumergirte en la emoción de Valorant!',
					textosecundarioEn:
						'With its 10 cm in size and a weight of 0.5 kg, it is ideal to take it everywhere and share unforgettable adventures. Originally from Japan, this plush embodies the essence of Japanese culture. Do not miss the opportunity to have this plush in your hands and immerse yourself in the excitement of Valorant!',
					readMore: false,
					peopleFoundHelpful: 48
				},
				{
					id: 2,
					author: 'Juan Perez',
					user: 'juani',
					rating: 3,
					joined: 'Unido en Junio 2023',
					joinedEn: 'Joined on June 2023',
					frase: 'Hay cosas mejores',
					fraseEn: 'There are better things',
					textoprincipal: 'Ni fu ni fa',
					textoprincipalEn: 'Neither good nor bad',
					textosecundario: 'No es para tirar cohetes',
					textosecundarioEn: 'It is not to throw rockets',
					readMore: false,
					peopleFoundHelpful: 8
				}
				// Agrega más reseñas según sea necesario
			]
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/933815727/Gekko_Amigurumi_medium2.jpg',
			alt: '/gekko',
			name: 'Gekko',
			price: '15',
			stock: 35,
			dimensions: '10cm',
			description: 'Peluche de Gekko del juego Valorant',
			descriptionEn: 'Plushie of Gekko from the game Valorant',
			weight: '0.5kg',
			material: 'Lana',
			materialEn: 'Wool',
			origin: 'Japón',
			originEn: 'Japan',
			reviews: [
				{
					id: 1,
					author: 'Marta Lopez',
					user: 'mart',
					rating: 5,
					joined: 'Unido en Noviembre 2020',
					joinedEn: 'Joined on November 2020',
					frase: 'Lo mejor que he comprado en mi vida!',
					fraseEn: 'The best thing I have ever bought in my life!',
					textoprincipal:
						'¡Déjate cautivar por la magia de este peluche! Este encantador peluche del juego Valorant te transportará al emocionante mundo de tus personajes favoritos. Confeccionado con lana de alta calidad, es suave al tacto y resistente, asegurando la mejor compañía en tus momentos de relajación',
					textoprincipalEn:
						'Let yourself be captivated by the magic of this stuffed animal! This charming plush from the Valorant game will transport you to the exciting world of your favorite characters. Made with high quality wool, it is soft to the touch and resistant, ensuring the best company in your moments of relaxation.',
					textosecundario:
						'Con sus 10 cm de tamaño y un peso de 0.5 kg, es ideal para llevártelo a todas partes y compartir aventuras inolvidables. Originario de Japón, este peluche encarna la esencia de la cultura japonesa. ¡No pierdas la oportunidad de tener a este peluche en tus manos y sumergirte en la emoción de Valorant!',
					textosecundarioEn:
						'With its 10 cm in size and a weight of 0.5 kg, it is ideal to take it everywhere and share unforgettable adventures. Originally from Japan, this plush embodies the essence of Japanese culture. Do not miss the opportunity to have this plush in your hands and immerse yourself in the excitement of Valorant!',
					readMore: false,
					peopleFoundHelpful: 48
				},
				{
					id: 2,
					author: 'Juan Perez',
					user: 'juani',
					rating: 3,
					joined: 'Unido en Junio 2023',
					joinedEn: 'Joined on June 2023',
					frase: 'Hay cosas mejores',
					fraseEn: 'There are better things',
					textoprincipal: 'Ni fu ni fa',
					textoprincipalEn: 'Neither good nor bad',
					textosecundario: 'No es para tirar cohetes',
					textosecundarioEn: 'It is not to throw rockets',
					readMore: false,
					peopleFoundHelpful: 8
				}
				// Agrega más reseñas según sea necesario
			]
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851340796/webp/1a_medium2.webp#jpg',
			alt: '/killjoy',
			name: 'Killjoy',
			price: '15',
			stock: 30,
			dimensions: '10cm',
			description: 'Peluche de Killjoy del juego Valorant',
			descriptionEn: 'Plushie of Killjoy from the game Valorant',
			weight: '0.5kg',
			material: 'Lana',
			materialEn: 'Wool',
			origin: 'Japón',
			originEn: 'Japan',
			reviews: [
				{
					id: 1,
					author: 'Marta Lopez',
					user: 'mart',
					rating: 5,
					joined: 'Unido en Noviembre 2020',
					joinedEn: 'Joined on November 2020',
					frase: 'Lo mejor que he comprado en mi vida!',
					fraseEn: 'The best thing I have ever bought in my life!',
					textoprincipal:
						'¡Déjate cautivar por la magia de este peluche! Este encantador peluche del juego Valorant te transportará al emocionante mundo de tus personajes favoritos. Confeccionado con lana de alta calidad, es suave al tacto y resistente, asegurando la mejor compañía en tus momentos de relajación',
					textoprincipalEn:
						'Let yourself be captivated by the magic of this stuffed animal! This charming plush from the Valorant game will transport you to the exciting world of your favorite characters. Made with high quality wool, it is soft to the touch and resistant, ensuring the best company in your moments of relaxation.',
					textosecundario:
						'Con sus 10 cm de tamaño y un peso de 0.5 kg, es ideal para llevártelo a todas partes y compartir aventuras inolvidables. Originario de Japón, este peluche encarna la esencia de la cultura japonesa. ¡No pierdas la oportunidad de tener a este peluche en tus manos y sumergirte en la emoción de Valorant!',
					textosecundarioEn:
						'With its 10 cm in size and a weight of 0.5 kg, it is ideal to take it everywhere and share unforgettable adventures. Originally from Japan, this plush embodies the essence of Japanese culture. Do not miss the opportunity to have this plush in your hands and immerse yourself in the excitement of Valorant!',
					readMore: false,
					peopleFoundHelpful: 48
				},
				{
					id: 2,
					author: 'Juan Perez',
					user: 'juani',
					rating: 3,
					joined: 'Unido en Junio 2023',
					joinedEn: 'Joined on June 2023',
					frase: 'Hay cosas mejores',
					fraseEn: 'There are better things',
					textoprincipal: 'Ni fu ni fa',
					textoprincipalEn: 'Neither good nor bad',
					textosecundario: 'No es para tirar cohetes',
					textosecundarioEn: 'It is not to throw rockets',
					readMore: false,
					peopleFoundHelpful: 8
				}
				// Agrega más reseñas según sea necesario
			]
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851857044/webp/1a_medium2.webp#jpg',
			alt: '/reyna',
			name: 'Reyna',
			price: '15',
			stock: 29,
			dimensions: '10cm',
			description: 'Peluche de Reyna del juego Valorant',
			descriptionEn: 'Plushie of Reyna from the game Valorant',
			weight: '0.5kg',
			material: 'Lana',
			materialEn: 'Wool',
			origin: 'Japón',
			originEn: 'Japan',
			reviews: [
				{
					id: 1,
					author: 'Marta Lopez',
					user: 'mart',
					rating: 5,
					joined: 'Unido en Noviembre 2020',
					joinedEn: 'Joined on November 2020',
					frase: 'Lo mejor que he comprado en mi vida!',
					fraseEn: 'The best thing I have ever bought in my life!',
					textoprincipal:
						'¡Déjate cautivar por la magia de este peluche! Este encantador peluche del juego Valorant te transportará al emocionante mundo de tus personajes favoritos. Confeccionado con lana de alta calidad, es suave al tacto y resistente, asegurando la mejor compañía en tus momentos de relajación',
					textoprincipalEn:
						'Let yourself be captivated by the magic of this stuffed animal! This charming plush from the Valorant game will transport you to the exciting world of your favorite characters. Made with high quality wool, it is soft to the touch and resistant, ensuring the best company in your moments of relaxation.',
					textosecundario:
						'Con sus 10 cm de tamaño y un peso de 0.5 kg, es ideal para llevártelo a todas partes y compartir aventuras inolvidables. Originario de Japón, este peluche encarna la esencia de la cultura japonesa. ¡No pierdas la oportunidad de tener a este peluche en tus manos y sumergirte en la emoción de Valorant!',
					textosecundarioEn:
						'With its 10 cm in size and a weight of 0.5 kg, it is ideal to take it everywhere and share unforgettable adventures. Originally from Japan, this plush embodies the essence of Japanese culture. Do not miss the opportunity to have this plush in your hands and immerse yourself in the excitement of Valorant!',
					readMore: false,
					peopleFoundHelpful: 48
				},
				{
					id: 2,
					author: 'Juan Perez',
					user: 'juani',
					rating: 3,
					joined: 'Unido en Junio 2023',
					joinedEn: 'Joined on June 2023',
					frase: 'Hay cosas mejores',
					fraseEn: 'There are better things',
					textoprincipal: 'Ni fu ni fa',
					textoprincipalEn: 'Neither good nor bad',
					textosecundario: 'No es para tirar cohetes',
					textosecundarioEn: 'It is not to throw rockets',
					readMore: false,
					peopleFoundHelpful: 8
				}
				// Agrega más reseñas según sea necesario
			]
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/932967867/1polos_medium2.jpg',
			alt: '/brimstone',
			name: 'Brimstone',
			price: '15',
			stock: 12,
			dimensions: '10cm',
			description: 'Peluche de Brimstone del juego Valorant',
			descriptionEn: 'Plushie of Brimstone from the game Valorant',
			weight: '0.5kg',
			material: 'Lana',
			materialEn: 'Wool',
			origin: 'Japón',
			originEn: 'Japan',
			reviews: [
				{
					id: 1,
					author: 'Marta Lopez',
					user: 'mart',
					rating: 5,
					joined: 'Unido en Noviembre 2020',
					joinedEn: 'Joined on November 2020',
					frase: 'Lo mejor que he comprado en mi vida!',
					fraseEn: 'The best thing I have ever bought in my life!',
					textoprincipal:
						'¡Déjate cautivar por la magia de este peluche! Este encantador peluche del juego Valorant te transportará al emocionante mundo de tus personajes favoritos. Confeccionado con lana de alta calidad, es suave al tacto y resistente, asegurando la mejor compañía en tus momentos de relajación',
					textoprincipalEn:
						'Let yourself be captivated by the magic of this stuffed animal! This charming plush from the Valorant game will transport you to the exciting world of your favorite characters. Made with high quality wool, it is soft to the touch and resistant, ensuring the best company in your moments of relaxation.',
					textosecundario:
						'Con sus 10 cm de tamaño y un peso de 0.5 kg, es ideal para llevártelo a todas partes y compartir aventuras inolvidables. Originario de Japón, este peluche encarna la esencia de la cultura japonesa. ¡No pierdas la oportunidad de tener a este peluche en tus manos y sumergirte en la emoción de Valorant!',
					textosecundarioEn:
						'With its 10 cm in size and a weight of 0.5 kg, it is ideal to take it everywhere and share unforgettable adventures. Originally from Japan, this plush embodies the essence of Japanese culture. Do not miss the opportunity to have this plush in your hands and immerse yourself in the excitement of Valorant!',
					readMore: false,
					peopleFoundHelpful: 48
				},
				{
					id: 2,
					author: 'Juan Perez',
					user: 'juani',
					rating: 3,
					joined: 'Unido en Junio 2023',
					joinedEn: 'Joined on June 2023',
					frase: 'Hay cosas mejores',
					fraseEn: 'There are better things',
					textoprincipal: 'Ni fu ni fa',
					textoprincipalEn: 'Neither good nor bad',
					textosecundario: 'No es para tirar cohetes',
					textosecundarioEn: 'It is not to throw rockets',
					readMore: false,
					peopleFoundHelpful: 8
				}
				// Agrega más reseñas según sea necesario
			]
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851336260/webp/1a_medium2.webp#jpg',
			alt: '/chamber',
			name: 'Chamber',
			price: '15',
			stock: 92,
			dimensions: '10cm',
			description: 'Peluche de Chamber del juego Valorant',
			descriptionEn: 'Plushie of Chamber from the game Valorant',
			weight: '0.5kg',
			material: 'Lana',
			materialEn: 'Wool',
			origin: 'Japón',
			originEn: 'Japan',
			reviews: [
				{
					id: 1,
					author: 'Marta Lopez',
					user: 'mart',
					rating: 5,
					joined: 'Unido en Noviembre 2020',
					joinedEn: 'Joined on November 2020',
					frase: 'Lo mejor que he comprado en mi vida!',
					fraseEn: 'The best thing I have ever bought in my life!',
					textoprincipal:
						'¡Déjate cautivar por la magia de este peluche! Este encantador peluche del juego Valorant te transportará al emocionante mundo de tus personajes favoritos. Confeccionado con lana de alta calidad, es suave al tacto y resistente, asegurando la mejor compañía en tus momentos de relajación',
					textoprincipalEn:
						'Let yourself be captivated by the magic of this stuffed animal! This charming plush from the Valorant game will transport you to the exciting world of your favorite characters. Made with high quality wool, it is soft to the touch and resistant, ensuring the best company in your moments of relaxation.',
					textosecundario:
						'Con sus 10 cm de tamaño y un peso de 0.5 kg, es ideal para llevártelo a todas partes y compartir aventuras inolvidables. Originario de Japón, este peluche encarna la esencia de la cultura japonesa. ¡No pierdas la oportunidad de tener a este peluche en tus manos y sumergirte en la emoción de Valorant!',
					textosecundarioEn:
						'With its 10 cm in size and a weight of 0.5 kg, it is ideal to take it everywhere and share unforgettable adventures. Originally from Japan, this plush embodies the essence of Japanese culture. Do not miss the opportunity to have this plush in your hands and immerse yourself in the excitement of Valorant!',
					readMore: false,
					peopleFoundHelpful: 48
				},
				{
					id: 2,
					author: 'Juan Perez',
					user: 'juani',
					rating: 3,
					joined: 'Unido en Junio 2023',
					joinedEn: 'Joined on June 2023',
					frase: 'Hay cosas mejores',
					fraseEn: 'There are better things',
					textoprincipal: 'Ni fu ni fa',
					textoprincipalEn: 'Neither good nor bad',
					textosecundario: 'No es para tirar cohetes',
					textosecundarioEn: 'It is not to throw rockets',
					readMore: false,
					peopleFoundHelpful: 8
				}
				// Agrega más reseñas según sea necesario
			]
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851337896/webp/1a_medium2.webp#jpg',
			alt: '/cypher',
			name: 'Cypher',
			price: '15',
			stock: 100,
			dimensions: '10cm',
			description: 'Peluche de Cypher del juego Valorant',
			descriptionEn: 'Plushie of Cypher from the game Valorant',
			weight: '0.5kg',
			material: 'Lana',
			materialEn: 'Wool',
			origin: 'Japón',
			originEn: 'Japan',
			reviews: [
				{
					id: 1,
					author: 'Marta Lopez',
					user: 'mart',
					rating: 5,
					joined: 'Unido en Noviembre 2020',
					joinedEn: 'Joined on November 2020',
					frase: 'Lo mejor que he comprado en mi vida!',
					fraseEn: 'The best thing I have ever bought in my life!',
					textoprincipal:
						'¡Déjate cautivar por la magia de este peluche! Este encantador peluche del juego Valorant te transportará al emocionante mundo de tus personajes favoritos. Confeccionado con lana de alta calidad, es suave al tacto y resistente, asegurando la mejor compañía en tus momentos de relajación',
					textoprincipalEn:
						'Let yourself be captivated by the magic of this stuffed animal! This charming plush from the Valorant game will transport you to the exciting world of your favorite characters. Made with high quality wool, it is soft to the touch and resistant, ensuring the best company in your moments of relaxation.',
					textosecundario:
						'Con sus 10 cm de tamaño y un peso de 0.5 kg, es ideal para llevártelo a todas partes y compartir aventuras inolvidables. Originario de Japón, este peluche encarna la esencia de la cultura japonesa. ¡No pierdas la oportunidad de tener a este peluche en tus manos y sumergirte en la emoción de Valorant!',
					textosecundarioEn:
						'With its 10 cm in size and a weight of 0.5 kg, it is ideal to take it everywhere and share unforgettable adventures. Originally from Japan, this plush embodies the essence of Japanese culture. Do not miss the opportunity to have this plush in your hands and immerse yourself in the excitement of Valorant!',
					readMore: false,
					peopleFoundHelpful: 48
				},
				{
					id: 2,
					author: 'Juan Perez',
					user: 'juani',
					rating: 3,
					joined: 'Unido en Junio 2023',
					joinedEn: 'Joined on June 2023',
					frase: 'Hay cosas mejores',
					fraseEn: 'There are better things',
					textoprincipal: 'Ni fu ni fa',
					textoprincipalEn: 'Neither good nor bad',
					textosecundario: 'No es para tirar cohetes',
					textosecundarioEn: 'It is not to throw rockets',
					readMore: false,
					peopleFoundHelpful: 8
				}
				// Agrega más reseñas según sea necesario
			]
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/885418266/1polos__1__medium2.jpg',
			alt: '/fade',
			name: 'Fade',
			price: '15',
			stock: 120,
			dimensions: '10cm',
			description: 'Peluche de Fade del juego Valorant',
			descriptionEn: 'Plushie of Fade from the game Valorant',
			weight: '0.5kg',
			material: 'Lana',
			materialEn: 'Wool',
			origin: 'Japón',
			originEn: 'Japan',
			reviews: [
				{
					id: 1,
					author: 'Marta Lopez',
					user: 'mart',
					rating: 5,
					joined: 'Unido en Noviembre 2020',
					joinedEn: 'Joined on November 2020',
					frase: 'Lo mejor que he comprado en mi vida!',
					fraseEn: 'The best thing I have ever bought in my life!',
					textoprincipal:
						'¡Déjate cautivar por la magia de este peluche! Este encantador peluche del juego Valorant te transportará al emocionante mundo de tus personajes favoritos. Confeccionado con lana de alta calidad, es suave al tacto y resistente, asegurando la mejor compañía en tus momentos de relajación',
					textoprincipalEn:
						'Let yourself be captivated by the magic of this stuffed animal! This charming plush from the Valorant game will transport you to the exciting world of your favorite characters. Made with high quality wool, it is soft to the touch and resistant, ensuring the best company in your moments of relaxation.',
					textosecundario:
						'Con sus 10 cm de tamaño y un peso de 0.5 kg, es ideal para llevártelo a todas partes y compartir aventuras inolvidables. Originario de Japón, este peluche encarna la esencia de la cultura japonesa. ¡No pierdas la oportunidad de tener a este peluche en tus manos y sumergirte en la emoción de Valorant!',
					textosecundarioEn:
						'With its 10 cm in size and a weight of 0.5 kg, it is ideal to take it everywhere and share unforgettable adventures. Originally from Japan, this plush embodies the essence of Japanese culture. Do not miss the opportunity to have this plush in your hands and immerse yourself in the excitement of Valorant!',
					readMore: false,
					peopleFoundHelpful: 48
				},
				{
					id: 2,
					author: 'Juan Perez',
					user: 'juani',
					rating: 3,
					joined: 'Unido en Junio 2023',
					joinedEn: 'Joined on June 2023',
					frase: 'Hay cosas mejores',
					fraseEn: 'There are better things',
					textoprincipal: 'Ni fu ni fa',
					textoprincipalEn: 'Neither good nor bad',
					textosecundario: 'No es para tirar cohetes',
					textosecundarioEn: 'It is not to throw rockets',
					readMore: false,
					peopleFoundHelpful: 8
				}
				// Agrega más reseñas según sea necesario
			]
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/932971821/1polos_medium2.jpg',
			alt: '/kayo',
			name: 'Kayo',
			price: '15',
			stock: 100,
			dimensions: '10cm',
			description: 'Peluche de Kayo del juego Valorant',
			descriptionEn: 'Plushie of Kayo from the game Valorant',
			weight: '0.5kg',
			material: 'Lana',
			materialEn: 'Wool',
			origin: 'Japón',
			originEn: 'Japan',
			reviews: [
				{
					id: 1,
					author: 'Marta Lopez',
					user: 'mart',
					rating: 5,
					joined: 'Unido en Noviembre 2020',
					joinedEn: 'Joined on November 2020',
					frase: 'Lo mejor que he comprado en mi vida!',
					fraseEn: 'The best thing I have ever bought in my life!',
					textoprincipal:
						'¡Déjate cautivar por la magia de este peluche! Este encantador peluche del juego Valorant te transportará al emocionante mundo de tus personajes favoritos. Confeccionado con lana de alta calidad, es suave al tacto y resistente, asegurando la mejor compañía en tus momentos de relajación',
					textoprincipalEn:
						'Let yourself be captivated by the magic of this stuffed animal! This charming plush from the Valorant game will transport you to the exciting world of your favorite characters. Made with high quality wool, it is soft to the touch and resistant, ensuring the best company in your moments of relaxation.',
					textosecundario:
						'Con sus 10 cm de tamaño y un peso de 0.5 kg, es ideal para llevártelo a todas partes y compartir aventuras inolvidables. Originario de Japón, este peluche encarna la esencia de la cultura japonesa. ¡No pierdas la oportunidad de tener a este peluche en tus manos y sumergirte en la emoción de Valorant!',
					textosecundarioEn:
						'With its 10 cm in size and a weight of 0.5 kg, it is ideal to take it everywhere and share unforgettable adventures. Originally from Japan, this plush embodies the essence of Japanese culture. Do not miss the opportunity to have this plush in your hands and immerse yourself in the excitement of Valorant!',
					readMore: false,
					peopleFoundHelpful: 48
				},
				{
					id: 2,
					author: 'Juan Perez',
					user: 'juani',
					rating: 3,
					joined: 'Unido en Junio 2023',
					joinedEn: 'Joined on June 2023',
					frase: 'Hay cosas mejores',
					fraseEn: 'There are better things',
					textoprincipal: 'Ni fu ni fa',
					textoprincipalEn: 'Neither good nor bad',
					textosecundario: 'No es para tirar cohetes',
					textosecundarioEn: 'It is not to throw rockets',
					readMore: false,
					peopleFoundHelpful: 8
				}
				// Agrega más reseñas según sea necesario
			]
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851855574/webp/1a_medium2.webp#jpg',
			alt: '/phoenix',
			name: 'Phoenix',
			price: '15',
			stock: 42,
			dimensions: '10cm',
			description: 'Peluche de Phoenix del juego Valorant',
			descriptionEn: 'Plushie of Phoenix from the game Valorant',
			weight: '0.5kg',
			material: 'Lana',
			materialEn: 'Wool',
			origin: 'Japón',
			originEn: 'Japan',
			reviews: [
				{
					id: 1,
					author: 'Marta Lopez',
					user: 'mart',
					rating: 5,
					joined: 'Unido en Noviembre 2020',
					joinedEn: 'Joined on November 2020',
					frase: 'Lo mejor que he comprado en mi vida!',
					fraseEn: 'The best thing I have ever bought in my life!',
					textoprincipal:
						'¡Déjate cautivar por la magia de este peluche! Este encantador peluche del juego Valorant te transportará al emocionante mundo de tus personajes favoritos. Confeccionado con lana de alta calidad, es suave al tacto y resistente, asegurando la mejor compañía en tus momentos de relajación',
					textoprincipalEn:
						'Let yourself be captivated by the magic of this stuffed animal! This charming plush from the Valorant game will transport you to the exciting world of your favorite characters. Made with high quality wool, it is soft to the touch and resistant, ensuring the best company in your moments of relaxation.',
					textosecundario:
						'Con sus 10 cm de tamaño y un peso de 0.5 kg, es ideal para llevártelo a todas partes y compartir aventuras inolvidables. Originario de Japón, este peluche encarna la esencia de la cultura japonesa. ¡No pierdas la oportunidad de tener a este peluche en tus manos y sumergirte en la emoción de Valorant!',
					textosecundarioEn:
						'With its 10 cm in size and a weight of 0.5 kg, it is ideal to take it everywhere and share unforgettable adventures. Originally from Japan, this plush embodies the essence of Japanese culture. Do not miss the opportunity to have this plush in your hands and immerse yourself in the excitement of Valorant!',
					readMore: false,
					peopleFoundHelpful: 48
				},
				{
					id: 2,
					author: 'Juan Perez',
					user: 'juani',
					rating: 3,
					joined: 'Unido en Junio 2023',
					joinedEn: 'Joined on June 2023',
					frase: 'Hay cosas mejores',
					fraseEn: 'There are better things',
					textoprincipal: 'Ni fu ni fa',
					textoprincipalEn: 'Neither good nor bad',
					textosecundario: 'No es para tirar cohetes',
					textosecundarioEn: 'It is not to throw rockets',
					readMore: false,
					peopleFoundHelpful: 8
				}
				// Agrega más reseñas según sea necesario
			]
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851859193/webp/1a_medium2.webp#jpg',
			alt: '/raze',
			name: 'Raze',
			price: '15',
			stock: 23,
			dimensions: '10cm',
			description: 'Peluche de Raze del juego Valorant',
			descriptionEn: 'Plushie of Raze from the game Valorant',
			weight: '0.5kg',
			material: 'Lana',
			materialEn: 'Wool',
			origin: 'Japón',
			originEn: 'Japan',
			reviews: [
				{
					id: 1,
					author: 'Marta Lopez',
					user: 'mart',
					rating: 5,
					joined: 'Unido en Noviembre 2020',
					joinedEn: 'Joined on November 2020',
					frase: 'Lo mejor que he comprado en mi vida!',
					fraseEn: 'The best thing I have ever bought in my life!',
					textoprincipal:
						'¡Déjate cautivar por la magia de este peluche! Este encantador peluche del juego Valorant te transportará al emocionante mundo de tus personajes favoritos. Confeccionado con lana de alta calidad, es suave al tacto y resistente, asegurando la mejor compañía en tus momentos de relajación',
					textoprincipalEn:
						'Let yourself be captivated by the magic of this stuffed animal! This charming plush from the Valorant game will transport you to the exciting world of your favorite characters. Made with high quality wool, it is soft to the touch and resistant, ensuring the best company in your moments of relaxation.',
					textosecundario:
						'Con sus 10 cm de tamaño y un peso de 0.5 kg, es ideal para llevártelo a todas partes y compartir aventuras inolvidables. Originario de Japón, este peluche encarna la esencia de la cultura japonesa. ¡No pierdas la oportunidad de tener a este peluche en tus manos y sumergirte en la emoción de Valorant!',
					textosecundarioEn:
						'With its 10 cm in size and a weight of 0.5 kg, it is ideal to take it everywhere and share unforgettable adventures. Originally from Japan, this plush embodies the essence of Japanese culture. Do not miss the opportunity to have this plush in your hands and immerse yourself in the excitement of Valorant!',
					readMore: false,
					peopleFoundHelpful: 48
				},
				{
					id: 2,
					author: 'Juan Perez',
					user: 'juani',
					rating: 3,
					joined: 'Unido en Junio 2023',
					joinedEn: 'Joined on June 2023',
					frase: 'Hay cosas mejores',
					fraseEn: 'There are better things',
					textoprincipal: 'Ni fu ni fa',
					textoprincipalEn: 'Neither good nor bad',
					textosecundario: 'No es para tirar cohetes',
					textosecundarioEn: 'It is not to throw rockets',
					readMore: false,
					peopleFoundHelpful: 8
				}
				// Agrega más reseñas según sea necesario
			]
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/885419606/1polos__2__medium2.jpg',
			alt: '/skye',
			name: 'Skye',
			price: '15',
			stock: 123,
			dimensions: '10cm',
			description: 'Peluche de Skye del juego Valorant',
			descriptionEn: 'Plushie of Skye from the game Valorant',
			weight: '0.5kg',
			material: 'Lana',
			materialEn: 'Wool',
			origin: 'Japón',
			originEn: 'Japan',
			reviews: [
				{
					id: 1,
					author: 'Marta Lopez',
					user: 'mart',
					rating: 5,
					joined: 'Unido en Noviembre 2020',
					joinedEn: 'Joined on November 2020',
					frase: 'Lo mejor que he comprado en mi vida!',
					fraseEn: 'The best thing I have ever bought in my life!',
					textoprincipal:
						'¡Déjate cautivar por la magia de este peluche! Este encantador peluche del juego Valorant te transportará al emocionante mundo de tus personajes favoritos. Confeccionado con lana de alta calidad, es suave al tacto y resistente, asegurando la mejor compañía en tus momentos de relajación',
					textoprincipalEn:
						'Let yourself be captivated by the magic of this stuffed animal! This charming plush from the Valorant game will transport you to the exciting world of your favorite characters. Made with high quality wool, it is soft to the touch and resistant, ensuring the best company in your moments of relaxation.',
					textosecundario:
						'Con sus 10 cm de tamaño y un peso de 0.5 kg, es ideal para llevártelo a todas partes y compartir aventuras inolvidables. Originario de Japón, este peluche encarna la esencia de la cultura japonesa. ¡No pierdas la oportunidad de tener a este peluche en tus manos y sumergirte en la emoción de Valorant!',
					textosecundarioEn:
						'With its 10 cm in size and a weight of 0.5 kg, it is ideal to take it everywhere and share unforgettable adventures. Originally from Japan, this plush embodies the essence of Japanese culture. Do not miss the opportunity to have this plush in your hands and immerse yourself in the excitement of Valorant!',
					readMore: false,
					peopleFoundHelpful: 48
				},
				{
					id: 2,
					author: 'Juan Perez',
					user: 'juani',
					rating: 3,
					joined: 'Unido en Junio 2023',
					joinedEn: 'Joined on June 2023',
					frase: 'Hay cosas mejores',
					fraseEn: 'There are better things',
					textoprincipal: 'Ni fu ni fa',
					textoprincipalEn: 'Neither good nor bad',
					textosecundario: 'No es para tirar cohetes',
					textosecundarioEn: 'It is not to throw rockets',
					readMore: false,
					peopleFoundHelpful: 8
				}
				// Agrega más reseñas según sea necesario
			]
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851863513/webp/1a_medium2.webp#jpg',
			alt: '/sova',
			name: 'Sova',
			price: '15',
			stock: 89,
			dimensions: '10cm',
			description: 'Peluche de Sova del juego Valorant',
			descriptionEn: 'Plushie of Sova from the game Valorant',
			weight: '0.5kg',
			material: 'Lana',
			materialEn: 'Wool',
			origin: 'Japón',
			originEn: 'Japan',
			reviews: [
				{
					id: 1,
					author: 'Marta Lopez',
					user: 'mart',
					rating: 5,
					joined: 'Unido en Noviembre 2020',
					joinedEn: 'Joined on November 2020',
					frase: 'Lo mejor que he comprado en mi vida!',
					fraseEn: 'The best thing I have ever bought in my life!',
					textoprincipal:
						'¡Déjate cautivar por la magia de este peluche! Este encantador peluche del juego Valorant te transportará al emocionante mundo de tus personajes favoritos. Confeccionado con lana de alta calidad, es suave al tacto y resistente, asegurando la mejor compañía en tus momentos de relajación',
					textoprincipalEn:
						'Let yourself be captivated by the magic of this stuffed animal! This charming plush from the Valorant game will transport you to the exciting world of your favorite characters. Made with high quality wool, it is soft to the touch and resistant, ensuring the best company in your moments of relaxation.',
					textosecundario:
						'Con sus 10 cm de tamaño y un peso de 0.5 kg, es ideal para llevártelo a todas partes y compartir aventuras inolvidables. Originario de Japón, este peluche encarna la esencia de la cultura japonesa. ¡No pierdas la oportunidad de tener a este peluche en tus manos y sumergirte en la emoción de Valorant!',
					textosecundarioEn:
						'With its 10 cm in size and a weight of 0.5 kg, it is ideal to take it everywhere and share unforgettable adventures. Originally from Japan, this plush embodies the essence of Japanese culture. Do not miss the opportunity to have this plush in your hands and immerse yourself in the excitement of Valorant!',
					readMore: false,
					peopleFoundHelpful: 48
				},
				{
					id: 2,
					author: 'Juan Perez',
					user: 'juani',
					rating: 3,
					joined: 'Unido en Junio 2023',
					joinedEn: 'Joined on June 2023',
					frase: 'Hay cosas mejores',
					fraseEn: 'There are better things',
					textoprincipal: 'Ni fu ni fa',
					textoprincipalEn: 'Neither good nor bad',
					textosecundario: 'No es para tirar cohetes',
					textosecundarioEn: 'It is not to throw rockets',
					readMore: false,
					peopleFoundHelpful: 8
				}
				// Agrega más reseñas según sea necesario
			]
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851881949/webp/1a_medium2.webp#jpg',
			alt: '/yoru',
			name: 'Yoru',
			price: '15',
			stock: 60,
			dimensions: '10cm',
			description: 'Peluche de Yoru del juego Valorant',
			descriptionEn: 'Plushie of Yoru from the game Valorant',
			weight: '0.5kg',
			material: 'Lana',
			materialEn: 'Wool',
			origin: 'Japón',
			originEn: 'Japan',
			reviews: [
				{
					id: 1,
					author: 'Marta Lopez',
					user: 'mart',
					rating: 5,
					joined: 'Unido en Noviembre 2020',
					joinedEn: 'Joined on November 2020',
					frase: 'Lo mejor que he comprado en mi vida!',
					fraseEn: 'The best thing I have ever bought in my life!',
					textoprincipal:
						'¡Déjate cautivar por la magia de este peluche! Este encantador peluche del juego Valorant te transportará al emocionante mundo de tus personajes favoritos. Confeccionado con lana de alta calidad, es suave al tacto y resistente, asegurando la mejor compañía en tus momentos de relajación',
					textoprincipalEn:
						'Let yourself be captivated by the magic of this stuffed animal! This charming plush from the Valorant game will transport you to the exciting world of your favorite characters. Made with high quality wool, it is soft to the touch and resistant, ensuring the best company in your moments of relaxation.',
					textosecundario:
						'Con sus 10 cm de tamaño y un peso de 0.5 kg, es ideal para llevártelo a todas partes y compartir aventuras inolvidables. Originario de Japón, este peluche encarna la esencia de la cultura japonesa. ¡No pierdas la oportunidad de tener a este peluche en tus manos y sumergirte en la emoción de Valorant!',
					textosecundarioEn:
						'With its 10 cm in size and a weight of 0.5 kg, it is ideal to take it everywhere and share unforgettable adventures. Originally from Japan, this plush embodies the essence of Japanese culture. Do not miss the opportunity to have this plush in your hands and immerse yourself in the excitement of Valorant!',
					readMore: false,
					peopleFoundHelpful: 48
				},
				{
					id: 2,
					author: 'Juan Perez',
					user: 'juani',
					rating: 3,
					joined: 'Unido en Junio 2023',
					joinedEn: 'Joined on June 2023',
					frase: 'Hay cosas mejores',
					fraseEn: 'There are better things',
					textoprincipal: 'Ni fu ni fa',
					textoprincipalEn: 'Neither good nor bad',
					textosecundario: 'No es para tirar cohetes',
					textosecundarioEn: 'It is not to throw rockets',
					readMore: false,
					peopleFoundHelpful: 8
				}
				// Agrega más reseñas según sea necesario
			]
		},
		{
			image: 'https://m.media-amazon.com/images/I/613JOVPMBRL.jpg',
			alt: '/ajolote',
			name: 'Ajolote',
			price: '24',
			stock: 23,
			dimensions: '10cm',
			description: 'Peluche de un ajolote tumbado',
			descriptionEn: 'Plushie of a lying axolotl',
			weight: '0.5kg',
			material: 'algodón',
			materialEn: 'cotton',
			origin: 'Japón',
			originEn: 'Japan',
			reviews: [
				{
					id: 1,
					author: 'Marta Lopez',
					user: 'mart',
					rating: 5,
					joined: 'Unido en Noviembre 2020',
					joinedEn: 'Joined on November 2020',
					frase: 'Lo mejor que he comprado en mi vida!',
					fraseEn: 'The best thing I have ever bought in my life!',
					textoprincipal:
						'¡Déjate cautivar por la magia de este peluche! Este encantador peluche del juego Valorant te transportará al emocionante mundo de tus personajes favoritos. Confeccionado con lana de alta calidad, es suave al tacto y resistente, asegurando la mejor compañía en tus momentos de relajación',
					textoprincipalEn:
						'Let yourself be captivated by the magic of this stuffed animal! This charming plush from the Valorant game will transport you to the exciting world of your favorite characters. Made with high quality wool, it is soft to the touch and resistant, ensuring the best company in your moments of relaxation.',
					textosecundario:
						'Con sus 10 cm de tamaño y un peso de 0.5 kg, es ideal para llevártelo a todas partes y compartir aventuras inolvidables. Originario de Japón, este peluche encarna la esencia de la cultura japonesa. ¡No pierdas la oportunidad de tener a este peluche en tus manos y sumergirte en la emoción de Valorant!',
					textosecundarioEn:
						'With its 10 cm in size and a weight of 0.5 kg, it is ideal to take it everywhere and share unforgettable adventures. Originally from Japan, this plush embodies the essence of Japanese culture. Do not miss the opportunity to have this plush in your hands and immerse yourself in the excitement of Valorant!',
					readMore: false,
					peopleFoundHelpful: 48
				},
				{
					id: 2,
					author: 'Juan Perez',
					user: 'juani',
					rating: 3,
					joined: 'Unido en Junio 2023',
					joinedEn: 'Joined on June 2023',
					frase: 'Hay cosas mejores',
					fraseEn: 'There are better things',
					textoprincipal: 'Ni fu ni fa',
					textoprincipalEn: 'Neither good nor bad',
					textosecundario: 'No es para tirar cohetes',
					textosecundarioEn: 'It is not to throw rockets',
					readMore: false,
					peopleFoundHelpful: 8
				}
				// Agrega más reseñas según sea necesario
			]
		},
		{
			image: 'https://cdn.shopify.com/s/files/1/0256/9053/8050/products/product-image-791460924_1200x1200.jpg?v=1575226240',
			alt: '/dog',
			name: 'Doggie',
			price: '24',
			stock: 19,
			dimensions: '10cm',
			description: 'Peluche de un perro tumbado y regordete',
			descriptionEn: 'Plushie of a lying and chubby dog',
			weight: '0.5kg',
			material: 'algodón',
			materialEn: 'cotton',
			origin: 'Japón',
			originEn: 'Japan',
			reviews: [
				{
					id: 1,
					author: 'Marta Lopez',
					user: 'mart',
					rating: 5,
					joined: 'Unido en Noviembre 2020',
					joinedEn: 'Joined on November 2020',
					frase: 'Lo mejor que he comprado en mi vida!',
					fraseEn: 'The best thing I have ever bought in my life!',
					textoprincipal:
						'¡Déjate cautivar por la magia de este peluche! Este encantador peluche del juego Valorant te transportará al emocionante mundo de tus personajes favoritos. Confeccionado con lana de alta calidad, es suave al tacto y resistente, asegurando la mejor compañía en tus momentos de relajación',
					textoprincipalEn:
						'Let yourself be captivated by the magic of this stuffed animal! This charming plush from the Valorant game will transport you to the exciting world of your favorite characters. Made with high quality wool, it is soft to the touch and resistant, ensuring the best company in your moments of relaxation.',
					textosecundario:
						'Con sus 10 cm de tamaño y un peso de 0.5 kg, es ideal para llevártelo a todas partes y compartir aventuras inolvidables. Originario de Japón, este peluche encarna la esencia de la cultura japonesa. ¡No pierdas la oportunidad de tener a este peluche en tus manos y sumergirte en la emoción de Valorant!',
					textosecundarioEn:
						'With its 10 cm in size and a weight of 0.5 kg, it is ideal to take it everywhere and share unforgettable adventures. Originally from Japan, this plush embodies the essence of Japanese culture. Do not miss the opportunity to have this plush in your hands and immerse yourself in the excitement of Valorant!',
					readMore: false,
					peopleFoundHelpful: 48
				},
				{
					id: 2,
					author: 'Juan Perez',
					user: 'juani',
					rating: 3,
					joined: 'Unido en Junio 2023',
					joinedEn: 'Joined on June 2023',
					frase: 'Hay cosas mejores',
					fraseEn: 'There are better things',
					textoprincipal: 'Ni fu ni fa',
					textoprincipalEn: 'Neither good nor bad',
					textosecundario: 'No es para tirar cohetes',
					textosecundarioEn: 'It is not to throw rockets',
					readMore: false,
					peopleFoundHelpful: 8
				}
				// Agrega más reseñas según sea necesario
			]
		},
		{
			image: 'https://peluchesfantasia.com/cdn/shop/products/oso-rilakkuma-peluche_1719d2b6-af37-4210-ba40-1f9a12068934_2000x.jpg?v=1625575586',
			alt: '/rilakkuma',
			name: 'Rilakkuma',
			price: '15',
			stock: 21,
			dimensions: '10cm',
			description: 'Peluche de Rilakkuma el oso feliz y cariñoso',
			descriptionEn: 'Plushie of Rilakkuma the happy and affectionate bear',
			weight: '0.5kg',
			material: 'algodón',
			materialEn: 'cotton',
			origin: 'Japón',
			originEn: 'Japan',
			reviews: [
				{
					id: 1,
					author: 'David Anderson',
					user: 'david',
					rating: 5,
					joined: 'Unido en Noviembre 2020',
					joinedEn: 'Joined on November 2020',
					frase: 'Lo mejor que he comprado en mi vida!',
					fraseEn: 'The best thing I have ever bought in my life!',
					textoprincipal:
						'¡Prepárate para conocer a "Rilakkuma", el peluche más tierno y encantador que jamás hayas visto! Este adorable oso feliz y cariñoso, originario de Japón, te conquistará con su suavidad y calidad inigualables.',
					textoprincipalEn:
						'Get ready to meet "Rilakkuma", the cutest and most charming plush you have ever seen! This adorable happy and affectionate bear, originally from Japan, will conquer you with its unmatched softness and quality.',
					textosecundario:
						'Con solo 10 cm de tamaño, es el compañero perfecto para llevar a todas partes. No dejes pasar la oportunidad de agregar un toque de ternura a tu vida con "Rilakkuma", el entrañable oso japonés que te robará el corazón. ¡Hazte con él antes de que se agoten!',
					textosecundarioEn:
						'With only 10 cm in size, it is the perfect companion to take everywhere. Do not miss the opportunity to add a touch of tenderness to your life with "Rilakkuma", the endearing Japanese bear that will steal your heart. Get it before they run out!',
					readMore: false,
					peopleFoundHelpful: 25
				}
			]
		}
	];
	products.forEach((product) => {
		product.id = contador = contador + 13091238;
	});

	return products;
};

export const items = generateProducts();
