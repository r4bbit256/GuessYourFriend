export class RandomUserDataGenerator {
  results: [
    {
      gender: string,
      name: {
          first: string;
          last: string;
      },
      email: string,
      login: {
        uuid: string
      },
      picture: {
          large: string;
          medium: string;
          thumbnail: string;
      }
    }
  ];
  info: {
      seed: string;
      results: number;
      page: number;
      version: string;
  };
}
