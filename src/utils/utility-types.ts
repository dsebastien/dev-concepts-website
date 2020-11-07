/**
 * Property of the given type
 * @param name the name of the property
 */
export const propertyOf = <SomeType>(name: keyof SomeType) => name;

/**
 * Properties of the given type
 */
export const propertiesOf = <SomeType>() => <T extends keyof SomeType>(name: T): T => name;
