const HelloWorld = artifacts.require("HelloWorld");

module.exports = function(deployer) {
  // Deploy the HelloWorld contract without any arguments
  deployer.deploy(HelloWorld);
};

