import {useState} from "react";

export default function useBoolean(valor: boolean) {
  const [active, setActive] = useState(valor ?? false);

  function toggleActive() {
    setActive(!active);
  }

  function activeTrue() {
    setActive(true);
  }

  function activeFalse() {
    setActive(false);
  }
  const r: [boolean, () => void, () => void, () => void] = [
    active,
    toggleActive,
    activeTrue,
    activeFalse,
  ];

  return r;
}
