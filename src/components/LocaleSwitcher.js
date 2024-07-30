import { useLocale, useTranslations } from "next-intl";

import LocaleSwitcherSelect from "@/components/LocaleSwitcherSelect";
import { getSupportedLocalesList } from "@/i18nUtils";

export default async function LocaleSwitcher() {
  const t = useTranslations("Language list");
  const locale = useLocale();
  const supportedLocales = await getSupportedLocalesList();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={supportedLocales.map((locale) => ({
        value: locale,
        label: t(locale),
      }))}
      label={t("label")}
    />
  );
}
