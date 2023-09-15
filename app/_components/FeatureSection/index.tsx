import {
	StyledBackground,
	StyledContentWrapper,
	StyledTitle,
	StyledDescription,
	StyledIconImage,
	StyledFeatureTitle,
	StyledFeatureDescription,
} from './styles';
import IconGrow from '@/public/IconGrow.png';
import IconProtect from '@/public/IconProtect.png';
import IconOperate from '@/public/IconOperate.png';
import IconFinance from '@/public/IconFinance.png';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
const FeatureSection = () => {
	return (
		<StyledBackground>
			<StyledContentWrapper>
				<StyledTitle>Our Offer</StyledTitle>

				<StyledDescription>
					Across over 80 countries, Dentons helps you grow, protect, operate and
					finance your organization by providing uniquely global and deeply
					local legal solutions.
				</StyledDescription>

				<Grid container spacing={3}>
					<Grid lg={3} xs={12} item>
						<Box display="flex" flexDirection="column" alignItems="center">
							<StyledIconImage
								src={IconGrow}
								width={120}
								height={120}
								alt="Grow Icon"
							/>
							<StyledFeatureTitle>Grow</StyledFeatureTitle>
							<StyledFeatureDescription>
								Dentons can provide the legal and advisory solutions you need to
								grow, anywhere in the world you need us.
							</StyledFeatureDescription>
						</Box>
					</Grid>
					<Grid lg={3} xs={12} item>
						<Box display="flex" flexDirection="column" alignItems="center">
							<StyledIconImage
								src={IconProtect}
								width={120}
								height={120}
								alt="Protect Icon"
							/>

							<StyledFeatureTitle>Protect</StyledFeatureTitle>
							<StyledFeatureDescription>
								Dentons can provide the legal and advisory solutions you need to
								grow, anywhere in the world you need us.
							</StyledFeatureDescription>
						</Box>
					</Grid>
					<Grid lg={3} xs={12} item>
						<Box display="flex" flexDirection="column" alignItems="center">
							<StyledIconImage
								src={IconOperate}
								width={120}
								height={120}
								alt="Operate Icon"
							/>
							<StyledFeatureTitle>Operate</StyledFeatureTitle>
							<StyledFeatureDescription>
								Dentons can provide the legal and advisory solutions you need to
								grow, anywhere in the world you need us.
							</StyledFeatureDescription>
						</Box>
					</Grid>
					<Grid lg={3} xs={12} item>
						<Box display="flex" flexDirection="column" alignItems="center">
							<StyledIconImage
								src={IconFinance}
								width={120}
								height={120}
								alt="Finance Icon"
							/>
							<StyledFeatureTitle>Finance</StyledFeatureTitle>
							<StyledFeatureDescription>
								Dentons can provide the legal and advisory solutions you need to
								grow, anywhere in the world you need us.
							</StyledFeatureDescription>
						</Box>
					</Grid>
				</Grid>
			</StyledContentWrapper>
		</StyledBackground>
	);
};

export default FeatureSection;
