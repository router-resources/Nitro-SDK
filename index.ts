import { PathFinder, Network } from "@routerprotocol/asset-transfer-sdk-ts";
import { evmSignerFromPrivateKeyAndRpc } from '@routerprotocol/asset-transfer-sdk-ts';
const YOUR_WIDGET_ID = 24 // get your unique sdk id by contacting us on Telegram
const pathfinder = new PathFinder(Network.Testnet, '0');



const main = async() => {

    
const evmSigner = evmSignerFromPrivateKeyAndRpc("4b37e644ab78c477cf92ed880dd52d5b0d50bfe36056696d1e05ba480d5abaa3", "https://rpc.ankr.com/avalanche_fuji");



const quote = await pathfinder.getQuote({
            sourceChainId: "43113",
            sourceTokenAddress: "0xce811501ae59c3E3e539D5B4234dD606E71A312e",
            destinationChainId: "2494104990",
            destinationTokenAddress: "0x24DC420462992C12C3E010DD86C56740E9D2D493",
            expandedInputAmount: "4000000000000000",
        });


     
        console.log(quote)

      
         const transaction = await pathfinder.executeQuote({
            quote,
            slippageTolerance: "1",
            senderAddress: evmSigner.address,
            receiverAddress: "0x8CB29084A720E6D421812A259431042F03524FED",
        },
            {
                evmSigner
            }
        );

}

main()
console.log('Radhe Radhe');
