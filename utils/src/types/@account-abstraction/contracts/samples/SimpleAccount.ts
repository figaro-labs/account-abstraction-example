/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export type PackedUserOperationStruct = {
  sender: PromiseOrValue<string>;
  nonce: PromiseOrValue<BigNumberish>;
  initCode: PromiseOrValue<BytesLike>;
  callData: PromiseOrValue<BytesLike>;
  accountGasLimits: PromiseOrValue<BytesLike>;
  preVerificationGas: PromiseOrValue<BigNumberish>;
  gasFees: PromiseOrValue<BytesLike>;
  paymasterAndData: PromiseOrValue<BytesLike>;
  signature: PromiseOrValue<BytesLike>;
};

export type PackedUserOperationStructOutput = [
  string,
  BigNumber,
  string,
  string,
  string,
  BigNumber,
  string,
  string,
  string
] & {
  sender: string;
  nonce: BigNumber;
  initCode: string;
  callData: string;
  accountGasLimits: string;
  preVerificationGas: BigNumber;
  gasFees: string;
  paymasterAndData: string;
  signature: string;
};

export interface SimpleAccountInterface extends utils.Interface {
  functions: {
    "UPGRADE_INTERFACE_VERSION()": FunctionFragment;
    "addDeposit()": FunctionFragment;
    "entryPoint()": FunctionFragment;
    "execute(address,uint256,bytes)": FunctionFragment;
    "executeBatch(address[],uint256[],bytes[])": FunctionFragment;
    "getDeposit()": FunctionFragment;
    "getNonce()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
    "validateUserOp((address,uint256,bytes,bytes,bytes32,uint256,bytes32,bytes,bytes),bytes32,uint256)": FunctionFragment;
    "withdrawDepositTo(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "UPGRADE_INTERFACE_VERSION"
      | "addDeposit"
      | "entryPoint"
      | "execute"
      | "executeBatch"
      | "getDeposit"
      | "getNonce"
      | "initialize"
      | "onERC1155BatchReceived"
      | "onERC1155Received"
      | "onERC721Received"
      | "owner"
      | "proxiableUUID"
      | "supportsInterface"
      | "upgradeToAndCall"
      | "validateUserOp"
      | "withdrawDepositTo"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "entryPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeBatch",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getNonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "validateUserOp",
    values: [
      PackedUserOperationStruct,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawDepositTo",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addDeposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getDeposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateUserOp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawDepositTo",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint64)": EventFragment;
    "SimpleAccountInitialized(address,address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SimpleAccountInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface InitializedEventObject {
  version: BigNumber;
}
export type InitializedEvent = TypedEvent<[BigNumber], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface SimpleAccountInitializedEventObject {
  entryPoint: string;
  owner: string;
}
export type SimpleAccountInitializedEvent = TypedEvent<
  [string, string],
  SimpleAccountInitializedEventObject
>;

export type SimpleAccountInitializedEventFilter =
  TypedEventFilter<SimpleAccountInitializedEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface SimpleAccount extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SimpleAccountInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    UPGRADE_INTERFACE_VERSION(overrides?: CallOverrides): Promise<[string]>;

    addDeposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    entryPoint(overrides?: CallOverrides): Promise<[string]>;

    execute(
      dest: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      func: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeBatch(
      dest: PromiseOrValue<string>[],
      value: PromiseOrValue<BigNumberish>[],
      func: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;

    getNonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      anOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    validateUserOp(
      userOp: PackedUserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawDepositTo(
      withdrawAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  UPGRADE_INTERFACE_VERSION(overrides?: CallOverrides): Promise<string>;

  addDeposit(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  entryPoint(overrides?: CallOverrides): Promise<string>;

  execute(
    dest: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    func: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeBatch(
    dest: PromiseOrValue<string>[],
    value: PromiseOrValue<BigNumberish>[],
    func: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

  getNonce(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    anOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onERC1155BatchReceived(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>[],
    arg3: PromiseOrValue<BigNumberish>[],
    arg4: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  onERC1155Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BigNumberish>,
    arg4: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  onERC721Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  upgradeToAndCall(
    newImplementation: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validateUserOp(
    userOp: PackedUserOperationStruct,
    userOpHash: PromiseOrValue<BytesLike>,
    missingAccountFunds: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawDepositTo(
    withdrawAddress: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    UPGRADE_INTERFACE_VERSION(overrides?: CallOverrides): Promise<string>;

    addDeposit(overrides?: CallOverrides): Promise<void>;

    entryPoint(overrides?: CallOverrides): Promise<string>;

    execute(
      dest: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeBatch(
      dest: PromiseOrValue<string>[],
      value: PromiseOrValue<BigNumberish>[],
      func: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    getNonce(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      anOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    validateUserOp(
      userOp: PackedUserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawDepositTo(
      withdrawAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(uint64)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "SimpleAccountInitialized(address,address)"(
      entryPoint?: PromiseOrValue<string> | null,
      owner?: PromiseOrValue<string> | null
    ): SimpleAccountInitializedEventFilter;
    SimpleAccountInitialized(
      entryPoint?: PromiseOrValue<string> | null,
      owner?: PromiseOrValue<string> | null
    ): SimpleAccountInitializedEventFilter;

    "Upgraded(address)"(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
    Upgraded(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
  };

  estimateGas: {
    UPGRADE_INTERFACE_VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    addDeposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    entryPoint(overrides?: CallOverrides): Promise<BigNumber>;

    execute(
      dest: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      func: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeBatch(
      dest: PromiseOrValue<string>[],
      value: PromiseOrValue<BigNumberish>[],
      func: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    getNonce(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      anOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validateUserOp(
      userOp: PackedUserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawDepositTo(
      withdrawAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    UPGRADE_INTERFACE_VERSION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addDeposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    execute(
      dest: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      func: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeBatch(
      dest: PromiseOrValue<string>[],
      value: PromiseOrValue<BigNumberish>[],
      func: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      anOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validateUserOp(
      userOp: PackedUserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawDepositTo(
      withdrawAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
