export type AuthHandshakeDto = {
  username: string,
}

export type AuthSignInDto = {
	username: string;
	secret: string;
}
export type AuthSignUpDto = {
	fullname: string,
  email: string,
  username: string,
  secret: string,
  secretAnsure: string
}

export type AuthCredentials = {
	id: number,
  alias?: string,
  email: string,
  client_id: number,
  access_token: string
}
