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
          <Box
            sx={{
              borderRadius: 2,
              border: '1px solid rgba(255, 255, 255, 0.45)',
              backgroundColor: 'rgba(255, 255, 255, 0.16)',
              backdropFilter: 'blur(2px)',
              px: { xs: 1, md: 2 },
              py: 1,
            }}
          >
            <Toolbar
              disableGutters
              sx={{ justifyContent: 'space-between', minHeight: 'auto' }}
            >
              <Box
                component="img"
                src={Logo}
                alt="Lufasi Lodges logo"
                sx={{ height: { xs: 40, md: 56 } }}
              />
              <Button
                variant="outlined"
                sx={{
                  borderRadius: 999,
                  borderColor: 'rgba(255, 255, 255, 0.9)',
                  color: '#FFFFFF',
                  px: 3,
                  py: 0.75,
                  fontWeight: 500,
                  '&:hover': {
                    borderColor: '#FFFFFF',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  },
                }}
              >
                Contact us
              </Button>
            </Toolbar>
          </Box>
        </Container>
      </TransparentAppBar>
    </Box>
  );
}
