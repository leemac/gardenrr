import types from "./types";

const addPlant = (bedId: number, x: number, y: number) => ({
  bedId,
  x,
  y,
  type: types.ADD_PLANT
});

const removePlant = (bedId: number, x: number, y: number) => ({
  bedId,
  x,
  y,
  type: types.REMOVE_PLANT
});

const plantSelected = (id: number) => ({
  id,
  type: types.PLANT_SELECTED
});

const addBed = () => ({
  type: types.ADD_BED
});

const removeBed = (id: number) => ({
  id,
  type: types.REMOVE_BED
});

const save = () => ({
  type: types.SAVE
});

export default {
  addBed,
  addPlant,
  removePlant,
  removeBed,
  plantSelected,
  save
};
