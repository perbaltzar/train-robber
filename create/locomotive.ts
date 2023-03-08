import { create } from "@hiberworld/code-kit";
import { CART_MATERIAL, LOCOMOTIVE_HIGHLIGHT_MATERIAL } from "./train";

export const createLocomotive = (x: number) => {
  const train = create({ x: 0, z: 0 });
  // Floor
  create({
    y: 3,
    z: -1.6,
    x: -12,

    scaleX: 1,
    scaleY: 0.8,
    scaleZ: 0.1,
    rotX: 90,
    prefabId: "en_m_primitive_wall_01",
    material: CART_MATERIAL,
  }).addTo(train);

  // Cylinder
  create()
    .add(
      create({
        y: 5,
        rotZ: 90,
        scale: 1.5,
        scaleY: 5,
        prefabId: "cylinder_01",
        material: CART_MATERIAL,
      })
    )
    // Chimney
    .add(
      create({
        prefabId: "cylinder_01",
        material: CART_MATERIAL,
        y: 6,
        x: -1,
        scale: 0.5,
        scaleY: 1.5,
        rotY: 90,
      })
    )
    .add(
      create({
        prefabId: "cone",
        material: CART_MATERIAL,
        y: 9,
        x: -1,
        scale: 1,
        rotZ: 180,
      })
    )
    .add(
      create({
        prefabId: "en_p_plant_pot_dirt_01",
        material: CART_MATERIAL,
        y: 10,
        x: -1,
        scale: 4,
        scaleY: 2,
        rotZ: 180,
      })
    )
    .add(
      create({
        prefabId: "torus_thin_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
        y: 8.9,
        x: -1,
        scale: 1.2,
      })
    )
    // Rings on engine
    .addMany(6, (index) =>
      create({
        prefabId: "torus_thin_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
        rotZ: 90,
        y: 5,
        x: 0.1 - (index * 2 - (index % 2) * 0.5),
        scale: 1.55,
        scaleY: 0.9,
      })
    )
    .addTo(train);

  const wheel = create({ y: 10, z: 0, x: 0 })
    .add(
      create({
        prefabId: "en_p_wooden_wheel_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
        rotY: 90,
      })
    )
    .animate({ rotZ: [0, 180, 360] }, { loop: "RESTART" })
    .addTo(train);

  return train.addMany(2, (index) =>
    create({
      y: 3,
      z: -1.4 + index * 3.1,
      x: -12,
      scaleX: 1,
      scaleY: 0.3,
      scaleZ: 0.1,
      prefabId: "en_m_primitive_wall_01",
      material: CART_MATERIAL,
    })
  );
};