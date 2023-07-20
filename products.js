let contador = 8132471024;
const generateProducts = () => {
	const products = [
		{
			image: 'https://i.pinimg.com/originals/40/08/50/400850ea28341815f9b2bbfe4c25591c.jpg',
			alt: '/sage',
			name: `Sage`,
			price: '25€'
		},
		{
			image: 'https://i.etsystatic.com/25121049/r/il/b4efc4/5059405825/il_fullxfull.5059405825_9j82.jpg',
			alt: '/jett',
			name: 'Jett',
			price: '15€'
		},
		{
			image: 'https://i.etsystatic.com/25121049/r/il/adcd61/4742236553/il_fullxfull.4742236553_pyft.jpg',
			alt: '/neon',
			name: 'Neon',
			price: '15€'
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851880757/webp/1a_medium2.webp#jpg',
			alt: '/viper',
			name: 'Viper',
			price: '15€'
		},
		{
			image: 'https://i.pinimg.com/736x/d2/c7/8d/d2c78ddfca72a8f51392e020405619de.jpg',
			alt: '/omen',
			name: 'Omen',
			price: '15€'
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/933815727/Gekko_Amigurumi_medium2.jpg',
			alt: '/geeko',
			name: 'Geeko',
			price: '15€'
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851340796/webp/1a_medium2.webp#jpg',
			alt: '/killjoy',
			name: 'Killjoy',
			price: '15€'
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851857044/webp/1a_medium2.webp#jpg',
			alt: '/reyna',
			name: 'Reyna',
			price: '15€'
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/932967867/1polos_medium2.jpg',
			alt: '/brimstone',
			name: 'Brimstone',
			price: '15€'
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851336260/webp/1a_medium2.webp#jpg',
			alt: '/chamber',
			name: 'Chamber',
			price: '15€'
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851337896/webp/1a_medium2.webp#jpg',
			alt: '/cypher',
			name: 'Cypher',
			price: '15€'
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/885418266/1polos__1__medium2.jpg',
			alt: '/fade',
			name: 'Fade',
			price: '15€'
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/932971821/1polos_medium2.jpg',
			alt: '/kayo',
			name: 'Kayo',
			price: '15€'
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851855574/webp/1a_medium2.webp#jpg',
			alt: '/phoenix',
			name: 'Phoenix',
			price: '15€'
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851859193/webp/1a_medium2.webp#jpg',
			alt: '/raze',
			name: 'Raze',
			price: '15€'
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/885419606/1polos__2__medium2.jpg',
			alt: '/skye',
			name: 'Skye',
			price: '15€'
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851863513/webp/1a_medium2.webp#jpg',
			alt: '/sova',
			name: 'Sova',
			price: '15€'
		},
		{
			image: 'https://images4-a.ravelrycache.com/uploads/Medaami/851881949/webp/1a_medium2.webp#jpg',
			alt: '/yoru',
			name: 'Yoru',
			price: '15€'
		},
		{
			image: 'https://m.media-amazon.com/images/I/613JOVPMBRL.jpg',
			alt: '/ajolote',
			name: 'Ajolote',
			price: '24€'
		},
		{
			image: 'https://cdn.shopify.com/s/files/1/0256/9053/8050/products/product-image-791460924_1200x1200.jpg?v=1575226240',
			alt: '/dog',
			name: 'Doggie',
			price: '24€'
		},
		{
			image: 'https://peluchesfantasia.com/cdn/shop/products/oso-rilakkuma-peluche_1719d2b6-af37-4210-ba40-1f9a12068934_2000x.jpg?v=1625575586',
			alt: '/rilakkuma',
			name: 'Rilakkuma',
			price: '15€'
		}
	];
	products.forEach((product) => {
		product.id = contador = contador + 13091238;
	});

	return products;
};

export const items = generateProducts();
