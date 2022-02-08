import React from 'react';
import { ProfileRow } from './ProfileRow';
import { GreyFullCircle } from './GreyFullCircle';
import { GreyFullSquare } from './GreyFullSquare';
import { ProfileContainer } from './ProfileContainer';
import { HorizontalLine} from '../HorizontalLine';
import { SubTitle } from '../SubTitle';
import { WhiteCircle } from './WhiteCircle';
import { BigText } from './BigText';
import { SymbolText } from './SymbolText';
import { TinyText } from '../dashboard/TinyText';
import { StorageCard } from './StorageCard';
import { OrangeBigRoundSquare } from './OrangeBigRoundSquare';
import { CardColumn } from './CardColumn';
import { CardText } from './CardText';
import { WhiteCard } from './WhiteCard';
import { GradientCard } from './GradientCard';
import { GradientBox } from './GradientBox';
import { MediumText } from '../MediumText';
import { OrangeButton } from './OrangeButton';
import { WhiteButtonText } from './WhiteButtonText';
import { BlueBigRoundSquare} from './BlueBigRoundSquare';
import { GreenBigRoundSquare} from './GreenBigRoundSquare';
import { GreyBigRoundSquare} from './GreyBigRoundSquare';

export const Profile = () => {
    return (
        <ProfileContainer>
            <ProfileRow>
                <GreyFullSquare/>
                <GreyFullSquare/>
                <GreyFullCircle/>
            </ProfileRow>
            <HorizontalLine/>
            <SubTitle>
                Storage
            </SubTitle>
            <WhiteCircle><BigText>85</BigText><SymbolText>%</SymbolText></WhiteCircle>
            <TinyText>420.2 GB of 500 GB used</TinyText>
            <StorageCard>
                <OrangeBigRoundSquare/>
                <CardColumn>
                    <CardText>
                        Documents
                    </CardText>
                    <TinyText>
                        720 Files
                    </TinyText>
                </CardColumn>
                <WhiteCard>
                    <TinyText>200 GB</TinyText>
                </WhiteCard>
            </StorageCard>
            <StorageCard>
                <BlueBigRoundSquare/>
                <CardColumn>
                    <CardText>
                        Documents
                    </CardText>
                    <TinyText>
                        720 Files
                    </TinyText>
                </CardColumn>
                <WhiteCard>
                    <TinyText>200 GB</TinyText>
                </WhiteCard>
            </StorageCard>
            <StorageCard>
                <GreenBigRoundSquare/>
                <CardColumn>
                    <CardText>
                        Documents
                    </CardText>
                    <TinyText>
                        720 Files
                    </TinyText>
                </CardColumn>
                <WhiteCard>
                    <TinyText>200 GB</TinyText>
                </WhiteCard>
            </StorageCard>
            <StorageCard>
                <GreyBigRoundSquare/>
                <CardColumn>
                    <CardText>
                        Documents
                    </CardText>
                    <TinyText>
                        720 Files
                    </TinyText>
                </CardColumn>
                <WhiteCard>
                    <TinyText>200 GB</TinyText>
                </WhiteCard>
            </StorageCard>
            <GradientCard>
                <GradientBox/>
                <MediumText>Buy more space now!</MediumText>
                <TinyText>Upgrade to cloud Premium</TinyText>
                <OrangeButton>
                    <WhiteButtonText>
                        Upgrade Account
                    </WhiteButtonText>
                </OrangeButton>
            </GradientCard>
        </ProfileContainer>
    )
}