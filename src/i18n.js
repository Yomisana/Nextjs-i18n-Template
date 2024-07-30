import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "@/i18nUtils";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`../locale/${locale}.json`)).default,
  };
});
