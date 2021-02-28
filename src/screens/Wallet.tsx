import React, { ReactNode } from 'react';
import { TouchableOpacity, FlatList, Text, View } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

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
    TransactionAboutContainer
} from './styles'

const friends = [
    {
        key: 0,
        image: 'https://img1.looper.com/img/gallery/the-offices-michael-scott-was-almost-a-murderer/intro-1591207215.jpg',
        name: 'Michael S.'
    },
    {
        key: 1,
        image: 'https://pbs.twimg.com/profile_images/1029279458526547969/zBI6sGcD_400x400.jpg',
        name: 'Pam B.'
    },
    {
        key: 2,
        image: 'https://pbs.twimg.com/media/B4S9kSlCEAE6wNl.jpg',
        name: 'Jim H.'
    },
    {
        key: 3,
        image: 'https://laughingsquid.com/wp-content/uploads/2017/09/all-of-jims-brilliant-pranks-against-dwight-on-the-office.png',
        name: 'Dwight S.'
    }
]

const transactions = [
    {
        key: 0,
        company: 'Amazon',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png',
        date: 'Today, 4:25 PM',
        price: '-$5.25',
    },
    {
        key: 1,
        company: 'Burger King',
        image: 'http://pngimg.com/uploads/burger_king/burger_king_PNG9.png',
        date: 'Today, 3:25 PM',
        price: '-$5.25',
    },
    {
        key: 2,
        company: 'Uber',
        image: 'https://logodownload.org/wp-content/uploads/2015/05/uber-logo-7-1.png',
        date: 'Today, 2:25 PM',
        price: '-$5.25',
    },
]

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

const RenderTransactions = ({item}: any) => {
    return (
        <TransactionContent>
            <TransactionAboutContainer>
                <TransactionImage source={{uri: item.image}}/>
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
                        <Feather name="user-plus" size={30} color="#FFFFFF" />
                        <AddFriendText>Add contact</AddFriendText>
                    </AddFriend>

                    {/* Friends List */}
                    <FlatList
                        data={friends}
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
                    data={transactions}
                    keyExtractor={item => item.key.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={RenderTransactions}
                />

            </TransactionsContainer>
        </Container>
    )
}