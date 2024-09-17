export type Masks = "currency";

const mapMask: {
  [key: string]: (value: string) => string;
} = {
  currency: value => {
    let num: number = 0;
    let hasR$ = false;
    if (typeof value === "string") {
      if (value.includes("R$")) {
        hasR$ = true;
        value = value
          .replace(/R\$|\.| /g, "")
          .replace(",", ".")
          .trim();
      }

      const decimalLenght = value.split(".")[1]?.length;

      num = Number(value);

      if (decimalLenght > 2) {
        num = num * 10;
      } else if (decimalLenght < 2 && hasR$) {
        num = num / 10;
      }
    } else {
      num = Number(value);
    }

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
