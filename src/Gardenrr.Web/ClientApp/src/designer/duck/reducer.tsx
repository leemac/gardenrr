import { IRootState, IPlantInstance, IBed, BorderWarnings } from "../types";

import types from "./types";
import { highlightCells } from "./bed/bed";

import { plants } from "../../data/plants";

let INITIAL_STATE: IRootState = {
  selectedGardenId: 1,
  selectedPlantId: null,
  gardens: [
    {
      id: 1,
      name: "2019 Summer Garden",
      beds: [
        {
          id: 2,
          dimension: {
            height: 8,
            width: 4
          },
          plants: [],
          bedHighlights: []
        },
        {
          id: 4,
          dimension: {
            height: 8,
            width: 4
          },
          plants: [],
          bedHighlights: []
        }
      ]
    }
  ],
  plants
};

const savedData = localStorage.getItem("data");
// Temporary, create backend later
if (savedData) {
  INITIAL_STATE = JSON.parse(savedData);

  INITIAL_STATE.plants = plants;

  INITIAL_STATE.gardens.forEach(g => {
    g.beds.forEach(bed => {
      bed.bedHighlights = [];
      bed.plants.forEach(p => {
        p.warnings.bottom = BorderWarnings.None;
        p.warnings.top = BorderWarnings.None;
        p.warnings.left = BorderWarnings.None;
        p.warnings.right = BorderWarnings.None;
      });
    });
  });

  INITIAL_STATE.selectedPlantId = null;
}

function save(state: any) {
  localStorage.setItem("data", JSON.stringify(state));
}

const screenReducer = {
  [types.ADD_BED]: (state: IRootState, action: any) => {
    const gardens = [...state.gardens];
    const garden = gardens.find(g => g.id === state.selectedGardenId);

    if (garden) {
      const bed = {
        id: Math.floor(Math.random() * Math.floor(1000)),
        items: [],
        plants: [],
        dimension: {
          height: 8,
          width: 4
        },
        bedHighlights: []
      } as IBed;

      garden.beds.push(bed);
    }

    save(state);

    return {
      ...state,
      gardens: [...gardens]
    };
  },
  [types.REMOVE_BED]: (state: IRootState, action: any) => {
    const gardens = [...state.gardens];
    const garden = gardens.find(g => g.id === state.selectedGardenId);

    if (garden) {
      garden.beds = garden.beds.filter(b => b.id !== action.id);
    }

    save(state);

    return {
      ...state,
      gardens: [...gardens]
    };
  },
  [types.ADD_PLANT]: (state: IRootState, action: any) => {
    const gardens = [...state.gardens];
    const garden = gardens.find(g => g.id === state.selectedGardenId);

    if (garden) {
      const bed = garden.beds.find(b => b.id === action.bedId);
      if (bed) {
        const existingPlant = bed.plants.find(
          p => p.x === action.x && p.y === action.y
        );
        if (!existingPlant) {
          const plantInstance = {
            plantId: state.selectedPlantId,
            x: action.x,
            y: action.y,
            warnings: {
              top: BorderWarnings.None,
              bottom: BorderWarnings.None,
              left: BorderWarnings.None,
              right: BorderWarnings.None
            }
          } as IPlantInstance;

          bed.plants.push(plantInstance);
        }
      }
    }

    save(state);

    return {
      ...state,
      gardens: [...gardens]
    };
  },
  [types.REMOVE_PLANT]: (state: IRootState, action: any) => {
    const gardens = [...state.gardens];
    const garden = gardens.find(g => g.id === state.selectedGardenId);

    if (garden) {
      const bed = garden.beds.find(b => b.id === action.bedId);
      if (bed) {
        const match = bed.plants.findIndex(
          p => p.x === action.x && p.y === action.y
        );

        if (bed.plants[match]) {
          bed.plants.splice(match, 1);
        }
      }

      if (state.selectedPlantId) {
        highlightCells(state.selectedPlantId, state.plants, garden);
      }
    }

    save(state);

    return {
      ...state,
      gardens: [...gardens]
    };
  },
  [types.PLANT_SELECTED]: (state: IRootState, action: any) => {
    const garden = state.gardens.find(g => g.id === state.selectedGardenId);

    if (garden) {
      highlightCells(action.id, state.plants, garden);
    }

    return {
      ...state,
      selectedPlantId: action.id
    };
  }
};

const reducers = [screenReducer];

const reducer = (startingState: IRootState = INITIAL_STATE, action: any) => {
  let state = startingState;
  reducers.forEach((reducerMethod: any) => {
    if (reducerMethod[action.type]) {
      state = reducerMethod[action.type](state, action);
    }
  });
  return state;
};

export default reducer;
