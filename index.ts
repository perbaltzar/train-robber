import { create, renderScene, Scene } from "@hiberworld/code-kit";
import { addOmnipresentSound } from "./audio/addOmnipresentSound";
import { GROUND_DURATION } from "./constants";
import { createGround } from "./create/ground";
import { createRail } from "./create/rail";
import { createScenery } from "./create/scenery";
import { createTrain } from "./create/train";
import { createTunnel } from "./create/tunnel";
import { createWaterTower } from "./create/waterTower";

const forceStop = false;

const world = create({ y: -10 });
const train = createTrain({
  numberOfCarts: 17,
  cargoCarts: [0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
  checkPoints: [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
});
const rail = createRail(400);
const tunnel = createTunnel({ intensity: 4, forceStop });
const ground = createGround({ duration: GROUND_DURATION, forceStop });
const waterTower = createWaterTower({ intensity: 12, forceStop });
const spawnPoint = create({
  prefabId: "gpl_spawn_point_01",
  y: 3.5,
  x: -4,
  rotY: -90,
});
const scenery = createScenery({
  cactiIntensity: 3,
  numberOfPlanes: 12,
  rockIntensity: 3,
  cliffIntensity: 3,
});

const scene: Scene = {
  root: world,
  environment: "midday_01",
};

tunnel.addTo(world);
scenery.addTo(ground);
rail.addTo(ground);
waterTower.addTo(world);
spawnPoint.addTo(world);

train.addTo(world);
world.add(ground);
addOmnipresentSound(train, "a_am_automated_factory_01");

await renderScene(scene);
// setMovementMode("AIRWALK");
