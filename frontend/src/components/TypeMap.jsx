import { Chip } from "@nextui-org/react";

/**
 * Parses through an array of strings and returns it as a row of chip items.
 *
 * @param `array` Must be an array of strings.
 * @returns `<Chip />`
 * @example <Parse types={pokemon.types} />;
 * @see https://github.com/Mochibunn
 */
const Parse = ({ array }) => {
  if (!array || !array.length) return;
  const result = array.map((item) => {
    return (
      <Chip className="mr-2 my-1" iscompact="true" key={`${item}`} size="sm">
        {`${item}`}
      </Chip>
    );
  });
  return result;
};

export default Parse;