document.getElementById('connectArConnect').addEventListener('click', async () => {
    if (window.arweaveWallet) {
        try {
            // Request connection to ArConnect
            await window.arweaveWallet.connect(["ACCESS_ADDRESS", "SIGN_TRANSACTION"]);
            console.log("ArConnect connected");
            // Show the terminal iframe
            document.getElementById('ContainerTerminal').style.display = 'block';
            document.getElementById('terminal').src = "https://sh_ao.g8way.io/";
        } catch (error) {
            console.error("Failed to connect to ArConnect", error);
            alert("Failed to connect to ArConnect. Please try again.");
        }
    } else {
        alert("ArConnect wallet not installed. Please install it first.");
    }
});

// Check if ArConnect is installed
if (!window.arweaveWallet) {
    console.warn("ArConnect is not installed.");
}
