const hre = require("hardhat");

async function main() {
  const BerryContract = await ethers.getContractFactory('CryptoBlueBerry');
  const berry = await BerryContract.deploy();

  await berry.deployed();

  console.log(`Contract Berry deployed at ${berry.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
