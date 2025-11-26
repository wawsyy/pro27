// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {FHE, euint32, externalEuint32} from "@fhevm/solidity/lib/FHE.sol";
import {SepoliaConfig} from "@fhevm/solidity/config/ZamaConfig.sol";

/// @title ProductionDelta - Encrypted Production Difference Tracker
/// @notice Tracks encrypted production values and calculates the difference between today and yesterday
/// @dev Uses FHE to keep production values encrypted while allowing difference calculations
contract ProductionDelta is SepoliaConfig {
    euint32 private _yesterdayProduction;
    euint32 private _todayProduction;
    euint32 private _delta;

    /// @notice Stores yesterday's production value (encrypted)
    /// @param inputEuint32 the encrypted yesterday production value
    /// @param inputProof the input proof
    function setYesterdayProduction(externalEuint32 inputEuint32, bytes calldata inputProof) external {
        euint32 encryptedEuint32 = FHE.fromExternal(inputEuint32, inputProof);
        _yesterdayProduction = encryptedEuint32;

        FHE.allowThis(_yesterdayProduction);
        FHE.allow(_yesterdayProduction, msg.sender);
    }

    /// @notice Stores today's production value (encrypted)
    /// @param inputEuint32 the encrypted today production value
    /// @param inputProof the input proof
    function setTodayProduction(externalEuint32 inputEuint32, bytes calldata inputProof) external {
        euint32 encryptedEuint32 = FHE.fromExternal(inputEuint32, inputProof);
        _todayProduction = encryptedEuint32;

        FHE.allowThis(_todayProduction);
        FHE.allow(_todayProduction, msg.sender);
    }

    /// @notice Calculates and stores the difference: delta = today - yesterday
    /// @dev This function computes the encrypted difference without revealing individual values
    function calculateDelta() external {
        _delta = FHE.sub(_todayProduction, _yesterdayProduction);

        FHE.allowThis(_delta);
        FHE.allow(_delta, msg.sender);
    }

    /// @notice Returns yesterday's encrypted production value
    /// @return The encrypted yesterday production value
    function getYesterdayProduction() external view returns (euint32) {
        return _yesterdayProduction;
    }

    /// @notice Returns today's encrypted production value
    /// @return The encrypted today production value
    function getTodayProduction() external view returns (euint32) {
        return _todayProduction;
    }

    /// @notice Returns the encrypted delta (difference) value
    /// @return The encrypted delta value (today - yesterday)
    function getDelta() external view returns (euint32) {
        return _delta;
    }
}

