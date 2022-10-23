const { expect } = require("chai");
const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");
const { parseEther } = ethers.utils;


describe("Berry Contract", function () {        
    it("Name", async function () {
      const BerryContract = await ethers.getContractFactory('CryptoBlueBerry');
      const berry = await BerryContract.deploy();
      await berry.deployed();
      const [owner, addr1, addr2] = await ethers.getSigners();
      expect(await berry.owner()).to.equal(owner.address);

      let name = await berry.connect(owner).name();
      let symbol = await berry.connect(owner).symbol();

      console.log(`Name: ${name}, Symbol: ${symbol}`);

      let totalSupply = await berry.connect(owner).totalSupply();
      let maxSupply = await berry.connect(owner).maxSupply();
      let cost = await berry.connect(owner).cost();
      console.log(`Total Supply: ${totalSupply}, maxSupply: ${maxSupply}`);
      console.log(`Cost: ${cost}`);
      expect(await berry.owner()).to.equal(owner.address);
      expect(await berry.name()).to.equal("ACENDANT BBVA");
      try{
        expect (await berry.connect(addr1).mint(BigNumber.from(2), {value: ethers.utils.parseEther((0.006 * 2).toString()),}));
      }catch(e){
        console.log(e);
      }

      // expect await 

    });
});