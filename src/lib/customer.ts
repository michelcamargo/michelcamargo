import {AddressInfo} from "@/lib/geolocation";
import {UTMCampaignInfo} from "@/lib/utm";

export type CustomerPersonalInfo = {
	firstName: string,
	lastName: string,
	fullName: string,
	email: string,
	phone: string,
}

export type CustomerProfile = {
	personal: CustomerPersonalInfo,
	address: AddressInfo,
	prospection: {
		intention: string,
	},
	UTM: {
		current?: string,
		previous?: string,
	}
}

export type CustomerData = CustomerProfile & {
	lastIPAccess?: string,
	status: number,
}
