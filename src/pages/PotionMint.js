import React, { useCallback } from "react";
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { Contract } from 'ethers'
import { abi, address } from "../contracts/Potion";

const PotionMint = () => {
	const web3 = useWeb3React()

	const getBalance = useCallback(async () => {
		const contract = new Contract(address, abi, web3.library)

		const [b] = await contract.functions.balanceOf(web3.account, 1)
		const balance = b.toNumber()
		console.log(balance)
	}, [ web3 ])

	return (
		<div>
      <h2>Mint your potion</h2>
      {!web3.active && <button type="button" onClick={() => web3.activate(new InjectedConnector())}>Login with Metamask</button>}
      {web3.active && <button onClick={getBalance}>Mint now</button>}
		</div>
	)
}

export default PotionMint;