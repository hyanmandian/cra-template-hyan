export default {
  state: {
    value: 0,
  },
  reducers: {
    increment(state, payload = 1) {
      return {
        value: state.value + payload,
      };
    },
  },
  effects: (dispatch) => ({
    async incrementAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    },
  }),
}
