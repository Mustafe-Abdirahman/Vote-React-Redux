import { createSlice } from "@reduxjs/toolkit";
import competitors from "../../../assets/competitors.json"



const  initialState = {
    competitors: JSON.parse(window.localStorage.getItem('competitors')) || competitors,
    currentCompetitor: null,
    voteCount: 0
}

const competitorSlice = createSlice({
    name: "competitor",
    initialState,
    reducers: {
        setCurrentCompetitor: (state, action) => {
            state.currentCompetitor = action.payload;
        },
        increaseVote: (state) => {
            state.voteCount = state.voteCount + 1;
        },
        decreasevote : (state) => {
            state.voteCount = state.voteCount - 1;
        },
        AddVoteToCompetitor: (state, action) => {
            let compIndex = state.competitors.findIndex(comp => comp.Id === action.payload);
            state.competitors[compIndex].NumberofVotes = Number(state.competitors[compIndex].NumberofVotes) + Number(state.voteCount);
            window.localStorage.setItem('competitors', JSON.stringify(state.competitors));
        },
        resetState: (state) => {
            state.currentCompetitor = null,
            state.voteCount = 0
        }
    }
})


export default competitorSlice.reducer;

export const { setCurrentCompetitor,increaseVote,decreasevote,AddVoteToCompetitor,resetState } = competitorSlice.actions;