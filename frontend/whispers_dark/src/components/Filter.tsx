import { IFilter } from "../types/Menu";
import '../styles/CategoryStructure.css';

interface FilterProps {
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
}

export const Filter: React.FC<FilterProps> = ({selectedFilter, setSelectedFilter}) =>{
  const filters: IFilter[] = [
    { label: 'seleccionar', value: '' },
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

/*
import { IFilter } from "../types/Menu";
import '../styles/CategoryStructure.css';

interface FilterProps {
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
}

export const Filter: React.FC<FilterProps> = ({selectedFilter, setSelectedFilter}) =>{
  const filters: IFilter[] = [
    { label: 'seleccionar', value: '' },
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
        <select value={selectedFilter} onChange={handleFilterChange}>
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


*/