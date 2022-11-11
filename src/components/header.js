import styled from "styled-components"

const StyledHeader = styled.div`
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .userinfo{
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 0px 2px 20px;
        
        gap: 16px;
    }
`;
export default function Header({config}) {
    return (
        <StyledHeader>
            <section className="userinfo">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    );
}