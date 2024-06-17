/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ContractDeploymentDetails = {
    txHash: string;
    /**
     * The address that initiated the transaction which deployed this contract.
     */
    deployerAddress: string;
    /**
     * The contract address which deployed this contract via smart contract. This field is only populated when the contract was deployed as part of smart contract execution.
     */
    deployerContractAddress?: string;
};

