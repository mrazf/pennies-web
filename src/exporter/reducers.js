const initialState = {
  setup: false, spreadsheetId: null
}

const exporter = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_USER_DATA':
      return action.data.exporter ? { ...action.data.exporter, setup: true } : state
    case 'SAVE_SHEET_ID_SUCCESS':
      return { ...state, setup: true }
    default: return state
  }
}

export default exporter
