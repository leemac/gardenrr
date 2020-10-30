import React from "react";

import { IBed, IPlant } from "../types";

import BedCellComponent from "./BedCellComponent";

interface ILocalProps {
  bed: IBed;
  lookupPlants: IPlant[];
  onCellClick: (bedId: number, x: number, y: number) => void;
  onCellRemoveClick: (bedId: number, x: number, y: number) => void;
  onRemoveBed: (id: number) => void;
}

class BedTableComponent extends React.Component<ILocalProps> {
  constructor(props: ILocalProps) {
    super(props);

    this.handleRemoveBed = this.handleRemoveBed.bind(this);
  }
  render() {
    const tableBody = [...Array(this.props.bed.dimension.height)].map(
      (value: any, rowIndex: number) => {
        const columns = [...Array(this.props.bed.dimension.width)].map(
          (value: any, columnIndex: number) => {
            return (
              <BedCellComponent
                key={columnIndex}
                bed={this.props.bed}
                columnIndex={columnIndex}
                rowIndex={rowIndex}
                lookupPlants={this.props.lookupPlants}
                onCellClick={this.props.onCellClick}
                onCellRemoveClick={this.props.onCellRemoveClick}
              />
            );
          }
        );

        return <tr key={rowIndex}>{columns}</tr>;
      }
    );

    return (
      <div className="g-bed-container">
        <table className="g-bed">
          <tbody>{tableBody}</tbody>
        </table>
        <div className="g-bed-controls">
          <button
            onClick={this.handleRemoveBed}
            className="g-button g-danger-outline"
          >
            Remove
          </button>
        </div>
      </div>
    );
  }

  handleRemoveBed() {
    this.props.onRemoveBed(this.props.bed.id);
  }
}

export default BedTableComponent;
