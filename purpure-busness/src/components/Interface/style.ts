import styled from "styled-components";

export const UiBase = styled.div`
     header{
    display: flex;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
}

 header div{
    background-color: #7D02DD;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4em;
    height: 4em;
    margin-right: 1em;
    

    i{
        font-size: 2.5em;
    }
}

 header div:hover{
        cursor: pointer;
        background-color: #6A02B5;
}

 aside a:hover{
    color: #7D02DD;
}


 aside{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    border-right: 1px solid #e5e5e5;
    position: fixed;
    left: 0;
    top: 4em;
    width: 4em;
    z-index: 5;
    height: calc(100% - 4em);
    a{
        margin: 1em 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    i{
        font-size: 2em;
        margin-left: .5em;
    }
    span{
        display: none;
    }
}

 aside div{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1em;
}

 aside div:hover{
    cursor: pointer;
    color: #7D02DD;
}

 aside:hover{
        width: 15em;
        transition: width .2s ease-in-out;
        a{
            margin: 1em 0;
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }
        span{
            @keyframes slideIn{
               from{
                opacity: 0;
               }to{
                    opacity: 1;
                }
            }
            animation: slideIn .5s ease-in-out;
            display: block;
            margin-left: 1em;
        }
    }

 aside:not(:hover){
        width: 4em;
        transition: width .2s ease-in-out;
        span{
            display: none;
        }
}

 main{
    padding: 1em;
    position: fixed;
    top: 4em;
    left: 4em;
    width: calc(100% - 4em);
    height: calc(100% - 4em);
}

#mainDashboard{
    display: flex;
    flex-direction: column;
    padding: 1em;
}

#mainDashboard .hot-info{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1em;
}

#mainDashboard section{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
`