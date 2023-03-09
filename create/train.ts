import { Material, create } from "@hiberworld/code-kit";
import { RAIL_WIDTH } from "../constants";
import { createLocomotive } from "./locomotive";

export const CART_MATERIAL: Material = "palette_01_black";
export const CART_SPACING = 22;
export const LOCOMOTIVE_HIGHLIGHT_MATERIAL: Material = "palette_02_red";

const cartColors: Material[] = ["t_planks_02"];

const createWheel = (index: number, z: number) => {
  return (
    create({ y: 0.5, scale: 1 })
      // .animate({ rotX: [0, 180, 360] }, { easing: "LINEAR", loop: "RESTART" })
      .add(
        create({
          prefabId: "en_p_wooden_wheel_01",
          material: CART_MATERIAL,
          // y: -2,
          y: -0.5,
          z,
          x: -1.5 + index * RAIL_WIDTH,
          scale: 0.9,
        })
      )
  );
};

const createWheelPiece = (z: number) => {
  const piece = create({ z });
  piece
    .addMany(2, (index) => createWheel(index, 0))
    .addMany(2, (index) => createWheel(index, 1))
    .addMany(2, (index) => createWheel(index, 2))
    .addMany(2, (index) =>
      create({
        prefabId: "cube_01",
        material: CART_MATERIAL,
        scaleY: 0.4,
        x: -1.7 + index * (RAIL_WIDTH + 0.4),
        z: 1,
        y: 0.4,
        scaleX: 0.1,
      })
    )
    .addMany(2, (index) =>
      create({
        prefabId: "wedge_45",
        material: CART_MATERIAL,
        scaleY: 0.31,
        scaleZ: 0.4,
        x: -1.7 + index * (RAIL_WIDTH + 0.4),
        z: -0.3,
        y: 1.0,
        scaleX: 0.1,
        rotX: 180,
      })
    )
    .addMany(2, (index) =>
      create({
        prefabId: "wedge_45",
        material: CART_MATERIAL,
        scaleY: 0.31,
        scaleZ: 0.4,
        x: -1.7 + index * (RAIL_WIDTH + 0.4),
        z: 2.3,
        y: 1.0,
        scaleX: 0.1,
        rotX: 180,
        rotY: 180,
      })
    );

  return piece;
};

const buildCart = (cartIndex: number) => {
  const materialIndex = cartIndex % cartColors.length;
  const cart = create({
    y: 2.4,
    x: 0 + CART_SPACING * cartIndex,
    z: 0,
    rotY: 90,
  });

  cart.addMany(2, (index) => createWheelPiece(0));
  cart.addMany(2, (index) => createWheelPiece(8));

  // Floor
  create({
    prefabId: "cube_01",
    y: 0.9,
    z: 5,
    scaleZ: 8.5,
    scaleY: 0.1,
    scaleX: 1.8,
    material: CART_MATERIAL,
  }).addTo(cart);

  // Wall
  cart
    .addMany(2, (index) =>
      create({ z: -1, x: -1.6 + index * 3.5 }).addMany(7, (index) =>
        create({
          rotY: 90,
          y: 1,
          scaleX: 0.5,
          scaleZ: 0.1,
          scaleY: 0.8,
          prefabId: "en_m_primitive_window_01",
          material: cartColors[materialIndex],
          z: 0 + index * 2,
        })
      )
    )
    .addMany(2, (index) =>
      create({
        prefabId: "en_m_primitive_door_01",
        material: cartColors[materialIndex],
        scaleZ: 0.1,
        scaleY: 0.8,
        scaleX: 0.9,
        y: 1,
        z: -1.8 + 14 * index,
      })
    )
    // Windows
    .addMany(7, (index) =>
      create({
        prefabId: "en_m_primitive_wall_01",
        material: "glass" as Material,
        scaleZ: 0.1,
        scaleY: 0.4,
        scaleX: 0.255,
        rotY: 90,
        y: 1.8,
        x: 1.9,
        z: -1 + index * 2,
      })
    )
    .addMany(7, (index) =>
      create({
        prefabId: "en_m_primitive_wall_01",
        material: "glass" as Material,
        scaleZ: 0.1,
        scaleY: 0.4,
        scaleX: 0.255,
        rotY: 90,
        y: 1.8,
        x: -1.6,
        z: -1 + index * 2,
      })
    )
    // Seats
    .addMany(7, (index) =>
      create({
        prefabId: "chair_01",
        y: 1,
        x: 1,
        scaleX: 2.2,
        z: -1.5 + index * 1.95,
        material: "t_wooden_floor_01",
      })
    )
    .addMany(7, (index) =>
      create({
        prefabId: "chair_01",
        y: 1,
        x: 1,
        scaleX: 2.2,
        z: -0 + index * 1.95,
        rotY: 180,
        material: "t_wooden_floor_01",
      })
    )
    .addMany(7, (index) =>
      create({
        prefabId: "chair_01",
        y: 1,
        x: -1,
        scaleX: 2,
        z: -1.5 + index * 1.95,
        material: "t_wooden_floor_01",
      })
    )
    .addMany(7, (index) =>
      create({
        prefabId: "chair_01",
        y: 1,
        x: -1,
        scaleX: 2,
        z: -0 + index * 1.95,
        rotY: 180,
        material: "t_wooden_floor_01",
      })
    )
    // Roof
    .addMany(2, (index) =>
      create({
        prefabId: "quarter_cylinder",
        y: 4,
        x: 1 - index * 2,
        z: 5,
        rotY: 90 + 180 * index,
        scaleX: 8.5,
        scaleY: 0.5,
        material: CART_MATERIAL,
      })
    )
    // Connection
    .add(
      create({
        prefabId: "cylinder_01",
        material: CART_MATERIAL,
        z: 12,
        rotX: 90,
        scale: 0.3,
        scaleY: 2,
        y: 0.5,
      })
    )
    .add(
      create({
        prefabId: "cylinder_01",
        material: CART_MATERIAL,
        z: 16,
        rotX: 90,
        scale: 0.3,
        scaleY: 2,
        y: 0.5,
      })
    )
    .add(
      create({
        prefabId: "cube_01",
        y: 0,
        z: 16,
        scale: 0.5,
        scaleZ: 0.1,
        material: CART_MATERIAL,
      })
    );

  return cart;
};

export const createTrain = (options?: { numberOfCarts?: number }) => {
  // Locomotive
  const { numberOfCarts = 0 } = options ?? {};
  const locomotive = createLocomotive(
    CART_SPACING + CART_SPACING * numberOfCarts
  );

  return create()
    .add(locomotive)
    .addMany(numberOfCarts, (index) => buildCart(index));
};
