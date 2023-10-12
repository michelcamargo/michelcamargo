export type UTMCampaignInfo = {
	id: string,
	title: string,
	reference: string,
	initialDate: Date,
	expirationDate: Date,
}

export type UTMFullCampaign = UTMCampaignInfo & {
	registrationDate: Date,
	remainingAllowed: number | null,
}
