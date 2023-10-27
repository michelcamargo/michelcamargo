import { AddressInfo } from "@/lib/geolocation";
import { UTMCampaignInfo } from "@/lib/utm";
export enum ProspectIntention {
	// eslint-disable-next-line no-unused-vars
	work,
	// eslint-disable-next-line no-unused-vars
	explore,
	// eslint-disable-next-line no-unused-vars
	external,
}

export type CustomerPersonalInfo = {
	firstName?: string,
	lastName?: string,
	fullName: string,
	email: string,
	phone?: string,
}

export type CustomerProspection = {
	intention?: ProspectIntention,
	message?: string,
}

export type CustomerProfile = {
	id: string,
	personal: CustomerPersonalInfo,
	address: AddressInfo,
	prospection: CustomerProspection,
	UTM: {
		previousId?: string,
		current?: Partial<UTMCampaignInfo>,
	}
}

export type CustomerLead = {
	name: string,
	email: string,
	message?: string,
}

export type CustomerData = CustomerProfile & {
	lastIPAccess?: string,
	status: number,
}
