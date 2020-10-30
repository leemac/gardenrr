import { connect } from "react-redux";

import { IRootState } from "./types";

import DesignerComponent from "./DesignerComponent";

import Actions from "./duck/actions";

interface IGlobalState {
  designer: IRootState;
}

const mapStateToProps = (state: IGlobalState) => {
  return {
    selectedPlantId: state.designer.selectedPlantId,
    gardens: state.designer.gardens,
    plants: state.designer.plants
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddBed: () => {
      dispatch(Actions.addBed());
    },
    onCellClick: (bedId: number, x: number, y: number) => {
      dispatch(Actions.addPlant(bedId, x, y));
    },
    onCellRemoveClick: (bedId: number, x: number, y: number) => {
      dispatch(Actions.removePlant(bedId, x, y));
    },
    onRemoveBed: (id: number) => {
      dispatch(Actions.removeBed(id));
    },
    onPlantSelected: (id: number) => {
      dispatch(Actions.plantSelected(id));
    },
    onSave: () => {
      dispatch(Actions.save());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DesignerComponent);
