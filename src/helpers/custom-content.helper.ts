import CustomContent from "@/helpers/content.helper";
import { CustomContentType } from "@/lib/content";

class CustomContentHelper {

	public static parseContent(targetContent: CustomContentType) {
		return new CustomContent(targetContent);
	}

}

export default CustomContentHelper;
