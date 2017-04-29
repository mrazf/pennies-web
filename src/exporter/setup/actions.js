import { database } from '../../index'

export const saveSheetIdRequest = id => {
  return { type: 'SAVE_SHEET_ID_REQUEST', id }
}

export const saveSheetIdSuccess = () => {
  return { type: 'SAVE_SHEET_ID_SUCCESS' }
}

export const addExportSheet = spreadsheet => {
  return (dispatch, getState) => {
    dispatch(saveSheetIdRequest())

    const uid = getState().user.data.uid

    return database.ref(`/users/${uid}/exporter`).set({ spreadsheetId: spreadsheet.id })
      .then(() => dispatch(saveSheetIdSuccess()))
  }
}
