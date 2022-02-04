import {ActionType} from '../action-types'

interface DepositAction {
    type: ActionType.DEPOSIT
    payload: number
}

interface WithdrawAction {
    type: ActionType.WITHDRAW
    payload: number
}

interface BankruptAction {
    type: ActionType.BANKCRUPT
}

export type Action = DepositAction | WithdrawAction | BankruptAction