// Action creator => function who return action
export const selectLibrary = libraryId => {
  console.log(libraryId);
  return {
    type: 'select_library',
    payload: libraryId
  };
};
