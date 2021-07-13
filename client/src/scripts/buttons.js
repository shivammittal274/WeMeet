import React, { Component } from 'react';
import NoteIcon from '@material-ui/icons/EventNote';
import MicOffIcon from '@material-ui/icons/MicOff';
import MicIcon from '@material-ui/icons/Mic';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import StopScreenShareIcon from '@material-ui/icons/StopScreenShare';
import MessageIcon from '@material-ui/icons/Message';
import SendIcon from '@material-ui/icons/Send';
import ClosedCaptionIcon from '@material-ui/icons/ClosedCaption';
import CallEndIcon from '@material-ui/icons/CallEnd';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailIcon from '@material-ui/icons/Mail';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ComputerIcon from '@material-ui/icons/Computer';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import './buttons.css';

class MutedMic extends Component {
    render(){
        return(
            <button className='controlbtns' style={{backgroundColor: '#f5483f', borderRadius:'50%', margin:this.props.margin}} onClick={this.props.onClick}>
                <MicOffIcon />
            </button>
        )
    }
}   
class UnmutedMic extends Component{
    render(){
        return(
            <button className='controlbtns' style={{background:'transparent', borderRadius:'50%', borderStyle:'solid', borderColor:'#ffffff', borderWidth:'1px' ,margin:this.props.margin}} onClick={this.props.onClick}>
                <MicIcon/>
            </button>
        )
    }
}
class MutedVideo extends Component{
    render(){
        return(
            <button className='controlbtns' style={{backgroundColor: '#f5483f', borderRadius:'50%',margin:this.props.margin}} onClick={this.props.onClick}>
                < VideocamOffIcon/>
            </button>
        )
    }
}

class UnmutedVideo extends Component{
    render(){
        return(
            <button className='controlbtns' style={{background:'transparent', borderRadius:'50%', borderStyle:'solid', borderColor:'#ffffff', borderWidth:'1px' ,margin:this.props.margin}} onClick={this.props.onClick}>
                < VideocamIcon/>
            </button>
        )
    }
}
class Screen extends Component{
    render(){
        return(
            <button className='controlbtns' style={{background:'transparent', borderRadius:'50%', borderStyle:'solid', borderColor:'#ffffff', borderWidth:'1px', margin:this.props.margin}} onClick={this.props.onClick}>
                <ScreenShareIcon/>
            </button>
        )
    }
}
class Unscreen extends Component{
    render(){
        return(
            <button className='controlbtns' style={{backgroundColor: '#f5483f', borderRadius:'50%',margin:this.props.margin}} onClick={this.props.onClick}>
                < StopScreenShareIcon/>
            </button>
        )
    }
}
class Msg extends Component{
    render(){
        return(
            <button className='controlbtns' style={{background:'transparent', borderRadius:'50%', borderStyle:'solid', borderColor:'#ffffff', borderWidth:'1px' ,margin:this.props.margin}} onClick={this.props.onClick}>
                < MessageIcon/>
            </button>
        )
    }
}
class SendMsg extends Component{
    render(){
        return(
            <button className='controlbtns' style={{backgroundImage: 'linear-gradient(to right, #041629, #041629)', borderRadius:'50%' ,margin:this.props.margin}} onClick={this.props.onClick}>
                < SendIcon/>
            </button>
        )
    }
}
class EndCall extends Component{
    render(){
        return(
            <button className='controlbtns' style={{marginLeft:'10px', backgroundColor: '#3f3f3f', borderRadius:'50%', margin:this.props.margin}} onClick={this.props.onClick}>
                < CallEndIcon/>
            </button>
        )
    }
}
class CCbtn extends Component{
    render(){
        return(
            <button className='controlbtns' style={{background:'transparent', borderRadius:'50%', borderStyle:'solid', borderColor:'#ffffff', borderWidth:'1px' ,margin:this.props.margin}} onClick={this.props.onClick}>
                < ClosedCaptionIcon/>
            </button>
        )
    }
}
class UpArrow extends Component{
    render(){
        return(
            <button className='controlbtns' style={{background:'transparent', borderRadius:'50%', borderStyle:'solid', borderColor:'#ffffff', borderWidth:'1px' ,margin:this.props.margin}} onClick={this.props.onClick}>
                < GroupAddIcon />
            </button>
        )
    }
}

class WhatsappBtn extends Component{
    constructor(props){
        super(props);
        this.handleWAShare = this.handleWAShare.bind(this);
        this.textmessage = `${this.props.host}%20is%20inviting%20you%20to%20a%20meeting%20on%20%0Ahttps%3A%2F%2Fevac.herokuapp.com%0A%0AMeeting%20Code%20%3A%20${this.props.mc}%20%0A%0ALink%20%3A%20${this.props.ml}%0AClick%20on%20the%20Link%20to%20Join%20directly.`;
    }
    handleWAShare(){
        var text = `
        ${this.props.host}%20is%20inviting%20you%20to%20a%20meeting%20on%20%0Ahttps%3A%2F%2Fevac.herokuapp.com%0A%0AMeeting%20Code%20%3A%20${this.props.mc}%20%0A%0ALink%20%3A%20${this.props.ml}%0AClick%20on%20the%20Link%20to%20Join%20directly.
        `
        window.open(`https://api.whatsapp.com/send?text=${text}`,"_blank")
    }
    render(){
        return(
            <button className='controlbtns' style={{backgroundImage: 'linear-gradient(to right, #00eb81, #00b19c)', borderRadius:'50%', borderStyle:'solid', borderColor:'#ffffff', borderWidth:'1px' ,margin:this.props.margin}} onClick={this.handleWAShare}>
                < WhatsAppIcon/>
            </button>
        )
    }
}

class MailBtn extends Component{
    constructor(props){
        super(props);
        this.handleMailShare = this.handleMailShare.bind(this);
    }
    handleMailShare(){
        var text = `
        ${this.props.host}%20is%20inviting%20you%20to%20a%20meeting%20on%20%0Ahttps%3A%2F%2Fevac.herokuapp.com%0A%0AMeeting%20Code%20%3A%20${this.props.mc}%20%0A%0ALink%20%3A%20${this.props.ml}%0AClick%20on%20the%20Link%20to%20Join%20directly.
        `
        window.open(`mailto:?subject=Meeting%20invite%20from%20${this.props.host}&body=${text}`,"_blank")
    }
    render(){
        return(
            <button className='controlbtns' style={{backgroundImage: 'linear-gradient(to right, #00eb81, #00b19c)', borderRadius:'50%', borderStyle:'solid', borderColor:'#ffffff', borderWidth:'1px' ,margin:this.props.margin}} onClick={this.handleMailShare}>
                < MailIcon/>
            </button>
        )
    }
}

class RecBtn extends Component{
    render(){
        return(
            <button className='controlbtns' style={{background: 'transparent', borderRadius:'50%', borderStyle:'solid', borderColor:'#ffffff', borderWidth:'1px' ,margin:this.props.margin}} onClick={this.props.onClick}>
                < FiberManualRecordIcon color = 'secondary' />
            </button>
        )
    }
}
class EventNoteIcon extends Component {
    render(){
        return(
            <button className='controlbtns' style={{background:'transparent', borderRadius:'50%', borderStyle:'solid', borderColor:'#ffffff', borderWidth:'1px' ,margin:this.props.margin}} onClick={this.props.onClick}>
                <NoteIcon />
            </button>
        )
    }
}

class WhiteBoardIcon extends Component {
    render(){
        return(
            <button className='controlbtns' style={{background:'transparent', borderRadius:'50%', borderStyle:'solid', borderColor:'#ffffff', borderWidth:'1px' ,margin:this.props.margin}} onClick={this.props.onClick}>
                <ComputerIcon />
            </button>
        )
    }
}

class EmojiIcon extends Component {
    render(){
        return(
            <button onClick={this.props.onClick}>
                < EmojiEmotionsIcon / >
            </button>
        )
    }
}
// <circle xmlns="http://www.w3.org/2000/svg" data-name="layer1" cx="32" cy="32" r="26" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
export {MutedMic, UnmutedMic, MutedVideo, UnmutedVideo, Screen, Unscreen, 
    Msg, SendMsg, EndCall, CCbtn, UpArrow, WhatsappBtn, MailBtn, RecBtn, EventNoteIcon, WhiteBoardIcon, EmojiIcon
    };