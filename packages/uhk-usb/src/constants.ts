export namespace Constants {
    export const VENDOR_ID = 0x1D50;
    export const PRODUCT_ID = 0x6122;
    export const BOOTLOADER_ID = 0x6120;
    export const MAX_PAYLOAD_SIZE = 64;
}

/**
 * UHK USB Communications command. All communication package should have start with a command code.
 */
export enum UsbCommand {
    GetProperty              = 0x00,
    Reenumerate              = 0x01,
    JumpToModuleBootloader   = 0x02,
    SendKbootCommandToModule = 0x03,
    ReadConfig               = 0x04,
    WriteHardwareConfig      = 0x05,
    WriteStagingUserConfig   = 0x06,
    ApplyConfig              = 0x07,
    LaunchEepromTransfer     = 0x08,
    GetDeviceState           = 0x09,
    SetTestLed               = 0x0a,
    GetDebugBuffer           = 0x0b,
    GetAdcValue              = 0x0c,
    SetLedPwmBrightness      = 0x0d,
    GetModuleProperty        = 0x0e,
    GetSlaveI2cErrors        = 0x0f,
    SetI2cBaudRate           = 0x10,
    SwitchKeymap             = 0x11,
    GetVariable              = 0x12,
    SetVariable              = 0x13
}

export enum EepromOperation {
    read = 0,
    write = 1
}

export enum ConfigBufferId {
    hardwareConfig = 0,
    stagingUserConfig = 1,
    validatedUserConfig = 2
}

export enum DevicePropertyIds {
    DeviceProtocolVersion = 0,
    ProtocolVersions = 1,
    ConfigSizes = 2,
    CurrentKbootCommand = 3
}

export enum EnumerationModes {
    Bootloader = 0,
    Buspal = 1,
    NormalKeyboard = 2,
    CompatibleKeyboard = 3
}

export interface EnumerationInfo {
    mode: EnumerationModes;
    productId: number;
    // Bootloader timeout in ms
    timeout: number;
    // Agent wait timeout for the device in ms
    waitTimeout: number;
}

export const ENUMERATION_INFOS: Record<EnumerationModes, EnumerationInfo> = {
    [EnumerationModes.Bootloader]: {
        mode: EnumerationModes.Bootloader,
        productId: 0x6120,
        timeout: 60000,
        waitTimeout: 80000
    },
    [EnumerationModes.Buspal]: {
        mode: EnumerationModes.Buspal,
        productId: 0x6121,
        timeout: 60000,
        waitTimeout: 80000
    },
    [EnumerationModes.NormalKeyboard]: {
        mode: EnumerationModes.NormalKeyboard,
        productId: 0x6122,
        timeout: 5000,
        waitTimeout: 20000
    },
    [EnumerationModes.CompatibleKeyboard]: {
        mode: EnumerationModes.CompatibleKeyboard,
        productId: 0x6123,
        timeout: 5000,
        waitTimeout: 20000
    }
};

export enum ModuleSlotToI2cAddress {
    leftHalf = '0x10',
    leftModule = '0x20',
    rightModule = '0x30'
}

export enum ModuleSlotToId {
    leftHalf = 1,
    leftModule = 2,
    rightModule = 3
}

export enum KbootCommands {
    idle = 0,
    ping = 1,
    reset = 2
}

export enum ModulePropertyId {
    protocolVersions = 0
}

export enum UsbVariables {
    testSwitches = 0,
    testUsbStack = 1,
    debounceTimePress = 2,
    debounceTimeRelease = 3
}
