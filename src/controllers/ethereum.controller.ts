import { Request, Response } from 'express'
import { EthereumService } from '../services'

class EthereumController {
    createWallet(req: Request, res: Response) {
        const wallet = EthereumService.createWallet()
        return res.status(201).json(wallet)
    }

    async getBalance(req: Request, res: Response) {
        const { address } = req.params
        try {
            const balance = await EthereumService.getBalance(address)
            return res.status(200).json({ balance })
        } catch (error) {
            return res.status(400).json({ message: 'Error fetching balance' })
        }
    }

    async sendTransaction(req: Request, res: Response) {
        const { privateKey, to, amount } = req.body
        try {
            const transaction = await EthereumService.sendTransaction(privateKey, to, amount)
            return res.status(200).json(transaction)
        } catch (error) {
            return res.status(400).json({ message: 'Error sending transaction', error })
        }
    }

    async getTransaction(req: Request, res: Response) {
        const { hash } = req.params
        try {
            const transaction = await EthereumService.getTransaction(hash)
            return res.status(200).json(transaction)
        } catch (error) {
            return res.status(400).json({ message: 'Error fetching transaction', error })
        }
    }
}

export default new EthereumController()
