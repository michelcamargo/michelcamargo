import React from 'react';

import profileAvatar from "@/assets/img/profile/profile-mscamargo.jpg";

import Styled, { StyledProps } from './styles';

const ProfileAvatar = ({ width, height }: StyledProps) => {
	return (
		<Styled.Wrapper>
			<Styled.Avatar src={profileAvatar} alt={'Avatar de perfil'} height={height} width={width} />
		</Styled.Wrapper>
	);
};

export default ProfileAvatar;
