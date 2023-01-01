import { atom } from "recoil";
import { makeLoggingEffect } from "../libs/logging/effects";


const PRODUCT_ID = atom({
  key: 'gum.product_id',
  default: 'V+27',
  effects: [
    makeLoggingEffect('PRODUCT_ID', false),
  ]
});

export const $state = {
  PRODUCT_ID
};