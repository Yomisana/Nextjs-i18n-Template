"use client";

import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "@/components/client/LocaleSwitcher/LocaleSwitcherSelect";

export default function LocaleSwitcherClient({ supportedLocales, label }) {
  const locale = useLocale();
  const t = useTranslations("LocaleSwitcher");
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
