// import { useLocale } from "next-intl";
// import { getTranslations } from "next-intl/server";

// import LocaleSwitcherSelect from "@/components/client/LocaleSwitcher/LocaleSwitcherSelect";
import { getSupportedLocalesList } from "@/i18nUtils";
import LocaleSwitcherClient from "@/components/client/LocaleSwitcher/LocaleSwitcherClient";

export default async function LocaleSwitcher() {
  // const t = await getTranslations("LocaleSwitcher");
  // const locale = useLocale();
  const supportedLocales = await getSupportedLocalesList();

  // return (
  //   <LocaleSwitcherSelect
  //     defaultValue={locale}
  //     items={supportedLocales.map((locale) => ({
  //       value: locale,
  //       label: t(locale),
  //     }))}
  //     label={t("label")}
  //   />
  // );
  return (
    <LocaleSwitcherClient
      supportedLocales={supportedLocales}
      // label={t("label")}
    />
  );
}
