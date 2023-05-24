import { motion } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const buttonVariants = {
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.3,
            yoyo: Infinity,
        },
    },
};

const Gallery = () => {
    const items = [
        {
            id: 1,
            title: 'CarniCrave',
            description: 'Embark on a carnivorous adventure with our CarniCrave package, designed to tantalize the taste buds of meat enthusiasts. Indulge in a selection of premium cuts, succulent meats, and gourmet delights that will satisfy your carnivorous cravings. From juicy steaks to savory sausages and delectable BBQ favorites, savor the rich flavors and textures that make meat a culinary masterpiece. Customizable to meet dietary and religious restrictions, including options for halal, kosher, and gluten-free preferences.',
            image: '/meat.jpg',
        },
        {
            id: 2,
            title: 'Plateful Pleaser',
            description: 'Delight your taste buds with our Plateful Pleaser package, featuring an enticing fusion of greens, plant-based protein wonders, and vegan meat alternatives. Indulge in the goodness of tofu, seitan, lentils, textured vegetable protein, and scrumptious veggie burgers that will satisfy your cravings and leave you wanting more. With each bite, experience a harmonious blend of flavors, while supporting your well-being and the planet\'s health. Customizable to meet dietary and religious restrictions, including options for halal, kosher, and gluten-free preferences.',
            image: '/omnivore.jpg',
        },
        {
            id: 3,
            title: 'Greens Galore',
            description: ' Indulge in a bountiful array of vibrant, nutrient-packed greens and plant-based protein delights. Our package is a haven for veggie lovers, offering a delightful assortment of fresh, organic produce alongside plant-based protein powerhouses like tofu, seitan, lentils, textured vegetable protein, and delectable vegan meat alternatives. Nourish your body with a perfect balance of flavors and nutrients, while embracing a sustainable and compassionate lifestyle. Customizable to meet dietary and religious restrictions, including options for halal, kosher, and gluten-free preferences.',
            image: '/veggie.jpg',
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#c8bfb3] font-anton">
            <header className="fixed top-0 left-0 m-4">
                <Image src="/Plate2Planet_Logo.svg" alt="Logo" width={80} height={80} />
            </header>

            <header className="fixed top-0 right-0 m-4">
                <button className="bg-[#C1FF72] text-black px-4 py-2 rounded-lg font-bold">
                    Connect with Metamask
                </button>
            </header>

            <motion.main
                className="flex flex-col items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <h1 className="text-4xl font-bold mb-1 text-white text-shadow-sm text-orange-500">
                    Plate2Planet Deals
                </h1>

                <div className="grid grid-cols-3 gap-4 mt-8">
                    {items.map((item) => (
                        <div key={item.id} className="bg-white p-4 rounded-lg shadow">
                            <Image
                                src={item.image}
                                alt={`Item ${item.id}`}
                                width={300}
                                height={200}
                                objectFit="cover"
                                className="rounded-lg"
                            />
                            <h2 className="text-xl font-bold mt-2 mb-1">{item.title}</h2>
                            <p className="text-gray-600 mb-4">{item.description}</p>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold mt-8" onClick={() => window.location.href = 'search'}>
                                Purchase
                            </button>
                        </div>
                    ))}
                </div>

                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold mt-8" onClick={() => window.location.href = 'search'}>
                    <span style={{color: 'white'}}>Dive into the Data</span>
                </button>
            </motion.main>

            <footer className="mt-16 text-gray-600">
                <p>&copy; {new Date().getFullYear()} Plate2Planet. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Gallery;
