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
        padding: 16px 32px;
        gap: 16px;
    }
`;
export default function Header(config) {
    return (
        <StyledHeader>
            <section className="userinfo">
                <img src={`https://github.com/${config.children[2]}.png`} />
                <div>
                    <h2>{config.children[0]}</h2>
                    <p>{config.children[1]}</p>
                </div>
            </section>
        </StyledHeader>
    );
}