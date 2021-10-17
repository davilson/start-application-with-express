declare namespace NodeJS {
  interface Global {
    supertestServer: import('supertest').SuperTest<import('supertest').Test>;
  }
}
