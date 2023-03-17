import { createChatBotMessage } from 'react-chatbot-kit';
import { Avatar } from '@mui/material';
import logo from 'assets/img/logo_ec.png';
import variables from 'assets/_variable.scss';
const config = {
  initialMessages: [createChatBotMessage(`Xin chào !!`)],
  customComponents: {
   // Replaces the default bot avatar
   botAvatar: (props) => <Avatar {...props} src={logo} sx={{background:variables.maincolor}}  />,
 },
};

export default config;