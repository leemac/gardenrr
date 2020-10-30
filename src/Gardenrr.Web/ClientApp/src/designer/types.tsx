export interface IRootState {
  selectedGardenId: number;
  selectedPlantId: number | null;
  gardens: IGarden[];
  plants: IPlant[];
}

export interface IGarden {
  beds: IBed[];
  id: number;
  name: string;
}

export interface ICellHighlight {
  x: number;
  y: number;
  result: NeighborResult
}

export interface IBed {
  bedHighlights: ICellHighlight[];
  id: number;
  plants: IPlantInstance[];
  dimension: IBedDimension;
}

export interface IBedDimension {
  height: number;
  width: number;
}

export enum BorderWarnings {
  None,
  Danger
}

export enum NeighborResult {
  Good,
  Bad,
  None
}

export interface IWarnings {
  top: BorderWarnings;
  bottom: BorderWarnings;
  left: BorderWarnings;
  right: BorderWarnings;
}

export interface IPlantInstance {
  plantId: number;
  x: number;
  y: number;
  warnings: IWarnings;
}

// Lookup
export interface IPlantVariety {
  code: string;
  name: string;
}

export interface IPlant {
  category: string;
  id: number;
  name: string;
  good_companions: string[];
  bad_companions: string[];
  varieties: IPlantVariety[];
}
