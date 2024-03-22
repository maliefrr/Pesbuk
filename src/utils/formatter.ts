export const checkProperty = (property: any) => {
    if (property instanceof File) {
<<<<<<< HEAD
      if (property.size !== 0) return true;
    }
  
    if (typeof property === "string") {
      if (property !== "") return true;
    }
  
    if (typeof property === "boolean") {
      return true;
    }
  
    if (typeof property === "number") {
      return true;
    }
  
    return false;
  };

  export const valueFormatData = (value: any) => {
    if (value instanceof File) {
      return value as Blob;
    }
  
    return String(value);
  };
=======
        if (property.size !== 0) return true;
    }

    if (typeof property === "string") {
        if (property !== "") return true;
    }

    if (typeof property === "boolean") {
        return true;
    }

    if (typeof property === "number") {
        return true;
    }

    return false;
};
  
export const valueFormatData = (value: any) => {
    return String(value);
};
>>>>>>> f8d874cb7f19685a2e76a2ac0364943016b4dcd5
