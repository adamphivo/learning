import { useMetaMask } from "metamask-react";
import { useEffect, useState } from "react";
import send from "../api/send";

export default function useConnect() {
  const { account } = useMetaMask();

  async function getUser(address: string) {
    const user = await send(`users/${address}`);
  }

  useEffect(() => {
    if (account) {
      getUser(account).catch((e) => console.log(e));
    }
  }, [account]);
}
