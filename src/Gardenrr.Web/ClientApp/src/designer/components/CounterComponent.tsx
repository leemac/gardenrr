import React from "react";
import { IGarden, IPlantInstance, IPlant } from "../types";

interface ILocalProps {
  garden: IGarden;
  lookupPlants: IPlant[];
}

class BedTableComponent extends React.Component<ILocalProps> {
  render() {
    const plantInstances = this.props.garden.beds.reduce(
      (previous, current) => {
        return [...previous, ...current.plants];
      },
      [] as IPlantInstance[]
    );

    const plants = [...new Set(plantInstances.map(p => p.plantId))];
    const rows = plants.map(plantId => {
      const count = plantInstances.filter(p => p.plantId === plantId);
      const plant = this.props.lookupPlants.find(p => p.id === plantId);
      return (
        <tr>
          <td>{plant ? plant.name : null}</td>
          <td>{count.length}</td>
        </tr>
      );
    });
    return (
      <div className="g-counter">
        <table>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default BedTableComponent;
