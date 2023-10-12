export const splitName =  (fullName: string) => {
  const splitted = fullName.split(' ');
  const firstName = splitted[0] as string;
  const lastName = splitted[splitted.length - 1] as string;
  return {
    firstName: firstName ?? '',
    lastName: (lastName && lastName !== firstName) ? lastName : '',
  };
};
