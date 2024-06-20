const HelloWorld = artifacts.require("HelloWorld");

contract("HelloWorld", (accounts) => {
  it("should return the initial greeting 'Hello, World!'", async () => {
    const instance = await HelloWorld.deployed();
    const greeting = await instance.getGreeting();
    assert.equal(greeting, "Hello, World!", "The greeting was not initialized to 'Hello, World!'");
  });

  it("should change the greeting when setGreeting is called", async () => {
    const instance = await HelloWorld.deployed();
    await instance.setGreeting("Hello, Ethereum!");
    const updatedGreeting = await instance.getGreeting();
    assert.equal(updatedGreeting, "Hello, Ethereum!", "The greeting was not updated correctly");
  });
});
