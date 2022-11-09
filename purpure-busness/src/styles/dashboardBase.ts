import styled from "styled-components";
import { miscColors, primaryColor } from "./colors";

function colorfy(color: string | undefined) {
    if (color === "add") {
        return miscColors.add;
    } else if (color === "delete") {
        return miscColors.delete;
    } else if (color === "edit") {
        return miscColors.edit;
    } else {
        return "black";
    }
}

interface iProps {
    color?: string;
    active?: string;
}

export const Li = styled.li`
    color: black;
    
    a{
        color: ${(props: iProps) => props.active === "true" ? "#7D02DD" : "black"};
    }
`

export const DashboardQuickCards = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1em;
    border-radius: 1em 0 1em 0;
    background-color: #fff;
    box-shadow: 0 0 .5em 0 rgba(0,0,0,0.2);
    margin: 1em 0;
    width: 30%;

    i{
        font-size: 3em;
        color: ${props => { return colorfy(props.color) }};
        margin-right: 1em;
    }

    @keyframes littleScaleUp{
        from{
            transform: scale(1);
        }to{
            transform: scale(1.03);
        }
    }

    @keyframes littleScaleDown{
        from{
            transform: scale(1.03);
        }to{
            transform: scale(1);
        }
    }

    &:hover{
        cursor: pointer;
        animation: littleScaleUp .2s ease-in-out forwards;
    }

    &:not(:hover) {
        animation: littleScaleDown .2s ease-in-out forwards;
    }
`
export const DashboardBallInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    width: 30%;
    padding: 1em;
    border-radius: 1em 0 1em 0;
    box-shadow: 0 0 .5em 0 rgba(0,0,0,0.2);

    span{
        font-size: 1.5em;
        background-color: #f1f1f1;
        padding: .5em;
        border-radius: 1em;
        font-weight: 600;
        color: ${primaryColor};
    }
`

export const DashboardColumnInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    width: 30%;
    padding: 1em;
    border-radius: 1em 0 1em 0;
    box-shadow: 0 0 .5em 0 rgba(0,0,0,0.2);

    span{
        font-size: 1.5em;
        font-weight: 600;
        color: ${primaryColor};
    }
`