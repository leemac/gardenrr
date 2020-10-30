import React from "react";

import { IBed, IPlant, NeighborResult } from "../types";

export interface BedCellProps {
  bed: IBed;
  columnIndex: number;
  rowIndex: number;
  lookupPlants: IPlant[];
  onCellClick: (bedId: number, x: number, y: number) => void;
  onCellRemoveClick: (bedId: number, x: number, y: number) => void;
}

class BedCell extends React.Component<BedCellProps> {
  constructor(props: BedCellProps) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }
  render() {
    const plantInstance = this.props.bed.plants.find(
      p => p.x === this.props.columnIndex && p.y === this.props.rowIndex
    );

    let cellText = <span />;
    let className = "g-cell";
    if (plantInstance) {
      const plant = this.props.lookupPlants.find(
        p => p.id === plantInstance.plantId
      );

      const plantUrl = plant ? `images/${plant.name.toLowerCase()}.png` : "";
      cellText = plant ? (
        <img
          className="cell-image"
          alt={plant.name}
          title={plant.name}
          src={plantUrl}
        />
      ) : (
        <span>foo</span>
      );

      if (plantInstance.warnings.top) {
        className += " danger-top";
      }

      if (plantInstance.warnings.bottom) {
        className += " danger-bottom";
      }

      if (plantInstance.warnings.left) {
        className += " danger-left";
      }

      if (plantInstance.warnings.right) {
        className += " danger-right";
      }
    }

    const highlight = this.props.bed.bedHighlights.find(
      w => w.x === this.props.columnIndex && w.y === this.props.rowIndex
    );

    if (highlight) {
      if (highlight.result === NeighborResult.Good) {
        className += " good";
      } else if (highlight.result === NeighborResult.Bad) {
        className += " danger";
      }
    }

    return (
      <td
        key={this.props.columnIndex}
        className={className}
        onClick={this.handleOnClick}
        onContextMenu={this.handleOnClick}
      >
        {cellText}
      </td>
    );
  }
  handleOnClick(e: any) {
    if (e.type === "click") {
      this.props.onCellClick(
        this.props.bed.id,
        this.props.columnIndex,
        this.props.rowIndex
      );
    } else if (e.type === "contextmenu") {
      e.preventDefault();
      this.props.onCellRemoveClick(
        this.props.bed.id,
        this.props.columnIndex,
        this.props.rowIndex
      );
    }
  }
}

export default BedCell;
