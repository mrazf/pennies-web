const initialState = {
  setup: false, sheet: null
}

const exporter = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_SHEET_ID_SUCCESS': return { ...state, setup: true }
    default: return state
  }
}

export default exporter
