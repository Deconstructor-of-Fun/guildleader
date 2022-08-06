const GuildLeader = artifacts.require("GuildLeader");

module.exports = function (deployer) {
  deployer.deploy(GuildLeader);
};