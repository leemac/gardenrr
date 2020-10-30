import React from "react";

import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

import { IGarden, IPlant, IBed } from "./types";

import BedComponent from "./components/BedTableComponent";
import CounterComponent from "./components/CounterComponent";
import PlantPicker from "./components/PickerComponent";

interface ILocalProps {
  gardens: IGarden[];
  plants: IPlant[];
  selectedPlantId: number | null;
  onAddBed: () => void;
  onCellClick: (bedId: number, x: number, y: number) => void;
  onCellRemoveClick: (bedId: number, x: number, y: number) => void;
  onDrop: (plantId: number, bedId: number, x: number, y: number) => void;
  onRemoveBed: (id: number) => void;
  onSave: () => void;
  onPlantSelected: (id: number) => void;
}

class DesignerComponent extends React.Component<ILocalProps> {
  render() {
    const garden = this.props.gardens[0];
    const beds = garden.beds.map((bed: IBed, index: number) => {
      return (
        <BedComponent
          bed={bed}
          key={index}
          lookupPlants={this.props.plants}
          onCellClick={this.props.onCellClick}
          onCellRemoveClick={this.props.onCellRemoveClick}
          onRemoveBed={this.props.onRemoveBed}
        />
      );
    });

    return (
      <div className="g-designer">
        <div className="g-garden">
          <h2>{garden.name}</h2>

          <div className="g-garden-beds">
            <PlantPicker
              lookupPlants={this.props.plants}
              onSelected={this.props.onPlantSelected}
              selectedPlantId={this.props.selectedPlantId}
            />
            {beds}
            <div
              className="g-bed-new g-button g-default-outline"
              onClick={this.props.onAddBed}
            >
              +
            </div>
          </div>
          <CounterComponent
            garden={this.props.gardens[0]}
            lookupPlants={this.props.plants}
          />
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DesignerComponent);
