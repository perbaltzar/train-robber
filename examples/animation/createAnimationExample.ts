import { DeepPartial, Transform, Material } from '@hiberworld/code-kit';
import { create } from '@hiberworld/code-kit-utils';
import { createPathOfObjects } from '../helpers/createPathOfObjects';
import { rotatingNode } from '../helpers/rotatingNode';

const createWheel = (transform: DeepPartial<Transform>, material: Material) => ({
  transform,
  children: [
    rotatingNode(
      {
        prefabId: 'en_p_wooden_wheel_01',
        transform: {
          pos: [0, -0.48, 0],
          scale: [2, 1, 1],
        },
        material,
      },
      10
    ),
  ],
});

const createCar = () => {
  const material: Material = 'palette_02_steel';
  const wheelMaterial: Material = 'palette_01_black';
  const wheel1 = createWheel({ pos: [-1, 0.4, 1] }, wheelMaterial);
  const wheel2 = createWheel({ pos: [-1, 0.4, -1.3] }, wheelMaterial);
  const wheel3 = createWheel({ pos: [1, 0.4, -1.3] }, wheelMaterial);
  const wheel4 = createWheel({ pos: [1, 0.4, 1] }, wheelMaterial);
  const back = create({
    prefabId: 'quarter_cylinder',
    material,
    transform: {
      scale: [1, 0.5, 0.6],
      pos: [0, 0.3, 1.5],
    },
  });
  const front = create({
    prefabId: 'quarter_cylinder',
    material,
    transform: {
      pos: [0, 0.3, -1.7],
      scale: [1, 0.5, 1.2],
      rot: [0, 180, 0],
    },
  });
  const door1 = create({
    prefabId: 'cube_02',
    material,
    transform: {
      scale: [0.2, 1, 1.5],
      pos: [0.9, 0.3, 0.25],
    },
  });
  const door2 = create({
    prefabId: 'cube_02',
    material,
    transform: {
      scale: [0.2, 1, 1.5],
      pos: [-0.9, 0.3, 0.25],
    },
  });
  const glass = create({
    prefabId: 'iron_cage_01_door',
    transform: {
      scale: [0.3, 0.9, 1],
      pos: [1, 1.6, -0.5],
      rot: [0, -20, 90],
    },
  });
  const couch = create({
    prefabId: 'couch_01',
    transform: {
      scale: [0.7, 1, 1],
      pos: [0, 0.5, 0.7],
      rot: [0, 180, 0],
    },
  });
  const steam = create({
    prefabId: 'fx_particlesystem_steam_01',
    transform: {
      scale: [0.1, 0.1, 0.1],
      pos: [-0.5, -0.5, 1.8],
      rot: [0, -90, 0],
    },
  });
  const bottom = create({
    prefabId: 'cube_02',
    material,
    transform: { scale: [2, 0.2, 4], pos: [0, 0.3, 0] },
  });
  const head = create({
    prefabId: 'en_p_jaguar_head_01_t2',
    transform: {
      scale: [0.1, 0.1, 0.1],
      rot: [0, 180, 0],
      pos: [0, 0.9, -2.4],
    },
  });

  return create().add(wheel1, wheel2, wheel3, wheel4, back, bottom, front, door1, door2, glass, couch, steam, head);
};

export const createAnimationExample = () => {
  const example = create();

  const ring = createPathOfObjects('en_p_dirt_row_01');
  const car = createCar()
    .moveX(14.5)
    .animate(
      {
        rotY: [0, 180, 360],
      },
      { loop: 'RESTART', easing: 'LINEAR', duration: 6 }
    );

  example.add(...ring, car);

  return example;
};
