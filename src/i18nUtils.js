"use server";

import { cookies, headers } from "next/headers";
import path from "path";
import fs from "fs/promises";

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = "NEXT_LOCALE";
const DEFAULT_LOCALE = "en";

// Locale mapping
const localeMapping = {
  "zh-TW": "tw",
  // "zh-CN": "cn",
  // Add more mappings here if needed
};

// 讀取支持的語言
export async function getSupportedLocalesList() {
  const localesDir = path.join(process.cwd(), "locale");
  try {
    const files = await fs.readdir(localesDir);
    return files
      .filter((file) => file.endsWith(".json"))
      .map((file) => file.replace(".json", ""));
  } catch (error) {
    console.error(`Failed to read locale directory at ${localesDir}:`, error);
    throw error;
  }
}

// 取得用戶偏好語言
export async function getUserLocale() {
  let locale;

  // 1: Fetch locale from cookies
  const getClientCookie = cookies().get(COOKIE_NAME)?.value || null;
  // console.log(
  //   `[src/i18nUtils.js] getUserLocale => Client cookie: ${getClientCookie}`
  // );

  if (getClientCookie) {
    locale = getClientCookie;
  } else {
    // 2: Fetch locale from headers (Accept-Language)
    const acceptLanguageHeader = headers().get("accept-language");
    const getClientHeader = acceptLanguageHeader
      ? acceptLanguageHeader.split(",")[0]
      : null;
    // console.log(
    //   `[src/i18nUtils.js] getUserLocale => Client header: ${getClientHeader}`
    // );

    locale = getClientHeader || DEFAULT_LOCALE;
  }

  // 3: Convert to a locale mapping
  locale = localeMapping[locale] || locale;
  const getlocalelist = await getSupportedLocalesList();
  locale = getlocalelist.includes(locale) ? locale : DEFAULT_LOCALE;

  // console.log(
  //   `[src/i18nUtils.js] getUserLocale => Final locale to display: ${locale}`
  // );
  return locale;
}

export async function setUserLocale(locale) {
  // console.log(
  //   `[src/i18nUtils.js] setUserLocale => Client cookie: ${COOKIE_NAME} of ${locale}`
  // );
  cookies().set(COOKIE_NAME, locale);
}
