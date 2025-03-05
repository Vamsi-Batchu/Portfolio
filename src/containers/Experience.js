import React from 'react'
import { Typography, Box } from '@mui/material'

export const Experience = () => {
	const experienceData = [
		{
			role: 'Senior Software Engineer',
			company: 'Psiog Digital - Chennai',
			duration: 'June 2024 - Present',
			description:
				'Leading documentation efforts using Docusaurus, mentoring team members, and collaborating with clients to ensure high-quality feature implementations. Worked on POCs for UI enhancements.'
		},
		{
			role: 'Software Engineer',
			company: 'Psiog Digital - Chennai',
			duration: 'Jan 2023 - June 2024',
			description:
				'Developed major features for a cloud-based SaaS application, built responsive UIs using React, and worked on CI/CD pipelines to enhance deployment processes.'
		},
		{
			role: 'Graduate Engineering Trainee',
			company: 'Psiog Digital - Chennai',
			duration: 'June 2022 - Jan 2023',
			description:
				'Built template web applications, developed an Angular-based e-commerce site, and created RESTful APIs using C# for dynamic data integration.'
		}
	]

	return (
		<Box
			sx={{
				color: '#CBCBD7',
                bgcolor:'black',
				px: { xs: 2, md: 8 },
				pb: 5,
				boxShadow: '0px 4px 10px rgba(255, 255, 255, 0.1)',
                textAlign:'left'
			}}>
			<Typography variant="h5" textAlign="center" gutterBottom>
				Experience Timeline
			</Typography>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
				{experienceData.map((exp, index) => (
					<Box
						key={index}
						sx={{ position: 'relative', borderLeft: '3px solid #E40037', paddingLeft: 3, pb: 2 }}>
						<Box
							sx={{
								width: '12px',
								height: '12px',
								backgroundColor: '#E40037',
								borderRadius: '50%',
								position: 'absolute',
								left: '-7px',
								top: 0,
								boxShadow: '0px 0px 8px rgba(228, 0, 55, 0.8)'
							}}
						/>
						<Typography variant="h6" sx={{ fontWeight: 'bold', color: '#E40037' }}>
							{exp.role}
						</Typography>
						<Typography variant="body2" color="gray">
							{exp.company}
						</Typography>
						<Typography variant="body2" color="gray">
							{exp.duration}
						</Typography>
						<Typography variant="body2" sx={{ mt: 1, color: '#CBCBD7' }}>
							{exp.description}
						</Typography>
					</Box>
				))}
			</Box>
		</Box>
	)
}
