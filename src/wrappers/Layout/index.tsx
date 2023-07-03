import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Grid } from '@mui/material';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const AppLayout = (props: Props) => {
  const { children } = props;
  return (
    <Grid container direction={"column"} minHeight={"100vh"} justifyContent={"space-between"}>
      <Grid item>
        <Navbar />
      </Grid>
      <Grid item>{children}</Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default AppLayout;
