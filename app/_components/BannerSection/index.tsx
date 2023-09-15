import GroupPhoto from '@/public/Group.png';
import BackgrounPhoto from '@/public/Background.svg';
import BlobPhoto from '@/public/RegularBlob.svg';
import {
	StyledBannerWrapper,
	StyledContentWrapper,
	StyledLawyerPhoto,
	StyledSloganWrapper,
	StyledSlogan,
	StyledSlogaDescription,
	StyledBlobPhoto,
	StyledBackgroundImage,
	StyledLawyerWrapper,
} from './styles';
import { StyledButton } from '../Button/styles';

const BannerSection = () => {
	return (
		<StyledBannerWrapper>
			<StyledBackgroundImage
				src={BackgrounPhoto}
				fill={true}
				alt="banner image"
			/>
			<StyledContentWrapper>
				<StyledSloganWrapper>
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
				</StyledSloganWrapper>
				<StyledLawyerWrapper>
					<StyledLawyerPhoto fill={true} src={GroupPhoto} alt="lawyers image" />
					<StyledBlobPhoto width={120} src={BlobPhoto} alt="lawyers image" />
				</StyledLawyerWrapper>
			</StyledContentWrapper>
		</StyledBannerWrapper>
	);
};

export default BannerSection;
