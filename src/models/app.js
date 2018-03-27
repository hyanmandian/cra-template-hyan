export default {
  state: {
    loading: false,
  },
  reducers: {
    toggleLoading(state, loading) {
      return {
        ...state,
        loading: loading !== undefined ? loading : !state.loading,
      };
    },
  },
};
