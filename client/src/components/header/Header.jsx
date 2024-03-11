import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid } from '@mui/material';

const Header = ({ name, degree, gpa, inProgress, applied }) => {
  return (
  <>
  <div className='my-5 mx-4 text-left'>
    <Typography gutterBottom variant="h6" component="div" >
              Hello, {name} 👋
    </Typography>
    <Typography gutterBottom variant="h7" component="div" color="text.secondary">
              Track your campus placements with us
    </Typography>
    </div>
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar alt={name} src="/path-to-profile-image.jpg" />
          </Grid>
          <Grid item xs>
            
            <Typography variant="body2" color="text.secondary">
              {degree}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              GPA: {gpa}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              In progress: {inProgress} applications
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Applied: {applied} organisations
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </>
  );
};

export default Header;
