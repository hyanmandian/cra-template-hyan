export const stubDate = fixedDate => {
  let originalDate;

  beforeAll(() => {
    originalDate = Date;

    Date = class extends Date {
      constructor() {
        super();

        return fixedDate;
      }
    };
  });

  afterAll(() => {
    Date = originalDate;
  });
};
