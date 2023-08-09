import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Box } from '@mui/material';
import { useState } from 'react';
import { mt } from 'date-fns/locale';
import { Row } from '@themesberg/react-bootstrap';

const AddStationCard = ({ data }) => {
    return (
        <Box sx={{
            display: 'flex',
            mt: "2rem",
            justifyContent: 'space-around',
        }}>
            <MDBCard className='MDBCard'>
                <MDBCardBody>
                    <Box sx={{
                        mt: "-1rem",
                        ml: "2rem",
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        p: 2,
                        backgroundPosition: 'center'
                    }}>
                        {/* "_id": "64ac909c7edd1518c353336e",
                        "stationName": "Tesla",
                        "stationDescription": "All new tesla stations for your Ev Car",
                        "ownerId": "64a1d89eb6797c14fcbf68b9",
                        "isDisabled": true,
                        "isVerified": true,
                        "latitude": "42.31772",
                        "longitude": "-83.04309",
                        "updatedAt": "2023-07-26T20:31:39.917Z" */}
                        <MDBCardTitle className='MDBCardTitle'>id: {data._id}</MDBCardTitle>
                        <MDBCardText className='MDBCardText'>Station Name: {data.stationName}</MDBCardText>
                        <MDBCardText className='MDBCardText'>Station Description: {data.stationDescription}</MDBCardText>
                        <MDBCardText className='MDBCardText'>Owner id: {data.ownerId}</MDBCardText>
                        <MDBCardText className='MDBCardText'>latitude: {data.latitude}</MDBCardText>
                        <MDBCardText className='MDBCardText'>longitude: {data.longitude}</MDBCardText>

                        <MDBCardText className='MDBCardText'>Disabled: {data.isDisabled}</MDBCardText>
                        <MDBCardText className='MDBCardText'>Verified: {data.isVerified}</MDBCardText>
                    </Box>
                    <Box sx={{
                        ml: "1rem",
                        // display: 'flex',
                        // flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        p: 2,
                    }} >
                        <MDBBtn className='MDBBtn' href='#'>Approve</MDBBtn>
                        <MDBBtn className='MDBBtn' href='#'>Decline</MDBBtn>
                    </Box>
                </MDBCardBody >
            </MDBCard >

        </Box >
    );
};


export default function App() {
    const [data, setData] = useState([{
        "_id": "64ac909c7edd1518c353336e",
        "stationName": "Tesla",
        "stationDescription": "All new tesla stations for your Ev Car",
        "ownerId": "64a1d89eb6797c14fcbf68b9",
        "isDisabled": true,
        "isVerified": true,
        "latitude": "42.31772",
        "longitude": "-83.04309"
    },
    {
        "_id": "64b872063b256fab8b7be7cf",
        "stationName": "Electro2",
        "stationDescription": "All new stations for your Ev Cars",
        "ownerId": "64a1d89eb6797c14fcbf68b9",
        "isDisabled": false,
        "isVerified": false,
        "latitude": "42.31772",
        "longitude": "-83.04309",
    },
    {
        "_id": "64b880033b256fab8b7be7d4",
        "stationName": "Electro2",
        "stationDescription": "All new stations for your Ev Cars",
        "ownerId": "64a1d89eb6797c14fcbf68b9",
        "isDisabled": false,
        "isVerified": false,
        "latitude": "42.31772",
        "longitude": "-83.04309",
    },
    {
        "_id": "64ac909c7edd1518c353336e",
        "stationName": "Tesla",
        "stationDescription": "All new tesla stations for your Ev Car",
        "ownerId": "64a1d89eb6797c14fcbf68b9",
        "isDisabled": true,
        "isVerified": true,
        "latitude": "42.31772",
        "longitude": "-83.04309"
    }

    ]);
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 5,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',

        }}>
            {data.map((item, index) => (
                <AddStationCard key={index} data={item} />
            ))}
        </Box>

    );
}