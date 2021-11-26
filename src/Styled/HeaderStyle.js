import styled from "styled-components";

export const Header = styled.header`
    margin: 0;
    padding: 0;
    height: 75px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`

export const Logo = styled.div`
    height: 50px;
    font-size: 40px;
    padding: 5px 0px 0px 10px;
`

export const LogoImg = styled.img`
    width: 70px;
    height: 70px;
`

export const ContentsStage = styled.div`
    width: 100%;
    height: 612px;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    background-size: 100%;
    background-image: url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v960-ning-30.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=63dd5f402645ef52fb7dfb592aec765a");
`

export const InputReasult = styled.textarea`
    width: 500px;
    height: 250px;
    outline: none;
    resize: none;
    border-top: 2px solid rgba(73, 0, 221, 0.23);
    border-left: 2px solid rgba(73, 0, 221, 0.23);
    border-right: 2px solid rgba(73, 0, 221, 0.23);
    border-bottom: none;
    padding: 10px;
    margin: 0px 50px 0px 50px;
    font-size: 30px;
    background-color: #ffffff;
    background-color: rgba( 255, 255, 255, 0.5 );
`
export const LowerBar = styled.div`
    position: relative;
    width: 520px;
    height: 60px;
    margin: 0;
    padding: 0;
    top: -4px;
    left: 50px;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    border-left: 2px solid rgba(73, 0, 221, 0.23);
    border-right: 2px solid rgba(73, 0, 221, 0.23);
    border-bottom: 2px solid rgba(73, 0, 221, 0.23);
    display: flex;
    justify-content: flex-end;
    background-color: #ffffff;
    background-color: rgba( 255, 255, 255, 0.5 );
`

export const SubmitBtn = styled.input`
    width: 130px;
    height: 60px;
    left: 422px;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: rgba(73, 0, 221, 0.23);
    color: white;
`

export const CopyBtn = styled.button`
    width: 130px;
    height: 60px;
    left: 422px;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: rgba(73, 0, 221, 0.23);
    color: white;
`

export const AttendBtn = styled.button`
    width: 130px;
    height: 60px;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: rgba(73, 0, 221, 0.23);
    color: white;
    border-right: 1px solid rgba(0, 0, 0, 0.05);
`