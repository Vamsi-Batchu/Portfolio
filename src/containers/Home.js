/* eslint-disable */
import PropTypes from 'prop-types'
import React from 'react'
import { AppBar, Toolbar, Typography, Button, Tabs, Tab, Grid, Box } from '@mui/material'
import App_Logo from '../assets/Logo-App.svg'
import fb from '../assets/Facebook.svg'
import linkedin from '../assets/Linkedin.svg'
import insta from '../assets/Instagram.svg'
import twitter from '../assets/Twitter.svg'
import Hero from '../assets/Home/Hero_banner.svg'
// import { connect } from 'react-redux';

export const Home = (props) => {
	const tabs = ['Home', 'About', 'Experience', 'Projects', 'Contact']
	const socialLinks = [
		{ icon: fb, url: 'https://facebook.com' },
		{ icon: insta, url: 'https://instagram.com' },
		{ icon: twitter, url: 'https://twitter.com' },
		{ icon: linkedin, url: 'https://linkedin./in/vamsikrishna-batchu/' }
		// { icon: faGithub, url: 'https://github.com', color: '#FFFFFF' }
	]

	const onDownload = () => {
		const link = document.createElement('a')
		link.download = `Vamsi_Resume.pdf`
		link.href = './Vamsi_Resume.pdf'
		link.click()
	}

	return (
		<Box sx={{ backgroundColor: 'black', px: { xs: 2, md: 8 }, pb:5 }}>
			<AppBar position="static" sx={{ backgroundColor: 'black', boxShadow: 1 }}>
				<Toolbar sx={{ m: '20px 20px 0 20px' }}>
					{/* Logo */}
					{/* <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
					MyLogo
          </Typography> */}

					<img src={App_Logo} alt="Logo" />

					{/* Tabs */}
					<Tabs
						textColor="#CBCBD7"
						indicatorColor="primary"
						sx={{ flexGrow: 2, gap: 2, display: 'grid', justifyContent: 'center' }}>
						{tabs.map((label, index) => (
							<Tab
								key={index}
								label={label}
								disableRipple
								sx={{
									borderRadius: '25px', // Make tabs rounded
									padding: '4px 16px', // Reduce height & increase spacing
									margin: '0 8px', // Add spacing between tabs
									transition: 'all 0.3s ease',
									border: '2px solid transparent',
									'&:hover': {
										// backgroundColor: "#E40037",
										// color: "black",
										// boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
										// borderLeft: activeTab === index || hoveredTab === index && "2px solid #E40037" ,
										// borderRight: activeTab === index || hoveredTab === index && "2px solid #E40037",
										borderLeft: '2px solid #E40037',
										borderRight: '2px solid #E40037'
									},
									backgroundColor: 'black'
								}}
							/>
						))}
					</Tabs>

					{/* Download Button */}
					<Button
						variant="contained"
						sx={{ bgcolor: '#FF2B51', textTransform: 'none' }}
						onClick={onDownload}
						// href="/public/Vamsi_Resume.pdf"
						// download="Vamsi_Resmue.pdf"
					>
						Download PDF
					</Button>
				</Toolbar>
			</AppBar>
			{/* <Grid sx={{bgcolor:'black'}}>
        <img src={Hero} alt="Hero Banner"/>
        <Box display='flex' justifyContent='space-between' color="#CBCBD7">
          <Box>
            Box 1
          </Box>
          <Box>
            Box 2
          </Box>
        </Box>
      </Grid> */}
			<Grid sx={{ bgcolor: 'black' }}>
				{/* Image Container */}
				<img src={Hero} alt="Hero Banner" />

				{/* Overlapping Box */}
				<Box
					sx={{
						color: '#cbcbd7',
						display: 'flex',
						justifyContent: 'space-between',
						p: '0 5rem 0 5rem',
						mt: '-6rem'
					}}>
					<Box textAlign="left">
						<Typography fontFamily="Poppins" fontSize="28px" color="#FF2B51">
							Vamsi Batchu
						</Typography>
						<Typography fontWeight="700" color="white">
							Front-End Developer
						</Typography>
					</Box>
					<Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, alignItems: 'center' }}>
						{' '}
						{socialLinks.map(({ icon, url }, index) => (
							<img
								key={index}
								component="a"
								src={icon}
								style={{
									width: '15px',
									height: '15px',
									cursor: 'pointer',
									transition: 'transform 0.3s ease'
								}}
								onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
								target="_blank"
								rel="noopener noreferrer"
							/>
						))}
					</Box>
				</Box>
			</Grid>
		</Box>
	)
}

Home.propTypes = {}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

export default Home
