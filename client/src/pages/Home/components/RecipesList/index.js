import React from "react";
import {RecipeCard} from '../RecipeCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const RecipesList = ({recipes}) => {
  return (
    <Box sx={{width: '100%', mt: 4 }}>
      <Grid container spacing={4} >
        {recipes.map((_recipe, index) => (
          <Grid item xs={3}>
            <RecipeCard key={index} recipe={_recipe} />
          </Grid>
        ))}
      </Grid>  
    </Box>
  );
}

RecipesList.defaultProps = {
  recipes: []
}

export { RecipesList };
