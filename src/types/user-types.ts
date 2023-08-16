export interface ITransfer {
    addMoney: number,
    removeMoney: number
}
export interface IUser {
    id: number,
    email: string,
    name: string,
    password: string,
    cash: number,
    transfer: ITransfer[]
}