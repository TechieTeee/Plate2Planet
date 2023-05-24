// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract P2PDataDao {
    address public owner;
    mapping(uint256 => PartnerData) public partnerData;
    uint256 public partnerCount;

    struct PartnerData {
        string partnerName;
        string package;
        string dietaryRestrictions;
        string carbonReduction;
        string price;
    }

    event PartnerDataAdded(uint256 indexed partnerId, string partnerName, string package);

    constructor() {
        owner = msg.sender;
        partnerCount = 0;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this action");
        _;
    }

    function addPartnerData(
        string memory _partnerName,
        string memory _package,
        string memory _dietaryRestrictions,
        string memory _carbonReduction,
        string memory _price
    ) public onlyOwner {
        partnerCount++;

        partnerData[partnerCount] = PartnerData(
            _partnerName,
            _package,
            _dietaryRestrictions,
            _carbonReduction,
            _price
        );

        emit PartnerDataAdded(partnerCount, _partnerName, _package);
    }

    function getPartnerData(uint256 partnerId)
    public
    view
    returns (
        string memory,
        string memory,
        string memory,
        string memory,
        string memory
    )
    {
        require(partnerId > 0 && partnerId <= partnerCount, "Invalid partner ID");

        PartnerData storage partner = partnerData[partnerId];
        return (
        partner.partnerName,
        partner.package,
        partner.dietaryRestrictions,
        partner.carbonReduction,
        partner.price
        );
    }
}
