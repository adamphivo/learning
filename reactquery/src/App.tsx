import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer, toast } from "react-toastify";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import "react-toastify/dist/ReactToastify.css";
import Posts from "./Posts";
import Loading from "./Loading";
import { Web3Button } from "@web3modal/react";
import { useAccount } from "wagmi";

const chains = [arbitrum, mainnet, polygon];
const projectId = "7d3341821875ab38d1eadae5ce46c3a4";
const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);
const client = new QueryClient();

function App() {
  const notify = () => toast("Wow easy !");
  const { address } = useAccount();

  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <QueryClientProvider client={client}>
          <div>
            <h1>React query !</h1>
            <Web3Button />
            {address}
            <button onClick={notify}>Notify !</button>
            <Loading />
            <Posts />
            <ReactQueryDevtools />
            <ToastContainer theme="dark" position="bottom-right" />
          </div>
        </QueryClientProvider>
      </WagmiConfig>
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
      ></Web3Modal>
    </>
  );
}

export default App;
