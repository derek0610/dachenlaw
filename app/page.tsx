'use client';
import Image from 'next/image';
import BackgrounPhoto from '@/public/Background.svg';
import BlobPhoto from '@/public/RegularBlob.svg';
import GroupPhoto from '@/public/Group.png';
import {
	StyledBannerWrapper,
	StyledContentWrapper,
	StyledLawyerPhoto,
	StyledSlogan,
	StyledSlogaDescription,
	StyledBlobPhoto,
	StyledBackgroundImage,
} from './styles';
import Box from '@mui/material/Box';
import { StyledButton } from './_components/styles';
export default function Home() {
	return (
		<main>
			<StyledBannerWrapper>
				<StyledBackgroundImage
					src={BackgrounPhoto}
					fill={true}
					alt="banner image"
				/>
				<StyledContentWrapper>
					<div>
						<StyledSlogan>
							Challenging the status quo to serve clients better
						</StyledSlogan>
						<StyledSlogaDescription>
							Our work is recognized by clients from around the world, and we
							firmly believe in teamwork, legal ethics, and contributing to
							society. At Dachen Law Firm, we uphold human-centric corporate
							values, which we consider the key to achieving our client&apos;
							business visions.
						</StyledSlogaDescription>
						<StyledButton>Know More</StyledButton>
					</div>
					<Box position="relative">
						<StyledLawyerPhoto
							width={700}
							src={GroupPhoto}
							alt="lawyers image"
						/>
						<StyledBlobPhoto width={120} src={BlobPhoto} alt="lawyers image" />
					</Box>
				</StyledContentWrapper>
			</StyledBannerWrapper>
			<div style={{ display: 'flex', flexWrap: 'wrap', height: '1000px' }}>
				hi
			</div>
		</main>
	);
}
