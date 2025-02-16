import { useState } from 'react';
import { Chip, MenuItem } from '@mui/material';
import { useCart } from '../../../hooks/cart';
import * as S from './styles';

interface FilterChipsProps {
  itemsPerPage: number;
  onItemsPerPageChange: (itemsPerPage: number) => void;
}

const FilterChips = ({
  itemsPerPage,
  onItemsPerPageChange
}: FilterChipsProps) => {
  const { handleFilterParams } = useCart();
  const [selectedChip, setSelectedChip] = useState<string | null>(null);

  const handleChipClick = (category: string) => {
    const newCategory = selectedChip === category ? '' : category;
    setSelectedChip(newCategory);
    handleFilterParams({ filterBy: 'category', value: newCategory });
  };

  return (
    <S.Container>
      <S.LeftSection>
        <Chip
          label="Tênis"
          clickable
          color={selectedChip === 'Tênis' ? 'primary' : 'default'}
          onClick={() => handleChipClick('Tênis')}
        />
        <Chip
          label="Camisetas"
          clickable
          color={selectedChip === 'Camisetas' ? 'primary' : 'default'}
          onClick={() => handleChipClick('Camisetas')}
        />
        <Chip
          label="Calças"
          clickable
          color={selectedChip === 'Calças' ? 'primary' : 'default'}
          onClick={() => handleChipClick('Calças')}
        />
      </S.LeftSection>
      <S.RightSection>
        <S.StyledTypography variant="body2">
          Itens por página:
        </S.StyledTypography>
        <S.StyledSelect
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </S.StyledSelect>
      </S.RightSection>
    </S.Container>
  );
};

export default FilterChips;
