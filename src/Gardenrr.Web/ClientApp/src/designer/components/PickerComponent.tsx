// tslint:disable max-classes-per-file jsx-no-lambda
import React from "react";
import { IPlant } from "../types";

import PickerComponentItem from "./PickerComponentItem";

export interface PickerComponentProps {
  lookupPlants: IPlant[];
  onSelected: (id: number) => void;
  selectedPlantId: number | null;
}

const PickerComponent: React.FC<PickerComponentProps> = ({
  lookupPlants,
  onSelected,
  selectedPlantId
}) => {
  const plants = lookupPlants
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .map(plant => {
      return (
        <PickerComponentItem
          key={plant.id}
          plant={plant}
          onSelected={onSelected}
          selectedPlantId={selectedPlantId}
        />
      );
    });

  return (
    <div className="g-plant-picker">
      <ul className="g-picker-list">{plants}</ul>
    </div>
  );
};

export default PickerComponent;
