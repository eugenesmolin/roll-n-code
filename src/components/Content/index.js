import React, {Component} from "react";
import './index.scss';

import Grid from '@material-ui/core/Grid';

function Content(props) {

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         user: {}
    //     };
    //
    //     console.log('content user: ', props.user);
    // }
    //
    // render() {

    console.log(props.user)

        return (

            <div className="content">
                <h2 className="text-center">User details</h2>

                <Grid container spacing={4}>
                    <Grid item xs={2}>Address</Grid>
                    <Grid item xs={6}>gsfrdgsfgfdgsfgsg</Grid>
                </Grid>

                <Grid container spacing={4}>
                    <Grid item xs={2}>Email</Grid>
                    <Grid item xs={6}>gsfrdgsfgfdgsfgsg</Grid>
                </Grid>

                <Grid container spacing={4}>
                    <Grid item xs={2}>Gender</Grid>
                    <Grid item xs={6}>gsfrdgsfgfdgsfgsg</Grid>
                </Grid>

                <Grid container spacing={4}>
                    <Grid item xs={2}>Birthday</Grid>
                    <Grid item xs={6}>gsfrdgsfgfdgsfgsg</Grid>
                </Grid>

                <Grid container spacing={4}>
                    <Grid item xs={2}>Phone</Grid>
                    <Grid item xs={6}>gsfrdgsfgfdgsfgsg</Grid>
                </Grid>

            </div>

        )
    // }
}

export default Content;
