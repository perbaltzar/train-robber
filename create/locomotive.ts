import { create } from "@hiberworld/code-kit";
import {
  CART_MATERIAL,
  LOCOMOTIVE_CABIN_MATERIAL,
  LOCOMOTIVE_HIGHLIGHT_MATERIAL,
} from "./train";

export const createLocomotive = (x: number) => {
  const train = create({ x });

  // Cabin
  const cabin = create({ x: -1, y: 1 });
  // Floor

  // Windows
  cabin
    // Floor
    .add(
      create({
        y: 3,
        z: -1.6,
        x: -11,
        scaleX: 1,
        scaleY: 0.8,
        scaleZ: 0.1,
        rotX: 90,
        prefabId: "en_m_primitive_wall_01",
        material: CART_MATERIAL,
      })
    )
    // Windows
    .addMany(2, (index) =>
      create({
        prefabId: "en_m_primitive_window_01",
        scale: 0.5,
        scaleZ: 0.1,
        y: 3.6,
        x: -10,
        z: -1.4 + index * 3.1,
        material: LOCOMOTIVE_CABIN_MATERIAL,
      })
    )

    // Walls
    .addMany(2, (index) =>
      create({
        y: 3,
        z: -1.4 + index * 3.1,
        x: -11,
        scaleX: 1,
        scaleY: 0.2,
        scaleZ: 0.1,
        prefabId: "en_m_primitive_wall_01",
        material: LOCOMOTIVE_CABIN_MATERIAL,
      })
    )
    .add(
      create({
        y: 3,
        z: 0,
        x: -8.9,
        rotY: 90,
        scaleX: 0.8,
        scaleY: 0.65,
        scaleZ: 0.1,
        prefabId: "en_m_primitive_wall_01",
        material: LOCOMOTIVE_CABIN_MATERIAL,
      })
    )
    .addMany(2, (index) =>
      create({
        prefabId: "quarter_cylinder",
        y: 5.5,
        z: 1 - index * 2,
        x: -11,
        rotY: 0 + 180 * index,
        scaleX: 2,
        scaleZ: 1,
        scaleY: 0.2,
        material: CART_MATERIAL,
      })
    );

  // Cylinder
  create()
    .add(
      create({
        y: 5,
        rotZ: 90,
        scale: 1,
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
    .addMany(10, () =>
      create({ prefabId: "fx_particlesystem_smoke_01", y: 10, x: -1 })
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
        scale: 1.1,
        scaleY: 0.9,
      })
    )
    .addTo(train);

  // Engine
  train
    .addMany(3, (index) =>
      create({
        prefabId: "wedge_45",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
        y: 3.5,
        x: -3 - index * 2.5,
        z: 0,
        scaleX: 0.8,
        scaleZ: 0.6,
        scaleY: 0.6,
        rotY: 90,
        rotZ: -90,
      })
    )
    .addMany(3, (index) =>
      create({
        prefabId: "wedge_45",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
        y: 4.1,
        x: -4 - index * 2.5,
        z: 0,
        scaleX: 0.8,
        scaleZ: 1,
        scaleY: 0.6,
        rotY: 90,
        rotZ: -90,
        rotX: 90,
      })
    )
    .addMany(3, (index) =>
      create({
        scale: 0.1,
        y: 3.3,
        z: -1.5,
        x: -3 - index * 2.5,
        scaleY: 1.5,
        rotX: 90,
        prefabId: "cylinder_01",
        material: CART_MATERIAL,
      })
    );

  // Wheel
  create({ y: 3.3, z: -1.5, x: -3 })
    .add(
      create({
        y: -0.96,
        scale: 2,
        prefabId: "en_p_wooden_wheel_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
        rotY: 90,
      })
    )
    .animate({ rotZ: [0, -180, -360] }, { loop: "RESTART", easing: "LINEAR" })
    .addTo(train);
  create({ y: 3.3, z: -1.5, x: -5.5 })
    .add(
      create({
        y: -0.96,
        scale: 2,
        prefabId: "en_p_wooden_wheel_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
        rotY: 90,
      })
    )
    .animate({ rotZ: [0, -180, -360] }, { loop: "RESTART", easing: "LINEAR" })
    .addTo(train);
  create({ y: 3.3, z: -1.5, x: -8 })
    .add(
      create({
        y: -0.96,
        scale: 2,
        prefabId: "en_p_wooden_wheel_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
        rotY: 90,
      })
    )
    .animate({ rotZ: [0, -180, -360] }, { loop: "RESTART", easing: "LINEAR" })
    .addTo(train);
  create({ y: 3.3, z: 1.5, x: -3 })
    .add(
      create({
        y: -0.96,
        scale: 2,
        prefabId: "en_p_wooden_wheel_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
        rotY: 90,
      })
    )
    .animate({ rotZ: [0, -180, -360] }, { loop: "RESTART", easing: "LINEAR" })
    .addTo(train);
  create({ y: 3.3, z: 1.5, x: -5.5 })
    .add(
      create({
        y: -0.96,
        scale: 2,
        prefabId: "en_p_wooden_wheel_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
        rotY: 90,
      })
    )
    .animate({ rotZ: [0, -180, -360] }, { loop: "RESTART", easing: "LINEAR" })
    .addTo(train);
  create({ y: 3.3, z: 1.5, x: -8 })
    .add(
      create({
        y: -0.96,
        scale: 2,
        prefabId: "en_p_wooden_wheel_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
        rotY: 90,
      })
    )
    .animate({ rotZ: [0, -180, -360] }, { loop: "RESTART", easing: "LINEAR" })
    .addTo(train);

  // FRONT PIECE
  const angles = [29, 45, 59, 68, 59, 45, 29];
  const lengths = [1.13, 1.15, 1.4, 1.85, 1.4, 1.15, 1.13];
  train
    .addMany(2, (index) =>
      create({
        x: 3,
        z: -0.8 + index * 1.6,
        y: 2.5,
        rotY: 60 - index * 120,
        scale: 0.1,
        scaleZ: 1.7,
        prefabId: "cube_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
      })
    )
    .addMany(7, (index) =>
      create({
        x: 1,
        y: 4,
        rotZ: angles[index],
        rotX: 225 - 15 * index,
        scale: 0.1,
        scaleY: lengths[index],
        prefabId: "cube_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
      })
    )
    .add(
      create({
        prefabId: "cube_01",
        material: LOCOMOTIVE_HIGHLIGHT_MATERIAL,
        y: 3.5,
        x: -0.5,
        scale: 0.5,
        scaleY: 0.3,
        scaleX: 2,
      })
    );

  cabin.addTo(train);
  return train;
};
