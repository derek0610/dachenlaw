import { styled } from '@mui/system';
import { GRAY } from '@constants/color';
import Image from 'next/image';

const StyledContentWrapper = styled('div')(() => ({
	position: 'relative',
	width: '100%',
	maxWidth: '1300px',
	margin: '0px auto ',
	padding: '200px 24px 0px',
	display: 'flex',
	justifyContent: 'space-between',
}));

export { StyledContentWrapper };
