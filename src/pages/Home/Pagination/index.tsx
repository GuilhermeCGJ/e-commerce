import { Box, IconButton, Typography } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        mt: 2,
        pr: 2
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          size="small"
        >
          <FirstPageIcon fontSize="small" />
        </IconButton>
        <IconButton
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          size="small"
        >
          <ChevronLeftIcon fontSize="small" />
        </IconButton>
        <Typography variant="body2" sx={{ mx: 1 }}>
          {currentPage}
        </Typography>
        <IconButton
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          size="small"
        >
          <ChevronRightIcon fontSize="small" />
        </IconButton>
        <IconButton
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          size="small"
        >
          <LastPageIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Pagination;
