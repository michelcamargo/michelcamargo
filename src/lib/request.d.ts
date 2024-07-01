type PbResponseType<T> = {
	statusCode: number,
	timestamp: string,
	data: T,
}
