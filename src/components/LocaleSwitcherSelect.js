"use client";

import { useState, useEffect, useTransition } from "react";
import { setUserLocale } from "@/i18nUtils";

export default function LocaleSwitcherSelect({ defaultValue, items, label }) {
  const [isPending, startTransition] = useTransition();
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useEffect(() => {
    setUserLocale(defaultValue);
    // console.log("LocaleSwitcherSelect: useEffect", defaultValue);
  }, [defaultValue]);

  function onChange(event) {
    const locale = event.target.value;
    setSelectedValue(locale);
    startTransition(() => {
      setUserLocale(locale);
      // console.log("LocaleSwitcherSelect: onChange", locale);
    });
  }

  return (
    <div>
      <label>
        {/* {label} */}
        <select
          id="locale-switcher"
          value={selectedValue}
          onChange={onChange}
          style={{
            // borderRadius: "15px",
            padding: "12px",
            fontSize: "16px",
            lineHeight: "24px",
            textAlign: "start",
            letterSpacing: "normal",
            backgroundColor: "transparent",
            borderColor: "transparent",
            // color: "white",
          }}
        >
          {items.map((item) => (
            <option
              key={item.value}
              value={item.value}
              style={{
                backgroundColor: "transparent",
                color: "black",
              }}
            >
              {item.value === defaultValue && "✔ "}
              {item.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
