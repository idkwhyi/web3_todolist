module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*" // Match any network id
        }
    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    },
    compilers: {
        solc: {
            version: "0.8.9",    // Sesuaikan dengan versi pragma Anda
            // Anda juga bisa pakai "0.8.x" atau "^0.8.0"
            // settings: {          // Opsional: Pengaturan optimizer
            //   optimizer: {
            //     enabled: false,
            //     runs: 200
            //   },
            //   evmVersion: "byzantium"
            // }
        }
    },
}