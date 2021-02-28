import React from 'react';
import { Touchable, TouchableOpacity } from 'react-native';
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
} from './styles'

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
                <MenuItem>
                    <AntDesign name="qrcode" size={18} color="#FFFFFF" />
                    <MenuTitle>Scan QR</MenuTitle>
                </MenuItem>

                <MenuItem>
                    <Feather name="send" size={18} color="#FFFFFF" />
                    <MenuTitle>Transfer</MenuTitle>
                </MenuItem>

                <MenuItem>
                    <AntDesign name="wallet" size={18} color="#FFFFFF" />
                    <MenuTitle>Payment</MenuTitle>
                </MenuItem>

                <MenuItem>
                    <Feather name="dollar-sign" size={18} color="#FFFFFF" />
                    <MenuTitle>Invest</MenuTitle>
                </MenuItem>
            </MenuContainer>

            <StatusBar style="dark" backgroundColor="#000" />
        </Container>
    )
}