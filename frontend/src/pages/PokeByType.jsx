
import { useState, useEffect } from "react";
import Sidebar from "./multifilter";
import CardSection from '../components/CardSection';
import PokemonCard from '../components/PokemonCard';

export default function PokeByType() {
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(`http://localhost:3000/pokemon?type=${selectedType}`);
        if (response.ok) {
          const data = await response.json();
          setFilteredData(data);
        }
      } catch (error) {
        console.error("Error fetching filtered data:", error);
      }

      setLoading(false);
    };

    fetchData();
  }, [selectedType]);
  console.log(selectedType)

  const handleFilterByType = (type) => {
    setSelectedType(type);
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/4">
          <Sidebar onFilterByType={handleFilterByType} />
        </div>
        <div className="w-3/4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              {filteredData.length > 0 ? (
                <CardSection
                  data={filteredData}
                  component={PokemonCard}
                />
              ) : (
                <p>No data to display. Please select a type.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
