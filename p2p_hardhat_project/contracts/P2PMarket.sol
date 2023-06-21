// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@chainlink/contracts/src/v0.8/interfaces/Aggregator.sol";

contract P2PMarket {
    address public owner;
    uint public rewardPointsPerPurchase;
    uint public carbonCreditsPerPurchase;

    struct Purchase {
        address customer;
        string package;
        uint price;
        uint timestamp;
    }

    Purchase[] public purchases;
    mapping(address => uint) public rewardPoints;
    mapping(address => uint) public carbonCredits;

    event PurchaseMade(address indexed customer, string package, uint price, uint rewardPointsEarned, uint carbonCreditsEarned);
    event PriceUSDUpdated(uint priceUSD);

    constructor() {
        owner = msg.sender;
        rewardPointsPerPurchase = 10; // Number of reward points earned per purchase
        carbonCreditsPerPurchase = 5; // Number of carbon credits earned per purchase
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this action");
        _;
    }

    function buyPackage(string memory package, uint price) public {
        require(price > 0, "Price must be greater than zero");

        Purchase memory newPurchase = Purchase({
            customer: msg.sender,
            package: package,
            price: price,
            timestamp: block.timestamp
        });

        purchases.push(newPurchase);

        uint rewardPointsEarned = price / rewardPointsPerPurchase;
        rewardPoints[msg.sender] += rewardPointsEarned;

        uint carbonCreditsEarned = price / carbonCreditsPerPurchase;
        carbonCredits[msg.sender] += carbonCreditsEarned;

        emit PurchaseMade(msg.sender, package, price, rewardPointsEarned, carbonCreditsEarned);

        // Fetch data from the TheGraph subgraph
        Aggregator contract = Aggregator(0x0123456789abcdef0123456789abcdef01234567);
        uint priceUSD = contract.latestAnswer();

        // Log the price in USD
        emit PriceUSDUpdated(priceUSD);
    }

    function getPurchasesCount() public view returns (uint) {
        return purchases.length;
    }

    function getPurchase(uint index) public view returns (address, string memory, uint, uint) {
        require(index < purchases.length, "Invalid purchase index");

        Purchase memory purchase = purchases[index];
        return (purchase.customer, purchase.package, purchase.price, purchase.timestamp);
    }

    function setRewardPointsPerPurchase(uint points) public onlyOwner {
        require(points > 0, "Reward points must be greater than zero");
        rewardPointsPerPurchase = points;
    }

    function setCarbonCreditsPerPurchase(uint credits) public onlyOwner {
        require(credits > 0, "Carbon credits must be greater than zero");
        carbonCreditsPerPurchase = credits;
    }
}
