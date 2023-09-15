import { styled } from '@mui/system';
import { GRAY, BLACK } from '@constants/color';
import Image from 'next/image';

const StyledBannerWrapper = styled('div')(() => ({
	position: 'relative',
	width: '100%',
	height: '900px',
	// overflow: 'hidden',
}));

const StyledContentWrapper = styled('div')(() => ({
	position: 'relative',
	width: '100%',
	maxWidth: '1300px',
	margin: '0px auto ',
	padding: '200px 24px 0px',
	display: 'flex',
	justifyContent: 'space-between',
}));

const StyledSloganWrapper = styled('div')(({ theme }) => ({
	width: '100%',
	maxWidth: '600px',
	[theme.breakpoints.down('lg')]: {
		maxWidth: '500px',
	},
}));

const StyledSlogan = styled('h1')(({ theme }) => ({
	width: '100%',
	letterSpacing: '1.2px',
	color: BLACK,
	fontSize: 60,
	fontWeight: 700,
	fontFamily: 'Noto Sans Regular,Arial,Helvetica,sans-serif',
	[theme.breakpoints.down('lg')]: {
		fontSize: 48,
	},
}));

const StyledSlogaDescription = styled('p')(() => ({
	letterSpacing: '1.2px',
	margin: '24px 0px 48px 0px',
	color: GRAY,
	fontSize: 14,
	fontWeight: 400,
	fontFamily: 'CircularXX,sans-serif',
}));

const StyledBackgroundImage = styled(Image)(() => ({
	transform: 'scale(1.1)',
	filter: 'blur(10px)',
}));

const StyledLawyerWrapper = styled('div')(({ theme }) => ({
	position: 'relative',
	width: '45%',
	[theme.breakpoints.down('md')]: {
		display: 'none',
	},
}));

const StyledLawyerPhoto = styled(Image)(() => ({
	objectFit: 'cover',
}));

const StyledBlobPhoto = styled(Image)(() => ({
	position: 'absolute',
	filter: 'blur(10px)',
	top: 0,
	right: 0,
}));

export {
	StyledBannerWrapper,
	StyledContentWrapper,
	StyledLawyerPhoto,
	StyledSloganWrapper,
	StyledSlogan,
	StyledSlogaDescription,
	StyledBlobPhoto,
	StyledBackgroundImage,
	StyledLawyerWrapper,
};
