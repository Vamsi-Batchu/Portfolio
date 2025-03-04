import React from 'react'
import { Box, Typography, Grid, Card, CardMedia, CardContent, IconButton } from '@mui/material'

const projects = [
	{
		title: 'Website Designing',
		description:
			'We help e-commerce brands navigate the ever-changing landscape of digital marketing with best-in-class creative, personalized paid media strategies.',
		image:
			'https://cdn.builder.io/api/v1/image/assets/TEMP/0fd69b2fb60396a8afc337a0a9ba9000c6aa9c99abf5f42774488855eb28ef1d',
		md: 8,
		link: '/website-designing'
	},
	{
		title: 'UXUI - Graphic Designing',
		image:
			'https://cdn.builder.io/api/v1/image/assets/TEMP/60dd0ef7ef425cb6ccf1c990c8f6d3a58638ae2b6690a7c9bc94f7192e7875ee',
		md: 4,
		link: '/uxui-graphic-designing'
	},
	{
		title: 'Web Development',
		image:
			'https://cdn.builder.io/api/v1/image/assets/TEMP/591e775bd4683e3ab1442d9d827bbb482cb54c797b116156668f2f0f43d61f58',
		md: 4,
		link: '/web-development'
	},
	{
		title: 'eousva - Product Branding',
		image:
			'https://cdn.builder.io/api/v1/image/assets/TEMP/208cb71cd2cfa620367f246a6a0f0034e06972f5ca9a2a01b2bf5119a62fe4d7',
		md: 8,
		link: '/product-branding'
	}
]

const Projects = () => {
	return (
		<Box sx={{ backgroundColor: 'black', py: 10, px: { xs: 2, md: 8 } }}>
			<Grid container spacing={3}>
				<Grid item xs={12} md={12} sx={{ position: "relative", p: 5 }}>
					<Box
						sx={{
							position: 'absolute',
							bottom: 0,
							left: 0,
							width: '50%',
							height: '50%',
							borderTop: '2px solid rgba(255, 255, 255, 0.2)',
							borderLeft: '2px solid rgba(255, 255, 255, 0.2)',
							mb: '36.5rem'
						}}
					/>
					<Typography
						variant="h4"
						sx={{
							position: 'absolute',
              bottom: '98.5%',
              left: '54%',
							color: 'white',
							opacity: '30%',
							fontWeight: 700,
							transformOrigin: 'bottom left'
						}}>
						Projects
					</Typography>
					<Grid container spacing={3} padding={5}>
						{projects.map((project, index) => (
							<Grid item xs={12} md={project.md} key={index}>
								<Card
									sx={{
										borderRadius: '10px',
										minHeight: 500,
										position: 'relative',
										transition: 'transform 0.3s ease',
										'&:hover': { transform: 'scale(1.05)' },
										cursor: 'pointer',
                    bgcolor:'black'
									}}
									onClick={() => (window.location.href = project.link)}>
									<CardMedia
										component="img"
										height="500"
										image={project.image}
										alt={project.title}
										sx={{ filter: 'brightness(70%)' }}
									/>
									<CardContent
										sx={{
											position: 'absolute',
											top: 0,
											left: 0,
											width: '100%',
											height: '100%',
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'center',
											alignItems: 'center',
											color: 'white',
											textAlign: 'center'
										}}>
										<Typography variant="h5" sx={{ fontWeight: 700 }}>
											{project.title}
										</Typography>
										{project.description && (
											<Typography variant="body2" sx={{ m: '4px 16px 0 16px', color: '#ebebeb' }}>
												{project.description}
											</Typography>
										)}
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Projects
