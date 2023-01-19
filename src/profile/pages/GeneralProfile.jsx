import React, { useContext, useEffect } from 'react'
import { Avatar, Box, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const GeneralProfile = () => {

    const { users, currentUser, setCurrentUser } = useContext(AuthContext);

    const dataColor = '#BCB9B9';
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser === null) {
            navigate('/auth/profiles');
        }
    }, [])

    return (
        <>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, maxWidth: 600 }}
            >
                <Toolbar />

                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Avatar alt={currentUser?.name} src={currentUser?.profilepicture} sx={{ minWidth: 250, minHeight: 250 }} />
                </Box>

                <br />

                <Typography variant="h5" fontFamily= 'Arial' noWrap component="div" align="center" color={dataColor}>
                    {currentUser?.name}
                </Typography>

                <br />

                <Box
                    display="flex"
                    alignItems="left"
                    justifyContent="left"
                >

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="right"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1, maxWidth: 150, ml: 8 }}
                    >

                        <Typography
                            sx={{ mr: 1 }}
                            fontFamily= 'Arial'
                            mr='1'
                            color={dataColor}
                            variant="h6"
                            noWrap
                            component="div">
                            UserName :
                        </Typography>

                    </Box>

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1, maxWidth: 300 }}
                    >

                        <Typography variant="h6" noWrap component="div" fontFamily= 'Arial'>
                            {currentUser?.username}
                        </Typography>

                    </Box>

                </Box>

                <Box
                    display="flex"
                    alignItems="left"
                    justifyContent="left"
                >

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="right"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1, maxWidth: 150, ml: 8 }}
                    >

                        <Typography
                            sx={{ mr: 1 }}
                            mr='1'
                            color={dataColor}
                            fontFamily= 'Arial'
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            e-mail :
                        </Typography>

                    </Box>

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1, maxWidth: 300 }}
                    >

                        <Typography variant="h6" noWrap component="div" fontFamily= 'Arial'>
                            {currentUser?.email}
                        </Typography>

                    </Box>

                </Box>

                <Box
                    display="flex"
                    alignItems="left"
                    justifyContent="left"
                >

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="right"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1, maxWidth: 150, ml: 8 }}
                    >

                        <Typography
                            sx={{ mr: 1 }}
                            fontFamily= 'Arial'
                            mr='1'
                            color={dataColor}
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            Phone :
                        </Typography>

                    </Box>

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1, maxWidth: 300 }}
                    >

                        <Typography variant="h6" noWrap component="div" fontFamily= 'Arial'>
                            {currentUser?.phone}
                        </Typography>

                    </Box>

                </Box>

                <Box
                    display="flex"
                    alignItems="left"
                    justifyContent="left"
                >

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="right"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1, maxWidth: 150, ml: 8 }}
                    >

                        <Typography
                            sx={{ mr: 1 }}
                            fontFamily= 'Arial'
                            mr='1'
                            color={dataColor}
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            WebSite :
                        </Typography>

                    </Box>

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1, maxWidth: 300 }}
                    >

                        <Typography variant="h6" noWrap component="div" fontFamily= 'Arial'>
                            {currentUser?.website}
                        </Typography>

                    </Box>

                </Box>

                <br />
                <hr />
                <br />

                <Typography variant="h5" noWrap component="div" align="center" color={dataColor} fontFamily= 'Arial'>
                    Company
                </Typography>

                <br />

                <Box
                    display="flex"
                    alignItems="left"
                    justifyContent="left"
                >

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="right"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1, maxWidth: 150, ml: 8 }}
                    >

                        <Typography
                            sx={{ mr: 1 }}
                            fontFamily= 'Arial'
                            mr='1'
                            color={dataColor}
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            Name :
                        </Typography>

                    </Box>

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1, maxWidth: 300 }}
                    >

                        <Typography variant="h6" noWrap component="div" fontFamily= 'Arial'>
                            {currentUser?.company.name}
                        </Typography>

                    </Box>

                </Box>

                <Box
                    display="flex"
                    alignItems="left"
                    justifyContent="left"
                >

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="right"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1, maxWidth: 150, ml: 8 }}
                    >

                        <Typography
                            sx={{ mr: 1 }}
                            fontFamily= 'Arial'
                            mr='1'
                            color={dataColor}
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            catchphrase :
                        </Typography>

                    </Box>

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1, maxWidth: 300 }}
                    >

                        <Typography variant="h6" noWrap component="div" fontFamily= 'Arial'>
                            {currentUser?.company.catchPhrase}
                        </Typography>

                    </Box>

                </Box>

                <Box
                    display="flex"
                    alignItems="left"
                    justifyContent="left"
                >

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="right"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1, maxWidth: 150, ml: 8 }}
                    >

                        <Typography
                            sx={{ mr: 1 }}
                            fontFamily= 'Arial'
                            mr='1'
                            color={dataColor}
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            bs :
                        </Typography>

                    </Box>

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1, maxWidth: 300 }}
                    >

                        <Typography variant="h6" noWrap component="div" fontFamily= 'Arial'>
                            {currentUser?.company.bs}
                        </Typography>

                    </Box>

                </Box>

            </Box>
            <div>
                <hr
                    style={{
                        border: 'none',
                        borderLeft: '1px solid hsla(200, 10%, 50%,100)',
                        height: 1000,
                        width: 1,
                        m: 0
                    }}
                />
            </div>

            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, maxWidth: 600, ml: 10 }}
            >
                <Toolbar />

                <br />

                <Typography variant="h5" noWrap component="div" align="left" color={dataColor} fontFamily= 'Arial'>
                    Address :
                </Typography>

                <Box
                    display="flex"
                    alignItems="left"
                    justifyContent="left"
                >

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="right"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1, maxWidth: 150, ml: 8 }}
                    >

                        <Typography
                            sx={{ mr: 1 }}
                            fontFamily= 'Arial'
                            mr='1'
                            color={dataColor}
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            Street :
                        </Typography>

                    </Box>

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1, maxWidth: 300 }}
                    >

                        <Typography variant="h6" noWrap component="div" fontFamily= 'Arial'>
                            {currentUser?.address.street}
                        </Typography>

                    </Box>

                </Box>

                <Box
                    display="flex"
                    alignItems="left"
                    justifyContent="left"
                >

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="right"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1, maxWidth: 150, ml: 8 }}
                    >

                        <Typography
                            sx={{ mr: 1 }}
                            fontFamily= 'Arial'
                            mr='1'
                            color={dataColor}
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            Suite :
                        </Typography>

                    </Box>

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1, maxWidth: 300 }}
                    >

                        <Typography variant="h6" noWrap component="div" fontFamily= 'Arial'>
                            {currentUser?.address.suite}
                        </Typography>

                    </Box>

                </Box>

                <Box
                    display="flex"
                    alignItems="left"
                    justifyContent="left"
                >

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="right"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1, maxWidth: 150, ml: 8 }}
                    >

                        <Typography
                            sx={{ mr: 1 }}
                            fontFamily= 'Arial'
                            mr='1'
                            color={dataColor}
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            City :
                        </Typography>

                    </Box>

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1, maxWidth: 300 }}
                    >

                        <Typography variant="h6" noWrap component="div" fontFamily= 'Arial'>
                            {currentUser?.address.city}
                        </Typography>

                    </Box>

                </Box>

                <Box
                    display="flex"
                    alignItems="left"
                    justifyContent="left"
                >

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="right"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1, maxWidth: 150, ml: 8 }}
                    >

                        <Typography
                            sx={{ mr: 1 }}
                            fontFamily= 'Arial'
                            mr='1'
                            color={dataColor}
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            Zipcode :
                        </Typography>

                    </Box>

                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1, maxWidth: 300 }}
                    >

                        <Typography variant="h6" noWrap component="div" fontFamily= 'Arial'>
                            {currentUser?.address.zipcode}
                        </Typography>

                    </Box>

                </Box>

                <br />

                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    style={{ width: 1000 }}
                >

                    <iframe src={`https://maps.google.com/maps?q=${currentUser?.address.geo.lat},${currentUser?.address.geo.lng}&t=&z=13&ie=UTF8&iwloc=&output=embed`} style={{ width: 900, height: 500, borderRadius: '30px' }}></iframe>

                </Box>

                <br />
                <Typography variant="h6" noWrap component="div" align='right' fontFamily= 'Arial' style={{ width: 900, height: 50 }}>

                    <Typography variant="h6" noWrap component="label" sx={{ mr: 3 }} fontFamily= 'Arial'>
                        Lat : {currentUser?.address.geo.lat}
                    </Typography>

                    <Typography variant="h6" noWrap component="label" fontFamily= 'Arial'>
                        Long : {currentUser?.address.geo.lng}
                    </Typography>

                </Typography>

            </Box>
        </>
    )
}
