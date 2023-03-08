import { create, renderScene, Scene } from "@hiberworld/code-kit";
import { GROUND_DURATION } from "./constants";
import { createGround } from "./create/ground";
import { createRail } from "./create/rail";
import { createScenery } from "./create/scenery";
import { createTrain } from "./create/train";
import { createWaterTower } from "./create/waterTower";

const forceStop = false;

const world = create({ y: -10 });
const train = createTrain(10);
const rail = createRail(300);
const ground = createGround({ duration: GROUND_DURATION, forceStop });
const waterTower = createWaterTower({ intensity: 0, forceStop });
const cactus = createScenery({
  cactiIntensity: 7,
  numberOfPlanes: 12,
  rockIntensity: 1,
  cliffIntensity: 3,
});

const scene: Scene = {
  root: world,
  environment: "sunrise_01",
};

cactus.addTo(ground);
rail.addTo(ground);
waterTower.addTo(world);

train.addTo(world);
world.add(ground);

await renderScene(scene);
// setMovementMode("AIRWALK");
