import React from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
// import { KEY } from '../.env'

// require("dotenv").config(); 

// const pg = require("pg");
// const KEY = new pg.Client(process.env.GOOGLE_MAPS_API_KEY);

// console.log(KEY);


export default function Maptest() {

    return (
        <APIProvider apiKey='AIzaSyC1w2rEklDouOkbNQxSg9EVFum0Bn5ouOQ'>
            <Map
                style={{ width: '80vw', height: '80vh' }}
                defaultCenter={{ lat: 22.54992, lng: 0 }}
                defaultZoom={3}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
            />
        </APIProvider>
    );
}