/* eslint-disable */
import PropTypes from 'prop-types'
import React from 'react'
import { Box, Typography, Button, Grid } from '@mui/material'
import Red_Rect from '../assets/Contact/Red_Rect.svg'
import White_Rect from '../assets/Contact/White_Rect.svg'

// import { connect } from 'react-redux';

const logos = [Red_Rect, White_Rect, Red_Rect, White_Rect, Red_Rect, White_Rect]

export const Contact = (props) => {
	return (
		<Box sx={{ backgroundColor: 'black', py: 8, px: { xs: 2, md: 8 }, textAlign: 'center' }}>
			<Grid container spacing={3} justifyContent="center">
				{logos.map((logo, index) => (
					<Grid item key={index}>
						<Box component="img" src={logo} alt="Partner logo" sx={{ width: 150 }} />
					</Grid>
				))}
			</Grid>

			<Box pt={10}>
				<Typography sx={{ color: 'white', mt: 5, fontSize: '17px' }}>
					Want to start a project?
				</Typography>
				<Typography variant="h1" sx={{ color: '#e40037', fontWeight: 600, mt: 2 }}>
					Let's Talk
				</Typography>
			</Box>

			<Button
				variant="outlined"
				sx={{
					color: '#e40037',
					borderColor: 'white',
					borderRadius: '15px',
					mt: 6,
					px: 5,
					py: 1.5
				}}>
				Contact Me
			</Button>
			<Box display="flex" justifyContent="space-between" mt={19}>
				<Box
					sx={{
						textAlign: 'left',
						color: 'white',
						display: 'flex'
					}}>
					<Typography variant="h4" sx={{ fontWeight: 700, color: '#CBCBD7' }}>
						VK
					</Typography>
					<Typography variant="body2" pl="9px" color="#939395">
						Web Developer <br /> &UI Designer
					</Typography>
				</Box>
				<Box color="white" display="flex" alignItems="center">
					Social Media Logos
				</Box>
			</Box>
		</Box>
	)
}

Contact.propTypes = {}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

export default Contact
