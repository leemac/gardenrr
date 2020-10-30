import React from "react";

import { IPlant } from "../types";

export interface PlantItemProps {
  plant: IPlant;
  onSelected: (id: number) => void;
  selectedPlantId: number | null;
}

class PlantItemRaw extends React.Component<PlantItemProps> {
  constructor(props: PlantItemProps) {
    super(props);

    this.handleOnSelected = this.handleOnSelected.bind(this);
  }
  render() {
    let plantImage = <span />;
    const plantUrl = this.props.plant
      ? `images/${this.props.plant.name.toLowerCase()}.png`
      : "";
    if (this.props.plant) {
      plantImage = (
        <img
          className="g-plant-icon-small"
          alt={this.props.plant.name}
          title={this.props.plant.name}
          src={plantUrl}
        />
      );
    }

    return (
      <li
        className={`g-picker-list-item ${
          this.props.selectedPlantId === this.props.plant.id ? "selected" : ""
        }`}
        onClick={this.handleOnSelected}
      >
        <div className="g-name">
          <div className="image-container">{plantImage}</div>
          {this.props.plant.name}
        </div>
      </li>
    );
  }

  handleOnSelected() {
    this.props.onSelected(this.props.plant.id);
  }
}

export default PlantItemRaw;
