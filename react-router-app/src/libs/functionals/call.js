export function getOrCall(valueOrFunc) {
  if (typeof valueOrFunc === "function")
    return valueOrFunc();
  else
    return valueOrFunc;
}