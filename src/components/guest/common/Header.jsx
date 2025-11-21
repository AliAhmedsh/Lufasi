import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Logo from '../../../assets/Logo.png';

const TransparentAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  paddingTop: theme.spacing(2),
}));

export default function Header() {
  return (
    <Box component="header" sx={{ position: 'relative', zIndex: 2 }}>
      <TransparentAppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box
              component="img"
              src={Logo}
              alt="Lufasi Lodges logo"
              sx={{ height: { xs: 32, md: 40 } }}
            />
            <Button
              variant="outlined"
              sx={{
                borderRadius: 999,
                borderColor: 'rgba(255, 255, 255, 0.8)',
                color: '#FFFFFF',
                px: 3,
                py: 0.75,
                fontWeight: 500,
                '&:hover': {
                  borderColor: '#FFFFFF',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                },
              }}
            >
              Contact us
            </Button>
          </Toolbar>
        </Container>
      </TransparentAppBar>
    </Box>
  );
}
