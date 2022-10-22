const hre = require("hardhat");

async function main() {
  // const [deployer] = await hre.ethers.getSigners();

  // console.log("Deploying contracts with the account:", deployer.address);

  // console.log("Account balance:", (await deployer.getBalance()).toString());

  // const Token = await hre.ethers.getContractFactory("Test");
  // const token = await Token.deploy("test", "tst", 000001,50,"meta");

  // console.log("Token address:", token.address);

  const BerryContract = await ethers.getContractFactory('CryptoBlueBerry');
  const berry = await BerryContract.deploy("test", "tst", 000001,50,"meta");

  await berry.deployed();

  console.log(`Contract Berry deployed at ${berry.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
