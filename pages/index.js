import config from "../config.json"
import Menu from "../src/components/menu";
import Header from "../src/components/header";
import Timeline from "../src/components/timeline";
import { CSSReset } from "../src/components/CSSReset";
function HomePage() {
    return (
        <>
            <CSSReset></CSSReset>
            <div style={{
                 display: "flex",
                 flexDirection: "column",
                 flex: 1,
            }}>
            <Menu />
            <Header>
                {config.name}
                {config.job}
                {config.github}
            </Header>
            <Timeline playlists = {config.playlists}>
            </Timeline>
            </div>
        </>
    );
}
export default HomePage;
