import react, { useState, useEffect, useRef, useContext, useId } from "react";
import Image from "next/image";
import Link from "next/link";

var panelExchangeId: string;

function PanelExchange({ isOpen }: MyProps) {
  panelExchangeId = useId();

  return (
    <div
      id={panelExchangeId}
      className="border-r-2 border-gray-200 text-gray-500 rounded-tr w-0"
      style={{ transition: "width 0.5s" }}
    ></div>
  );
}

export function toggleExchange(toggle?: boolean) {
  var tag = document.getElementById(panelExchangeId);
  if (!tag) return;

  var isOpen = true;
  if (tag.classList.contains("w-0")) isOpen = false;
  if (toggle === false || isOpen) {
    tag.classList.add("w-0");
    tag.classList.remove("w-80");
  } else {
    tag.classList.add("w-80");
    tag.classList.remove("w-0");
  }
}

export default PanelExchange;
