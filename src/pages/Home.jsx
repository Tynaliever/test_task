import { Grid } from '@mantine/core';
import React from 'react';
import ProductsTable from '../components/ProductsTable';

const Home = () => {

    return (
        <Grid sx={{
            width: '100%',
            height: '100%',
        }}>
            <ProductsTable />
        </Grid>
    );
    }

export default Home;