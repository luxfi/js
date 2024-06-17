/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { DefaultService } from './services/DefaultService';
import { EvmBalancesService } from './services/EvmBalancesService';
import { EvmBlocksService } from './services/EvmBlocksService';
import { EvmChainsService } from './services/EvmChainsService';
import { EvmContractsService } from './services/EvmContractsService';
import { EvmTransactionsService } from './services/EvmTransactionsService';
import { HealthCheckService } from './services/HealthCheckService';
import { NfTsService } from './services/NfTsService';
import { OperationsService } from './services/OperationsService';
import { PrimaryNetworkService } from './services/PrimaryNetworkService';
import { PrimaryNetworkBalancesService } from './services/PrimaryNetworkBalancesService';
import { PrimaryNetworkBlocksService } from './services/PrimaryNetworkBlocksService';
import { PrimaryNetworkRewardsService } from './services/PrimaryNetworkRewardsService';
import { PrimaryNetworkTransactionsService } from './services/PrimaryNetworkTransactionsService';
import { PrimaryNetworkUtxOsService } from './services/PrimaryNetworkUtxOsService';
import { PrimaryNetworkVerticesService } from './services/PrimaryNetworkVerticesService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class Cloud {

    public readonly default: DefaultService;
    public readonly evmBalances: EvmBalancesService;
    public readonly evmBlocks: EvmBlocksService;
    public readonly evmChains: EvmChainsService;
    public readonly evmContracts: EvmContractsService;
    public readonly evmTransactions: EvmTransactionsService;
    public readonly healthCheck: HealthCheckService;
    public readonly nfTs: NfTsService;
    public readonly operations: OperationsService;
    public readonly primaryNetwork: PrimaryNetworkService;
    public readonly primaryNetworkBalances: PrimaryNetworkBalancesService;
    public readonly primaryNetworkBlocks: PrimaryNetworkBlocksService;
    public readonly primaryNetworkRewards: PrimaryNetworkRewardsService;
    public readonly primaryNetworkTransactions: PrimaryNetworkTransactionsService;
    public readonly primaryNetworkUtxOs: PrimaryNetworkUtxOsService;
    public readonly primaryNetworkVertices: PrimaryNetworkVerticesService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'http://localhost:3000',
            VERSION: config?.VERSION ?? 'Beta',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.default = new DefaultService(this.request);
        this.evmBalances = new EvmBalancesService(this.request);
        this.evmBlocks = new EvmBlocksService(this.request);
        this.evmChains = new EvmChainsService(this.request);
        this.evmContracts = new EvmContractsService(this.request);
        this.evmTransactions = new EvmTransactionsService(this.request);
        this.healthCheck = new HealthCheckService(this.request);
        this.nfTs = new NfTsService(this.request);
        this.operations = new OperationsService(this.request);
        this.primaryNetwork = new PrimaryNetworkService(this.request);
        this.primaryNetworkBalances = new PrimaryNetworkBalancesService(this.request);
        this.primaryNetworkBlocks = new PrimaryNetworkBlocksService(this.request);
        this.primaryNetworkRewards = new PrimaryNetworkRewardsService(this.request);
        this.primaryNetworkTransactions = new PrimaryNetworkTransactionsService(this.request);
        this.primaryNetworkUtxOs = new PrimaryNetworkUtxOsService(this.request);
        this.primaryNetworkVertices = new PrimaryNetworkVerticesService(this.request);
    }
}

