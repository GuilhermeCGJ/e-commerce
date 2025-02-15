import { useState } from 'react';
import { Chip, Box } from '@mui/material';
import { useCart } from '../../../hooks/cart';

const FilterChips = () => {
  const { handleFilterParams } = useCart();
  const [selectedChip, setSelectedChip] = useState<string | null>(null);

  const handleChipClick = (category: string) => {
    const newCategory = selectedChip === category ? '' : category;
    setSelectedChip(newCategory);
    handleFilterParams({ filterBy: 'category', value: newCategory });
  };

  return (
    <Box sx={{ display: 'flex', gap: 1, marginBottom: 2 }}>
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
    </Box>
  );
};

export default FilterChips;
