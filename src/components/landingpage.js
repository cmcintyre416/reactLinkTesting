import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            //Grid created here
            // double brackets for inline style in JSX
            <div style={{width: '95%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}></Cell>
                </Grid>
            </div>
        );
    }
}


export default Landing;