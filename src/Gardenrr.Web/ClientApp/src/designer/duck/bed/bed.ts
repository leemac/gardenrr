import { IPlantInstance, IPlant, IGarden, NeighborResult } from "../../types";

function getNeighbors(x: number, y: number, plants: IPlantInstance[]) {
  const row = plants.filter(p => p.y === y);
  const column = plants.filter(p => p.x === x);

  return {
    left: row.find(p => p.x === x - 1),
    right: row.find(p => p.x === x + 1),
    top: column.find(p => p.y === y - 1),
    bottom: column.find(p => p.y === y + 1)
  };
}

function isBadCompanion(thisPlant: IPlant, thatPlant: IPlant) {
  return thisPlant.bad_companions.indexOf(thatPlant.name.toLowerCase()) !== -1;
}

function isGoodCompanion(thisPlant: IPlant, thatPlant: IPlant) {
  return thisPlant.good_companions.indexOf(thatPlant.name.toLowerCase()) !== -1;
}

function evalulateCellRule(
  neighbors: any,
  plants: IPlant[],
  thisPlantId: number
): NeighborResult {
  let result = NeighborResult.None;
  neighbors.forEach((neighbor: any) => {
    const thisPlant = plants.find(p => p.id === thisPlantId);
    const thatPlant = plants.find(p => p.id === neighbor.plantId);

    if (thisPlant && thatPlant) {
      // Only set if we haven't detected a bad neighbor
      if (result !== NeighborResult.Bad) {
        if (
          thisPlant.id === thatPlant.id ||
          isGoodCompanion(thisPlant, thatPlant)
        ) {
          result = NeighborResult.Good;
          console.log("good!");
        }
      }

      if (isBadCompanion(thisPlant, thatPlant)) {
        result = NeighborResult.Bad;
      }
    }
  });

  return result;
}

export function highlightCells(
  plantId: number,
  plants: IPlant[],
  garden: IGarden
) {
  garden.beds.forEach(bed => {
    bed.bedHighlights = [];
    for (var x = 0; x < bed.dimension.width; x++) {
      for (var y = 0; y < bed.dimension.height; y++) {
        const neighbors = getNeighbors(x, y, bed.plants);

        const map = [];

        if (neighbors.top) {
          map.push(neighbors.top);
        }
        if (neighbors.bottom) {
          map.push(neighbors.bottom);
        }
        if (neighbors.right) {
          map.push(neighbors.right);
        }
        if (neighbors.left) {
          map.push(neighbors.left);
        }

        const anyBad = evalulateCellRule(map, plants, plantId);

        bed.bedHighlights.push({
          x,
          y,
          result: anyBad
        });
      }
    }
  });
}
