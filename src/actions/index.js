// Action creator => function who return action
export const selectLibrary = libraryId => ({
  type: 'select_library',
  payload: libraryId
});
