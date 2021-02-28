import React, {ReactNode} from 'react';
import { TouchableOpacity, FlatList, Text } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import {
    Container,
    Header,
    ProfileImage,
    Title,
    BellButton,
    CardContainer,
    Card,
    CardHeader,
    BalanceText,
    MastercardIcon,
    TotalBalance,
    CardNumberContainer,
    CardNumber,
    MenuContainer,
    MenuItem,
    MenuTitle,
    SendMoneyContainer,
    SendMoneyTitle,
    FriendsContainer,
    AddFriend,
    AddFriendText,
    Friends,
    FriendBox,
    FriendName,
    FriendImage,
} from './styles'

interface renderProfile {
    item: any
    name: String
    key: Number
}

const friends = [
    {
        key: 1,
        image: 'https://img1.looper.com/img/gallery/the-offices-michael-scott-was-almost-a-murderer/intro-1591207215.jpg',
        name: 'Michael S.'
    },
    {
        key: 2,
        image: 'https://pbs.twimg.com/profile_images/1029279458526547969/zBI6sGcD_400x400.jpg',
        name: 'Pam B.'
    },
    {
        key: 3,
        image: 'https://pbs.twimg.com/media/B4S9kSlCEAE6wNl.jpg',
        name: 'Jim H.'
    },
    {
        key: 4,
        image: 'https://laughingsquid.com/wp-content/uploads/2017/09/all-of-jims-brilliant-pranks-against-dwight-on-the-office.png',
        name: 'Dwight S.'
    }
]

const RenderFriends = ({item}: renderProfile) =>  {
    return (
        <Friends>
            <FriendBox activeOpacity={0.8}>
                <FriendImage source={{uri: item.image}}/>
                <FriendName>{item.name}</FriendName>
            </FriendBox>
        </Friends>
    )
}

export default function Wallet() {
    return (
        <Container>

            <Header>
                <TouchableOpacity onPress={() => { }}>
                    <ProfileImage source={{ uri: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80' }} />
                </TouchableOpacity>
                <Title>My Wallet</Title>
                <BellButton>
                    <Feather name="bell" size={24} color="#1F1F1F" />
                </BellButton>
            </Header>

            <CardContainer>
                <Card>
                    <CardHeader>
                        <BalanceText>Balance</BalanceText>
                        <MastercardIcon source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/mastercard-21-569204.png' }} />
                    </CardHeader>
                    <TotalBalance>$ 5400</TotalBalance>
                    <CardNumberContainer>
                        <CardNumber>* * * *</CardNumber>
                        <CardNumber>* * * *</CardNumber>
                        <CardNumber>* * * *</CardNumber>
                        <CardNumber>0090</CardNumber>
                    </CardNumberContainer>
                </Card>
            </CardContainer>

            <MenuContainer>
                <MenuItem activeOpacity={0.8}>
                    <AntDesign name="qrcode" size={18} color="#FFFFFF" />
                    <MenuTitle>Scan QR</MenuTitle>
                </MenuItem>

                <MenuItem activeOpacity={0.8}>
                    <Feather name="send" size={18} color="#FFFFFF" />
                    <MenuTitle>Transfer</MenuTitle>
                </MenuItem>

                <MenuItem activeOpacity={0.8}>
                    <AntDesign name="wallet" size={18} color="#FFFFFF" />
                    <MenuTitle>Payment</MenuTitle>
                </MenuItem>

                <MenuItem activeOpacity={0.8}>
                    <Feather name="dollar-sign" size={18} color="#FFFFFF" />
                    <MenuTitle>Invest</MenuTitle>
                </MenuItem>
            </MenuContainer>

            <SendMoneyContainer>
                <SendMoneyTitle>Send money to:</SendMoneyTitle>
                <FriendsContainer>
                    <AddFriend activeOpacity={0.8}>
                        <Feather name="user-plus" size={30} color="#FFFFFF"/>
                        <AddFriendText>Add contact</AddFriendText>
                    </AddFriend>
                    <FlatList 
                        data={friends}
                        renderItem={RenderFriends}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                    />
                </FriendsContainer>
            </SendMoneyContainer>

            <StatusBar style="dark" backgroundColor="#000" />
        </Container>
    )
}