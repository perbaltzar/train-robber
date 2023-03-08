import { create } from "@hiberworld/code-kit";
import { WORLD_LENGTH } from "../constants";

export const createGround = (opt?: {
  forceStop?: boolean;
  duration?: number;
}) => {
  const Z_PLANES = 50;
  const X_PLANES = WORLD_LENGTH;

  return create({ x: -300, z: 0 })
    .addMany(X_PLANES, (index) =>
      create().addMany(Z_PLANES, (i2) =>
        create({
          prefabId: "plane_01",
          x: 60 * index,
          z: 60 * i2,
          scaleX: 1,
          scaleZ: 1,
          material: "t_rocky_sand_01",
        })
      )
    )
    .animate(
      { x: [0, opt?.forceStop ? 0 : -60] },
      {
        loop: "RESTART",
        easing: "LINEAR",
        duration: opt?.duration ?? 4,
      }
    );
};
