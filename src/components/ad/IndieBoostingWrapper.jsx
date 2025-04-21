import React from 'react';
import { IndieBoosting } from "@indieboosting/react";
import "@indieboosting/react/indieboosting.css";

export default function IndieBoostingWrapper({ id }) {
  return <IndieBoosting id={id} />;
}