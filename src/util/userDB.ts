export const user = {
  username: "test",
  password: "test1234",
};

export const userDetails: UserEntity = {
  username: "Test Pokemon",
  firstName: "Test",
  lastName: "Pokemon",
  email: "TestPokemon@gmail.com",
};

export interface UserEntity {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}
