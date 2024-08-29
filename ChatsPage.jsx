import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'


const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '28227b33-a5db-4e6f-a797-86ecc8ff3430', 
        props.user.username, 
        props.user.secret
    );
    return (
            <div style={{height: '100vh'}}>
                <MultiChatSocket {...chatProps} />
                <MultiChatWindow {...chatProps} style={{height: '100%'}} />

            </div>
    )
}

export default ChatsPage