import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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

export default function Home() {
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
                <div className="relative">
                    <Image
                        src="/Plate2Planet_Logo_4.svg"
                        alt="Hero Image"
                        width={800}
                        height={400}
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>

                <motion.h1 className="text-4xl font-bold mb-1 text-white text-shadow-sm" variants={buttonVariants}>
                    So what's the big deal?
                </motion.h1>
                <motion.p className="text-lg text-gray-600 mb-8 text-shadow-sm" variants={buttonVariants}>
                    Did you know that a staggering 2.5 billion tons of food is squandered annually worldwide? Shockingly, this
                    contributes to over 10% of greenhouse gas emissions, as recently reported by a PLOS publication.

                    Even more appalling is the $2.6 trillion dollars in economic, social and resource lost each year, in the U.S.
                    alone. Meanwhile, countless families suffer from hunger while valuable food goes to waste. According to the
                    United Nations, over 828 million people are currently impacted by global hunger, and the aftermath of COVID
                    has only exacerbated this crisis.

                    But fear not! We present to you Plate2Planet, an innovative, data-driven, and blockchain-powered solution.
                    Our mission is simple yet powerful: to rescue food before it's wasted and provide crucial, transparent data to
                    the public, all through our cutting-edge blockchain platform.

                    Together, we can combat food waste, nourish the hungry, and create a brighter future for all. Join us in this
                    vital journey towards sustainability and social responsibility. Together, we can make a lasting difference.
                    Let's power up for change with Plate2Planet!
                </motion.p>
                <Link href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0228369" passHref>
                    <motion.a
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold"
                        variants={buttonVariants}
                        whileHover="hover"
                    >
                        Learn More
                    </motion.a>
                </Link>
            </motion.main>

            {/* Solution Section */}
            <motion.main
                className="flex flex-col items-center mt-16"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 className="text-4xl font-bold mb-1 text-white text-shadow-sm" variants={buttonVariants}>
                    Strategic Approach
                </motion.h1>
                <motion.p className="text-lg text-gray-600 mb-8 text-shadow-sm" variants={buttonVariants}>
                    Plate2Planet has revolutionized the game by tapping into the powerful capabilities of the Filecoin virtual
                    machine. We've created a cutting-edge data DAO and a groundbreaking food waste removal marketplace that
                    unleashes the power of critical food data. With our innovative platform, food can now be leveraged and sold
                    before it loses its value.

                    This game-changing approach brings forth three remarkable benefits that will transform the food industry as we
                    know it. First, vendors can maximize their profits by selling food before it spoils or meets a tragic fate in
                    the trash. Second, low-income families can access incredible deals on nutritious food, ensuring that no one
                    goes hungry. And that's not all—our initiative contributes to fighting climate change, making it a win-win for
                    everyone involved.

                    But wait, there's more! We've uncovered a bonus benefit of utilizing any unpurchased food. Through non-food
                    industrial up-cycling, we can repurpose surplus ingredients for purposes such as fertilizer or even alcohol
                    production, creating a circular economy that minimizes waste.

                    Join us in this epic journey of transforming the food landscape. Together, we'll create a future where
                    profits soar, families thrive, climate change retreats, and even food waste finds a valuable purpose. Discover
                    the power of Plate2Planet today!
                </motion.p>
                <motion.a
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold"
                    href="/gallery"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    whileHover="hover"
                >
                    Check It Out
                </motion.a>
            </motion.main>

            {/* Footer */}
            <footer className="mt-16 text-gray-600">
                <p>&copy; {new Date().getFullYear()} Plate2Planet. All rights reserved.</p>
            </footer>
        </div>
    );
}
