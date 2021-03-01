import React, { useState } from 'react';
import { TouchableOpacity, FlatList, View } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

import {
    Container,
    Main,
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
    TransactionsContainer,
    TransactionsTitle,
    ShowAllButton,
    ShowAllText,
    TransactionsHeader,
    TransactionContent,
    TransactionAbout,
    TransactionPrice,
    TransactionImage,
    TransactionDate,
    TransactionName,
    TransactionAboutContainer,
    NotificationIcon
} from './styles'

import FriendsList from '../../data/friends'
import TransactionsList from '../../data/transactions'

const RenderFriends = ({ item }: any) => {
    return (
        <Friends key={item.key}>
            <FriendBox activeOpacity={0.8}>
                <FriendImage source={{ uri: item.image }} />
                <FriendName>{item.name}</FriendName>
            </FriendBox>
        </Friends>
    )
}

const RenderTransactions = ({ item }: any) => {
    return (
        <TransactionContent>
            <TransactionAboutContainer>
                <TransactionImage source={{ uri: item.image }} />
                <TransactionAbout>
                    <TransactionName>{item.company}</TransactionName>
                    <TransactionDate>{item.date}</TransactionDate>
                </TransactionAbout>
            </TransactionAboutContainer>
            <TransactionPrice>{item.price}</TransactionPrice>
        </TransactionContent>
    )
}

export default function Wallet() {
    const [hasNewNotification, setHasNewNotification] = useState(true);

    return (
        <Container>

            <Header>
                <TouchableOpacity activeOpacity={0.5}>
                    <ProfileImage source={{ uri: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80' }} />
                </TouchableOpacity>
                <Title>My Wallet</Title>
                <BellButton activeOpacity={0.5}>
                    <Feather name="bell" size={26} color="#1F1F1F" />

                    {
                        hasNewNotification ? (
                            <NotificationIcon />
                        ) : <View />
                    }

                </BellButton>
            </Header>

            <Main showsVerticalScrollIndicator={false}>
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
                            <Feather name="user-plus" size={30} color="#FFFFFF" />
                            <AddFriendText>Add contact</AddFriendText>
                        </AddFriend>

                        {/* Friends List */}
                        <FlatList
                            data={FriendsList}
                            keyExtractor={item => item.key.toString()}
                            renderItem={RenderFriends}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                        />

                    </FriendsContainer>
                </SendMoneyContainer>

                <TransactionsContainer>
                    <TransactionsHeader>
                        <TransactionsTitle>Recent Transactions</TransactionsTitle>
                        <ShowAllButton>
                            <ShowAllText>Show All</ShowAllText>
                        </ShowAllButton>
                    </TransactionsHeader>

                    {/* Transactions List */}
                    <FlatList
                        data={TransactionsList}
                        keyExtractor={item => item.key.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={RenderTransactions}
                    />

                </TransactionsContainer>
            </Main>
        </Container>
    )
}