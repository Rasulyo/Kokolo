import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>    
        Enter data
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Your name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="LastName"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="count"
            name="count"
            label="Count People"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="PhoneNumber"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
    
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        
        {/* <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="Region" fullWidth />
        </Grid> */}
        
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this data in Payment"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}