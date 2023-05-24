const hre = require("hardhat");

async function main() {
    // Deploy P2PMarket contract
    const P2PMarket = await hre.ethers.getContractFactory("P2PMarket");
    const p2pMarket = await P2PMarket.deploy();

    await p2pMarket.deployed();

    console.log("P2PMarket deployed to:", p2pMarket.address);

    // Deploy P2PDataDao contract
    const P2PDataDao = await hre.ethers.getContractFactory("P2PDataDao");
    const p2pDataDao = await P2PDataDao.deploy();

    await p2pDataDao.deployed();

    console.log("P2PDataDao deployed to:", p2pDataDao.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
