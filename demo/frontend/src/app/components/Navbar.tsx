'use client';

import Link from 'next/link';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Brain } from 'lucide-react';
import NavbarButtons from './Utils/NavbarButtons';

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: '#5F27CD', boxShadow: 3 }}
      className="w-full mt-0 p-4"
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box
          display="flex"
          alignItems="center"
          component={Link}
          href="/"
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 1 }}>
            <Brain size={32} />
          </IconButton>
          <Typography variant="h5" fontWeight="bold">
            Perspective AI
          </Typography>
        </Box>
        <Box display="flex" gap={2}>
          <NavbarButtons text="Home" href="/" />
          <NavbarButtons text="GitHub" href="https://github.com/AOSSIE-Org/Perspective-AI" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;