// SPDX-License-Identifier: MIT

pragma solidity >=0.8.9 <0.9.0;

import 'erc721a/contracts/ERC721A.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/cryptography/MerkleProof.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import "@openzeppelin/contracts/utils/Strings.sol";

contract CryptoBlueBerry is ERC721A, Ownable, ReentrancyGuard {

  using Strings for uint256;

  bytes32 public merkleRoot;
  // ownedTokens
  mapping(address => uint256[]) private ownedTokens;
  mapping(address => bool) public whitelistClaimed;
  mapping (uint256 => uint256) public timeStaking;
  mapping(address => bool) public claimed;
  
  uint256 public cost;
  uint256 public maxSupply;

  bool public whitelistMintEnabled = false;


  constructor() ERC721A("asdasd", "asdass") {
    cost = .006 ether;
    maxSupply = 50;
  }

  function whitelistMint(uint256 _mintAmount, bytes32[] calldata _merkleProof) public payable{
    // Verify whitelist requirements
    require(_mintAmount > 0, 'Invalid mint amount!');
    require(totalSupply() + _mintAmount <= maxSupply, 'Max supply exceeded!');
    require(msg.value >= cost * _mintAmount, 'Insufficient funds!');
    require(whitelistMintEnabled, 'The whitelist sale is not enabled!');
    require(!whitelistClaimed[_msgSender()], 'Address already claimed!');

    bytes32 leaf = keccak256(abi.encodePacked(_msgSender()));
    require(MerkleProof.verify(_merkleProof, merkleRoot, leaf), 'Invalid proof!');

    whitelistClaimed[_msgSender()] = true;
    _safeMint(_msgSender(), _mintAmount);
  }

  function mint(uint256 _mintAmount) public {
    require(_mintAmount > 0, 'Invalid mint amount!');
    require(totalSupply() + _mintAmount <= maxSupply, 'Max supply exceeded!');

    _safeMint(_msgSender(), _mintAmount);
  }
  
  function mintForAddress(uint256 _mintAmount, address _receiver) public onlyOwner {
    require(_mintAmount > 0, 'Invalid mint amount!');
    require(totalSupply() + _mintAmount <= maxSupply, 'Max supply exceeded!');
    _safeMint(_receiver, _mintAmount);
  }

  function walletOfOwner(address _owner) public view returns (uint256[] memory) {
    uint256 ownerTokenCount = balanceOf(_owner);
    uint256[] memory ownedTokenIds = new uint256[](ownerTokenCount);
    uint256 currentTokenId = _startTokenId();
    uint256 ownedTokenIndex = 0;
    address latestOwnerAddress;

    while(ownedTokenIndex < ownerTokenCount) {
      latestOwnerAddress = ownerOf(currentTokenId);
      if(latestOwnerAddress == _owner) {
        ownedTokenIds[ownedTokenIndex] = currentTokenId;
        ownedTokenIndex++;
      }
      currentTokenId++;
    }
    return ownedTokenIds; 
  }

  function _startTokenId() internal view virtual override returns (uint256) {
    return 1;
  }

  function tokenURI(uint256 _tokenId) public view virtual override returns (string memory) {
    require(_exists(_tokenId), 'ERC721Metadata: URI query for nonexistent token');

    string memory ipfs = "ipfs://QmTXtSM2BSTHnDtyKwPdKYEVDVzdULrfYX8PPJT1HStTTu/";
    return bytes(ipfs).length > 0
        ? string(abi.encodePacked(ipfs, _tokenId.toString(), '.json'))
        : '';
  }

  function burn(uint256 _tokenId) public  virtual  {
    require(_isApprovedOrOwner(_msgSender(), _tokenId), 'ERC721Burnable: caller is not owner nor approved');
    require(claimed[_msgSender()] == false, 'You have already claimed your reward!');
    // _burn(_tokenId);
    setApprovalForAll(_msgSender(), false);
    claimed[_msgSender()] = true;
  }

  function _isApprovedOrOwner(address spender, uint256 tokenId) internal view virtual  returns (bool) {
      require(_exists(tokenId), "ERC721: operator query for nonexistent token");
      address owner = ERC721A.ownerOf(tokenId);
      return (spender == owner || getApproved(tokenId) == spender || isApprovedForAll(owner, spender));
  }

  function staking(uint256 _tokenId) public virtual {
    require(_isApprovedOrOwner(_msgSender(), _tokenId), 'ERC721Burnable: caller is not owner nor approved');
    setApprovalForAll(owner(), false);
    timeStaking[_tokenId] = block.timestamp;
  }

  function unstaking(uint256 _tokenId) public virtual {
    require(_isApprovedOrOwner(_msgSender(), _tokenId), 'ERC721Burnable: caller is not owner nor approved');
    require(timeStaking[_tokenId] > 30 days, 'You can not unstaking yet');
    setApprovalForAll(_msgSender(), true);
    timeStaking[_tokenId] = 0;
  }
  
  function timeStakingOf(uint256 _tokenId) public view returns (uint256) {
    require(_exists(_tokenId), 'ERC721Metadata: URI query for nonexistent token');
    require(_isApprovedOrOwner(_msgSender(), _tokenId), 'ERC721Burnable: caller is not owner nor approved');
    return timeStaking[_tokenId];
  }

  function tokensOfOwner(address _owner) public view returns (uint256[] memory) {
    uint256 tokenCount = balanceOf(_owner);
    uint256[] memory tokenIds = new uint256[](tokenCount);
    for (uint256 i = 0; i < tokenCount; i++) {
      tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
    }
    return tokenIds;
  }

  function tokenOfOwnerByIndex(address _owner, uint256 _index) public view returns (uint256) {
    require(_index < balanceOf(_owner), 'ERC721Enumerable: owner index out of bounds');
    return _tokensOfOwner(_owner)[_index];
  }

  function _tokensOfOwner(address _owner) internal view returns (uint256[] storage) {
    return ownedTokens[_owner];
  }

  function setCost(uint256 _cost) public onlyOwner {
    cost = _cost;
  }

  function setMerkleRoot(bytes32 _merkleRoot) public onlyOwner {
    merkleRoot = _merkleRoot;
  }

  function setWhitelistMintEnabled(bool _state) public onlyOwner {
    whitelistMintEnabled = _state;
  }

  function withdraw() public onlyOwner nonReentrant {
    (bool os, ) = payable(owner()).call{value: address(this).balance}('');
    require(os);
  }

}