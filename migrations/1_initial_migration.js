var Migrations = artifacts.require("./Migrations.sol");

module.exports = function (deployer) {
    deployer.deploy(Migrations);
};

/*
    Migration mirip seperti saat kita melakukan migrations terhadap table pada database
*/