'use client';
import { styled } from '@mui/system';
import { GRAY, PRIMARY, BLACK } from '@constants/color';
import Image from 'next/image';

const StyledBackground = styled('div')(() => ({
	background: 'white',
}));

const StyledContentWrapper = styled('div')(() => ({
	width: '100%',
	maxWidth: '1300px',
	margin: '0px auto',
	minHeight: '900px',
	padding: '200px 24px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
}));

const StyledTitle = styled('h2')(() => ({
	color: BLACK,
	fontSize: 48,
	fontFamily: 'Noto Sans Regular,Arial,Helvetica,sans-serif',
}));

const StyledDescription = styled('p')(() => ({
	color: GRAY,
	margin: '20px 0px 100px 0px',
	maxWidth: '600px',
	textAlign: 'center',
	fontSize: 14,
	lineHeight: 1.5,
}));

const StyledIconImage = styled(Image)(() => ({
	filter: 'drop-shadow(0px 16px 60px #9947c6) opacity(80%)',
}));

const StyledFeatureTitle = styled('h3')(() => ({
	color: PRIMARY,
	margin: '20px 0px 20px 0px',
	fontWeight: 700,
	fontSize: 24,
	fontFamily: 'Noto Sans Regular,Arial,Helvetica,sans-serif',
}));

const StyledFeatureDescription = styled('p')(() => ({
	textAlign: 'center',
	color: GRAY,
	fontSize: 14,
	lineHeight: 1.5,
	padding: '0px 24px',
	marginBottom: '80px',
}));

export {
	StyledBackground,
	StyledContentWrapper,
	StyledTitle,
	StyledDescription,
	StyledIconImage,
	StyledFeatureTitle,
	StyledFeatureDescription,
};
