import { useState } from 'react';
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

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const partners = [
        {
            id: 1,
            partner: 'FreshMart',
            package: 'CarniCrave',
            dietaryRestrictions: 'Halal, Kosher, Gluten-free',
            carbonReduction: '50 tons',
            price: '19.99 USDC',
        },
        {
            id: 2,
            partner: 'GreenGrocery',
            package: 'Plateful Pleaser',
            dietaryRestrictions: 'Halal, Kosher, Gluten-free',
            carbonReduction: '40 tons',
            price: '15.99 USDC',
        },
        {
            id: 3,
            partner: 'Organic Oasis',
            package: 'Greens Galore',
            dietaryRestrictions: 'Halal, Kosher, Gluten-free',
            carbonReduction: '60 tons',
            price: '17.99 USDC',
        },
        {
            id: 4,
            partner: 'Harvest Health',
            package: 'Sustainable Sampler',
            dietaryRestrictions: 'Gluten-free, Vegan',
            carbonReduction: '35 tons',
            price: '14.99 USDC',
        },
        {
            id: 5,
            partner: 'Bountiful Basket',
            package: 'Garden Delights',
            dietaryRestrictions: 'Vegetarian, Gluten-free',
            carbonReduction: '45 tons',
            price: '16.99 USDC',
        },
    ];

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredPartners = partners.filter((partner) => {
        return (
            partner.partner.toLowerCase().includes(searchTerm.toLowerCase()) ||
            partner.package.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

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
                    Plate2Planet Data Dao
                </h1>

                <div className="max-w-3xl mx-auto mt-8">
                    <input
                        type="text"
                        className="w-full py-2 px-4 mb-4 rounded-lg"
                        placeholder="Search by partner or package"
                        value={searchTerm}
                        onChange={handleSearch}
                    />

                    <table className="w-full border-collapse">
                        <thead>
                        <tr>
                            <th className="px-4 py-2 bg-gray-100">Partner</th>
                            <th className="px-4 py-2 bg-gray-100">Package</th>
                            <th className="px-4 py-2 bg-gray-100">Dietary Restrictions</th>
                            <th className="px-4 py-2 bg-gray-100">Carbon Reduction</th>
                            <th className="px-4 py-2 bg-gray-100">Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredPartners.map((partner) => (
                            <tr key={partner.id}>
                                <td className="px-4 py-2">{partner.partner}</td>
                                <td className="px-4 py-2">{partner.package}</td>
                                <td className="px-4 py-2">{partner.dietaryRestrictions}</td>
                                <td className="px-4 py-2">{partner.carbonReduction}</td>
                                <td className="px-4 py-2">{partner.price}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col items-center mt-8 space-y-4">
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold">
                        See Smart Contract
                    </button>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold">
                        Contribute Data
                    </button>
                </div>
            </motion.main>

            <footer className="mt-16 text-gray-600">
                <p>&copy; {new Date().getFullYear()} Plate2Planet. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Search;
