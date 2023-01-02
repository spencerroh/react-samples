import { cloneDeep, merge } from "lodash";
import { atom, selector } from "recoil";
import { makeLoggingEffect } from "../libs/logging/effects";

const PRODUCT_ID = atom({
  key: 'gum.product_id',
  default: 'V+27',
  effects: [
    makeLoggingEffect('PRODUCT_ID', false),
  ]
});

const DEFAULT_PRODUCT_STATE = {
  status: "working",
  light: true,
  error: "none", 
  upBeep: undefined 
};

const PRODUCT_STATE_CORE = atom({
  key: 'gum.product.core',
  default: DEFAULT_PRODUCT_STATE,
  effects: [
    makeLoggingEffect('PRODUCT_STATE', true)
  ]
});

const PRODUCT_STATE = selector({
  key: 'gum.product.state',
  get: ({get}) => get(PRODUCT_STATE_CORE),
  set: ({get, set, reset}, newValue) => {
    if (newValue == null) {
      reset(PRODUCT_STATE_CORE);
    }
    else {
      const merged = cloneDeep(get(PRODUCT_STATE_CORE));
      merge(merged, newValue);
      set(PRODUCT_STATE_CORE, merged);
    }
  }
});

const STATUS = selector({
  key: 'gum.product.state.status',
  get: ({get}) => get(PRODUCT_STATE).status
});

const LIGHT = selector({
  key: 'gum.product.state.light',
  get: ({get}) => get(PRODUCT_STATE).light
});

const ERROR = selector({
  key: 'gum.product.state.error',
  get: ({get}) => get(PRODUCT_STATE).error
});

const UPBEEP = selector({
  key: 'gum.product.state.upbeep',
  get: ({get}) => get(PRODUCT_STATE).upBeep
});

export const $state = {
  PRODUCT_ID,
  PRODUCT_STATE,
  PRODUCT: {
    STATUS,
    LIGHT,
    ERROR,
    UPBEEP
  }
};