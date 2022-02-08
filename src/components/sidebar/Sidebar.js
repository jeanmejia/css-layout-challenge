import React from 'react';
import { CheckboxCard } from '../profile/CheckboxCard';
import { BoxCard } from './BoxCard';
import { GradientRectangle } from './GradientRectangle';
import { GreyBox } from './GreyBox';
import { LightOrangeDiv } from './LightOrangeDiv';
import { SidebarContainer } from './SidebarContainer';
import { WhiteSquare } from './WhiteSquare';
import { WhiteText } from './WhiteText';
import { WhiteTinyText } from './WhiteTinyText';
import { YellowButton } from './YellowButton';
import { HorizontalLine} from '../HorizontalLine';
export const Sidebar = () => {
    return (
        <SidebarContainer>
            <GradientRectangle/>
            <CheckboxCard>
                <WhiteSquare/>
                <WhiteTinyText>Home</WhiteTinyText>
            </CheckboxCard>
            <CheckboxCard>
                <WhiteSquare/>
                <WhiteTinyText>My Files</WhiteTinyText>
            </CheckboxCard>
            <CheckboxCard>
                <WhiteSquare/>
                <WhiteTinyText>Recent Files</WhiteTinyText>
            </CheckboxCard>
            <CheckboxCard>
                <WhiteSquare/>
                <WhiteTinyText>Shared Files</WhiteTinyText>
            </CheckboxCard>
            <CheckboxCard>
                <WhiteSquare/>
                <WhiteTinyText>File Request</WhiteTinyText>
            </CheckboxCard>
            <CheckboxCard>
                <WhiteSquare/>
                <WhiteTinyText>Trash</WhiteTinyText>
            </CheckboxCard>
            <HorizontalLine/>
            <GreyBox>
                <BoxCard>
                    <WhiteSquare/>
                    <WhiteTinyText>Upload files</WhiteTinyText>
                </BoxCard>
                <BoxCard>
                    <WhiteSquare/>
                    <WhiteTinyText>Upload folder</WhiteTinyText>
                </BoxCard>
                <BoxCard>
                    <WhiteSquare/>
                    <WhiteTinyText>New folder</WhiteTinyText>
                </BoxCard>
                <BoxCard>
                    <WhiteSquare/>
                    <WhiteTinyText>More</WhiteTinyText>
                </BoxCard>

            </GreyBox>
            <YellowButton>
                <WhiteText>
                    Create New
                </WhiteText>
                <LightOrangeDiv/>
            </YellowButton>
        </SidebarContainer>

    );
}