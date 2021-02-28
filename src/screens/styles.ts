import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #F7F7F7;
`


// HEADER

export const Header = styled.View`
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 40px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`

export const ProfileImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 200px;
`

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #1F1F1F;
`

export const BellButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
`


// CARD

export const CardContainer = styled.View`
    align-items: center;
    margin-top: 30px;
`

export const Card = styled.View`
    width: 314px;
    height:158px;
    border-radius: 15px;
    background: #3D42B5;
    padding-top: 8px;
    padding-left: 20px;
    padding-right: 20px;
`

export const CardHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between
`

export const BalanceText = styled.Text`
    font-size: 14px;
    color: #E2E2E2;
`

export const MastercardIcon = styled.Image`
    width: 45px;
    height: 45px;
`

export const TotalBalance = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
    font-weight: 500;
`

export const CardNumberContainer = styled.View`
    flex-direction: row;
    flex: 1;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0;
    right: 0;
    padding: 20px;
`

export const CardNumber = styled.Text`
    margin-right: 20px;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 19px;
    flex: 1;
`


// MENU ITEMS

export const MenuContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 30px;
`

export const MenuItem = styled.TouchableOpacity`
    width: 68px;
    height: 68px;
    background: #1F1F1F;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
`

export const MenuTitle = styled.Text`
    font-size: 12px;
    color: #FFFFFF;
`

// SEND MONEY TO FRIENDS

export const SendMoneyContainer = styled.View`
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 20px;
`
export const SendMoneyTitle = styled.Text`
    color: #1F1F1F;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
`

export const FriendsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const AddFriend = styled.TouchableOpacity`
    border-radius: 10px;
    background: #1F1F1F;
    width: 90px;
    height: 90px;
    justify-content: space-between;
    padding: 15px 0px;
    align-items: center;
    margin-right: 2px;
`

export const AddFriendText = styled.Text`
    font-size: 12px;
    color: #FFFFFF;
`

export const Friends = styled.View`
    flex-direction: row;
`

export const FriendBox = styled.TouchableOpacity`
    border-radius: 10px;
    background: #434FBC;
    width: 90px;
    height: 90px;
    justify-content: space-between;
    padding: 15px 0px;
    align-items: center;
    margin-left: 15px;
    padding: 10px;
`

export const FriendImage = styled.Image`
    width: 45px;
    height: 45px;
    border-radius: 100px;
`

export const FriendName = styled.Text`
    font-size: 12px;
    color: #FFFFFF;
`