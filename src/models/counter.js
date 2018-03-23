export default  {
  state: {
    value: 0,
  },
  reducers: {
    increment({ value }) {
      return { value:  value + 1 };
    },
    decrement({ value }) {
      return { value:  value - 1 };
    },
  },
}
