import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const deployedProductionDelta = await deploy("ProductionDelta", {
    from: deployer,
    log: true,
  });

  console.log(`ProductionDelta contract: `, deployedProductionDelta.address);
};
export default func;
func.id = "deploy_productionDelta"; // id required to prevent reexecution
func.tags = ["ProductionDelta"];

