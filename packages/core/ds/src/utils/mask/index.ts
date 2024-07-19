export type Masks = "currency";

const mapMask: {
  [key: string]: (value: string) => string;
} = {
  currency: value => {
    let cleaned = value.replace(/\D/g, "");

    const num = Number(cleaned) / 100;
    const result = num.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return result;
  },
};

export const maskValue = (value: string, mask?: Masks): string => {
  if (!mask) return value;

  const maskDef = mapMask[mask];
  if (maskDef && typeof maskDef === "function") {
    return maskDef?.(value);
  } else {
    return value;
  }
};
