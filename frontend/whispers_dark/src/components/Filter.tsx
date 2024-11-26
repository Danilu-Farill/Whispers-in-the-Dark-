import { useState } from "react";
import { IFilter } from "../types/Menu";
import '../styles/CategoryStructure.css';

export const Filter = () =>{
  const [selectedFilter, setSelectedFilter] = useState("");
  const filters: IFilter[] = [
    { label: 'seleccionar', value: '' },
    { label: 'titulo', value: 'title' },
    { label: 'categoria', value: 'category' },
    { label: 'Zombies', value: 'zombie' },
    { label: 'Vampiros', value: 'vampire' },
    { label: 'Hombres lobo', value: 'wolfMan' },
  ];
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(e.target.value);
  };
  return(
    <>
      <div>
        <label htmlFor="filtered" className='iconFilterText'> Filtrar </label>
        <select value={selectedFilter} onChange={(event) => handleFilterChange(event)}>
          {filters.map((filt, indice) => (
            <option key={indice} value={filt.value}>
              {filt.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};