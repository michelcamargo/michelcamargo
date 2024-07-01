export type UserAvailability = {
  email?: string;
  alias?: string;
  availability: boolean;
};

export type AuthUser = {
  id: number,
  username: string,
  email: string,
}
