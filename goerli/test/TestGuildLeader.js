const GuildLeader = artifacts.require("./GuildLeader.sol");

const testAddress = "0x65eDC15586af394dcD990A730eFeEeFCAd589d5D";

contract("GuildLeader", accounts => {
  it("...mint an NFT to a test address", async () => {
    const guildLeaderInstance = await GuildLeader.deployed();

    // Mint an NFT.
    const nft = await guildLeaderInstance.mintNFT(testAddress);

    // Get balance of the zero address.
    const balance = await guildLeaderInstance.balanceOf(testAddress);

    // Check that the balance is 1.
    assert.equal(balance.toNumber(), 1, "The balance of the test address is not 1.");
  });

  it ("...mints to multiple test addresses", async () => {
    const guildLeaderInstance = await GuildLeader.deployed();

    // List of addresses to mint to
    const testAddresses = ["0x271615B8562Cc22A09F10f5C2A8C3f87eD6D685C","0xC673DA0fD9ed61DE776D78DD3d682345B9B3a4d1","0x791539b4027290af89f2B9043db53AF7C147ab86"];

    // A for loop that mints to multiple addresses in testAddresses.
    for (let i = 0; i < testAddresses.length; i++) {
      await guildLeaderInstance.mintNFT(testAddresses[i]);
      const balance = await guildLeaderInstance.balanceOf(testAddresses[i]);
      assert.equal(balance.toNumber(), 1, "The balance of the test address is not 1.");
    }
  });
});