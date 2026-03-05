"use client";

import { Switch } from "@headlessui/react";

interface ToggleSwitchProps {
  label: string;
  enabled: boolean;
  setEnabled: (value: boolean) => void;
}

function classNames(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export default function ToggleSwitch({
  label,
  enabled,
  setEnabled,
}: ToggleSwitchProps) {
  return (
    <div className="">
      <label className="block font-medium text-white whitespace-nowrap">
        {label}
      </label>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? "glass-button" : "glass-card",
          "relative mt-0.5 inline-flex h-8 w-16 shrink-0 cursor-pointer rounded-full border-2 border-transparent",
          "transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
          "items-center"
        )}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? "translate-x-8" : "translate-x-0",
            "pointer-events-none m-1 h-6 w-6",
            "transform rounded-full bg-white shadow ring-0",
            "transition duration-200 ease-in-out"
          )}
        />
      </Switch>
    </div>
  );
}
