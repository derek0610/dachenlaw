import { styled } from '@mui/system';
import { GRAY } from '@constants/color';
import Image from 'next/image';

const StyledBannerWrapper = styled('div')(() => ({
	position: 'relative',
	width: '100%',
	height: '900px',
	overflow: 'hidden',
}));

const StyledContentWrapper = styled('div')(() => ({
	position: 'relative',
	width: '100%',
	maxWidth: '1280px',
	margin: '0px auto ',
	paddingTop: '200px',
	display: 'flex',
}));

const StyledSlogan = styled('h1')(() => ({
	letterSpacing: '1.2px',
	color: 'black',
	fontSize: 60,
	fontWeight: 700,
	fontFamily: 'Noto Sans Regular,Arial,Helvetica,sans-serif',
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
const StyledLawyerPhoto = styled(Image)(() => ({
	// position: 'absolute',
	// top: 200,
	// right: 0,
}));
const StyledBlobPhoto = styled(Image)(() => ({
	position: 'absolute',
	filter: 'blur(10px)',
}));

export {
	StyledBannerWrapper,
	StyledContentWrapper,
	StyledLawyerPhoto,
	StyledSlogan,
	StyledSlogaDescription,
	StyledBlobPhoto,
	StyledBackgroundImage,
};
