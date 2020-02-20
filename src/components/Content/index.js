import React from "react";
import './index.scss';

import Box from '@material-ui/core/Box';

function Content(props) {

    function dateParse(date) {
        let today = new Date(date),
            day = today.getDate(),
            month = today.getMonth() + 1,
            year = today.getFullYear();

        if (day < 10) day = '0' + day;
        if (month < 10) month = '0' + month;

        return `${day}/${month}/${year}`;
    }

    if (!Object.keys(props.user).length) {
        return (
            <Box display="flex" alignItems="center" justifyContent="center" width={1} p={3}>
                <Box fontSize="h4.fontSize">Choose your destiny!</Box>
            </Box>
        )
    }

    return (
        <Box width={1} p={3}>
            <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" textAlign="center" mb={3}>User details</Box>

            <Box border={1} borderColor="primary.main" boxShadow={3} py={2} px={3} position="relative" maxWidth="75%" mx="auto">
                <Box position="absolute" top="15px" right="15px" maxWidth="128px" maxHeight="128px" boxShadow={3}>
                    <img width="100%" src={props.user.picture.large} alt=""/>
                </Box>
                <Box display="flex" mb={2}>
                    <Box color="primary.main" fontWeight="fontWeightBold" fontStyle="italic" minWidth="100px">Name:</Box>
                    <Box color="text.secondary" className="card__desc">
                        {props.user.name.first} {props.user.name.last}
                    </Box>
                </Box>
                <Box display="flex" mb={2}>
                    <Box color="primary.main" fontWeight="fontWeightBold" fontStyle="italic" minWidth="100px">Gender:</Box>
                    <Box color="text.secondary" className="card__desc">{props.user.gender}</Box>
                </Box>
                <Box display="flex" mb={2}>
                    <Box color="primary.main" fontWeight="fontWeightBold" fontStyle="italic" minWidth="100px">Age:</Box>
                    <Box color="text.secondary" className="card__desc">{props.user.dob.age} years old</Box>
                </Box>
                <Box display="flex" mb={2}>
                    <Box color="primary.main" fontWeight="fontWeightBold" fontStyle="italic" minWidth="100px">Birthday:</Box>
                    <Box color="text.secondary" className="card__desc">{dateParse(props.user.dob.date)}</Box>
                </Box>
                <Box display="flex" mb={2}>
                    <Box color="primary.main" fontWeight="fontWeightBold" fontStyle="italic" minWidth="100px">Phone:</Box>
                    <Box color="text.secondary" className="card__desc">{props.user.phone}</Box>
                </Box>
                <Box display="flex" mb={2}>
                    <Box color="primary.main" fontWeight="fontWeightBold" fontStyle="italic" minWidth="100px">Address:</Box>
                    <Box color="text.secondary" className="card__desc">
                        {props.user.location.country},&nbsp;
                        {props.user.location.city},&nbsp;
                        {props.user.location.street.name},&nbsp;
                        {props.user.location.street.number}
                    </Box>
                </Box>
                <Box display="flex">
                    <Box color="primary.main" fontWeight="fontWeightBold" fontStyle="italic" minWidth="100px">Email:</Box>
                    <Box color="text.secondary" className="card__desc">{props.user.email}</Box>
                </Box>
            </Box>

        </Box>
    )
}

export default Content;
