export default  {
  state: {
    loading: false,
  },
  reducers: {
    toggleLoading(state, loading) {
      return { ...state, loading };
    },
  },
}
