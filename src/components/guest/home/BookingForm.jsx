import { Box, Button, Grid, MenuItem, TextField, Typography } from '@mui/material';

export default function BookingForm() {
  return (
    <Box
      sx={{
        bgcolor: '#FFFFFF',
        borderRadius: 3,
        p: { xs: 3, md: 4 },
        boxShadow: '0 18px 45px rgba(0, 0, 0, 0.25)',
        maxWidth: 420,
        width: '100%',
      }}
    >
      <Grid container spacing={2.5}>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption" sx={{ fontWeight: 500 }}>
            Check-in
          </Typography>
          <TextField
            fullWidth
            placeholder="dd/mm/yyyy"
            size="small"
            margin="dense"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption" sx={{ fontWeight: 500 }}>
            Check-out
          </Typography>
          <TextField
            fullWidth
            placeholder="dd/mm/yyyy"
            size="small"
            margin="dense"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" sx={{ fontWeight: 500 }}>
            Guests
          </Typography>
          <TextField
            select
            fullWidth
            defaultValue="2 Guests"
            size="small"
            margin="dense"
          >
            <MenuItem value="1 Guest">1 Guest</MenuItem>
            <MenuItem value="2 Guests">2 Guests</MenuItem>
            <MenuItem value="3 Guests">3 Guests</MenuItem>
            <MenuItem value="4 Guests">4 Guests</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 1,
              py: 1.25,
              textTransform: 'none',
              fontWeight: 600,
              bgcolor: '#C59B5F',
              '&:hover': { bgcolor: '#b78b4e' },
            }}
          >
            Check Availability
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
