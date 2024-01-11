import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './vote.module.scss';
import { AiOutlineMinus,AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { handleModal } from '../../features/modal/modalSlice';
import { AddVoteToCompetitor, decreasevote, increaseVote, resetState } from '../../features/modal/competitors/competitorSlice';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };



  Modal.setAppElement('#root');

const VoteModal = () => {


  const dispatch = useDispatch();


  const {isOpen} = useSelector((store)=> store.modal);
  const { currentCompetitor, voteCount }  = useSelector((store)=> store.competitor);

  if (!currentCompetitor) return
  function closeModal() {
    dispatch(handleModal())
  }

  const backgroundStyle = {
    width: "100%",
    height: "500px",
    background: `linear-gradient(0deg,#128b4871,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url('${currentCompetitor.Photo}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderBottomRightRadius: "10px"
};

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddVoteToCompetitor(currentCompetitor.Id));
    dispatch(resetState());
    closeModal();
  }

  return (
    <div>
    
      <Modal
        isOpen={isOpen}
      
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.modal_container}>
            <div className={styles.competitor_info}>
                <div style={backgroundStyle}></div>
                <div className={styles.bio}>
                    <div className={styles.divider}>
                        <label htmlFor="">Name</label>
                        <span>{currentCompetitor.FirstName + " " + currentCompetitor.MiddleName + " " + currentCompetitor.LastName}</span>
                    </div>
                    <div className={styles.divider}>
                        <label htmlFor="">State</label>
                        <span>{currentCompetitor.RepresentingState}</span>
                    </div>
                    <div className={styles.divider}>
                        <label htmlFor="">Background Study</label>
                        <span>
                        {currentCompetitor.PersonalBackground}
                        </span>
                    </div>
                    <div className={styles.divider}>
                        <label htmlFor="">Employement</label>
                        <span>
                          {currentCompetitor.EmploymentorSchool}
                        </span>
                    </div>
                </div>

            </div>

         <div className={styles.vote_container}>
            <div className={styles.vote_count}>
                <span>Purchase Vote</span>
                <div className={styles.vote_controls}>
                  
                    <button type='button' >
                    <AiOutlineMinus className={styles.icon} 
                    onClick={()=> dispatch(decreasevote())}
                    />
                    </button>
                    <span>{voteCount}</span>
                    <button type='button' >
                    <AiOutlinePlus className={styles.icon} 
                    onClick={()=> dispatch(increaseVote())}
                    />
                    </button>
                </div>

            </div>
              <form onSubmit={ handleSubmit }>
              <span>Pay With Zaad,Edahab</span>
              <input type="text" placeholder='Enter Your Number' className={styles.form_control} />
              <button type="submit">Submit</button>
            </form>

         </div>
        
      

        </div>
      
      </Modal>
    </div>
  );
}

export default VoteModal;
