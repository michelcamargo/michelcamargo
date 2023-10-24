import { AddressInfo } from "@/lib/geolocation";
import { UTMCampaignInfo } from "@/lib/utm";
export enum ProspectIntention {
	work,
	explore,
	external,
}

export type CustomerPersonalInfo = {
	firstName?: string,
	lastName?: string,
	fullName: string,
	email: string,
	phone?: string,
}

export type CustomerProfile = {
	id: string,
	personal: CustomerPersonalInfo,
	address: AddressInfo,
	prospection: {
		intention: ProspectIntention,
	},
	UTM: {
		previousId?: string,
		current?: Partial<UTMCampaignInfo>,
	}
}

export type ProspectCustomer = {
	personal: CustomerPersonalInfo,
	prospection: {
		intention: ProspectIntention,
	},
} & Partial<CustomerProfile>;

export type CustomerData = CustomerProfile & {
	lastIPAccess?: string,
	status: number,
}
