import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Project} from "../../types/portfolioTypes";
import './modalProject.scss';
import {imageUrl} from "../../tools/image";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80vw",
    height: "90vh",
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalProject({imgSrc, imgAlt, title, link, text}: Project) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className={'modal-project'}>
            <button onClick={handleOpen} className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8'}>En voir plus</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className={'modal-box'}>
                    <div className="modal-box-image">
                        <img className={'modal-image'} src={imageUrl(imgSrc ?? '')} alt={imgAlt ?? ''}/>
                    </div>
                    <Typography id="modal-title" variant="h6" component="h2">
                        {title.toUpperCase()}
                    </Typography>
                    <Typography id="modal-text" sx={{ mt: 2 }}>
                        {text}
                    </Typography>
                    <Typography id={"modal-button"} sx={{ mt: 2 }}>
                        <a href={link ?? imageUrl(imgSrc ?? '')} className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded'} target={'_blank'} rel={"noreferrer"}>Aller sur le site</a>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
