const { expect } = require("chai")

describe('Token contract', () => {
  
    it("Deployment should be assign the total supply of token to the owner",async()=>{
    const [owner]=await ethers.getSigners();
    
    const Token=await ethers.getContractFactory("Token");

    const hardhatToken=await Token.deploy();

    const ownerBalance=await hardhatToken.balanceOf(owner.address)

    console.log("Owner Address",owner.address)

    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance)

   })
   it("Should transfer tokens btw accounts",async()=>{
    const [owner,addr1,addr2]=await ethers.getSigners();
    
    const Token=await ethers.getContractFactory("Token");

    const hardhatToken=await Token.deploy();

    await hardhatToken.transfer(addr1.address,10);

    expect(await hardhatToken.balanceOf(addr1.address)).to.equal(10)
    await hardhatToken.transfer(addr2.address,50);
    expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50)

   })
})