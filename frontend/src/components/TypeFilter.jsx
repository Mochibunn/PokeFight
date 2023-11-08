/* eslint-disable react/prop-types */
export default function TypeFilter({ selectedTypes, setSelectedTypes, availableTypes, showAll }) {
   
    const toggleType = (type) => {
      if (showAll) {
        setSelectedTypes(availableTypes);
        console.log('Available Types:', availableTypes);
        setSelectedTypes((types) => types.filter((t) => t !== type));
      } else {
        if (selectedTypes.includes(type)) {
          setSelectedTypes(selectedTypes.filter((t) => t !== type));
        } else {
          setSelectedTypes([...selectedTypes, type]);
        }
      }
    }
  
    return (
      <div>
        {availableTypes.map((type) => (
          <label key={type}>
            <input
              type="checkbox"
              checked={showAll ? true : selectedTypes.includes(type)}
              onChange={() => toggleType(type)}
            />
            {type}
          </label>
        ))}
      </div>
    );
  }
  