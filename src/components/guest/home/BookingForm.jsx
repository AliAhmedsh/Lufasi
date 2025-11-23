import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function BookingForm() {
  const theme = useTheme();
  const teal = theme.palette.booking?.teal || theme.palette.secondary.main;
  const tealLight = theme.palette.booking?.tealLight || teal;
  const labelColor = theme.palette.primary.main;
  const placeholderColor = theme.palette.text.disabled || theme.palette.text.secondary;
  const buttonStart = theme.palette.booking?.buttonStart || '#D6B56B';
  const buttonEnd = theme.palette.booking?.buttonEnd || '#B88A43';

  const fieldSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '2px',
      backgroundColor: theme.palette.common.white,
      '& fieldset': {
        borderColor: teal,
        borderWidth: '1.5px',
      },
      '&:hover fieldset': {
        borderColor: tealLight,
      },
      '&.Mui-focused fieldset': {
        borderColor: tealLight,
        boxShadow: `0 0 0 1px ${theme.palette.booking ? 'rgba(0, 194, 163, 0.35)' : 'rgba(0, 0, 0, 0.15)'}`,
      },
    },
    '& .MuiInputBase-input': {
      fontSize: 14,
      '::placeholder': {
        color: placeholderColor,
        opacity: 1,
      },
    },
    '& .MuiSelect-icon': {
      color: teal,
    },
    '& .MuiSelect-select': {
      color: placeholderColor,
    },
  };

  return (
    <Box
      sx={{
        bgcolor: theme.palette.common.white,
        borderRadius: '24px',
        p: { xs: 3, md: 4 },
        boxShadow: '0 18px 45px rgba(0, 0, 0, 0.25)',
        maxWidth: 420,
        width: '100%',
        color: theme.palette.text.primary,
      }}
    >
      {/* Check-in row */}
      <Box sx={{ mb: 2.5 }}>
        <Typography
          variant="caption"
          sx={{ fontWeight: 600, color: labelColor, mb: 0.5 }}
        >
          Check-in
        </Typography>
        <TextField
          fullWidth
          placeholder="dd/mm/yyyy"
          size="small"
          margin="dense"
          variant="outlined"
          sx={fieldSx}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CalendarTodayIcon sx={{ fontSize: 18, color: teal }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Check-out row */}
      <Box sx={{ mb: 2.5 }}>
        <Typography
          variant="caption"
          sx={{ fontWeight: 600, color: labelColor, mb: 0.5 }}
        >
          Check-out
        </Typography>
        <TextField
          fullWidth
          placeholder="dd/mm/yyyy"
          size="small"
          margin="dense"
          variant="outlined"
          sx={fieldSx}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CalendarTodayIcon sx={{ fontSize: 18, color: teal }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Guests + button row */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2.5,
          alignItems: { sm: 'flex-end' },
        }}
      >
        <Box flex={1}>
          <Typography
            variant="caption"
            sx={{ fontWeight: 600, color: labelColor, mb: 0.5 }}
          >
            Guests
          </Typography>
          <TextField
            select
            fullWidth
            defaultValue="2 Guests"
            size="small"
            margin="dense"
            variant="outlined"
            sx={fieldSx}
          >
            <MenuItem value="1 Guest">1 Guest</MenuItem>
            <MenuItem value="2 Guests">2 Guests</MenuItem>
            <MenuItem value="3 Guests">3 Guests</MenuItem>
            <MenuItem value="4 Guests">4 Guests</MenuItem>
          </TextField>
        </Box>

        <Box
          sx={{
            width: { xs: '100%', sm: 'auto' },
            minWidth: { sm: 180 },
          }}
        >
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: { xs: 2, sm: 1 },
              py: 1.25,
              textTransform: 'none',
              fontWeight: 600,
              background: `linear-gradient(90deg, ${buttonStart} 0%, ${buttonEnd} 100%)`,
              color: '#FFFFFF',
              boxShadow: 'none',
              '&:hover': {
                background: `linear-gradient(90deg, ${buttonStart} 0%, ${buttonEnd} 100%)`,
                filter: 'brightness(0.97)',
              },
            }}
          >
            Check Availability
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
