// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const {ethers} = require("hardhat");

async function main() {
  const CloneNFT=await ethers.getContractFactory("CloneNFT");
  const cloneNFT=await CloneNFT.deploy("CloneApeNFT","CLNFT");
  await cloneNFT.deployed();
  console.log("Succcess ! contract was deplyed to:",cloneNFT.address);
  //await cloneNFT.mint(10,"https://ipfs.io/ipfs/QmZ3v43K27EXbgAuXw1m9XvNBWQL73PKPPxbMJEA1Qfnrd/1.json");
  await cloneNFT.mint(10,"https://ipfs.io/ipfs/QmZ3v43K27EXbgAuXw1m9XvNBWQL73PKPPxbMJEA1Qfnrd/2.json");
  await cloneNFT.mint(10,"https://ipfs.io/ipfs/QmZ3v43K27EXbgAuXw1m9XvNBWQL73PKPPxbMJEA1Qfnrd/3.json");
  await cloneNFT.mint(10,"https://ipfs.io/ipfs/QmZ3v43K27EXbgAuXw1m9XvNBWQL73PKPPxbMJEA1Qfnrd/4.json");
  await cloneNFT.mint(10,"https://ipfs.io/ipfs/QmZ3v43K27EXbgAuXw1m9XvNBWQL73PKPPxbMJEA1Qfnrd/5.json");
  await cloneNFT.mint(10,"https://ipfs.io/ipfs/QmZ3v43K27EXbgAuXw1m9XvNBWQL73PKPPxbMJEA1Qfnrd/6.json");
  await cloneNFT.mint(10,"https://ipfs.io/ipfs/QmZ3v43K27EXbgAuXw1m9XvNBWQL73PKPPxbMJEA1Qfnrd/7.json");
  await cloneNFT.mint(10,"https://ipfs.io/ipfs/QmZ3v43K27EXbgAuXw1m9XvNBWQL73PKPPxbMJEA1Qfnrd/8.json");
  await cloneNFT.mint(10,"https://ipfs.io/ipfs/QmZ3v43K27EXbgAuXw1m9XvNBWQL73PKPPxbMJEA1Qfnrd/9.json");
  await cloneNFT.mint(10,"https://ipfs.io/ipfs/QmZ3v43K27EXbgAuXw1m9XvNBWQL73PKPPxbMJEA1Qfnrd/10.json");
  await cloneNFT.mint(10,"https://ipfs.io/ipfs/QmZ3v43K27EXbgAuXw1m9XvNBWQL73PKPPxbMJEA1Qfnrd/11.json");
  await cloneNFT.mint(10,"https://ipfs.io/ipfs/QmZ3v43K27EXbgAuXw1m9XvNBWQL73PKPPxbMJEA1Qfnrd/12.json");
  console.log("NFT Minited successfully");

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
