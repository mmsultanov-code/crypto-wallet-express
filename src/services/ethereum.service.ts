import { ethers } from 'ethers'

class EthereumService {
    defaultProvider() {
        return new ethers.JsonRpcProvider('https://forno.celo.org') // Использую тестовую сеть Rinkeby
    }

    createWallet() {
        const wallet = ethers.Wallet.createRandom()
        return {
            address: wallet.address,
            privateKey: wallet.privateKey,
            publicKey: wallet.publicKey,
            mnemonic: wallet.mnemonic.phrase
        }
    }

    async getBalance(address: string) {
        try {
            const provider = this.defaultProvider()
            const balance = await provider.getBalance(address)
            return ethers.formatEther(balance)
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async sendTransaction(privateKey: string, to: string, amount: string) {
        const provider = this.defaultProvider()
        const wallet = new ethers.Wallet(privateKey, provider)

        const tx = {
            to,
            value: ethers.parseEther(amount)
        }

        const transaction = await wallet.sendTransaction(tx)
        return transaction
    }

    async getTransaction(hash: string) {
        const provider = this.defaultProvider()
        const transaction = await provider.getTransaction(hash)
        return transaction
    }
}

export default new EthereumService()
