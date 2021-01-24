import React,{useState,useEffect} from 'react'

import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';

import services from '../services/services.js'

import './style/footer.css'


const Footer = () => {

    const [resumeUrl,setResumeUrl] = useState('');

    useEffect(() => {
        (async() => {
            const resumeUrlResult = await services.getResumeUrl();
            setResumeUrl(resumeUrlResult);
        })()
    },[])

    return (<footer className="text-keyname text-regular flex-container flex-center footer">
        Like it? give it a<span> </span>{<StarOutlineOutlinedIcon fontSize="inherit" />}! {resumeUrl}
    </footer>)

}


export default Footer