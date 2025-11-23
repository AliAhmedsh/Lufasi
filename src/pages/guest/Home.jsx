import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Header from '../../components/guest/common/Header';
import BookingForm from '../../components/guest/home/BookingForm';
import Footer from '../../components/guest/common/Footer';
import HeroImage from '../../assets/Home.jpg';

export default function Home() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Hero section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '80vh', md: '75vh' },
          color: '#FFFFFF',
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.75) 100%)',
          }}
        />

        <Header />

        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 1,
            pt: { xs: 8, md: 10 },
            pb: { xs: 6, md: 10 },
          }}
        >
          <Grid
            container
            spacing={{ xs: 6, md: 8 }}
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Stack spacing={3} maxWidth={480}>
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2.4rem', md: '3.2rem' },
                  }}
                >
                  Escape into Nature
                </Typography>
                <Typography variant="body1" sx={{ fontSize: { xs: 15, md: 16 } }}>
                  Immerse yourself in the rhythm of nature, surrounded by refined beauty
                  and effortless elegance. Welcome to Lufasi Lodges.
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: '#C59B5F',
                      '&:hover': { bgcolor: '#b78b4e' },
                      borderRadius: 2,
                      px: 3.5,
                      py: 1.1,
                      textTransform: 'none',
                      fontWeight: 600,
                    }}
                  >
                    Book your stay
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: 2,
                      borderColor: 'rgba(255,255,255,0.9)',
                      color: '#FFFFFF',
                      px: 3.5,
                      py: 1.1,
                      textTransform: 'none',
                      fontWeight: 500,
                      '&:hover': {
                        borderColor: '#FFFFFF',
                        backgroundColor: 'rgba(255,255,255,0.08)',
                      },
                    }}
                  >
                    Explore our Lodges
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={5} ml={{ md: 'auto' }}>
              <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-end' }}>
                <BookingForm />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer section */}
      <Footer />
    </Box>
  );
}
